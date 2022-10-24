const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  // res.send("Hello World!");

  let path = "./pages/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/home":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
