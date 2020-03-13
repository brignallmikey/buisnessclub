import React from 'react';
import ProfilePost from './profile-post';
import ProfileInfo from './profile-info';
import Favouriteshort from './favourite-short';
import LatestPhotos from './latest-photos.js';
import BlogPosts from './blog-posts';


function Timeline() {
  return (
    <div>
    <div className="left-column">
      <ProfileInfo />
      <BlogPosts />
      </div>

    <div className="right-column">
      <Favouriteshort /> 
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
export default Timeline;
