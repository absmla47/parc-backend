const mongoose = require("mongoose");
const ControleSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    default: 0,
  },
  tvs: {
    type: String,
    required: true,
    default: 0,
  },
  entretien: {
    type: String,
    required: true,
    default: 0,
  },
  reparation: {
    type: String,
    required: true,
    default: 0,
  },
  coutAssurance: {
    type: String,
    required: true,
    default: 0,
  },
  carburant: {
    type: String,
    required: true,
    default: 0,
  },
  typePlafond: {
    type: Number,
    required: true,
    default: 1,
  },
  vehicule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicul",
  },
});

module.exports = mongoose.model("Depenses", ControleSchema);
