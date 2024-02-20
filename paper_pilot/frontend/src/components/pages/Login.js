import React, { Component } from "react";

export default function Login() {
  var csrftoken = getCookie("csrftoken");
  return (
    <>
      <form action="/api/login/" method="post">
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
        
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" />
      </form>
    </>
  );
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
