import React, { Component, useState, useEffect } from "react";
import logo from "../../../static/images/logo 512.png";
import CSRFtoken from "../CSRFtoken";
import { TextField, PasswordField, SubmitField, HelperLabel } from "./LoginHelpers";

export default function Login() {
  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBlock">
          <img src={logo} width={"300px"} height={"300px"} alt="img" />
          <div className="LoginForm">
            <form action="/api/login/" method="post">
              <CSRFtoken />
              <TextField
                name={"username"}
                placeholder={"Username"}
                autoFocus={"on"}
              />
              <br />
              <PasswordField name={"password"} placeholder={"Password"} />
              <SubmitField />
              <HelperLabel
                text={"If you dont have an account "}
                to={"/api/register/"}
                toText={"Register"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
