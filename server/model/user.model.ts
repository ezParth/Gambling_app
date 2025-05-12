import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

const User= mongoose.model('User', userSchema);
console.log("Type of user:: ", typeof User);
console.log("User: \n",User);
export default User;