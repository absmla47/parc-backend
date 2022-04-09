const Depenses = require("../models/depenses.model");
const AjoutFicheDep = async (req, res) => {
  try {
    let { id, date, tvs, entretien, reparation, coutAssurance, carburant } =
      req.body;
    let newFicheDep = new Depenses({
      id,
      date,
      tvs,
      entretien,
      reparation,
      coutAssurance,
      carburant,
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
    let result = await Depenses.find();
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
module.exports = { AjoutFicheDep, getAllDep, getAllDepByVehicule };
