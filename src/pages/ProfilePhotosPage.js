import React from 'react';

import { TesterUserData } from "../assets/databaseprofiles/database-profile-tester";
import PhotoTile from '../components/ProfilePhotoTile';

import Profile from '../layout/Profile';



function ProfilePhotosPage() {
  return (
    <Profile>
    <div className="container-multi">
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

    </Profile>
    
  );
}
export default ProfilePhotosPage;