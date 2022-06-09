const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../utils/sendMail");

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
      phoneNumber,
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
      phoneNumber: phoneNumber,
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
          user: user,
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
const updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let dataToUpdate = req.body;

    if (dataToUpdate.password != "" && dataToUpdate.password != undefined) {
      console.log("HERE", dataToUpdate.password);
      let hash = await bcrypt.hash(dataToUpdate.password, 10);

      let result = await User.findByIdAndUpdate(
        id,
        { ...dataToUpdate, password: hash },
        { new: true }
      );
      res.json({
        success: true,
        result: result,
      });
    } else {
      delete dataToUpdate["password"];
      let result = await User.findByIdAndUpdate(
        id,
        { ...dataToUpdate },
        { new: true }
      );
      res.json({
        success: true,
        result: result,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
async function deleteUser(req, res) {
  try {
    let { id } = req.params;

    let result = await User.findByIdAndDelete(id);
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
}
const getUserByRole = async (req, res) => {
  try {
    let { userrole } = req.params;
    let result = await User.find({ role: userrole });
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {}
};
const updatePhoto = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await User.findByIdAndUpdate(
      id,
      {
        profilePic: req.file.path,
      },
      { new: true }
    );
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const sendRecoverMail = async (req, res) => {
  try {
    let { email } = req.body;
    let user = await User.findOne({ userName: email });
    let token = jwt.sign({ id: user._id }, "PASSWORD_RESET");
    let content = `<div><span>Veuilliez cliquer sur ce lien pour reinitialiser votre mot de passe</span> <a href="http://localhost:3000/recover/${user._id}/${token} target="_blank">Cliquez ici</a> </div> `;
    let result = await sendEmail(
      user.userName,
      content,
      "REINITIALISATION MOT DE PASSE"
    );
    console.log("User", user);
    console.log("Result", result);
    if (result) {
      res.json({
        success: true,
        message: "email envoyé",
      });
    } else {
      res.json({
        success: false,
        message: "email ne peut pas etre envoyé",
      });
    }
  } catch (error) {}
};
const resetPassword = async (req, res) => {
  try {
    let { password, confirmPassword } = req.body;
    let { id } = req.params;
    let hash = await bcrypt.hash(password, 10);
    let result = await User.findByIdAndUpdate(id, { password: hash });
    res.json({
      success: true,
      result: "Mot de passe modifier",
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
const getUsrListByRole = async (req, res) => {
  try {
    let roles = [
      "CHAUFFEUR",
      "ADMIN",
      "GESTIONNAIRE",
      "CONTROLEUR",
      "DIRECTEUR",
    ];
    let newList = roles.map(async (elm) => {
      let result = await User.count({ role: elm });
      return {
        role: elm,
        count: result,
      };
    });
    let displayResult = await Promise.all(newList);
    res.json({
      success: true,
      result: displayResult,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
module.exports = {
  addUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByRole,
  updatePhoto,
  sendRecoverMail,
  resetPassword,
  getUsrListByRole,
};
