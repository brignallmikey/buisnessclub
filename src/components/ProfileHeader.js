import React from 'react';

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';
import Layout from '../layout/Layout';

function ProfileHeader() {
  return (

  <Layout>
    <div className="App">
      <div className="profile-page-header">
      <img src={TesterUserData.cover_photo} className="cover-photo" alt="cp" />
        
        {/*profile tabs left*/}
        
        <div className="profile-banner">
          <a href="#">
            <div className="pagetabsL">
            Timeline
              </div>
            </a>
        

          <a href="#">
            <div className="pagetabsL">
            About
              </div>
            </a>
          
          <a href="#">
            <div className="pagetabsL">
            Friends
              </div>
            </a>

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

            <a href="#">
              <div className="pagetabsR">
                Videos
                </div>
              </a>

            <a href="#">
              <div className="pagetabsR">
                Photos
                </div>
              </a>
        </div>  
        
    
    <img src={TesterUserData.avatar_url_124} className="profile-picture" alt="pp" />
    

  </div>
</div>
</Layout>
    
  );
}
export default ProfileHeader;
