import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api", // change to your actual backend URL
    withCredentials: true,
});

export const loginUser = async (credentials: { username: string; password: string }) => {
    try {
        const res = await API.post("/auth/login", credentials);
        console.log("Login successful:", res.data);
        return res.data;
    } catch (err) {
        console.error("Login error:", err.response?.data || err.message);
    }
};

export const registerUser = async (userData: { username: string; email: string; password: string }) => {
    try {
        const res = await API.post("/auth/signup", userData);
        console.log("Registration successful:", res.data);
        return res.data;
    } catch (err) {
        console.error("Signup error:", err.response?.data || err.message);
    }
};
