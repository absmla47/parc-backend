const express = require("express");
const {
  ajouterReclamation,
  updateReclamation,
  supprimerReclamation,
  getAllReclamation,
} = require("../controllers/reclamation.controller");

const verifToken = require("../utils/verifToken");

const router = express.Router();
router.post("/add", verifToken, ajouterReclamation);
router.put("/edit/:id", verifToken, updateReclamation);
router.delete("/delete/:id", verifToken, supprimerReclamation);
router.get("/", verifToken, getAllReclamation);

module.exports = router;
