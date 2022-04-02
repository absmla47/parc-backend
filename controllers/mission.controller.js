const Mission = require("../models/mission.model");

const addNewMission = async (req, res) => {
  try {
    let { dateMission, destination, evaluation, chauffeur, vehicule,startTime,arrivalTime } =
      req.body;
    let newMission = new Mission({
      dateMission,
      startTime,
      arrivalTime,
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
const updateMission = async (req, res) => {
  try {
    let { id } = req.params;
    let dataToUpdate = req.body;
    let result = await Mission.findByIdAndUpdate(
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
const deleteMission = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await Mission.findByIdAndDelete(id);
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

module.exports = { addNewMission, getAllMissions,updateMission,deleteMission };
