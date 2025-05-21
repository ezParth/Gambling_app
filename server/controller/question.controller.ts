import { questions as Questioneer } from "../data/cricket.en.json";
import WinningTeam from "../data/winningTeamOfSeason.json";
import generateRandomNumeber from "../utils/generateRandomNumber";
import playerOftheSeason from "../data/playerOfTheYear.json";
import winningTeamOfSeason from "../data/winningTeamOfSeason.json";
import GeneralQuestions from "../data/generalQuestions.json";

const generateWhichTeamWonThisSeason = () => {
  const season_winner = Questioneer.season_winner;
  let randomNumber: number = generateRandomNumeber(2024 - 2007);
  const val = WinningTeam[--randomNumber];
  if (val == undefined) {
    return generateWhichTeamWonThisSeason();
  }

  const options: string[] = [val.winner];
  let i = 0;
  let index = randomNumber + 1;
  while (options.length < 4 && i < 30) {
    const team = WinningTeam[index % 17]?.winner;
    if (team && !options.includes(team)) {
      options.push(team);
    }
    index++;
    i++;
  }

  return {
    question: `${season_winner} - ${val.year}`,
    answer: val.winner,
    options
  };
};

const generatePlayerOfTheSeason = () => {
  try {
    const options: string[] = [];

    let entry: { player: string; year: number } | undefined;
    let attempts = 0;

    while (attempts < 10) {
      const randomIndex = generateRandomNumeber(playerOftheSeason.length);
      const potential = playerOftheSeason[randomIndex];
      if (potential?.player && potential?.year) {
        entry = potential;
        break;
      }
      attempts++;
    }

    if (!entry) {
      throw new Error("Valid player entry could not be found.");
    }

    const player: string = entry.player;
    const year: number = entry.year;
    const answer = player;
    options.push(player);

    let temp = 0;
    let randomIndex = generateRandomNumeber(playerOftheSeason.length);
    while (temp < 3) {
      const otherPlayer = playerOftheSeason[randomIndex % playerOftheSeason.length]?.player;
      if (otherPlayer && !options.includes(otherPlayer)) {
        options.push(otherPlayer);
        temp++;
      }
      randomIndex++;
    }

    const question = `${Questioneer.player_season} ${year} was?`;
    return { question, answer, options };
  } catch (error) {
    console.error("Error in generatePlayerOfTheSeason:", error);
  }
};

const generatePlayerOfTheSeasonTeam = () => {
  let randomNumber = generateRandomNumeber(16);
  const year = playerOftheSeason[randomNumber]?.year;
  const answer = playerOftheSeason[randomNumber]?.team;
  const options: (string | undefined)[] = [answer];

  let temp = 0;
  randomNumber++;
  let g = 1;
  while (temp < 3 && g < 30) {
    const team = playerOftheSeason[randomNumber % 17]?.team;
    if (team && !options.includes(team)) {
      options.push(team);
      temp++;
    }
    randomNumber++;
    g++;
  }

  const question = `${Questioneer.player_season_Team} ${year}`;
  return { question, answer, options: options.filter((x): x is string => !!x) };
};

const generateOrangeCapWinner = () => {
  try {
    let randomNumber = generateRandomNumeber(16);
    const year = winningTeamOfSeason[randomNumber]?.year;
    const answer = winningTeamOfSeason[randomNumber]?.orange_cap?.player;
    const options: (string | undefined)[] = [answer];

    let temp = 0;
    randomNumber++;
    let g = 1;
    while (temp < 3 && g < 30) {
      const cap = winningTeamOfSeason[randomNumber % 17]?.orange_cap?.player;
      if (cap && !options.includes(cap)) {
        options.push(cap);
        temp++;
      }
      randomNumber++;
      g++;
    }

    const question = `${Questioneer.orange_cap} ${year}`;
    return { question, answer, options: options.filter((x): x is string => !!x) };
  } catch (error) {
    console.log("Error during orange cap winner generation: ", error);
  }
};

const generatePurpleCapWinner = () => {
  try {
    let randomNumber = generateRandomNumeber(16);
    const year = winningTeamOfSeason[randomNumber]?.year;
    const answer = winningTeamOfSeason[randomNumber]?.purple_cap?.player;
    const options: (string | undefined)[] = [answer];

    let temp = 0;
    randomNumber++;
    let g = 0;
    while (temp < 3 && g < 30) {
      const cap = winningTeamOfSeason[randomNumber % 17]?.purple_cap?.player;
      if (cap && !options.includes(cap)) {
        options.push(cap);
        temp++;
      }
      randomNumber++;
      g++;
    }

    const question = `${Questioneer.purple_cap} ${year}`;
    return { question, answer, options: options.filter((x): x is string => !!x) };
  } catch (error) {
    console.log("Error during purple cap winner generation: ", error);
  }
};

const generateHeightRunScoredByAPlayerInTheSeason = () => {
  try {
    let randomNumber = generateRandomNumeber(16);
    const year = winningTeamOfSeason[randomNumber]?.year;
    const answer = winningTeamOfSeason[randomNumber]?.orange_cap?.runs;
    const options: (string | undefined | number)[] = [answer];

    let temp = 0;
    let g = 0;
    randomNumber++;
    while (temp < 3 && g < 20) {
      const run = winningTeamOfSeason[randomNumber % 17]?.orange_cap?.runs;
      if (run && !options.includes(run)) {
        options.push(run);
        temp++;
      }
      randomNumber++;
      g++;
    }

    const question = `${Questioneer.height_runs_By_player_season} ${year}`;
    return { question, answer, options: options.filter((x): x is string | number => !!x) };
  } catch (error) {
    console.log(
      "Error during generating highest run scored by a player in the season: ",
      error
    );
  }
};

const generateGeneralQuestions = () => {
  try {
    let randomNumber = generateRandomNumeber(GeneralQuestions.length);
    const qObj = GeneralQuestions[randomNumber];

    if (!qObj?.Question || !qObj?.Answer || !qObj?.Options) {
      console.log("Error in generateGeneralQuestions");
      return;
    }

    return {
      question: qObj.Question,
      answer: qObj.Answer,
      options: qObj.Options
    };
  } catch (error) {
    console.log("Error during generating general Questions: ", error);
  }
};

export {
  generateWhichTeamWonThisSeason,
  generatePlayerOfTheSeason,
  generatePlayerOfTheSeasonTeam,
  generateOrangeCapWinner,
  generatePurpleCapWinner,
  generateHeightRunScoredByAPlayerInTheSeason,
  generateGeneralQuestions
};
