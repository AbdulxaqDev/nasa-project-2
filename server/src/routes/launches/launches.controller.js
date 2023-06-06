const {
  getAllLaunches,
  addNewLaunch,
} = require("../../models/launches.model.js");

function httpGetAllLaunches(req, res) {
  return res.json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  launch.launchDate = new Date(launch.launchDate);

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.destination ||
    !launch.launchDate
  ) {
    return res.status(400).json({ error: "Missing required launch property" });
  }

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({ error: "Invalid launch date" });
  }

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
