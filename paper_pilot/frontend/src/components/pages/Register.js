import React, { Component } from "react";
import CSRFtoken from "../helpers/CSRFtoken";

export default function Register() {
  return (
    <>
      <form action="/api/register/" method="post">
        <CSRFtoken />

        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" />
      </form>
    </>
  );
}
