const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "WORLD" });
});

app.get("/home", (req, res) => {
  res.render("index", { text: "WORLD" });
});

app.get("/about", (req, res) => {
  res.render("about", { text: "WORLD" });
});

app.get("/contact", (req, res) => {
  res.render("contact-me", { text: "WORLD" });
});

app.get("/404", (req, res) => {
  res.render("404", { text: "WORLD" });
});

app.listen(port);
