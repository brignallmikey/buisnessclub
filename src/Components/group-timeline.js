import React from 'react';
import ProfilePost from './profile-post';
import GroupInfo from './group-info';
import GroupMembers from './group-members';
import LatestPhotos from './latest-photos.js';
import BlogPosts from './blog-posts';


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
