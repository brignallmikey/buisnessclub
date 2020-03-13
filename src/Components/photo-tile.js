import React from 'react';
import './CSS/photos.css';
import TesterUserData from './database-profile-tester';
import Interactions from './interactions';





function PhotoTile() {
  return (
    <div className="photo-tile">

        <div className="tile-image" />

        <div className="name-card">
            My New Computer
        </div>
        <div className="location-card">
            Last added to: [insert post time]
        </div>

        < Interactions />
       

        

        



       
       
    </div>
    
  );
}
export default PhotoTile;