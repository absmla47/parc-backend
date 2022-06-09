const mongoose = require("mongoose");
const reclamationSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    default: "",
  },
  contenu: {
    type: String,
    required: true,
    default: "",
  },
});
module.exports = mongoose.model("Reclamation", reclamationSchema);
