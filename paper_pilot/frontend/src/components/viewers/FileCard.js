import React, { Component, useState } from "react";

import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Viewer from "./Viewer";

export default function FileCard({ img_path, file_obj }) {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };
  return (
    <>
      <div className="col">
        <div className="card" onClick={() => handleShow(true)}>
          <div className="card-body">
            <InsertDriveFileOutlinedIcon sx={{ color: "white" }} />
            <div className="card-title">{file_obj.name}</div>
          </div>
          <div className="img-container">
            <img src={img_path} className="card-img-bottom" alt="No Img" />
          </div>
        </div>
      </div>

      <Viewer
        show={show}
        setShow={setShow}
        fullscreen={fullscreen}
        file={file_obj}
      />
    </>
  );
}
