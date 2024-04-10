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

export default function Login() {
  const [password, setPassword] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [username, setUsername] = useState("");

  function handleFormValidation(event) {
    if (username === "") {
      event.preventDefault();
      setAlertMsg("Username cannot be empty");
    } else if (password === "") {
      event.preventDefault();
      setAlertMsg("Password cannot be empty");
    }
  }

  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBlock">
          <img src={logo} width={"300px"} height={"300px"} alt="img" />
          <div className="LoginLabel">Login</div>
          <div className="LoginForm">
            <form
              action="/api/login/"
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
              <PasswordField
                name={"password"}
                placeholder={"Password"}
                password={password}
                setPassword={setPassword}
              />
              <SubmitField text={"Login"} />
              <HelperLabel
                text={"If you dont have an account "}
                to={"/api/register/"}
                toText={"Register"}
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
