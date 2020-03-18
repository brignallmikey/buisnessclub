import React from "react";
import { Link } from "react-router-dom";

import Personal from "./Personal";

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';

import Layout from "../layout/Layout";

function Settings() {
  return (
    <Layout>
      <div className="container">
          <div className="element-container">
            <div className="signup-title">
              Profile Settings
              </div>

        <div className="left-column">
          <Link to="/profile/settings/personal" onClick={() => console.log("PersonalInfo")}>
            <div className="signup-info">
              Personal Information
              </div>
            </Link>  

          <Link to="/profile/settings/account" onClick={() => console.log("AccountSettings")}>
            <div className="signup-info">
              Account Settings
              </div>
              </Link>  

          <Link to="/profile/settings/password" onClick={() => console.log("PasswordChange")}>
            <div className="signup-info">
              Change Password
              </div>
              </Link>
          <Link to="/profile/settings/hobbiesinterests" onClick={() => console.log("HobbiesInterests")}>
            <div className="signup-info">
              Hobbies and Interests
              </div>
              </Link>
          <Link to="/profile/settings/educationemployment" onClick={() => console.log("EducationEmployment")}>
            <div className="signup-info">
              Education and Employment
              </div>
              </Link>

              </div>

        <div className="right-66">
          <div className="settings-placeholder">
            <Personal/>
            </div>
            </div>      

                
              

          

         </div>



        
      </div>
    </Layout>
  );
}
export default Settings;
