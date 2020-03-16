import React from 'react';
import GroupInfo from './GroupInfo';
import Favouritelong from '../ProfilePage/ProfileFavouriteFull';
import EducationEmployment from '../ProfilePage/ProfileEducationEmployment';



function GroupAbout() {
  return (
    <div>
    <div className="left-33">
        <GroupInfo />
  

    </div>

    <div className="right-66">
        <Favouritelong/>
        <EducationEmployment />


    </div>
    </div>
  );
}
export default GroupAbout;