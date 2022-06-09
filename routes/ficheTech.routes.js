const express = require("express");
const {
  AjoutFicheTech, getAllFichTech, getAllFichTechByVehicule,supprimerFicheTech,updateFicheTech,
} = require("../controllers/ficheTech.controller");
const verifToken = require("../utils/verifToken");
const router = express.Router();
router.post("/add", AjoutFicheTech); 
router.get("/", getAllFichTech);
router.get("/:idveh", getAllFichTechByVehicule);
router.put("/edit/:id", verifToken, updateFicheTech);
router.delete("/delete/:id", verifToken, supprimerFicheTech);
module.exports = router;