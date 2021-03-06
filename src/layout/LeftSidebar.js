import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";

function LeftSidebar() {
  const [slide, setSlide] = useState(true);
  console.log("LEFT SIDEBAR", slide);

  const open = true;

  const slideIn = () => {
    if (open) {
      return <div className="leftsidebarin" />;
    } else {
      return "leftsidebarout";
    }
  };

  return (
    <div className={slideIn}>
      <div className="sidebar-header">TITLE</div>

      {/*Links to be chosen and added*/}
      <div className="sidebar-list">
        <ul>
          <Link to="/newsfeed" onClick={() => console.log("Newsfeed")}>
            <li className="sidebar-link">Home</li>
          </Link>

          <Link to="/profile" onClick={() => console.log("Profile")}>
            <li className="sidebar-link">Profile</li>
          </Link>

          <Link to="/groups" onClick={() => console.log("Groups")}>
            <li className="sidebar-link">Groups</li>
          </Link>

          <Link to="/profile/settings" onClick={() => console.log("Settings")}>
            <li className="sidebar-link">Settings</li>
          </Link>
        </ul>
      </div>
      <div
        className={slide ? "open" : "left-sidebar"}
        onClick={() => setSlide(!slide)}
      >
        <div className="sidebarslider">></div>
      </div>
    </div>
  );
}
export default LeftSidebar;
