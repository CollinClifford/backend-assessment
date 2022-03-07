"use strict";
const data = process.env.NODE_ENV;
const express = require("express");
const app = express();
const http = require("http");
var myHeaders = new Headers(init);

console.log(myHeaders);

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(3000, (err) => {
  if (err) {
    console.log("there was a problem", err);
    return;
  }
  console.log("listening on port 3000");
});
