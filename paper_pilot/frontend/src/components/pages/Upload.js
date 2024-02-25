import React, { Component } from "react";
import CSRFtoken from "../helpers/CSRFtoken";

export default function Upload() {
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
