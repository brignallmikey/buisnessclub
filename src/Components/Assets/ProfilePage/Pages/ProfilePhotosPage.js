import React from 'react';

import TesterUserData from '../../DatabaseProfiles/database-profile-tester';
import PhotoTile from '../ProfilePhotoTile';





function ProfilePhotosPage() {
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
export default ProfilePhotosPage;