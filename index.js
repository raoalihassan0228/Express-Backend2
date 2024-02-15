// import app from "express";
// const { express } = app();

const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

// GET

app.get("/", (req, res) => {
  res.send({
    page: "Home Page",
    request: "GET",
  });
});

app.get("/about", (req, res) => {
  res.send({
    page: "About Page",
    request: "GET",
  });
});

app.get("/contact", (req, res) => {
  res.send({
    page: "Contact Page",
    request: "GET",
  });
});

app.get("/login", (req, res) => {
  res.send({
    page: "Login Page",
    request: "GET",
  });
});

//
app.get("/:name/:id", (req, res) => {
  let { name, id } = req.params;
  let code = `<h1>This page is of @${name}</h1>`;
  res.send(code);
});

// Query
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send(`No results`);
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("*", (req, res) => {
  // (*) means all routes
  res.send({
    page: "This page is not defined",
    request: "GET",
  });
});

// POST

app.post("/", (req, res) => {
  res.send({
    page: "Home Page",
    method: "POST",
  });
});

app.post("/about", (req, res) => {
  res.send({
    page: "About Page",
    method: "POST",
  });
});

app.post("/contact", (req, res) => {
  res.send({
    page: "Contact Page",
    method: "POST",
  });
});

app.post("/data", (req, res) => {
  res.send({
    page: "Data Page",
    method: "POST",
  });
});

app.post("*", (req, res) => {
  res.send({
    page: "This page is not defined",
    method: "POST",
  });
});

////////////////////////////
