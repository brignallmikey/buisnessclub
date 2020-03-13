import React from 'react';
import './CSS/profile.css';
import './CSS/friends.css';
import TesterUserData from './database-profile-tester';
import GroupCard from './group-card';




function FriendGroup() {
  return (
    <div className="container">
       <div className="element-container margin-l2">
        <div className="friend-title list-horizontal-subtitle">
             My Groups
          </div>
        

        <div className="friend-search">
          <form>
            <input type="text" className="friend-search" placeholder="Search Groups"/>
          </form>      
          </div>

          </div>

        <GroupCard />

      
    </div>
    
  );
}
export default FriendGroup;