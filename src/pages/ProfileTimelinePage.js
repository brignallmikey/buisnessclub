import React from 'react';
import ProfilePost from '../components/ProfilePost';
import ProfileInfo from '../components/ProfileInfo';
import Favouriteshort from '../components/ProfileFavouriteShort';
import LatestPhotos from '../components/ProfileLatestPhotos.js';
import BlogPosts from '../components/ProfileBlogPosts';
import Profile from '../layout/Profile';


function ProfileTimelinePage() {
  return (
    <Profile>
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
    </Profile>
  );
}
export default ProfileTimelinePage;
