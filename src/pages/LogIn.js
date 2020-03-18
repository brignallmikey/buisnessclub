import React from "react";
import { Link } from "react-router-dom";

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';

import Layout from "../layout/Layout";

function LogIn() {
  return (
    <Layout>
      <div className="container">
        <div className="right-50">
          <div className="element-container">
            <div className="signup-title">
         BuisnessClub Sign In
              </div>

            <div className="signup-info">
              Email Address
            <form>
              <input type="text" className="signup-input" placeholder="example@buisnessclub.com" />
            </form>
          </div>

          <div className="signup-info">
              Password
            <form>
              <input type="password" className="signup-input" placeholder="Enter password here" />
            </form>
          </div>

        
          <div className="button-large-r">
            Submit
          </div>

          <Link to="/signup" onClick={() => console.log("SignUp")}>
              <div className="button-large-l">
              New User? Click here!
              </div>
            </Link>
          
          
         

          

          

         </div>



        </div>
      </div>
    </Layout>
  );
}
export default LogIn;
