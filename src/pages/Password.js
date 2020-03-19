import React from "react";
import { Link } from "react-router-dom";

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';

import Layout from "../layout/Layout";

function Password() {
  return (
    
           <div>
            <form>
              <input type="text" className="signup-input" placeholder="Current Password" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="New Password - minimum 8 characters, 1 captial, 1 number" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="Confirm New Password" />
            </form>

            

            <div className="button-large-r">
              Submit
            </div>
            </div>

     
    
  );
}
export default Password;
