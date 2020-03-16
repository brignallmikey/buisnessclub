import React from 'react';

import TesterUserData from './DatabaseProfiles/database-profile-tester';




function FriendCard() {
  return (
    <div>
       

        <div className="friend-box element-container">
            <div className="cover-card" />
            <div className="profile-card" />
            
            <div className="name-card">
              Forename Surname
            </div>
            
            <div className="location-card">
              Location
            </div>

            <div className="section-1">  

            <div className="left-33">
              <div className="name-card">
                #
              </div>
              <div className="location-card">
                Friends
              </div>
            </div>

             <div className="left-33">
              <div className="name-card">
                #
              </div>
              <div className="location-card">
                Pictures
              </div>
            </div>

            <div className="left-33">
              <div className="name-card">
                #
              </div>
              <div className="location-card">
                Videos
              </div>
            </div>

        <div className="left-50">
          <div className="friend-request-card"/>
        </div>
            
        <div className="right-50">
          <div className="message-card"/>
        </div>  
        </div>  

      <div className="section-2">

        <div className="location-card">
          Yada yada yada this is some info about me that will be replaced with the 'about' information as soon as I know how.
        </div>

        <div className="friends-since-card">
          Friends Since
        </div>

        <div className="name-card">
          Date of friending
        </div>
      </div>

      


        <div className="left-50">
        <div className="click-section-l" />
           </div>   
           <div className="right-50">
        <div className="click-section-r" />
           </div>   

        </div>
     
       
    </div>
    
  );
}
export default FriendCard;