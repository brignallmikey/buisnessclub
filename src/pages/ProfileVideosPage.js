import React from 'react';

import { TesterUserData } from "../assets/databaseprofiles/database-profile-tester";
import VideoTile from '../components/ProfileVideoTile';





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