import mongoose, { Schema, model, Document } from "mongoose";
import Counter from "./Counter.model";

// TypeScript interface (optional)
interface IGeneralQuestion extends Document {
  Question: string;
  Answer: string;
  Options: string[];
  Index: number;
}

const GeneralQuestionsSchema = new Schema<IGeneralQuestion>({
  Question: { type: String, required: true },
  Answer: { type: String, required: true },
  Options: { type: [String], required: true },
  Index: { type: Number, unique: true },
});

GeneralQuestionsSchema.pre("save", async function (next) {
  if (this.isNew && this.Index == null) {
    const counter = await Counter.findOneAndUpdate(
      { id: "general_question_index" },
      { $inc: { counter: 1 } },
      { new: true, upsert: true }
    );
    this.Index = counter.counter;
  }
  next();
});

const GeneralQuestions = model<IGeneralQuestion>(
  "GeneralQuestions",
  GeneralQuestionsSchema
);

export default GeneralQuestions;
