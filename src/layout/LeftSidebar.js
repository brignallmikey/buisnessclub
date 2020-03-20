import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";

function LeftSidebar() {
  const [slide, setSlide] = useState(false);
  console.log("LEFT SIDEBAR", slide);
  return (
    <div>
      <div className='left-sidebar'>
        <div className='sidebar-header'>TITLE</div>

        {/*Links to be chosen and added*/}
        <div className='sidebar-list'>
          <ul>
            <Link to='/newsfeed' onClick={() => console.log("Newsfeed")}>
              <li className='sidebar-link'>Home</li>
            </Link>

            <Link to='/profile' onClick={() => console.log("Profile")}>
              <li className='sidebar-link'>Profile</li>
            </Link>

            <Link to='/groups' onClick={() => console.log("Groups")}>
              <li className='sidebar-link'>Groups</li>
            </Link>

            <Link to='/profile/settings' onClick={() => console.log("Settings")}>
              <li className='sidebar-link'>Settings</li>
            </Link>
          </ul>
        </div>
        <div
          className={slide ? "open" : "fixed-sidebar"}
          // {...function(slideout) {
          //   var effect = "slide";

          //   var options = { direction: ".left".val(50) };

          //   var duration = 500;

          //   "leftsidebar".toggle(effect, options, duration);
          // }}
          onClick={() => setSlide(!slide)}
        >
          >
        </div>
      </div>
    </div>
  );
}
export default LeftSidebar;
