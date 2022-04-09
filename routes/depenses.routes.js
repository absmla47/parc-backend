const express = require("express");
const {
  AjoutFicheDep,
  getAllDep,
  getAllDepByVehicule,
} = require("../controllers/depenses.controller");
const router = express.Router();
router.post("/add", AjoutFicheDep);
router.get("/", getAllDep);
router.get("/vehicule/:idveh", getAllDepByVehicule);
module.exports = router;
