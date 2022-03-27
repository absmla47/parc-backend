const mongoose = require("mongoose");
const vehiculSchema = new mongoose.Schema({
  immat: {
    type: String,
    required: true,
    default: "",
    unique: true,
  },
  marque: {
    type: String,
    required: true,
    default: "",
  },
  model: {
    type: String,
    required: true,
    default: "",
  },
  color: {
    type: String,
    required: true,
    default: "",
  },
  buyingPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  buyingDate: {
    type: String,
    required: true,
    default: "",
  },
  maxWeight: {
    type: Number,
    required: true,
    default: 0,
  },

  dispo: {
    type: Boolean,
    required: true,
    default: true,
  },
  doorNumber: {
    type: Number,
    required: true,
    default: 0,
  },
  typeVehicule: {
    type: String,
    required: true,
    default: "CAMION",
  },
  nbrTires: {
    type: Number,
    required: false,
    default: 4,
  },
});

module.exports = mongoose.model("Vehicul", vehiculSchema);
