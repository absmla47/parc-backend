const Controletech = require("../models/controletech.model");
const AjoutFicheControle = async (req, res) => {
  try {
    let { id, date } = req.body;
    let newFicheControle = new Controletech({
      id,
      date,
    });
    let ficheControle = await newFicheControle.save();
    res.json({
      success: true,
      result: ficheControle,
    });
  } catch (error) {}
};
const getAllFichTech = async (req, res) => {
  try {
    let result = await Controletech.find();
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {}
};
const getAllFichTechByVehicule = async (req, res) => {
  try {
    let { idveh } = req.params;
    let result = await Controletech.find({
      vehicule: idveh,
    });
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {}
};

module.exports = {
  AjoutFicheControle,
  getAllFichTech,
  getAllFichTechByVehicule,
};
