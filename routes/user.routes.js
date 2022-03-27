const express = require("express");
const verifToken = require("../utils/verifToken");
const {
  addUser,
  loginUser,
  getAllUsers,
  getUserById,
} = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", addUser);
router.post("/login", loginUser);
router.get("/", verifToken, getAllUsers);
router.get("/:id", verifToken, getUserById);

module.exports = router;
