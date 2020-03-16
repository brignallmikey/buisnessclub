import React from 'react';
import ProfileInfo from '../ProfileInfo';
import Favouritelong from '../ProfileFavouriteFull';
import EducationEmployment from '../ProfileEducationEmployment';



function ProfileAboutPage() {
  return (
    <div>
    <div className="left-33">
        <ProfileInfo />
  

    </div>

    <div className="right-66">
        <Favouritelong/>
        <EducationEmployment />


    </div>
    </div>
  );
}
export default ProfileAboutPage;