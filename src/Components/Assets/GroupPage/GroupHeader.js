import React from 'react';

import { TesterGroupData } from '../DatabaseProfiles/database-group-tester';


function GroupHeader() {
  return (
    <div className="App">
      <div className="profile-page-header">
      <img src={TesterGroupData.cover_photo} className="cover-photo" alt="cp" />
        
        {/*profile tabs left*/}
        
        <div className="profile-banner">
          <a href="#">
            <div className="pagetabsGL">
            Feed
              </div>
            </a>
        
          <a href="#">
            <div className="pagetabsGL">
            About
              </div>
            </a>

{/*profilename*/}

         <div className="name">
         {TesterGroupData.name}
            </div>
          <div className="location">
            {TesterGroupData.bio}
            </div>

{/*profile tabs right*/}

            <a href="#">
            <div className="pagetabsGR">
            People
              </div>
            </a>
            <a href="#">
              <div className="pagetabsGR">
                Photos
                </div>
              </a>
        </div>  
        
    
    <img src={TesterGroupData.avatar_url_124} className="profile-picture" alt="pp" />
    

  </div>
</div>
    
  );
}
export default GroupHeader;
