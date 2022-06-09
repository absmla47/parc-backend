const express = require("express");
const verifToken = require("../utils/verifToken");
const {
  addUser,
  loginUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  updatePhoto,
  sendRecoverMail,
  resetPassword,
  getUsrListByRole,
} = require("../controllers/user.controller");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/[/\\:]/g, "_") + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  onFileUploadStart: function (file) {
    console.log(file.originalname + " is starting ...");
  },
});

router.post("/register", addUser);
router.post("/login", loginUser);
router.get("/", verifToken, getAllUsers);
router.get("/:id", verifToken, getUserById);
router.put("/:id", verifToken, updateUser);
router.delete("/delete/:id", verifToken, deleteUser);
router.put("/img/:id", upload.single("image"), updatePhoto);
router.post("/recover/", sendRecoverMail);
router.post("/resetpass/:id", resetPassword);
router.get("/count/list", getUsrListByRole);

module.exports = router;
