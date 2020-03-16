import React from 'react';
import GroupInfo from '../components/GroupInfo';
import Favouritelong from '../components/ProfileFavouriteFull';
import EducationEmployment from '../components/ProfileEducationEmployment';



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