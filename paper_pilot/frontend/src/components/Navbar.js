import React, { Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <CustomButton to="/">Home</CustomButton>
      <CustomButton to="/upload/">Upload</CustomButton>
    </div>
  );
}

function CustomButton({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true});
  return (
    <Link to={to} {...props}>
      <div className={isActive ? "NavButton active" : "NavButton"}>
        {children}
      </div>
    </Link>
  );
}
