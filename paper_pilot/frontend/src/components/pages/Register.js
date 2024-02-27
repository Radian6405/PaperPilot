import React, { Component } from "react";
import logo from "../../../static/images/logo 512.png";
import CSRFtoken from "../helpers/CSRFtoken";
import {
  TextField,
  PasswordField,
  SubmitField,
  HelperLabel,
} from "../helpers/LoginComponents";

export default function Register() {
  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBlock" style={{ height: "760px" }}>
          <img src={logo} width={"300px"} height={"300px"} alt="img" />
          <h1>Register</h1>
          <div className="LoginForm">
            <form action="/api/register/" method="post">
              <CSRFtoken />
              <TextField
                name={"username"}
                placeholder={"Username"}
                autoFocus={"on"}
              />
              <br />
              <TextField name={"email"} placeholder={"Email address"} />
              <br />
              <PasswordField name={"password"} placeholder={"Password"} />
              <PasswordField
                name={"password-confirm"}
                placeholder={"Confirm Password"}
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
    </>
  );
}
