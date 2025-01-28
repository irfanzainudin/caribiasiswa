import { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";

// TODO: Have to persist the data somehow
const AuthContext = createContext(null);

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  return (
    <AuthContext.Provider value={currentUser}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={currentUser} />} />
        <Route path="/login" element={<Login setUser={setCurrentUser} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile user={currentUser} />} />
        {/* <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<RecentActivity />} />
          <Route path="project/:id" element={<Project />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
  );
}

export default App;
