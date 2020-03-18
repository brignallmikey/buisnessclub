import React from "react";

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';

import ProfilePost from "../components/ProfilePost";
import Layout from "../layout/Layout";

function SignUp() {
  return (
    <Layout>
      <div className="container">
        <div className="right-50">
          <div className="element-container">
            <div className="signup-title">
          Welcome to BuisnessClub!
              </div>

            <div className="signup-info">
              Name
            <form>
              <input type="text" className="signup-input" placeholder="Full Name" />
            </form>
          </div>

          <div className="signup-info">
              Date of birth
            <form>
              <input type="text" className="signup-input" placeholder="dd/mm/yyyy" />
            </form>
          </div>

          <div className="signup-info">
              Email Address
            <form>
              <input type="text" className="signup-input" placeholder="example@buisnessclub.com" />
            </form>
          </div>

          <div className="signup-info">
              Phone Number
            <form>
              <input type="text" className="signup-input" placeholder="+44 7000000000" />
            </form>
          </div>

          <div className="signup-info">
              Password
            <form>
              <input type="password" className="signup-input" placeholder="Minimum 8 characters, 1 capital, 1 number" />
            </form>
          </div>

          <div className="signup-info">
              Confirm Password
            <form>
              <input type="password" className="signup-input" placeholder="Re-enter password" />
            </form>
          </div>

          <div className="button-large-r">
            Submit
          </div>

          

         </div>



        </div>
      </div>
    </Layout>
  );
}
export default SignUp;
