import React, { Component, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CardRow } from "./Home";
import FileCard from "../viewers/FileCard";
import { NavigButton } from "../viewers/Viewer";

export default function FolderView() {
  const params = useParams();
  const [filePaths, setFilePaths] = useState([]);

  const fetchPDFs = () => {
    return fetch(`/api/folder/${parseInt(params.fldr_id)}`)
      .then((res) => res.json())
      .then((d) => setFilePaths(d));
  };
  useEffect(() => {
    fetchPDFs();
  }, []);

  function loadFiles(file) {
    return <FileCard key={crypto.randomUUID()} file_obj={file} />;
  }

  return (
    <>
      <div className="container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <NavigButton
            style={{ width: "100px", height: "40px", margin: "10px" }}
          >
            Go Back
          </NavigButton>
        </Link>
        <div className="SplitBar"></div>
        <CardRow>{filePaths.map(loadFiles)}</CardRow>
      </div>
    </>
  );
}
