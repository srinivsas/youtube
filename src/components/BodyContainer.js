import React from "react";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const BodyContainer = () => {
  return (
    <div className="flex">
      <SideBar />
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  );
};

export default BodyContainer;
