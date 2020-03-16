import React from 'react';

import PhotoTile from '../ProfilePage/ProfilePhotoTile';
import TesterGroupData from '../DatabaseProfiles/database-group-tester';





function GroupPhotos() {
  return (
    <div>
       <div className="element-container margin-l2">
        <div className="photos-title list-horizontal-subtitle">
             {TesterGroupData.name} Photo Gallery
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
export default GroupPhotos;