const Mission = require("../models/mission.model");

const addNewMission = async (req, res) => {
  try {
    let { dateMission, destination, evaluation, chauffeur, vehicule } =
      req.body;
    let newMission = new Mission({
      dateMission,
      destination,
      evaluation,
      chauffeur,
      vehicule,
    });
    let mission = await newMission.save();
    res.json({
      success: true,
      result: mission,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const getAllMissions = async (req, res) => {
  try {
    let result = await Mission.find()
      .populate("vehicule", "immat")
      .populate("chauffeur", "name lastName");
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { addNewMission, getAllMissions };
