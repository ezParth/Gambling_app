import { Schema, model } from 'mongoose';

const betSchema = new Schema({
    match: { type: String, required: true },
    winOrLost: { type: String, enum: ['win', 'lost'], required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    moneyWon: { type: Number, default: 0 },
    moneyLost: { type: Number, default: 0 },
}, {
    timestamps: true
});

const Bet = model('Bet', betSchema);
export default Bet;
