import React from 'react';
import './CSS/group-header.css';
import { TesterGroupData } from './database-group-tester';


function GroupHeader() {
  return (
    <div className="App">
      <div className="profile-page-header">
      <img src={TesterGroupData.cover_photo} className="cover-photo" alt="cp" />
        
        {/*profile tabs left*/}
        
        <div className="profile-banner">
          <a href="#">
            <div className="pagetabsL">
            Feed
              </div>
            </a>
        
          <a href="#">
            <div className="pagetabsL">
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
            <div className="pagetabsR">
            People
              </div>
            </a>
            <a href="#">
              <div className="pagetabsR">
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
