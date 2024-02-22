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

  function get_file_path(file) {
    return (
      <PDFViewer key={crypto.randomUUID()} file_path={"../../../media/" + file.file_path} />
    );
  }

  return (
    <>
      {filePaths.map(get_file_path)}
    </>
  );
}
