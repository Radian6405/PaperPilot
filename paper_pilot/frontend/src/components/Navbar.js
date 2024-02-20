import React, { Component, useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState("Login");
  const fetchUser = () => {
    return fetch("/api/getuser/")
      .then((res) => res.json())
      .then((d) => setUser(d));
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="Navbar">
      <CustomButton to="/">Home</CustomButton>
      <CustomButton to="/upload/">Upload</CustomButton>
      <CustomButton to={user.username === "" ? "/api/login/" : "/api/logout"}>
        {user.username === "" ? "Login" : "Logout"}
      </CustomButton>

      <div className={user.username === "" ? "hidden" : "NavButton active"}>
        {user.username}
      </div>
    </div>
  );
}

function CustomButton({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to} {...props}>
      <div className={isActive ? "NavButton active" : "NavButton"}>
        {children}
      </div>
    </Link>
  );
}
