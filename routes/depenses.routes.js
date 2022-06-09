const express = require("express");
const {
  AjoutFicheDep,
  getAllDep,
  getAllDepByVehicule,
  updateFicheDep,
  supprimerFicheDep
} = require("../controllers/depenses.controller");
const verifToken = require("../utils/verifToken");
const router = express.Router();
router.post("/add", AjoutFicheDep);
router.get("/", getAllDep);
router.get("/vehicule/:idveh", getAllDepByVehicule);
router.put("/edit/:id", verifToken, updateFicheDep);
router.delete("/delete/:id", verifToken, supprimerFicheDep);
module.exports = router;
