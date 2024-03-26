"use strict";

// Variables
const teamInfoContainer = document.getElementById("team-info");

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

const lastRaceGrid = {
  team: ["TTG Racing", "Apex Motorsport", "Alliance Power Tools Racing"],
  car: [
    "#86 TG Racing Cars GTS",
    "#91 Bentley Continental GT3",
    "#77 BMW M4 GT3",
  ],
  drivers: {
    TTGRacing: {
      driver1: "Tristan Griffiths",
      driver2: "Benjamin Hayes",
    },
    apex: {
      driver1: "Ethan Harrison",
      driver2: "Lucas Rodriguez",
    },
    alliancePowerTools: {
      driver1: "Seema Shah",
      driver2: "Noah Sullivan",
    },
  },
};

///////////////////////////////////////////////////////////////////////////////////////////////////////
/* The team and competitiors cards */
for (let i = 0; i < racingTeams.team.length; i++) {
  /* Create a div element to hold the information for each team */
  const teamDiv = document.createElement("div");
  teamDiv.classList.add("team-details");

  // Team Name
  const teamNameSpan = document.createElement("span");
  teamNameSpan.textContent = "Team Name: " + racingTeams.team[i];

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

  // Founding Year
  const foundingYear =
    racingTeams.foundingYear[i % racingTeams.foundingYear.length];
  const foundingYearSpan = document.createElement("span");
  foundingYearSpan.textContent = "Founding Year: " + foundingYear;

  // Append all information to the team div
  teamDiv.appendChild(teamNameSpan);
  teamDiv.appendChild(manufactureSpan);
  teamDiv.appendChild(roundsSpan);
  teamDiv.appendChild(foundingYearSpan);

  // Append the team div to the container
  teamInfoContainer.appendChild(teamDiv);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
/* Last Race Podium */
