import React from "react";
import { FaEye } from "react-icons/fa";
import mumbaiLogo from "../../assets/image.png"
import viratLogo from "../../assets/image copy.png"
import { FaHandPointRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TitleArray = [
    "Mumbai to win 2025 IPL",
]

const Trade: React.FC = () => {
    const navigation = useNavigate();

    const handleNavigation = (title: string, image: string) => {
        const slug = title.trim().replace(/\s+/g, "-");
        navigation(`/events/${slug}`, {
            state: {
                image,
                title,
            }
        })
    }

    return(
        <div>
            <div className="flex justify-center h-screen gap-10 mt-30">
                {/* First */}
                <div className="bg-white h-60 w-120 border-1 border-gray-200 rounded-2xl">
                    <div className="flex flex-row">
                        <div className="ml-3 mt-5">
                            <FaEye />
                        </div>
                        <div className="ml-1 mt-[18px] text-gray-700 text-[12px] underline">
                            1234 Watching
                        </div>
                    </div>
                    <div className="mt-2 ml-5 flex flex-row gap-3">
                        <div>
                            <img src={mumbaiLogo} alt="mumbai indians logo" className="w-20 h-20" />
                        </div>
                        <div style={{ fontFamily: 'Poppins, sans-serif' }} className="ml-2 text-xl cursor-pointer">
                        <span onClick={() => handleNavigation(TitleArray[0], mumbaiLogo)}>{TitleArray[0]}</span>
                        </div>
                    </div>
                    <div className="mt-3 ml-3 flex flex-row">
                        <div className="h-[6px] w-[6px] ml-6 p-2">
                            <FaHandPointRight />
                        </div>
                        <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-[12px] ml-4 mt-[7px]">
                   d         Mumbai finished at 10th place in the 2024 IPL season.
                        </div>
                    </div>
                    <div>
                        <div className="mt-2 flex justify-center gap-2">
                            <button className="bg-green-100 pl-22 pr-22 pt-3 pb-3 cursor-pointer hover:bg-green-50 rounded-[4px]">
                                YES
                            </button>
                            <button className="bg-red-100 pr-22 pl-22 pt-3 pb-3 cursor-pointer hover:bg-red-50 rounded-[4px]">
                                NO
                            </button>
                        </div>
                    </div>
                </div>

                {/* Seocnd */}
                <div className="bg-white h-60 w-120 border-1 border-gray-200 rounded-2xl">
                    <div className="flex flex-row">
                        <div className="ml-3 mt-5">
                            <FaEye />
                        </div>
                        <div className="ml-1 mt-[18px] text-gray-700 text-[12px] underline">
                            1234 Watching
                        </div>
                    </div>
                    <div className="mt-2 ml-5 flex flex-row gap-3">
                        <div>
                            <img src={viratLogo} alt="Virat Kohli logo" className="w-20 h-20" />
                        </div>
                        <div style={{ fontFamily: 'Poppins, sans-serif' }} className="ml-2 text-xl">
                            Virat Kohli to score most runs in IPL-2025?
                        </div>
                    </div>
                    <div className="mt-3 ml-3 flex flex-row">
                        <div className="h-[6px] w-[6px] ml-6 p-2">
                            <FaHandPointRight />
                        </div>
                        <div style={{ fontFamily: 'Poppins, sans-serif' }} className="text-[12px] ml-4 mt-[7px]">
                            Mumbai finished at 10th place in the 2024 IPL season.
                        </div>
                    </div>
                    <div>
                        <div className="mt-2 flex justify-center gap-2">
                            <button className="bg-green-100 pl-22 pr-22 pt-3 pb-3 cursor-pointer hover:bg-green-50 rounded-[4px]">
                                YES
                            </button>
                            <button className="bg-red-100 pr-22 pl-22 pt-3 pb-3 cursor-pointer hover:bg-red-50 rounded-[4px]">
                                NO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;