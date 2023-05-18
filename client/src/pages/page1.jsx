import React from "react";
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
          page 1 under construction
        </div>
      </div>
    </div>
  );
}
