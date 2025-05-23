import { CustomError, ValueResponse } from "../config/Response";
import generateRandomNumber from "../utils/generateRandomNumber";
import {
  generateWhichTeamWonThisSeason,
  generatePlayerOfTheSeason,
  generatePlayerOfTheSeasonTeam,
  generateOrangeCapWinner,
  generatePurpleCapWinner,
  generateHeightRunScoredByAPlayerInTheSeason,
  generateGeneralQuestions,
} from "./question.controller";

const questionGenerators = [
  generateWhichTeamWonThisSeason,
  generatePlayerOfTheSeason,
  generatePlayerOfTheSeasonTeam,
  generateOrangeCapWinner,
  generatePurpleCapWinner,
  generateHeightRunScoredByAPlayerInTheSeason,
  generateGeneralQuestions,
];

const getAQuestion = async (req: any, res: any) => {
  try {
    let randomIndex = generateRandomNumber(questionGenerators.length - 1);
    const promises = Array.from({ length: 5 }, () => {
      randomIndex = randomIndex + 1;
      randomIndex = randomIndex % 7;
      console.log("random index: ", randomIndex)
      const selectedFunction = questionGenerators[randomIndex] || generateGeneralQuestions;
      return selectedFunction();
    });

    const response = await Promise.all(promises);
    // console.log('Response: ', response)

    return new ValueResponse(
      200,
      "Successfully fetched questions",
      "Quiz",
      response,
      true
    ).SendResponse(res);
  } catch (error) {
    console.error("Error during generating questions:", error);
    return new CustomError(
      500,
      "Cannot retrieve questions due to an internal error."
    ).SendResponse(res);
  }
};

export default getAQuestion;
