import { Schema, model } from "mongoose"

const GeneralQuestionsSchema = new Schema({
    Question: { type: String, required: true },
    Answer: { type: String, required: true },
    Options: { type: Array, required: true },
    Index: { type: Number, required: true },
});

const GeneralQuestions = model("GeneralQuestions", GeneralQuestionsSchema);

export default GeneralQuestions;
