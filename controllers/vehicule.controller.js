const Vehicul = require("../models/vehicul.model");
const addNewVehicule = async (req, res) => {
  try {
    let {
      immat,
      marque,
      model,
      color,
      buyingPrice,
      buyingDate,
      maxWeight,
      dispo,
      doorNumber,
      typeVehicule,
      nbTires,
    } = req.body;
    let newVehicule = new Vehicul({
      immat,
      marque,
      model,
      color,
      buyingPrice,
      buyingDate,
      maxWeight,
      dispo,
      doorNumber,
      typeVehicule,
      nbTires,
    });
    let result = await newVehicule.save();
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
const updateVehicule = async (req, res) => {
  try {
    let { id } = req.params;
    let dataToUpdate = req.body;
    let result = await Vehicul.findByIdAndUpdate(
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
      success: false,
      result: error.message,
    });
  }
};
const deleteVehicule = async (req, res) => {
  try {
    let { id } = req.params;

    let result = await Vehicul.findByIdAndDelete(id);
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
const getAllVehicules = async (req, res) => {
  try {
    let vehicules = await Vehicul.find();
    res.json({
      success: true,
      result: vehicules,
    });
  } catch (error) {
    res.json({
      success: false,
      result: error.message,
    });
  }
};
// testing push 
const getAllVehiculesByType = async (req, res) => {
  try {
    let { type } = req.params;
    let result = await Vehicul.find({ typeVehicule: type });
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
  addNewVehicule,
  updateVehicule,
  deleteVehicule,
  getAllVehicules,
  getAllVehiculesByType,

};
