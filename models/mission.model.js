const mongoose = require("mongoose");
const missionSchema = new mongoose.Schema({
  dateMission: {
    type: String,
    required: true,
    default: 0,
  },
  startTime: {
    type: String,
    required: true,
    default: "",
  },
  arrivalTime: {
    type: String,
    required: true,
    default: "",
  },
  destination: {},
  evaluation: { type: Number, required: false },
  cause: {
    type: String,
    required: true,
    default: "",
  },
  chauffeur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  vehicule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicul",
  },
  isFinished: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Mission", missionSchema);
