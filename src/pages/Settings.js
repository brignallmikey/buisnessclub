import React from "react";

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';

import ProfilePost from "../components/ProfilePost";
import Layout from "../layout/Layout";

function Settings() {
  return (
    <Layout>
      <div className="container">
          <div className="element-container">
            <div className="signup-title">
          Settings
              </div>

            <div className="signup-info">
              Name
              </div>

            <div className="signup-info">
              Password
              </div>

            <div className="signup-info">
              Email Address
              </div>

            <div className="signup-info">
              Phone Number
              </div>

            <div className="signup-info">
              Location
              </div>

                
              

          

         </div>



        
      </div>
    </Layout>
  );
}
export default Settings;
