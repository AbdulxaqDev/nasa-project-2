const launches = new Map();

let lastFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration",
  rocket: "Explorer j4",
  lauchDate: new Date("December 28, 2030"),
  destination: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(newLaunch) {
  lastFlightNumber++;
  launches.set(
    lastFlightNumber,
    Object.assign(newLaunch, {
      upcoming: true,
      success: true,
      customers: ["Zero to Mastery", "NASA"],
      flightNumber: lastFlightNumber,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
