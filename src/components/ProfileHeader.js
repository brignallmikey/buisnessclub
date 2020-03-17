import React from 'react';
import { Link } from "react-router-dom";

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';
import Layout from '../layout/Layout';

function ProfileHeader() {
  return (

  <Layout>
    <div className="container">
      <div className="profile-page-header">
      <img src={TesterUserData.cover_photo} className="cover-photo" alt="cp" />
        
        {/*profile tabs left*/}
        
        <div className="profile-banner">
          
            <div className="pagetabsL">
            <Link to="/profile" onClick={() => console.log("Timeline")}>
              Timeline
            </Link>
              </div>
            
        
            <div className="pagetabsL">
            <Link to="/profile/about" onClick={() => console.log("About")}>
              About
            </Link>
            </div>
          
          
            <div className="pagetabsL">
            <Link to="/profile/friends" onClick={() => console.log("Friends")}>
              Friends
            </Link>
            </div>

{/*profilename*/}

         <div className="name" >
         {TesterUserData.name}
            </div>
          <div className="location">
            {TesterUserData.location}
            </div>

{/*profile tabs right*/}

          <div className="buttons">
            <div className="notification"></div>
            <div className="message"></div>
            <div className="friend-request"></div>
            </div>

            <div className="pagetabsR">
            <Link to="/profile/videos" onClick={() => console.log("Videos")}>
              Videos
            </Link>
            </div>

            <div className="pagetabsR">
            <Link to="/profile/photos" onClick={() => console.log("Photos")}>
              Photos
            </Link>
            </div>
        </div>  
        
    
    <img src={TesterUserData.avatar_url_124} className="profile-picture" alt="pp" />
    

  </div>
</div>
</Layout>
    
  );
}
export default ProfileHeader;
