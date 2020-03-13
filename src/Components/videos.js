import React from 'react';
import './CSS/photos.css';
import TesterUserData from './database-profile-tester';
import VideoTile from './video-tile';





function Videos() {
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
export default Videos;