import React from 'react';
import { Link } from "react-router-dom";

import TesterUserData from '../assets/databaseprofiles/database-profile-tester';




function GroupCard() {
  return (
    <div>
       

        <div className="friend-box element-container">
            <div className="cover-card" />
            <div className="profile-card" />
            
            <div className="name-card">
            <Link to="/groups/profile" onClick={() => console.log("GroupProfile")}>
              Group Name
            </Link>
            </div>
            
            <div className="location-card">
              Brief Thing
            </div>

            <div className="section-1">  


        <div className="left-50">
          <div className="friend-request-card"/>
        </div>
            
        <div className="right-50">
          <div className="message-card"/>
        </div>  
        </div>  

      <div className="section-2">

        <div className="location-card">
          We are an experimental start up to ensure the success of our company.
        </div>

        <div className="friends-since-card">
          Joined Group
        </div>

        <div className="name-card">
          Date of joining
        </div>
      </div>

      <div className="click-middle">
      <Link to="/groups/profile/members" onClick={() => console.log("GroupMembers")}>
              View Members
            </Link>
          </div> 

        </div>
     
       
    </div>
    
  );
}
export default GroupCard;