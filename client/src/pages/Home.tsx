import React from "react";
import Navbar from "./Home/Navbar";
import Quiz from "./Quiz/Quix";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Quiz />
        </div>
    )
}

export default Home
