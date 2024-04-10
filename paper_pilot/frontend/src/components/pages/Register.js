import React, { Component, useState, useEffect } from "react";
import logo from "../../../static/images/logo 512.png";
import CSRFtoken from "../helpers/CSRFtoken";
import {
  TextField,
  PasswordField,
  SubmitField,
  HelperLabel,
} from "../helpers/LoginComponents";
import Alert from "@mui/material/Alert";

export default function Register() {
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleFormValidation(event) {
    if (username === "") {
      event.preventDefault();
      setAlertMsg("Username cannot be empty");
    } else if (email === "") {
      event.preventDefault();
      setAlertMsg("Email cannot be empty");
    } else if (password === "" || confpassword === "") {
      event.preventDefault();
      setAlertMsg("Password cannot be empty");
    } else if (password !== confpassword) {
      event.preventDefault();
      setPassword("");
      setConfPassword("");
      setAlertMsg("Passwords do not match!");
    }
  }
  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBlock" style={{ height: "760px" }}>
          <img src={logo} width={"300px"} height={"300px"} alt="img" />
          <div className="LoginLabel">Register</div>
          <div className="LoginForm">
            <form
              action="/api/register/"
              method="post"
              onSubmit={(event) => handleFormValidation(event)}
            >
              <CSRFtoken />
              <TextField
                name={"username"}
                placeholder={"Username"}
                autoFocus={"on"}
                value={username}
                setValue={setUsername}
              />
              <TextField
                name={"email"}
                placeholder={"Email address"}
                value={email}
                setValue={setEmail}
              />
              <PasswordField
                name={"password"}
                placeholder={"Password"}
                password={password}
                setPassword={setPassword}
              />
              <PasswordField
                name={"password-confirm"}
                placeholder={"Confirm Password"}
                password={confpassword}
                setPassword={setConfPassword}
              />
              <SubmitField />
              <HelperLabel
                text={"If you already have an account "}
                to={"/api/login/"}
                toText={"Login"}
              />
            </form>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: 120, right: 120 }}>
        {alertMsg !== "" && (
          <Alert
            variant="filled"
            severity="error"
            onClose={() => {
              setAlertMsg("");
            }}
            style={{ fontSize: "20px" }}
          >
            {alertMsg}
          </Alert>
        )}
      </div>
    </>
  );
}
