import React, { Component, useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavButton({ to, children, ...props }) {
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