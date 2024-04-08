"use strict";

// Variables
const currentYearHeading = document.getElementById("current-year");
const teamInfoContainer = document.getElementById("team-info");
const lastRaceDescription = document.getElementById("last-race__description");
const lastRaceDescription2 = document.getElementById(
  "last-race__description--second"
);
const zoomIn = document.querySelector(".zoom-in");
const carImageContainer = document.querySelector(".car-track__container");
const overlay = document.querySelector(".overlay");
const raceCar = document.querySelector(".race-car");
const raceCarClose = document.querySelector(".race-car__button");
const carImage = document.querySelector(".car-track");
const pointsTableContent = document.getElementById("pointsTableContent");
const nextYearHeading = document.getElementById("next-year");
const nextYearDescription = document.getElementById("next-year__description");

// Objects
const racingTeams = {
  team: [
    "TTG Racing",
    "Hexel Racing",
    "Momentum Motorsport",
    "Apex Motorsport",
    "Team Flashpoint Racing",
    "Nitro Blaze Racing",
    "Alliance Power Tools Racing",
    "RJJ Racing",
    "Garage 24",
  ],
  manufacture: [
    "TG Racing Cars",
    "BMW",
    "Mercedes",
    "Toyota",
    "Bentley",
    "Aston Martin",
    "Porsche",
  ],
  round: [
    "Thruxton",
    "Castle Combe",
    ["Donnington Race 1", "Donnington Race 2"],
    "Snetterton",
    "Brands Hatch",
    ["Silverstone Race 1", "Silverstone Race 2", "Silverstone Race 3"],
  ],
  foundingYear: [2024, 2021, 2022, 2023, 2020],
};

const standingsAndGrid = {
  team: ["TTG Racing", "Apex Motorsport", "Nitro Blaze Racing"],
  car: [
    "#86 TG Racing Cars GTS",
    "#91 Bentley Continental GT3",
    "#77 BMW M4 GT3",
  ],
  driver: [
    "Tristan Griffiths",
    "Benjamin Hayes",
    "Ethan Harrison",
    "Lucas Rodriguez",
    "Seema Shah",
    "Noah Sullivan",
  ],
  points: [186, 151, 144, 120, 88, 66],
  /* once receive data from driversDescription, we immediately desctructure it */
  driversDescription: function ({
    round,
    /* default value - set for desctructuring */
    date = "5th February",
    teamIndex,
    carIndex,
    driverIndices,
  }) {
    const driverNames = driverIndices.map((index) => this.driver[index]);
    const driverNamesString = driverNames.join(" and ");
    const lastRaceSentence = `${driverNamesString} claimed victory in the latest race on the ${date} at ${round}, for the team ${this.team[teamIndex]} - driving the ${this.car[carIndex]}.`;
    const lastRaceSentence2 = `Their victory at ${round} showcased their driving ability and also the preparation and teamwork of ${this.team[teamIndex]}. Griffiths and Hayes demonstrated exceptional skill and strategy, solidifying their position as strong competitors in the championship.`;
    lastRaceDescription.textContent = lastRaceSentence;
    lastRaceDescription2.textContent = lastRaceSentence2;
    lastRaceDescription.classList.add("text-light");
    lastRaceDescription2.classList.add("text-light");
  },
};

/* get complete string based on data we passed in, in this single object */
standingsAndGrid.driversDescription({
  round: "Castle Coombe",
  teamIndex: 0,
  carIndex: 0,
  driverIndices: [0, 1],
});

// Functions
/* Get current year */
const getCurrentYear = function () {
  return new Date().getFullYear();
};
currentYearHeading.textContent = getCurrentYear() + " ";

/* Get next year */
const getNextYear = getCurrentYear() + 1;
nextYearHeading.textContent = getNextYear + " ";

//Event Listeners
zoomIn.addEventListener("click", () => {
  /* to do with removing original car image */
  carImageContainer.classList.remove("car-track__container--before");
  carImage.classList.remove("car-track__before");
  carImage.classList.add("car-track__clicked");
  /* to do with getting rid of looking glass */
  zoomIn.classList.add("zoom-in__clicked");
  /* to do with adding the overlay */
  overlay.classList.add("overlay__clicked");
  /* to do with adding other image - race car once clicked */
  raceCar.classList.remove("race-car__hidden");
  raceCar.classList.add("race-car__centered");
});

