import React from 'react';

import PhotoTile from '../components/ProfilePhotoTile';
import TesterGroupData from '../assets/databaseprofiles/database-group-tester';

import GroupProfile from '../layout/ProfileGroup';



function GroupPhotos() {
  return (
    <GroupProfile>
    <div className="container-multi">
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

</GroupProfile>
    
  );
}
export default GroupPhotos;