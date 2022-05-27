import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../mlm component/Sidebar/Sidebar";

const MlmHome = () => {
  return (
    <div className="w-full h-screen flex bg-gray-200 ">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MlmHome;
