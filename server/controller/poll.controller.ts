import { CustomError } from "../config/Response";

const getPollQuestions = (req: any, res: any) => {
    try {
        
    } catch (error) {
        console.log("Error in getting a poll Question: ", error);
        return new CustomError(500, "Error getting the poll Question").SendResponse(res);
    }
}

export default getPollQuestions;
