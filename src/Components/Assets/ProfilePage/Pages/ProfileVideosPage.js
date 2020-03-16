import React from 'react';

import TesterUserData from '../../DatabaseProfiles/database-profile-tester';
import VideoTile from '../ProfileVideoTile';





function ProfileVideosPage() {
  return (
    <div>
       <div className="element-container margin-l2">
        <div className="photos-title list-horizontal-subtitle">
             {TesterUserData.slug}'s Videos
             </div>
        
           

        <div className="album-button">
            Add Videos
        </div>    

          </div>
          

<VideoTile />
        

        



       
       
    </div>
    
  );
}
export default ProfileVideosPage;