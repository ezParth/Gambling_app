import mongoose from "mongoose";
import GeneralQuestionsJson from "../data/generalQuestions.json"
import GeneralQuestions from "../model/GeneralQuestions.model";

let QuestionsArray: any = [];

const convertJsonToMongoForGeneralQuestions = async () => {
    try {
    GeneralQuestionsJson.map( async (q, ind) => {
        // console.log(ind, ". ", q.Question);
        QuestionsArray.push(q);
        await GeneralQuestions.create({
            Question: q.Question,
            Answer: q.Answer,
            Options: q.Options
        })
    })
    } catch (error) {
       console.log("Error in converting json to mogno", error); 
    }
}

const addANewGeneralQuestion = async (QuizArray: any) => {
    try {
        const Question = QuizArray.Question;
        const Answer = QuizArray.Answer;
        const Options = QuizArray.Options;
        GeneralQuestions.create({
            Question: Question,
            Answer: Answer,
            Options: Options
        })
        .then(() => console.log("successfully added the general question"))
        .catch((e) => console.log("Error adding the general questions: ", e));
    } catch (error) {
        console.log("Error in adding a new general Question: ", error);
    }
}

export { addANewGeneralQuestion, convertJsonToMongoForGeneralQuestions }