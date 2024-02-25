import React, { Component, useState, useEffect } from "react";
import FileCard from "../viewers/FileCard";

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
      <FileCard
        key={crypto.randomUUID()}
        img_path={"../../../static/download.png"}
        file_obj={file}
      />
    );
  }

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 ">
          {filePaths.map(loadFileThumbnails)}
        </div>
      </div>
    </>
  );
}
