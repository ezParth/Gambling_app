import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Trade from "./pages/Trade/Trade";
import Login from "./pages/Auth/Login"
import Profile from "./pages/profile/Profile"
import TradePage from "./pages/Trade/TradePage"
import Events from "./pages/Trade/Events";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/events",
                element: <Events />,
                children: [
                    {
                        path: "trade",
                        element: <Trade />,
                    },
                    {
                        path: ":id",
                        element: <TradePage />
                    },
                ]
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    }
])

export default router
