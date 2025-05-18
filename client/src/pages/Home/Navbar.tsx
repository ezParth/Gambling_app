import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between h-[8vh] bg-black text-white px-8">
            {/* Left Side */}
            <div className="flex items-center gap-6 text-lg font-semibold">
                <div className="hover:text-purple-400 cursor-pointer">Home</div>
                {/* Search Bar */}
                <div className="flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-1 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6 text-lg font-semibold">
                <div className="hover:text-yellow-400 cursor-pointer">About</div>
                <div className="hover:text-yellow-400 cursor-pointer">Support</div>
                <div className="hover:text-yellow-400 cursor-pointer">Login</div>
            </div>
        </nav>
    );
};

export default Navbar;
