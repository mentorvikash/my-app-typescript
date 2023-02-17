import React from "react";
import { useContext } from "react";
import { userContext } from "./userContext";

function User() {
  const usercontext = useContext(userContext);
  const handleLogIn = () => {
      usercontext.setUser({
        fname: "revive",
        email: "revivecoding@gmail.com",
      });
  };
  const handleLogOut = () => {
      usercontext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>User name is {usercontext.user?.fname}</div>
      <div>User email is {usercontext.user?.email}</div>
    </div>
  );
}

export default User;
