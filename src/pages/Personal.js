import React from "react";
import { Link } from "react-router-dom";

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';

import Layout from "../layout/Layout";

function Personal() {
  return (
    
           <div>
            <form>
              <input type="text" className="signup-input" placeholder="{TesterUserData.name}" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="{TesterUserData.email}" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="{TesterUserData.phone}" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="{TesterUserData.website}" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="{TesterUserData.birthday}" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="{TesterUserData.location}" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="{TesterUserData.gender}" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="{TesterUserData.occupation}" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="{TesterUserData.facebook}" />
            </form>

            <form>
              <input type="text" className="signup-input" placeholder="{TesterUserData.twitter}" />
            </form>

            <div className="button-large-r">
              Submit
            </div>
            </div>

     
    
  );
}
export default Personal;
