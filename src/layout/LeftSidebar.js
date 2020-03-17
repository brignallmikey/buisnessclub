import React from "react";
import { Link } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";

function LeftSidebar() {
  return (
    <div>
      <div className="left-sidebar">
        
          <div className="sidebar-header">TITLE</div>
        

        {/*Links to be chosen and added*/}
        <div className="sidebar-list">
        <ul>
          <li className="sidebar-link">
            <Link to="/" onClick={() => console.log("Newsfeed")}>
              Home
            </Link>
          </li>
          <li className="sidebar-link">
            <Link to="/profile" onClick={() => console.log("Profile")}>
              Profile
            </Link>
          </li>
          <li className="sidebar-link">
            <Link to="/groups" onClick={() => console.log("Groups")}
            >Groups
            </Link>
          </li>
        </ul>
        </div>
        <div className="sidebar-slider">></div>
      </div>
    </div>
  );
}
export default LeftSidebar;
