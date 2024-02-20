import React, { Component } from "react";

export default function Logout() {
  return (
    <>
      <h1>Are you sure you want to logout?</h1>
      <form action="/api/logout/">
        <input type="submit" />
      </form>
    </>
  );
}
