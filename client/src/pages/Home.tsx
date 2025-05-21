import React from "react";
import Navbar from "./Home/Navbar";
import Quiz from "./Quiz/Quix";
import Poll from "./Poll/Poll";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f7] text-gray-900">
        <div className="fixed min-w-screen">
            <Navbar />
        </div>
      <div className="flex flex-1 justify-center items-start p-8 gap-8 flex-wrap md:flex-nowrap mt-10">
        {/* Quiz in center */}
        <div className="flex-1 flex justify-center">
          <Quiz />
        </div>

        {/* Poll on right side */}
        <div className="w-full md:w-96">
          <Poll />
        </div>
      </div>
    </div>
  );
};

export default Home;
