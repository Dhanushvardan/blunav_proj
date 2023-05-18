import React from "react";
import "./hompage.scss";
import TopBar from "../components/topbar";
import SideBar from "../components/sidebar";
import MapPart from "../components/mapPage";

export default function homepage() {
  return (
    <div className="homepage">
      <div className="rowLayout">
        <SideBar />
        <div className="colLayout">
          <TopBar />
          <MapPart />
        </div>
      </div>
    </div>
  );
}
