import React, { Component,  useState, useEffect   } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";


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
              <Route path="/api/login" element={<Login />} />
              <Route path="/api/logout" element={<Logout />} />
              <Route path="/api/register" element={<Register />} />
            </Routes>
          </div>

        </>
      </BrowserRouter>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
