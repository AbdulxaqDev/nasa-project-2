const API_KEY = "http://localhost:5000";

async function httpGetPlanets() {
  const response = await fetch(`${API_KEY}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_KEY}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  const response = await fetch(`${API_KEY}/launches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(launch),
  });
  return await response.json();
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
