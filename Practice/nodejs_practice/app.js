const express = require("express");
const app = express();
const port = 8000;

app.use(express.static("pages"));
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.set("view engine", "ejs");
// app.use(logger);

app.get("/", (req, res) => {
  res.render("index", { text: "WORLD" });
});

app.get("/home", logger, (req, res) => {
  res.render("index", { text: "WORLD" });
});

app.get("/about", logger, (req, res) => {
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

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(port);
