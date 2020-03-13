import React from 'react';
import ProfileInfo from './profile-info';
import Favouritelong from './favourite-long';
import EducationEmployment from './education-employment';



function About() {
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
export default About;