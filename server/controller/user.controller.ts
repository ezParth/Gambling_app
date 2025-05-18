import asyncHandler from "express-async-handler";
import User from "../model/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const { NullResponse, ValueResponse, CustomError } = require('./Response');

const SECRET: string = process.env.MONGO_URI || "nothing"

const login = asyncHandler(async (req: any, res: any) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return new NullResponse(400, "Please provide username and password", false).SendResponse(res);
    }

    const user = await User.findOne({ username });
    if (!user) {
        return new NullResponse(404, "User not found", false).SendResponse(res);
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return new NullResponse(401, "Invalid credentials", false).SendResponse(res);
    }

    const token = jwt.sign(
        { id: user._id, username: user.username },
        SECRET,
        { expiresIn: "7d" }
    );

    const userInfo = {
        id: user._id,
        username: user.username,
        email: user.email,
        token
    };

    return new ValueResponse(200, "Login successful", "user", userInfo, true).SendResponse(res);
});

const signin = asyncHandler(async (req: any, res: any) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return new CustomError(400, "Please provide all the information").SendResponse(res);
    }

    const userExists = await User.findOne({ username });
    if (userExists) {
        return new NullResponse(409, "User already exists", false).SendResponse(res);
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
    });

    const token = jwt.sign(
        { id: newUser._id, username: newUser.username },
        SECRET,
        { expiresIn: "7d" }
    );

    const userInfo = {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        token
    };

    return new ValueResponse(201, "User created successfully", "user", userInfo, true).SendResponse(res);
});

export { login, signin }
