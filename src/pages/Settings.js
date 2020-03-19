import React, { useState } from "react";
import { Link } from "react-router-dom";

import Personal from "./Personal";
import Account from "./Account";
import Password from "./Password";
import HobbiesInterests from "./HobbiesInterests";
import EducationEmployment from "./EducationEmployment";

import { TesterUserData } from "../assets/databaseprofiles/database-profile-micb";

import Layout from "../layout/Layout";

const Settings = () => {
  const [settingsMenu, setSettingsMenu] = useState("personal");
  return (
    <Layout>
      <div className="container">
        <div className="element-container">
          <div className="signup-title">Profile Settings</div>

          <div className="left-column">
            <div
              className={`settings-title ${
                settingsMenu === "personal" ? "active" : ""
              }`}
              onClick={() => setSettingsMenu("personal")}
              tabIndex={0}
              onKeyDown={() => setSettingsMenu("personal")}
            >
              Personal Information
            </div>

            <div
              className={`settings-title ${
                settingsMenu === "account" ? "active" : ""
              }`}
              onClick={() => setSettingsMenu("account")}
              tabIndex={0}
              onKeyDown={() => setSettingsMenu("account")}
            >
              Account Settings
            </div>

            <div
              className={`settings-title ${
                settingsMenu === "password" ? "active" : ""
              }`}
              onClick={() => setSettingsMenu("password")}
              tabIndex={0}
              onKeyDown={() => setSettingsMenu("password")}
            >
              Change Password
            </div>

            <div
              className={`settings-title ${
                settingsMenu === "hobbiesinterests" ? "active" : ""
              }`}
              onClick={() => setSettingsMenu("hobbiesinterests")}
              tabIndex={0}
              onKeyDown={() => setSettingsMenu("hobbiesinterests")}
            >
              Hobbies & Interests
            </div>

            <div
              className={`settings-title ${
                settingsMenu === "educationemployment" ? "active" : ""
              }`}
              onClick={() => setSettingsMenu("educationemployment")}
              tabIndex={0}
              onKeyDown={() => setSettingsMenu("educationemployment")}
            >
              Education & Employment
            </div>
          </div>

          <div className="right-66">
            <div className="settings-placeholder">
              {settingsMenu === "personal" && <Personal />}
              {settingsMenu === "account" && <Account />}
              {settingsMenu === "password" && <Password />}
              {settingsMenu === "hobbiesinterests" && <HobbiesInterests />}
              {settingsMenu === "educationemployment" && (
                <EducationEmployment />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Settings;
