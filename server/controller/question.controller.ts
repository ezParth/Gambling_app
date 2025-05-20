import Questions from "../model/questions.model";
import { questions as Questioneer } from "../data/cricket.en.json";
import WinningTeam from "../data/winningTeamOfSeason.json";
import generateRandomNumeber from "../utils/generateRandomNumber";
import playerOftheSeason from "../data/playerOfTheYear.json";
import winningTeamOfSeason from "../data/winningTeamOfSeason.json";
import GeneralQuestions from "../data/generalQuestions.json"

const generateWhichTeamWonThisSeason = async () => {
  const season_winner = Questioneer.season_winner;
  let randomNumebr: number = generateRandomNumeber(2024 - 2007);
  const val = WinningTeam[--randomNumebr];
  if (val == undefined) {
    generateWhichTeamWonThisSeason();
    return;
  }
  let options = [];
  // console.log("VALUE: ", val)
  // console.log("VALUE: ", val?.year)
  // console.log("VALUE: ", val?.winner)
  options.push(val?.winner);
  for (let i = 0; i < 3; i++) {
    options.push(WinningTeam[randomNumebr++ % 16]);
  }
  const questionString = season_winner + ` -${val?.year}`;
  const answer = val?.winner;
  console.log("String; ", questionString);
  console.log("Answer: ", answer);
};

const generatePlayerOfTheSeason = async () => {
  try {
    let options = [];
    let randomNumebr: number;
    let answer;
    let Question;
    randomNumebr = generateRandomNumeber(16);
    const player_season = playerOftheSeason[randomNumebr]?.player;
    let year = playerOftheSeason[randomNumebr]?.year;
    answer = player_season;
    randomNumebr++;
    let temp = 0;
    options.push(player_season);
    while (temp < 3) {
      randomNumebr = randomNumebr % 17;
      let isTrue = false;
      options.forEach((option) => {
        if (option == playerOftheSeason[randomNumebr]?.player) {
          isTrue = true;
        }
      });

      if (!isTrue) {
        options.push(playerOftheSeason[randomNumebr]?.player);
        temp++;
      }
      randomNumebr++;
    }
    Question = Questioneer.player_season + year + ` was?`;
    let s = 1;
    console.log("Question: ", Question, " Answer: ", answer);
    options.forEach((option) => {
      console.log(s++, ". ", option);
    });
  } catch (error) {
    console.log("Error in generatePlayerOftheSeason: ", error);
  }
};

const generatePlayerOfTheSeasonTeam = () => {
  let Question, answer, year, randomNumebr;
  let options = [];
  randomNumebr = generateRandomNumeber(16);
  answer = playerOftheSeason[randomNumebr]?.team;
  year = playerOftheSeason[randomNumebr]?.year;
  options.push(answer);
  let temp = 0;
  randomNumebr++;
  let g = 1;
  while (temp < 3) {
    randomNumebr = randomNumebr % 17;
    if (g == 30) {
      break;
    }
    g++;
    let istrue = false;
    let ans = playerOftheSeason[randomNumebr]?.team;
    options.forEach((option) => {
      if (option == ans) {
        istrue = true;
      }
    });

    if (!istrue) {
      options.push(ans);
      temp++;
    }
    randomNumebr++;
  }
  Question = Questioneer.player_season_Team + year;
  console.log("Question: ", Question, "\n Answer: ", answer);
  let s = 1;
  options.forEach((o) => {
    console.log(s++, ". ", o);
  });
};

const generateOrangeCapWinner = () => {
  try {
    let Question, answer, randomNumebr;
    let options = [];
    randomNumebr = generateRandomNumeber(16);
    answer = winningTeamOfSeason[randomNumebr]?.orange_cap;
    Question = Questioneer.orange_cap + winningTeamOfSeason[randomNumebr]?.year;
    options.push(answer);
    let temp = 0;
    randomNumebr++;
    let g = 1;
    while (temp < 3) {
      randomNumebr = randomNumebr % 17;
      if (g == 30 || options.length == 4) break;
      g++;
      let ans = winningTeamOfSeason[randomNumebr]?.orange_cap;
      let istrue = false;
      options.forEach((op) => {
        if (op == ans) {
          istrue = true;
        }
      });
      if (!istrue) {
        temp++;
        options.push(ans);
      }
      randomNumebr++;
    }
  } catch (error) {
    console.log("Error during orange cap winner generation: ", error);
  }
};

const generatePurpleCapWinner = () => {
  try {
    let Question, answer, ans, randomNumebr;
    let options = [];
    randomNumebr = generateRandomNumeber(16);
    answer = winningTeamOfSeason[randomNumebr]?.purple_cap;
    options.push(answer);
    Question = Questioneer.purple_cap + winningTeamOfSeason[randomNumebr]?.year;
    randomNumebr++;
    let temp = 0,
      g = 0;
    while (temp < 3) {
      if (g == 30 || options.length == 4) break;
      let istrue = false;
      let ans = winningTeamOfSeason[randomNumebr]?.purple_cap;
      options.forEach((op) => {
        if (op == ans) {
          istrue = true;
        }
      });
      if (!istrue) {
        temp++;
        options.push(ans);
      }
      randomNumebr++;
    }
  } catch (error) {
    console.log("Errror during purple cap generation: ", error);
  }
};

const generateHeightRunScoredByAPlayerInTheSeason = () => {
  try {
    let Question, answer, ans, randomNumebr;
    let options = [];
    randomNumebr = generateRandomNumeber(16);
    answer = winningTeamOfSeason[randomNumebr]?.orange_cap.runs;
    Question =
      Questioneer.height_runs_By_player_season +
      winningTeamOfSeason[randomNumebr]?.year;
    options.push(answer);
    randomNumebr++;
    let temp = 0;
    let g = 0;
    while (temp < 3) {
      if (g == 20 || options.length == 4) break;
      g++;
      let ans = winningTeamOfSeason[randomNumebr]?.orange_cap.runs;
      let isTrue = false;
      randomNumebr = randomNumebr % 17;
      options.forEach((p) => {
        if (p == ans) {
          isTrue = true;
        }
      });

      if (!isTrue) {
        temp++;
        options.push(ans);
      }
      randomNumebr++;
    }
  } catch (error) {
    console.log(
      "Error druing generating heighest run scored by a player in the season: ",
      error
    );
  }
};

const generateGeneralQuestions = () => {
    try {
        
    } catch (error) {
        console.log("Error during generating general Questions: ", error)
    }
}

export {
  generateWhichTeamWonThisSeason,
  generatePlayerOfTheSeason,
  generatePlayerOfTheSeasonTeam,
  generateOrangeCapWinner,
  generatePurpleCapWinner,
  generateHeightRunScoredByAPlayerInTheSeason,
};
