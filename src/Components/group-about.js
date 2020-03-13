import React from 'react';
import GroupInfo from './group-info';
import Favouritelong from './favourite-long';
import EducationEmployment from './education-employment';



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