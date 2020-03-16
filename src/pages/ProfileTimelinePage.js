import React from 'react';
import ProfilePost from '../components/ProfilePost';
import ProfileInfo from '../components/ProfileInfo';
import Favouriteshort from '../components/ProfileFavouriteShort';
import LatestPhotos from '../components/ProfileLatestPhotos.js';
import BlogPosts from '../components/ProfileBlogPosts';


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
