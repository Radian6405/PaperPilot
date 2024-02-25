import React, { Component, useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import logo from "../../static/images/logo 512.png";
import NavButton from "./helpers/NavButton";

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
        <NavButton to="/">Home</NavButton>
        <NavButton to="/upload/">Upload</NavButton>
      </div>

      <div style={{ width: "20%" }} className="NavBlock">
        {user.username === "" ? (
          <>
            <NavButton to="/api/login/">Login</NavButton>
            <NavButton to="/api/register/">Register</NavButton>
          </>
        ) : (
          <>
            <NavButton to="/api/logout/">Logout</NavButton>
            <div className="NavButton ActiveButton">{user.username}</div>
          </>
        )}
      </div>
    </div>
  );
}
