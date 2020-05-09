var express = require("express");
var router = express.Router();
var eventList = require("../../events.json");

router.get("/", function (req, res, next) {
  res.send("respond with a test");
});

router.post("/event/:id*?", function (req, res, next) {
  if (req.params.id > 0)
    return res.json(
      JSON.parse(JSON.stringify(eventList.events)).filter(
        (x) => x.id == req.params.id
      )
    );
  res.json(eventList);
});

module.exports = router;
