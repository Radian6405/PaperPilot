import React, { Component, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import Modal from "react-bootstrap/Modal";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import WidthFullIcon from "@mui/icons-material/WidthFull";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import RotateRightOutlinedIcon from "@mui/icons-material/RotateRightOutlined";

export default function Viewer({ show, setShow, fullscreen, file }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(1);
  const [pageRotation, setPageRotation] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  {
    /* functions for viewer tools */
  }
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function prevPage() {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  }
  function nextPage() {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  }
  function seekPage(event) {
    const pageNo = parseInt(event.target.value);
    if (1 <= pageNo && pageNo <= numPages) setPageNumber(pageNo);
  }

  function ZoomOutPage() {
    if (pageScale > 0.3) setPageScale(Math.round(pageScale * 0.7 * 10) / 10);
  }
  function ZoomInPage() {
    if (pageScale < 10) setPageScale(Math.round(pageScale * 1.4 * 10) / 10);
  }

  function RotateLeft() {
    setPageRotation((pageRotation - 90 + 360) % 360);
  }
  function RotateRight() {
    setPageRotation((pageRotation + 90) % 360);
  }

  return (
    <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
      {/* Header */}
      <Modal.Header closeButton closeVariant="white" className="ViewerHeader">
        <Modal.Title className="ViewerTitle">{file.name}</Modal.Title>
      </Modal.Header>

      {/* Document */}
      <Modal.Body className="ViewerBody">
        <Document
          file={"../../../media/" + file.file_path}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            className="DocumentContainer"
            pageNumber={pageNumber}
            scale={pageScale}
            width={window.innerWidth * 0.9}
            rotate={pageRotation}
          />
        </Document>
      </Modal.Body>

      {/* tools for navigation */}
      <Modal.Footer className="ViewerFooter">
        {/* prev and next page buttons*/}
        <div style={{ width: "125px" }} className="Navig">
          <NavigButton onClick={prevPage}>
            <NavigateBeforeIcon sx={{ fontSize: 50 }} />
          </NavigButton>
          <NavigButton onClick={nextPage}>
            <NavigateNextIcon sx={{ fontSize: 50 }} />
          </NavigButton>
        </div>

        {/* seeking specific page*/}
        <div className="Navig">
          <input
            value={pageNumber}
            type="number"
            onChange={(evt) => seekPage(evt)}
          />
          <div className="NavigLabel">of {numPages}</div>
        </div>

        {/* zooming in and out the page*/}
        <div style={{ width: "190px" }} className="Navig">
          <NavigButton onClick={ZoomOutPage}>
            <ZoomOutIcon sx={{ fontSize: 30 }} />
          </NavigButton>
          <NavigButton onClick={ZoomInPage}>
            <ZoomInIcon sx={{ fontSize: 30 }} />
          </NavigButton>
          <NavigButton onClick={() => setPageScale(1)}>
            <WidthFullIcon sx={{ fontSize: 30 }} />
          </NavigButton>
        </div>

        {/* rotating the page*/}
        <div style={{ width: "125px" }} className="Navig">
          <NavigButton onClick={RotateLeft}>
            <RotateLeftOutlinedIcon sx={{ fontSize: 30 }} />
          </NavigButton>
          <NavigButton onClick={RotateRight}>
            <RotateRightOutlinedIcon sx={{ fontSize: 30 }} />
          </NavigButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export function NavigButton({ children, onClick, ...props }) {
  {
    /* navigation button*/
  }
  return (
    <div {...props} className="NavigButton" onClick={onClick}>
      {children}
    </div>
  );
}
