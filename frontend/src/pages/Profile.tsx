// Profile page


function Profile({user}: any) {
  return (
    <div className="w-full">
      <p>Logged in as: {user.username}</p>
    </div>
  );
}

export default Profile;
