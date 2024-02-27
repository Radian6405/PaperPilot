import React, { Component, useState, useEffect } from "react";
import logo from "../../../static/images/logo 512.png";
import NavButton from "../helpers/NavButton";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <>
      <div className="LoginContainer">
        <div className="StartedBlock">
          <img src={logo} width={"250px"} height={"250px"} alt="logo" />
          <h1>
            {" "}
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "var(--primary)",
              }}
            >
              Paper
            </span>{" "}
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "var(--text)",
              }}
            >
              Pilot
            </span>
          </h1>
          <div className="StartedDesc">
            Manage, Organise and View your important pdfs in one place with
            support for bookmarks, folders and favorites. Upload files with the
            click of a button.
          </div>
          <div className="StartedDesc" style={{ padding: "0px" }}>
            Login to get started:
            <Link to={"/api/login/"}>
              <div className="StartedButton">Get Started</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