raceCarClose.addEventListener("click", () => {
  /* to do with adding back original car image */
  carImageContainer.classList.add("car-track__container--before");
  carImage.classList.add("car-track__before");
  carImage.classList.remove("car-track__clicked");
  /* to do with adding back the looking glass */
  zoomIn.classList.remove("zoom-in__clicked");
  /* to do with removing the overlay */
  overlay.classList.remove("overlay__clicked");
  /* to do with removing other image - race car once clicked */
  raceCar.classList.remove("race-car__centered");
  raceCar.classList.add("race-car__hidden");
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
/* The team and competitiors cards */
for (let i = 0; i < racingTeams.team.length; i++) {
  /* Create a div element to hold the information for each team */
  const teamDiv = document.createElement("div");
  teamDiv.classList.add("team-details");

  // Team Name
  const teamNameSpan = document.createElement("span");
  teamNameSpan.textContent = "Team Name: " + racingTeams.team[i];
  teamNameSpan.classList.add("team-descriptions");

  // Manufacture
  let chooseManufacture;
  if (i === 0) {
    /* First team gets "TG Racing Cars" */
    chooseManufacture = racingTeams.manufacture[0];
  } else {
    chooseManufacture =
      racingTeams.manufacture[(i % (racingTeams.manufacture.length - 1)) + 1];
  }
  const manufactureSpan = document.createElement("span");
  manufactureSpan.textContent = "Manufacture: " + chooseManufacture;
  manufactureSpan.classList.add("team-descriptions");

  // Rounds
  let [
    round1,
    round2,
    [round3a, round3b],
    round4,
    round5,
    [round6a, round6b, round6c],
  ] = racingTeams.round;
  let allRounds = `${round1}, ${round2}, ${round3a}, ${round3b}, ${round4}, ${round5}, ${round6a}, ${round6b}, ${round6c}`;
  const roundsSpan = document.createElement("span");
  roundsSpan.textContent = "Rounds: " + allRounds;
  roundsSpan.classList.add("team-descriptions");

  // Founding Year
  const foundingYear =
    racingTeams.foundingYear[i % racingTeams.foundingYear.length];
  const foundingYearSpan = document.createElement("span");
  foundingYearSpan.textContent = "Founding Year: " + foundingYear;
  foundingYearSpan.classList.add("team-descriptions");

  // Append all information to the team div
  teamDiv.appendChild(teamNameSpan);
  teamDiv.appendChild(manufactureSpan);
  teamDiv.appendChild(roundsSpan);
  teamDiv.appendChild(foundingYearSpan);

  // Append the team div to the container
  teamInfoContainer.appendChild(teamDiv);
}

/* Standings Section */

////////////
/* Drivers Table */

/* position variable - need it outside of the for loop so variable doesn't reset to 1 everytime 
i is incremented i++ */
let p = 1;

for (let i = 0; i < standingsAndGrid.points.length; i++) {
  // position to loop through
  const position = p++;
  // driver variable to loop through
  const driver = standingsAndGrid.driver[i];
  // points variable to loop through
  const points = standingsAndGrid.points[i];

  // Create a new row
  const row = document.createElement("tr");

  // Create cells for position, driver, and points
  const positionCell = document.createElement("td");
  positionCell.textContent = position;
  const driverCell = document.createElement("td");
  driverCell.textContent = driver;
  const pointsCell = document.createElement("td");
  pointsCell.textContent = points;

  // Append cells to the row
  row.appendChild(positionCell);
  row.appendChild(driverCell);
  row.appendChild(pointsCell);

  // Append row to the table body
  driversTableContent.appendChild(row);
}

////////////
/* Team Table */

const [ttgOne, ttgTwo] = standingsAndGrid.points;
const ttgTotalPoints = ttgOne + ttgTwo;

const [, , apexOne, apexTwo] = standingsAndGrid.points;
const apexTotalPoints = apexOne + apexTwo;

const [, , , , allianceOne, allianceTwo] = standingsAndGrid.points;
const allianceTotalPoints = allianceOne + allianceTwo;

let pTeam = 1;

for (let i = 0; i < standingsAndGrid.team.length; i++) {
  // team position to loop through
  const teamPosition = pTeam++;
  // team name to loop through
  const teamName = standingsAndGrid.team[i];
  // team points to loop through
  let teamPoints;
  if (i === 0) {
    teamPoints = ttgTotalPoints;
  } else if (i === 1) {
    teamPoints = apexTotalPoints;
  } else {
    teamPoints = allianceTotalPoints;
  }
  // Create a new row
  const teamRow = document.createElement("tr");

  const teamPositionCell = document.createElement("td");
  teamPositionCell.textContent = teamPosition;
  const teamCell = document.createElement("td");
  teamCell.textContent = teamName;
  const teamPointsCell = document.createElement("td");
  teamPointsCell.textContent = teamPoints;

  // Append cells to the row
  teamRow.appendChild(teamPositionCell);
  teamRow.appendChild(teamCell);
  teamRow.appendChild(teamPointsCell);

  // Append row to the table body
  teamsTableContent.appendChild(teamRow);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
/* Next years championship */
/* SPREAD operator used, because on right side of = */
const nextYearsChampionship = [
  ...racingTeams.team,
  "Corsa Competition Racing",
  "CWR Racing",
];
nextYearDescription.textContent = `${nextYearsChampionship.join(", ")}`;
nextYearDescription.classList.add("text-light");
