import User from "../model/user.model"

const login = (req:any, res:any) => {
    const { username, password } = req.body;
    if(!username || !password) {
        return res.status(400).json({
            message: "Please provide username and password",
            success: false,
        })
    }

    const user = 
}