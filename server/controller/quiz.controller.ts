import { CustomError, ValueResponse } from "../config/Response";
import generateRandomNumber from "../utils/generateRandomNumber";
import {
  generateWhichTeamWonThisSeason,
  generatePlayerOfTheSeason,
  generatePlayerOfTheSeasonTeam,
  generateOrangeCapWinner,
  generatePurpleCapWinner,
  generateHeightRunScoredByAPlayerInTheSeason,
  generateGeneralQuestions
} from "./question.controller";

// All generators should return a question object or a Promise that resolves to it
const questionGenerators = [
  generateWhichTeamWonThisSeason,
  generatePlayerOfTheSeason,
  generatePlayerOfTheSeasonTeam,
  generateOrangeCapWinner,
  generatePurpleCapWinner,
  generateHeightRunScoredByAPlayerInTheSeason,
  generateGeneralQuestions
];

const getAQuestion = async (req: any, res: any) => {
  try {
    const randomIndex = generateRandomNumber(questionGenerators.length - 1);
    const selectedFunction = questionGenerators[randomIndex];

    if(selectedFunction != undefined) {
        var result = selectedFunction(); // Await in case it's async
    } else{
        var result = generateGeneralQuestions();
    }

    return new ValueResponse(200, "successfully fetched questions", "Data: ", result, true).SendResponse(res);
  } catch (error) {
    console.error("Error during generating a question:", error);
    return new CustomError(500, "Cannot retrive Questions for some fucking weird reason").SendResponse(res);
  }
};

export default getAQuestion;
