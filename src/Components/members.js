import React from 'react';
import './CSS/friends.css';
import TesterUserData, { TesterGroupData } from './database-group-tester';
import FriendCard from './friend-card';




function Members() {
  return (
    <div>
       <div className="element-container margin-l2">
        <div className="friend-title list-horizontal-subtitle">
             Members of {TesterGroupData.name}
          </div>
        

        <div className="friend-search">
          <form>
            <input type="text" className="friend-search" placeholder="Search Group"/>
          </form>      
          </div>

          </div>

        <FriendCard />

        



       
       
    </div>
    
  );
}
export default Members;