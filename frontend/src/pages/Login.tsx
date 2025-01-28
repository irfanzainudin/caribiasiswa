import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Button, Input } from '@mui/material';
import { useNavigate } from "react-router";

function Login({ setUser }: any) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  var [csrfToken, setCSRFToken] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8001/login/', {
      credentials: 'include',
    }).then((promise) => {
      promise.json().then((res) => {
        setCSRFToken(
          csrfToken = res.csrfToken
        )
      })
    });
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      // Perform login
      const response = await fetch('http://localhost:8001/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
          'HTTP_X_CSRFToken': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      
      if (response.ok) {
        setIsAuthenticated(true);
        setUserData(data.user);
        setUser(data.user);
        console.log(data.user);
        setError('');
      } else {
        setError(data.detail);
      }
    } catch (err) {
      setError('Network error occurred');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8001/logout/', {
        method: 'POST',
        credentials: 'include',
      });
      setIsAuthenticated(false);
    } catch (err) {
      setError('Logout failed');
    }
  };

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <Card className="w-96">
      <CardHeader>
        <p>Login</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({
                ...credentials,
                username: e.target.value
              })}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({
                ...credentials,
                password: e.target.value
              })}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;