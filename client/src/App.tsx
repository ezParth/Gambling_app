import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return(
        <div>
          <ToastContainer />
          <Outlet />
        </div>
    )
}

export default App