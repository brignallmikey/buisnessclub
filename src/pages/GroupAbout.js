import React from 'react';
import GroupInfo from '../components/GroupInfo';
import Favouritelong from '../components/ProfileFavouriteFull';
import EducationEmployment from '../components/ProfileEducationEmployment';

import GroupProfile from '../layout/ProfileGroup';
import ProfileTimelinePage from './ProfileTimelinePage';

function GroupAbout() {
  return (
    <GroupProfile>
    <div className="container-multi">
    <div className="left-33">
        <GroupInfo />
  

    </div>

    <div className="right-66">
        <Favouritelong/>
        <EducationEmployment />


    </div>
    </div>
    </GroupProfile>
  );
}
export default GroupAbout;