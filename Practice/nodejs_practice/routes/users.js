const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  res.render("users");
});

router.get("/new", (req, res) => {
  res.render("newUsers");
});

router.post("/", (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("newUsers", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.userVariable);
    res.send(`the new user is ${req.userVariable.firstName}`);
  })
  .put((req, res) => {
    res.send(`UPDATE / PUT id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`DELETE id ${req.params.id}`);
  });

const users = [{ name: "Connor" }, { name: "Zach" }];

router.param("id", (req, res, next, id) => {
  req.userVariable = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
