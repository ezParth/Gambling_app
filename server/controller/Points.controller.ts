import { CustomError, NullResponse, ValueResponse } from "../config/Response";
import User from "../model/user.model";

const updatePoints = async (req: any, res: any) => {
    try {
        const { isCorrect } = req.data;
        const id = req.id;

        if (typeof isCorrect !== "boolean") {
            return new CustomError(400, "Please provide a valid boolean for isCorrect").SendResponse(res);
        }

        const points = isCorrect ? 5 : -2;
        const updateFields: any = {
            $inc: {
                totalPoints: points,
                totalQuestions: 1,
                totalCorrectQuestions: isCorrect ? 1 : 0,
                totalIncorrectQuestions: !isCorrect ? 1 : 0,
            }
        };

        const user = await User.findByIdAndUpdate(id, updateFields, { new: true });

        if (!user) {
            return new CustomError(404, "User not found").SendResponse(res);
        }

        const totalPoints = user.totalPoints;
        const totalQuestions = user.totalQuestions;
        const totalCorrectQuestions = user.totalCorrectQuestions;
        const totalIncorrectQuestions = user.totalIncorrectQuestions;

        const result = { "totalPoints": totalPoints, "totalQuestions": totalQuestions, "totalCorrectQuestions": totalCorrectQuestions, "totalIncorrectQuestions": totalIncorrectQuestions };

        return new ValueResponse(200, "Points updated successfully", "Data", result, true).SendResponse(res);
    } catch (error) {
        console.log("Error during updating the points:", error);
        return new CustomError(500, "Server error while updating points").SendResponse(res);
    }
};

const getPoints = async (req: any, res: any) => {
    try {
        const userId = req.id;
        if(!userId) {
            return new CustomError(404, "Please login").SendResponse(res);
        }

        const user = await User.findOne({ id: userId });
        if(!user) {
            return new CustomError(404, "User not found, please login").SendResponse(res);
        }

        const points = user.totalPoints;

        return new ValueResponse(200, "Fetched poinsts successfully!", 'points', points, true).SendResponse(res);
    } catch (error) {
        console.log("Error in getting points: ", error);
        return new CustomError(500, "Internal server error").SendResponse(res);
    }
}


const getTotalMoney = async (req: any, res: any) => {
    try {
        const userId = req.id;
        if(!userId) {
            return new CustomError(404, "Please login").SendResponse(res);
        }

        const user = await User.findOne({ id: userId });
        if(!user) {
            return new CustomError(404, "User not found, please login").SendResponse(res);
        }

        const money = user.totalAvailableMoney;

        return new ValueResponse(200, "Fetched money successfully!", 'money', money, true).SendResponse(res);
    } catch (error) {
        console.log("Error in getting points: ", error);
        return new CustomError(500, "Internal server error").SendResponse(res);
    }
}

export { updatePoints, getPoints, getTotalMoney };
