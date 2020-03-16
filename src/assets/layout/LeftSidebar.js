import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

import ProfilePage from "../ProfilePage/Pages/ProfilePage";

function LeftSidebar() {
  return (
    <div className="App">
      <div className="left-sidebar">
        <a href="#">
          <div className="sidebar-header">TITLE</div>
        </a>

        {/*Links to be chosen and added*/}
        <ul>
          <li className="sidebar-link">
            <Link to="/" onClick={() => console.log("HI  HI ")}>
              Home
            </Link>
          </li>
          <li className="sidebar-link">
            <Link to="/profile" onClick={() => console.log("HI  HI NEWS ")}>
              Profile
            </Link>
          </li>
          <li className="sidebar-link">
            <Link to="/groups">Groups</Link>
          </li>
        </ul>
        <div className="sidebar-slider">></div>
      </div>
    </div>
  );
}
export default LeftSidebar;
