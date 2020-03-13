import React from 'react';
import './CSS/photos.css';
import TesterUserData from './database-profile-tester';
import PhotoTile from './photo-tile';





function Photos() {
  return (
    <div>
       <div className="element-container margin-l2">
        <div className="photos-title list-horizontal-subtitle">
             {TesterUserData.slug}'s Photo Gallery
             </div>
        <div className="album-button">
            Create Album
        </div>

        <div className="add-photos">
            Add Photos
        </div>    

          </div>
          

<PhotoTile />
        

        



       
       
    </div>
    
  );
}
export default Photos;