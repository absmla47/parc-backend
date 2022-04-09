const express = require("express");
const {
  addNewVehicule,
  updateVehicule,
  getAllVehicules,
  getAllVehiculesByType,
  deleteVehicule,
 
} = require("../controllers/vehicule.controller");
const verifToken = require("../utils/verifToken");
const router = express.Router();
router.post("/add", verifToken, addNewVehicule);
router.put("/edit/:id", verifToken, updateVehicule);
router.get("/", verifToken, getAllVehicules);
router.get("/:type", verifToken, getAllVehiculesByType);
router.delete("/delete/:id", verifToken, deleteVehicule);
router.put("/put/:id",verifToken, updateVehicule);

module.exports = router; 