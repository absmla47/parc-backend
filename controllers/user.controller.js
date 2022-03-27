const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addUser = async (req, res) => {
  try {
    let {
      cin,
      name,
      lastName,
      birthDate,
      address,
      civilState,
      userName,
      password,
      numDriver,
      categDriver,
      role,
    } = req.body;
    let hash = await bcrypt.hash(password, 10);
    let newUser = new User({
      cin: cin,
      name: name,
      lastName: lastName,
      birthDate: birthDate,
      address: address,
      civilState: civilState,
      userName: userName,
      password: hash,
      numDriver: numDriver,
      categDriver: categDriver,
      role: role,
    });
    let result = await newUser.save();
    res.json({
      success: true,
      result: "utilisateur ajouter",
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const loginUser = async (req, res) => {
  try {
    let { userName, password } = req.body;
    let user = await User.findOne({ userName: userName });
    if (user) {
      console.log("User", user);
      let verif = await bcrypt.compare(password, user.password);
      if (verif) {
        let token = jwt.sign({ user: user._id }, "MYTOKENSECRET", {
          expiresIn: "24h",
        });
        res.json({
          success: true,
          message: "authentification success",
          token: token,
        });
      } else {
        res.json({
          success: false,
          message: "login ou mot de passe incorrecte",
        });
      }
    } else {
      res.json({
        success: false,
        message: "login ou mot de passe incorrecte",
      });
    }
  } catch (error) {}
};
const getAllUsers = async (req, res) => {
  try {
    let users = await User.find().select("-password");
    res.json({
      success: true,
      users: users,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const getUserById = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await User.findById(id);
    res.json({
      success: true,
      user: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { addUser, loginUser, getAllUsers, getUserById };
