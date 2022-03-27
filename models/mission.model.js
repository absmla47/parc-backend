const mongoose = require("mongoose");
const missionSchema = new mongoose.Schema({
  dateMission: {
    type: String,
    required: true,
    default: 0,
  },
  destination: {
    type: String,
    required: true,
    default: "",
  },
  evaluation: {
    type: Boolean,
    required: true,
    default: false,
  },
  chauffeur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  vehicule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicul",
  },
});
module.exports = mongoose.model("Mission", missionSchema);
