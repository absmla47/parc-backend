const Mission = require("../models/mission.model");
const Vehicule = require("../models/vehicul.model");
const User = require("../models/user.model");

const addNewMission = async (req, res) => {
  try {
    let {
      dateMission,
      destination,
      evaluation,
      cause,
      chauffeur,
      vehicule,
      startTime,
      arrivalTime,
    } = req.body;
    let newMission = new Mission({
      dateMission,
      startTime,
      arrivalTime,
      destination,
      evaluation,
      cause,
      chauffeur,
      vehicule,
    });
    let mission = await newMission.save();
    await Vehicule.findByIdAndUpdate(vehicule, { dispo: false }, { new: true });
    await User.findByIdAndUpdate(
      chauffeur,
      { available: false },
      { new: true }
    );
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
      .populate("vehicule")
      .populate("chauffeur");
    res.json({
      success: true,
      Missions: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const terminateMission = async (req, res) => {
  try {
    let { id } = req.params;
    let { evaluation } = req.body;
    let result = await Mission.findByIdAndUpdate(
      id,
      { isFinished: true, evaluation: evaluation },
      { new: true }
    );
    await Vehicule.findByIdAndUpdate(
      result.vehicule,
      { dispo: true },
      { new: true }
    );
    await User.findByIdAndUpdate(
      result.chauffeur,
      { available: true },
      { new: true }
    );
    res.json({
      success: true,
      Missions: result,
    });
  } catch (error) {
    res.json({
      success: true,
      Missions: error.message,
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
const getMissionCountInRange = async (req, res) => {
  try {
    let { startDate, endDate } = req.body;
    let result = await Mission.count({
      createdAt: {
        $gte: `${startDate}T00:00:00.000Z`,
        $lt: `${endDate}T23:59:59.999Z`,
      },
    });
    res.json({
      success: true,
      result: result,
    });
  } catch (error) {}
};

module.exports = {
  addNewMission,
  getAllMissions,
  updateMission,
  deleteMission,
  terminateMission,
  getMissionCountInRange,
};
