import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} /> <Outlet />
    </div>
  );
};

export default App;
