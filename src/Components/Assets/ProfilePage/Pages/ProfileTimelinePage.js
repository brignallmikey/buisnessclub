import React from 'react';
import ProfilePost from '../ProfilePost';
import ProfileInfo from '../ProfileInfo';
import Favouriteshort from '../ProfileFavouriteShort';
import LatestPhotos from '../ProfileLatestPhotos.js';
import BlogPosts from '../ProfileBlogPosts';


function ProfileTimelinePage() {
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
export default ProfileTimelinePage;
