import React from 'react';
import ProfilePost from "../components/ProfilePost";
import GroupInfo from '../components/GroupInfo';
import GroupMembers from '../components/GroupMembersShort';
import LatestPhotos from '../components/ProfileLatestPhotos.js';
import BlogPosts from '../components/ProfileBlogPosts';

import GroupProfile from '../layout/ProfileGroup';


function GroupTimeline() {
  return (
    <GroupProfile>
    <div className="container-multi">
    <div className="left-column">
      <GroupInfo />
      
      </div>

    <div className="right-column">
      <GroupMembers /> 
      <LatestPhotos />
      </div>
    
    <div className="middle-column">
    <ProfilePost />
    <ProfilePost />
    <ProfilePost />
    <ProfilePost />
       
    </div>
    </div>
    </GroupProfile>
  );
}
export default GroupTimeline;
