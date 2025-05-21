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
    console.log("Hitting getAQuestion!")
    const randomIndex = generateRandomNumber(questionGenerators.length - 1);
    const selectedFunction = questionGenerators[randomIndex];

    console.log("random number: ", randomIndex, "Selected functions: ", selectedFunction)
    let result
    if(selectedFunction != undefined) {
        result = selectedFunction();
        console.log("#",result)
    } else{
        result = generateGeneralQuestions();
    }

    console.log("results: ", result);
    return new ValueResponse(200, "successfully fetched questions", "Data: ", result, true).SendResponse(res);
  } catch (error) {
    console.error("Error during generating a question:", error);
    return new CustomError(500, "Cannot retrive Questions for some fucking weird reason").SendResponse(res);
  }
};

export default getAQuestion;
