import React, { Component, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function PDFViewer({ file_path, img_path, file_obj }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-title">{file_obj.name}</div>
        </div>
        <div className="img-container">
        <img src={img_path} className="card-img-bottom" alt="No Img" />

        </div>
      </div>
    </div>
  );
}

{
  /*<Document file={file_path} onLoadSuccess={onDocumentLoadSuccess}>
  <Page pageNumber={pageNumber} />
</Document> 
<p>
  Page {pageNumber} of {numPages}
</p>*/
}
