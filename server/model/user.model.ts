import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    totalAvailableMoney: { type: Number, default: 0 },
    totalMatchesPlayed: { type: Number, default: 0},
    totalMatchesLost: { type: Number, default: 0 },
    totalMatchsWon: { type: Number, default: 0 },
})

const User= mongoose.model('User', userSchema);
export default User;