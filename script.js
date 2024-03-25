const teamNameEl = document.getElementById("team-name");
const manufactureEl = document.getElementById("manufacture-name");
const circuitRoundEl = document.getElementById("circuit-round");
const foundingYearEl = document.getElementById("founding-year");

const racingTeams = {
  team: [
    "TTG Racing",
    "Hexel Racing",
    "Momentum Motorsport",
    "Apex Alliance Motorsport",
    "Team Flashpoint Racing",
    "Nitro Blaze Racing",
    "Apex Power Tools Racing",
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
  foundingYear: [2022, 2023, 2024],
};

/* Team Name */
let [teamName1] = racingTeams.team;
console.log(teamName1);
let teamName = teamNameEl.textContent;
teamNameEl.textContent = teamName1;

/* Manufacture */
let [team1Manufacture] = racingTeams.manufacture;
console.log(team1Manufacture);
let teamManufacture = manufactureEl.textContent;
manufactureEl.textContent = team1Manufacture;

/* Rounds */
let [Team1RoundA, Team1RoundB, [Team1RoundC, Team1RoundD], Team1RoundE] =
  racingTeams.round;
console.log(Team1RoundA, Team1RoundB, Team1RoundC, Team1RoundD, Team1RoundE);
/* All rounds I've destructed into a string? Concatenate it before assigning it */
let Team1AllRounds = `${Team1RoundA}, ${Team1RoundB}, ${Team1RoundC}, ${Team1RoundD}, ${Team1RoundE}`;
circuitRoundEl.textContent = Team1AllRounds;

/* Founding Year */
let [, Team1FoundingYear, ,] = racingTeams.foundingYear;
console.log(Team1FoundingYear);
let teamFoundingYear = foundingYearEl.textContent;
foundingYearEl.textContent = Team1FoundingYear;
