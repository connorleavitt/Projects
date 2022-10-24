const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("users");
});

router.get("/new", (req, res) => {
  res.render("newUsers");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.userVariable);
    res.send(req.userVariable);
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

module.exports = router;
