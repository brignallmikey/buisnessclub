import React from "react";
import "./CSS/profile.css";
import { TesterUserData } from "./database-profile-tester";

import ProfilePost from "./profile-post";
import Layout from "../layout";

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
