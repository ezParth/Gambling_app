import mongoose from "mongoose";
import GeneralQuestionsJson from "../data/generalQuestions.json"
import GeneralQuestions from "../model/GeneralQuestions.model";

let QuestionsArray: any = [];

GeneralQuestionsJson.map((q, ind) => {
    // console.log(ind, ". ", q.Question);
    QuestionsArray.push(q);
    GeneralQuestions.create({
        Question: q.Question,
        Answer: q.Answer,
        Options: q.Options
    })
})
