var express = require("express");
var router = express.Router();
debugger;
var eventList = require("../../events.json");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/event", function (req, res, next) {
  debugger;
  res.json(eventList);
});

module.exports = router;
