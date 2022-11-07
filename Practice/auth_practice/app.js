/////// app.js

const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const async = require("async");
const jwt = require("jsonwebtoken");

const mongoDB =
  "mongodb+srv://tutorial:gCzQFmLuxMU3PyKV@cluster0.rh41oeb.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  })
);

const Post = mongoose.model(
  "Post",
  new Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
  })
);

const app = express();
app.set("views", __dirname);
app.set("view engine", "ejs");

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          // passwords match! log user in
          return done(null, user);
        } else {
          // passwords do not match!
          return done(null, false, { message: "Incorrect password" });
        }
      });
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.get("/", (req, res) => res.render("index", { user: req.user }));
app.get("/sign-up", (req, res) => res.render("sign-up-form"));
app.get("/log-out", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/");
  });
});
app.get("/new-post", (req, res) => res.render("post-form"));
app.get("/posts", (req, res, next) => {
  Post.find({}).exec(function (err, list_posts) {
    if (err) {
      return next(err);
    }
    // Successful, so render
    res.render("posts", {
      title: "Post List",
      post_list: list_posts,
    });
  });
});

app.post("/sign-up", async (req, res) => {
  const body = req.body;

  if (!(body.username && body.password)) {
    return res.status(400).send({ error: "Data not formatted properly" });
  }

  // creating a new mongoose doc from user data
  const user = new User(body);
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  user.password = await bcrypt.hash(user.password, salt);
  user.save().then((doc) => res.status(201).redirect("/"));
});

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

app.post("/new-post", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    message: req.body.message,
  }).save((err) => {
    if (err) next(err);
    res.redirect("/posts");
  });
});

app.listen(3000, () => console.log("app listening on port 3000!"));
