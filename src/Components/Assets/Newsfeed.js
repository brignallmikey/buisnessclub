import React from "react";

import { TesterUserData } from "./DatabaseProfiles/database-profile-tester";

import ProfilePost from "./ProfilePage/ProfilePost";
import Layout from "./layout/Layout";

function Newsfeed() {
  return (
    <Layout>
      <div className="container">
        <div className="left-column"></div>

        <div className="right-column"></div>

        <div className="middle-column">
          <div className="element-container">
            <textarea className="status-update" placeholder="Share here"></textarea>
            <div className="post">Post</div>
          </div>

          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </div>
      </div>
    </Layout>
  );
}
export default Newsfeed;
