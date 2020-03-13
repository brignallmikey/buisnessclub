import React from 'react';
import './CSS/friends.css';
import TesterUserData from './database-profile-tester';
import FriendCard from './friend-card';




function Friends() {
  return (
    <div>
       <div className="element-container margin-l2">
        <div className="friend-title list-horizontal-subtitle">
             {TesterUserData.slug}'s friends
          </div>
        

        <div className="friend-search">
          <form>
            <input type="text" className="friend-search" placeholder="Search Friends"/>
          </form>      
          </div>

          </div>

        <FriendCard />

        



       
       
    </div>
    
  );
}
export default Friends;