import React from 'react';

import TesterUserData, { TesterGroupData } from '../assets/databaseprofiles/database-group-tester';
import FriendCard from '../components/FriendCard';

import GroupProfile from '../layout/ProfileGroup';


function GroupMembersPage() {
  return (
    <GroupProfile>
    <div className="container-multi">
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

    </GroupProfile>
    
  );
}
export default GroupMembersPage;