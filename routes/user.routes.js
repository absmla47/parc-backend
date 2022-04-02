const express = require("express");
const verifToken = require("../utils/verifToken");
const {
  addUser,
  loginUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", addUser);
router.post("/login", loginUser);
router.get("/", verifToken, getAllUsers);
router.get("/:id", verifToken, getUserById);
router.put("/:id", verifToken, updateUser);
router.delete("/:id", verifToken, deleteUser);

module.exports = router;
