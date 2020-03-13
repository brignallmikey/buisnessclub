import React from "react";
import { Link } from "react-router-dom";
import "../Components/CSS/left-sidebar.css";
import ProfilePage from "../Components/profile-page";

function LeftSidebar() {
  return (
    <div className="App">
      <div className="left-sidebar">
        <a href="#">
          <div className="sidebar-header">TITLE</div>
        </a>

        {/*Links to be chosen and added*/}
        <ul>
          <li>
            <Link to="/" onClick={() => console.log("HI  HI ")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={() => console.log("HI  HI NEWS ")}>
              News
            </Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
        </ul>
        <div className="sidebar-slider">></div>
      </div>
    </div>
  );
}
export default LeftSidebar;
