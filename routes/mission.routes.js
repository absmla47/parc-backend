const express = require("express");
const {
  addNewMission,
  getAllMissions,
} = require("../controllers/mission.controller");
const verifToken = require("../utils/verifToken");
const router = express.Router();

router.post("/add", verifToken, addNewMission);
router.get("/", verifToken, getAllMissions);

module.exports = router;
