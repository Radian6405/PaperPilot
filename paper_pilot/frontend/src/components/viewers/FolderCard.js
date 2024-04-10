import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FolderIcon from "@mui/icons-material/Folder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ConfirmationPopup, MenuItem } from "./FileCard";
import { getCookie } from "../helpers/CSRFtoken";

export default function FolderCard({ folder_obj }) {
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
        <div className="card" style={{ height: "50px" }}>
          <div className="card-body">
            <Link
              to={`/folder/${folder_obj.id}`}
              style={{ textDecoration: "none", width: "85%" }}
            >
              <div className="card-body-left">
                <FolderIcon sx={{ color: "white" }} />
                <div className="card-title">{folder_obj.name}</div>
              </div>
            </Link>
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
        </div>
      </div>
      <ConfirmationPopup
        show={showPopup}
        file={folder_obj}
        onHide={() => setShowPopUp(false)}
        success={() => {
          setShowPopUp(false);
          handleDelete(folder_obj, "folder");
        }}
      />
    </>
  );
}
