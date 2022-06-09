const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  cin: {
    type: Number,
    required: true,
    default: 0,
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
  lastName: {
    type: String,
    required: true,
    default: "",
  },
  birthDate: {
    type: String,
    required: true,
    default: "",
  },
  address: {
    type: String,
    required: true,
    default: "",
  },
  civilState: {
    type: String,
    required: true,
    default: "",
  },
  userName: {
    type: String,
    required: true,
    default: "",
    unique: true,
  },
  password: {
    type: String,
    required: true,
    default: "",
  },
  numDriver: {
    type: String,
    required: false,
    default: "",
  },
  categDriver: {
    type: String,
    required: false,
    default: "",
  },
  phoneNumber: {
    type: Number,
    required: true,
    default: 0,
  },
  role: {
    type: String,
    required: true,
    default: "CHAUFFEUR",
  },
  available: {
    type: Boolean,
    required: true,
    default: true,
  },
  profilePic: {
    type: "String",
  },
});

module.exports = mongoose.model("User", UserSchema);
