import React from 'react';

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';
import Interactions from './interactions';





function ProfileVideoTile() {
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
export default ProfileVideoTile;