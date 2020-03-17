import React from 'react';

import TesterUserData from '../assets/databaseprofiles/database-profile-tester';
import GroupCard from '../components/GroupCard';
import Layout from '../layout/Layout';




function GroupFriend() {
  return (
    <Layout>
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
    </Layout>
  );
}
export default GroupFriend;