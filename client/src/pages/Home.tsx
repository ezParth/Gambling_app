import React from "react";
import Navbar from "./Home/Navbar";
import Quiz from "./Quiz/Quix";
import Poll from "./Poll/Poll";
import Ranking from "./Ranking/Ranking"; // Make sure to import your new component

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f7] text-gray-900">
      {/* Navbar at top */}
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      {/* Main content area */}
      <div className="flex flex-1 justify-center items-start p-8 gap-8 flex-wrap md:flex-nowrap mt-24">
        {/* Quiz in center */}
        <div className="flex-1 flex justify-center ml-30">
          <Quiz />
        </div>
      </div>

      {/* Poll fixed on right */}
      <div className="hidden md:block fixed right-8 top-24 w-96 h-[80vh] overflow-hidden rounded-2xl shadow-lg bg-white">
        <Poll />
      </div>

      {/* Ranking fixed on left */}
      <div className="hidden md:block fixed left-8 top-24 w-96 h-[80vh] overflow-hidden rounded-2xl shadow-lg bg-white">
        <Ranking />
      </div>
    </div>
  );
};

export default Home;









// import React from "react";
// import Navbar from "./Home/Navbar";
// import Quiz from "./Quiz/Quix";
// import Poll from "./Poll/Poll";

// const Home: React.FC = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-[#f4f4f7] text-gray-900">
//       <div className="fixed w-full z-50">
//         <Navbar />
//       </div>

//       <div className="flex flex-1 justify-center items-start p-8 gap-8 flex-wrap md:flex-nowrap mt-24">
//         {/* Quiz in center */}
//         <div className="flex-1 flex justify-center">
//           <Quiz />
//         </div>
//       </div>

//       {/* Poll fixed on right */}
// {/* Poll fixed on right */}
// <div className="hidden md:block fixed right-8 top-24 w-96 h-[80vh] overflow-hidden rounded-2xl shadow-lg bg-white">
//   <Poll />
// </div>

//     </div>
//   );
// };

// export default Home;
