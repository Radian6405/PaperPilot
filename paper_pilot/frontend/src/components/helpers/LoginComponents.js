import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function TextField({ name, placeholder, autoFocus }) {
  return (
    <input
      type="text"
      name={name}
      autoFocus={autoFocus}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}

export function PasswordField({ name, placeholder }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="PasswordContainer">
      <input
        name={name}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Checkbox
        value={showPassword}
        onChange={() => setShowPassword((prev) => !prev)}
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
        icon={<VisibilityIcon />}
        checkedIcon={<VisibilityOffIcon />}
        style={{
          padding: "0px",
          color: "var(--accent)",
          position: "absolute",
          right: "17%",
        }}
        className="PasswordCheckbox"
      />
    </div>
  );
}

export function HelperLabel({ text, to, toText }) {
  return (
    <p>
      {text}
      <span>
        <Link to={to}>{toText}</Link>
      </span>
      .
    </p>
  );
}

export function SubmitField({text}) {
  return <input type="submit" value={text} />;
}
