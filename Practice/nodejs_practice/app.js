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
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact-me");
});

app.get("/404", (req, res) => {
  res.render("404");
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(port);
