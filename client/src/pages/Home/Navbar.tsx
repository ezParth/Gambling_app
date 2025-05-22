import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/login");
  };

  return (
    <nav className="flex items-center justify-between h-[8vh] bg-[#0f0f0f] text-white px-8 shadow-md backdrop-blur-sm z-50 transition-all duration-300 ease-in-out">
      {/* Left Side - Logo */}
      <div className="text-2xl font-bold text-white tracking-wide hover:text-purple-400 transition duration-300 cursor-pointer">
        IPLVote
      </div>

      {/* Center - Search Bar */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-[300px] px-4 py-1 rounded-md bg-[#1e1e1e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
        />
      </div>

      {/* Right Side - Links */}
      <div className="flex items-center gap-6 text-lg font-medium">
        {[
          { label: "About", onClick: () => {} },
          { label: "Login", onClick: handleLogin },
          { label: "Support", onClick: () => {} },
        ].map((item, i) => (
          <div
            key={i}
            className="relative cursor-pointer group transition-all duration-300"
            onClick={item.onClick}
          >
            <span className="group-hover:text-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-500 transition-colors duration-300">
              {item.label}
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
