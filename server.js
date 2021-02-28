// Setting up express and handlebars
var express = require("express");
var path = require("path");
var handleBars = require("express-handlebars").create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials")
});

var app = express();
app.set("port", 58218);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handleBars.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));

var handlebars = require("express-handlebars").create({defaultLayout: "main"});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// Page Routes
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/collections", function (req, res) {
  res.render("collections");
});

app.get("/sets", function (req, res) {
  res.render("sets");
});

app.get("/about", function (req, res) {
  res.render("about");
});

// Error handlers
app.use(function (req, res) {
  res.status(404);
  res.render("404");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type("plain/text");
  res.status(500);
  res.render("500");
});

app.listen(app.get("port"), function () {
  console.log("Express started on http://localhost:" + app.get("port") + "; press Ctrl-C to terminate.");
});
