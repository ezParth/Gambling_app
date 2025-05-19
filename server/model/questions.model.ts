import { Schema, model } from 'mongoose';

const questionSchema = new Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
})

const Questions = model('Questions', questionSchema);

export default Questions;
