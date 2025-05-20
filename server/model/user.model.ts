import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    totalAvailableMoney: { type: Number, default: 0 },
    totalMatchesPlayed: { type: Number, default: 0},
    totalMatchesLost: { type: Number, default: 0 },
    totalMatchsWon: { type: Number, default: 0 },
    totalQuestions: { type: Number, default: 0 },
    totalCorrectQuestions: { type: Number, default: 0 },
    totalIncorrectQuestions: { type: Number, default: 0 },
    totalPoints: { type: Number, default: 0 }, // correct +5, incorrect -2
    batch: { type: String, enum: ["noob", "decent", "good", "pro", "God"], default: "noob" }, // 20, 100, 200, 300, 500
})

const User= mongoose.model('User', userSchema);
export default User;