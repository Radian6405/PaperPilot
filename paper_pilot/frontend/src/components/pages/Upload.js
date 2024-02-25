import React, { Component } from "react";
import CSRFtoken from "../CSRFtoken";

export default function Upload() {
  var csrftoken = getCookie("csrftoken");
  return (
    <>
      <form action="/upload/" method="post" encType="multipart/form-data">
        <CSRFtoken />

        <input type="text" name="name" required />
        <input type="file" name="file" required />
        <input type="submit" />
      </form>
    </>
  );
}
