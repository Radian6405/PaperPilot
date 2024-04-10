import React, { Component, useState, useEffect } from "react";
import CSRFtoken from "../helpers/CSRFtoken";
import {
  TextField,
  PasswordField,
  SubmitField,
  HelperLabel,
} from "../helpers/LoginComponents";
import NavButton from "../helpers/NavButton";

import LogoutIcon from "@mui/icons-material/Logout";

export default function Logout() {
  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBlock" style={{ height: "500px" }}>
          <div className="LoginForm" style={{ height: "400px" }}>
            <form action="/api/logout/" method="post">
              <CSRFtoken />
              <div
                className="LoginLabel"
                style={{ marginTop: "50px", marginBottom: "50px" }}
              >
                <LogoutIcon
                  sx={{
                    color: "var(--background)",
                    fontSize: "75px",
                  }}
                />
                <br />
                Are you sure you want to logout?
              </div>
              <SubmitField text={"Logout"} />

              <div style={{ display: "flex", justifyContent: "center" }}>
                <NavButton
                  to={"/"}
                  style={{
                    width: "80px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Cancel
                </NavButton>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="LoginLabel">Are you sure you want to logout?</div>
    </>
  );
}
