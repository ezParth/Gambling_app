import { generateT20BatsmanRanking } from "./t20Ranking.controller";
import { generateTestBatsmanRanking } from "./testRanking.controller";
import { generateOdiBatsmanRanking } from "./odiRanking.controller";
import { CustomError, ValueResponse } from "../config/Response";

const generateBatsmanRanking = (req: any, res: any) => {
    try {
        console.log("hitting");
        const odi = generateOdiBatsmanRanking();
        const t20 = generateT20BatsmanRanking();
        const test = generateTestBatsmanRanking();
        if(!test || !odi || !t20) {
            return new CustomError(500, "Cannot generate rankings of batsman for some interval server seasons").SendResponse(res);
        }

        const result = {"odi": odi, "t20": t20, "test": test};
        // console.log("Result", result)
        return new ValueResponse(200, "Rankings generated successfully: ", "ranking", result, true).SendResponse(res);
    } catch (error) {
        console.log("Error generating batsman ranking", error);
        return new CustomError(500, "Internal server error in batsman ranking").SendResponse(res);
    }
}

export { generateBatsmanRanking }
