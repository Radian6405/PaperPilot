import React, { Component } from "react";
import CSRFtoken from "../helpers/CSRFtoken";
import {
  TextField,
  PasswordField,
  SubmitField,
  HelperLabel,
} from "../helpers/LoginComponents";

import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function Upload() {
  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBlock">
          <UploadFileIcon
            sx={{
              color: "var(--background)",
              fontSize: "175px",
              margin: "30px",
            }}
          />
          <div className="UploadLabel">Upload PDFs</div>
          <div className="LoginForm">
            <form action="/upload/" method="post" encType="multipart/form-data">
              <CSRFtoken />
              <TextField name={"name"} placeholder={"Title"} autoFocus={"on"} />
              <p></p>
              <Button
                component="label"
                role={undefined}
                sx={{
                  backgroundColor: "var(--primary)",
                  color: "var(--background)",
                  fontSize: "22px",
                  border: "2px solid var(--primary)",
                }}
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" name="file" />
              </Button>
              <br />
              <SubmitField />
              <HelperLabel text={"Upload any .pdf file here"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
