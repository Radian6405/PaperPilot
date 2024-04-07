import React, { Component, useState } from "react";
import { Document, Page } from "react-pdf";

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
    </>
  );
}
