import React from "react";
import { useLocation } from "react-router-dom";

const TradePage: React.FC = () => {
    const location = useLocation();
    const { image, title } = location.state || {};
    return(
        <div>
            <div className="flex ml-35 mt-35">
                <div className="flex flex-row">
                    <div className="h-[100px] w-[100px]">
                        <img src={image} alt="image" />
                    </div>
                    <div className="text-2xl font-bold mt-10 ml-5">
                        {title}
                    </div>
                </div>
            </div>
            <div className="mt-20 ml-45">
                <div className="flex flex-row gap-5 p-3">
                    <div className="border-b-2">
                        OrderBook
                    </div>
                    <div>
                        TimeLine
                    </div>
                    <div>
                        Overview
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradePage