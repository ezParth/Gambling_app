import React from "react";
import { Outlet } from "react-router-dom";

const Events: React.FC = () => {
    return(
        <div>
            {/* <div className="flex justify-center item-center font-bold">Events</div> */}
            <Outlet />
        </div>
    )
}

export default Events