import React from 'react';
import ProfileInfo from '../components/ProfileInfo';
import Favouritelong from '../components/ProfileFavouriteFull';
import EducationEmployment from '../components/ProfileEducationEmployment';



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