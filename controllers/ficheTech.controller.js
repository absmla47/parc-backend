const FicheTech = require("../models/ficheTech.model");
const AjoutFicheTech = async (req, res) => {
  try {
    let { date, vehicule, content } = req.body;
    let newFicheTech = new FicheTech({
      date,
      vehicule,
      content,
    });
    let ficheTech = await newFicheTech.save();
    res.json({
      success: true,
      ficheTech: ficheTech,
    });
  } catch (error) {
    res.json({
      success: false,
      ficheTech: error.message,
    });
  }
};
const getAllFichTech = async (req, res) => {
  try {
    let result = await FicheTech.find().populate("vehicule");
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {}
};
const getAllFichTechByVehicule = async (req, res) => {
  try {
    let { idveh } = req.params;
    let result = await FicheTech.find({
      vehicule: idveh,
    });
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {}
};
const updateFicheTech = async (req, res) => {
  try {
    let { id } = req.params;
    let dataToUpdate = req.body;
    let result = await FicheTech.findByIdAndUpdate(
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
const supprimerFicheTech = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await FicheTech.findByIdAndDelete(id);
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

module.exports = {
  AjoutFicheTech,
  getAllFichTech,
  getAllFichTechByVehicule,
  updateFicheTech,
  supprimerFicheTech,
};
