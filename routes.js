const express = require("express");
const { sendAirtime } = require("./controllers/airtime");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Let the hackathon begin" });
});

router.get("/api/airtime/send", sendAirtime);

module.exports = router;
