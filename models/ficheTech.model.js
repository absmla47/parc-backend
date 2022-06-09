const mongoose = require("mongoose");
const ficheTechSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
      default: 0,
    },
    content: {
      type: String,
      required: true,
    },
    vehicule: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicul",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("fichetech", ficheTechSchema);
