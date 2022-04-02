const express = require("express");
const {
  addNewMission,
  getAllMissions,
  deleteMission,
  updateMission,
} = require("../controllers/mission.controller");
const verifToken = require("../utils/verifToken");
const router = express.Router();

router.post("/add", verifToken, addNewMission);
router.get("/", verifToken, getAllMissions);
router.delete("/delete/:id", verifToken, deleteMission);
router.put("/",verifToken, updateMission);

module.exports = router;
