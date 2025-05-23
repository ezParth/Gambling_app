import React, { useContext, useState } from "react";
import { loginUser, registerUser } from "../../api/login";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../../Context/Login.context";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(LoginContext);
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {
            const result = await loginUser({ username: form.username, password: form.password });
            if(result.success) {
                setIsLoggedIn(true);
                navigate('/');
                toast.success("Task completed!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }else{
                console.log('result');
            }
        } else {
            const result = await registerUser(form);
            if(result.success) {
                navigate('/');
            }else{
                console.log('result');
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 p-8 rounded-md w-96 shadow-lg">
                <h2 className="text-2xl mb-4 font-bold text-center">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className="px-4 py-2 rounded bg-gray-700 focus:outline-none"
                        required
                    />
                    {!isLogin && (
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="px-4 py-2 rounded bg-gray-700 focus:outline-none"
                            required
                        />
                    )}
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="px-4 py-2 rounded bg-gray-700 focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 transition py-2 rounded text-lg font-semibold"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-400">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <span
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-purple-400 cursor-pointer hover:underline"
                    >
                        {isLogin ? "Sign up" : "Login"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
