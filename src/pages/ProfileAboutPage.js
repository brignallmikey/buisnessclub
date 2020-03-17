import React from 'react';
import ProfileInfo from '../components/ProfileInfo';
import Favouritelong from '../components/ProfileFavouriteFull';
import EducationEmployment from '../components/ProfileEducationEmployment';

import Profile from '../layout/Profile'



function ProfileAboutPage() {
  return (
    <Profile>
    <div className="container-multi">
    <div className="left-33">
        <ProfileInfo />
  

    </div>

    <div className="right-66">
        <Favouritelong/>
        <EducationEmployment />


    </div>
    </div>
    </Profile>
  );
}
export default ProfileAboutPage;