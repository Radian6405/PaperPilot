import React, { Component, useState, useEffect } from "react";
import FileCard from "../viewers/FileCard";
import GetStarted from "./GetStarted";
import FolderCard from "../viewers/FolderCard";

export default function Home() {
  const [filePaths, setFilePaths] = useState([]);
  const [folderList, setFolderList] = useState([]);
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

  const fetchFolders = () => {
    return fetch("/api/getfolders/")
      .then((res) => res.json())
      .then((d) => setFolderList(d));
  };
  useEffect(() => {
    fetchFolders();
  }, []);

  function loadFiles(file) {
    return <FileCard key={crypto.randomUUID()} file_obj={file} />;
  }
  function loadFolders(folder_obj) {
    return <FolderCard key={crypto.randomUUID()} folder_obj={folder_obj} />;
  }

  return (
    <>
      {user.username === "" ? (
        <GetStarted />
      ) : (
        <div className="container">
          <div className="cardTitle">Folders</div>
          <div className="SplitBar"></div>

          <CardRow>{folderList.map(loadFolders)}</CardRow>

          <div className="cardTitle">Files</div>
          <div className="SplitBar"></div>

          <CardRow>{filePaths.map(loadFiles)}</CardRow>
        </div>
      )}
    </>
  );
}

export function CardRow({ children }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
      {children}
    </div>
  );
}
