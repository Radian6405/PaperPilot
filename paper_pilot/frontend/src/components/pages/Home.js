import React, { Component, useState, useEffect } from "react";
import FileCard from "../viewers/FileCard";
import GetStarted from "./GetStarted";

export default function Home() {
  const [filePaths, setFilePaths] = useState([]);
  const [user, setUser] = useState("Login");
  const fetchUser = () => {
    return fetch("/api/getuser/")
      .then((res) => res.json())
      .then((d) => setUser(d));
  };
  useEffect(() => {
    fetchUser();
  }, []);

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
      {user.username === "" ? (
        <GetStarted />
      ) : (
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 ">
            {filePaths.map(loadFileThumbnails)}
          </div>
        </div>
      )}
    </>
  );
}
