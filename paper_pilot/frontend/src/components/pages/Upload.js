import React, { Component } from "react";
import CSRFtoken from "../helpers/CSRFtoken";
import {
  BasicTextField,
  PasswordField,
  SubmitField,
  HelperLabel,
} from "../helpers/LoginComponents";

import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";

export default function Upload() {
  return (
    <>
      <div className="LoginContainer">
        {/* files */}
        <div className="LoginBlock">
          <UploadFileIcon
            sx={{
              color: "var(--background)",
              fontSize: "175px",
              margin: "30px",
            }}
          />
          <div className="LoginLabel">Upload PDFs</div>
          <div className="LoginForm">
            <form action="/upload/" method="post" encType="multipart/form-data">
              <CSRFtoken />
              <BasicTextField name={"name"} placeholder={"Title"} autoFocus={"on"} />
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
              <SubmitField text={"Confirm"} />
              <HelperLabel text={"Upload any .pdf file here"} />
            </form>
          </div>
        </div>

        {/* folders */}
        <div className="LoginBlock">
          <CreateNewFolderOutlinedIcon
            sx={{
              color: "var(--background)",
              fontSize: "175px",
              margin: "30px",
            }}
          />
          <div className="LoginLabel">Create Folder</div>
          <div className="LoginForm">
            <form action="/api/createfolder/" method="post">
              <CSRFtoken />
              <BasicTextField
                name={"foldername"}
                placeholder={"Folder name"}
                autoFocus={"on"}
              />
              <SubmitField text={"Confirm"} />
              <HelperLabel text={"Create any new folders here"} />
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
