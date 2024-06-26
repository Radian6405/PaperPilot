import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pdfjs } from "react-pdf";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import FolderView from "./pages/FolderView";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />

          <div className="pageContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/api/login" element={<Login />} />
              <Route path="/api/logout" element={<Logout />} />
              <Route path="/api/register" element={<Register />} />
              <Route path="/folder/:fldr_id" element={<FolderView />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
