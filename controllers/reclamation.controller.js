const Reclamation = require("../models/reclamation.model");
const ajouterReclamation = async (req, res) => {
  try {
    let { date, contenu } = req.body;
    let newReclamation = new Reclamation({
      date,
      contenu,
    });
    let result = await newReclamation.save();
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
const updateReclamation = async (req, res) => {
  try {
    let { id } = req.params;
    let dataToUpdate = req.body;
    let result = await Reclamation.findByIdAndUpdate(
      id,
      { ...dataToUpdate },
      { new: true }
    );
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      sucess: false,
      result: error.message,
    });
  }
};
const supprimerReclamation = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Reclamation.findByIdAndDelete(id);
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
const getAllReclamation = async (req, res) => {
  try {
    let reclamations = await Reclamation.find({});
    res.json({
      success: true,
      result: reclamations,
    });
  } catch (error) {
    res.json({
      success: false,
      result: reportError.message,
    });
  }
};

module.exports = {
  ajouterReclamation,
  updateReclamation,
  supprimerReclamation,
  getAllReclamation,
};
