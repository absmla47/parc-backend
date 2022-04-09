const express = require("express");
const {
  AjoutFicheControle, getAllFichTech, getAllFichTechByVehicule,
} = require("../controllers/controletech.controller");
const router = express.Router();
router.post("/add", AjoutFicheControle); 
router.get("/", getAllFichTech);
router.get("/:idveh", getAllFichTechByVehicule);
module.exports = router;