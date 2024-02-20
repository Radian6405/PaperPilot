import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>
          </div>
          
        </>
      </BrowserRouter>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
