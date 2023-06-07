import React from "react";
import GridPage from "./gridpage.jsx";
import SideBar from "../components/sidebar";
import TopBar from "../components/topbar";
import "../pages/page1.scss";

export default function Page1() {
  return (
    <div className="page1">
      <div className="rowLayout">
        <SideBar />
        <div className="colLayout">
          <TopBar />
          <GridPage />
        </div>
      </div>
    </div>
  );
}
