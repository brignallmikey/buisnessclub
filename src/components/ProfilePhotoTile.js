import React from 'react';

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';
import Interactions from './interactions';





function ProfilePhotoTile() {
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
export default ProfilePhotoTile;