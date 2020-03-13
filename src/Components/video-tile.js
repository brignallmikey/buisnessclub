import React from 'react';
import './CSS/photos.css';
import TesterUserData from './database-profile-tester';
import Interactions from './interactions';





function VideoTile() {
  return (
    <div className="photo-tile">

        <div className="tile-image" />

        <div className="name-card">
            A tour round the server room
        </div>
        <div className="location-card">
            Uploaded on [insert time]
        </div>

        < Interactions />
       

        

        



       
       
    </div>
    
  );
}
export default VideoTile;