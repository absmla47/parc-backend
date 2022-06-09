const Depenses = require("../models/depenses.model");
const AjoutFicheDep = async (req, res) => {
  try {
    let {
      date,
      tvs,
      entretien,
      reparation,
      coutAssurance,
      carburant,
      vehicule,
      typePlafond,
    } = req.body;
    let newFicheDep = new Depenses({
      date,
      tvs,
      entretien,
      reparation,
      coutAssurance,
      carburant,
      vehicule,
      typePlafond,
    });
    let ficheDep = await newFicheDep.save();
    res.json({
      success: true,
      result: ficheDep,
    });
  } catch (error) {}
};

const getAllDep = async (req, res) => {
  try {
    let result = await Depenses.find().populate("vehicule");
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {}
};
const getAllDepByVehicule = async (req, res) => {
  try {
    let { idveh } = req.params;
    let result = await Depenses.find({
      vehicule: idveh,
    });
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {}
};
const updateFicheDep = async (req, res) => {
  try {
    let { id } = req.params;
    let dataToUpdate = req.body;
    let result = await Depenses.findByIdAndUpdate(
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
const supprimerFicheDep = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Depenses.findByIdAndDelete(id);
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
  AjoutFicheDep,
  getAllDep,
  getAllDepByVehicule,
  updateFicheDep,
  supprimerFicheDep,
};
