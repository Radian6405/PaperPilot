import React, { Component, useState } from "react";
import { Document, Page } from "react-pdf";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Viewer, { NavigButton } from "./Viewer";
import { getCookie } from "../helpers/CSRFtoken";

export default function FileCard({ file_obj }) {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const [showMenu, setShowMenu] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  function handleDelete(data, datatype) {
    var csrftoken = getCookie("csrftoken");
    var PostData = JSON.stringify({
      datatype: datatype,
      data: data,
    });

    setIsDeleted(true);

    return fetch("/api/delete/", {
      credentials: "include",
      method: "POST",
      // mode: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: PostData,
    });
  }

  return (
    <>
      <div className="col" style={{ display: isDeleted ? "none" : "block" }}>
        <div className="card">
          <div className="card-body">
            <div className="card-body-left" onClick={() => handleShow(true)}>
              <InsertDriveFileIcon sx={{ color: "white" }} />
              <div className="card-title">{file_obj.name}</div>
            </div>

            <div className="card-body-right">
              <div className="moreBtn" onClick={() => setShowMenu(true)}>
                <MoreVertIcon sx={{ color: "white" }} />
                <div
                  className="moreMenu"
                  style={{ display: showMenu ? "block" : "none" }}
                  onMouseLeave={() => setShowMenu(false)}
                >
                  <MenuItem
                    action={"/api/delete"}
                    OnClick={() => setShowPopUp(true)}
                  >
                    Delete
                  </MenuItem>
                </div>
              </div>
            </div>
          </div>
          <div
            className="img-container"
            style={{ userSelect: "none" }}
            onClick={() => handleShow(true)}
          >
            <Document file={"../../../media/" + file_obj.file_path}>
              <Page
                className="card-img-bottom"
                pageNumber={1}
                scale={1}
                height={250}
              />
            </Document>
          </div>
        </div>
      </div>

      <Viewer
        show={show}
        setShow={setShow}
        fullscreen={fullscreen}
        file={file_obj}
      />

      <ConfirmationPopup
        show={showPopup}
        file={file_obj}
        onHide={() => setShowPopUp(false)}
        success={() => {
          setShowPopUp(false);
          handleDelete(file_obj, "file");
          return "";
        }}
      />
    </>
  );
}

export function MenuItem({ OnClick, children }) {
  return (
    <div className="moreMenuItem" onClick={OnClick}>
      {children}
    </div>
  );
}

export function ConfirmationPopup(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header
        style={{
          backgroundColor: "var(--accent)",
          color: "var(--background)",
          borderColor: "var(--accent-700)",
        }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: "20px" }}
        >
          Are you sure you want to delete{" "}
          <span style={{ fontWeight: "bold" }}>
            {'"' + props.file.name + '"'}
          </span>
          ? This cannot be undone.
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer
        style={{
          backgroundColor: "var(--accent)",
          color: "var(--background)",
          borderColor: "var(--accent-700)",
        }}
      >
        <NavigButton
          style={{
            width: "100px",
            height: "40px",
            margin: "10px",
            backgroundColor: "var(--primary)",
          }}
          onClick={props.success}
        >
          Delete file
        </NavigButton>
        <NavigButton
          style={{ width: "100px", height: "40px", margin: "10px" }}
          onClick={props.onHide}
        >
          Cancel
        </NavigButton>
      </Modal.Footer>
    </Modal>
  );
}
