import React, { Component, useState, useEffect } from "react";
import PDFViewer from "../PDFViewer";

export default function Home() {
  const [filePaths, setFilePaths] = useState([]);

  const fetchPDFs = () => {
    return fetch("/api/getpdfs/")
      .then((res) => res.json())
      .then((d) => setFilePaths(d));
  };
  useEffect(() => {
    fetchPDFs();
  }, []);

  function loadFileThumbnails(file) {
    return (
      <PDFViewer
        key={crypto.randomUUID()}
        file_path={"../../../media/" + file.file_path}
        img_path={"../../../static/download.png"}
        file_obj={file}
      />
    );
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-1">
          {filePaths.map(loadFileThumbnails)}
        </div>
      </div>
    </>
  );
}
