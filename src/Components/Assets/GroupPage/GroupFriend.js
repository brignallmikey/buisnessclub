import React from 'react';

import TesterUserData from '../DatabaseProfiles/database-profile-tester';
import GroupCard from './GroupCard';




function GroupFriend() {
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
export default GroupFriend;