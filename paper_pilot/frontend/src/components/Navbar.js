import React, { Component, useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import logo from "../../static/images/logo 512.png";

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
      <div style={{ width: "20%" }} className="NavBlock">
        <Link to="/">
          <img src={logo} width={"80px"} alt="img" />
        </Link>
      </div>

      <div style={{ width: "60%" }} className="NavBlock">
        <CustomButton to="/">Home</CustomButton>
        <CustomButton to="/upload/">Upload</CustomButton>
      </div>

      <div style={{ width: "20%" }} className="NavBlock">
        {user.username === "" ? (
          <>
            <CustomButton to="/api/login/">Login</CustomButton>
            <CustomButton to="/api/register/">Register</CustomButton>
          </>
        ) : (
          <>
            <CustomButton to="/api/logout/">Logout</CustomButton>
            <div className="NavButton ActiveButton">{user.username}</div>
          </>
        )}
      </div>
    </div>
  );
}

function CustomButton({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to} {...props}>
      <div className={isActive ? "NavButton ActiveButton" : "NavButton"}>
        {children}
      </div>
    </Link>
  );
}
