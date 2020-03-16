import React from 'react';
import ProfilePost from "\/ProfilePage/ProfilePost";
import GroupInfo from './GroupInfo';
import GroupMembers from './GroupMembersShort';
import LatestPhotos from '../ProfilePage/ProfileLatestPhotos.js';
import BlogPosts from '../ProfilePage/ProfileBlogPosts';


function GroupTimeline() {
  return (
    <div>
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
  );
}
export default GroupTimeline;
