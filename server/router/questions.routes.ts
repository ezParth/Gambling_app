import express from "express";

import getAQuestion from "../controller/quiz.controller";

const QuestionRouter = express.Router();

QuestionRouter.get("/get-questions", getAQuestion);

export default QuestionRouter;
