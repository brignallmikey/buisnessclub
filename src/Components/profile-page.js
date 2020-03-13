import React from "react";
import "./CSS/profile.css";
import { TesterUserData } from "./database-profile-tester";
import Profileheader from "./profile-header";
import Timeline from "./timeline";
import About from "./about";
import Friends from "./friends";
import Photos from "./photos";
import Videos from "./videos";
import Layout from "../layout";

function ProfilePage() {
  return (
    <Layout>
      <div className="container">
        <Profileheader />

        <Timeline />

        {/*Options: Posts by user (Timeline), About the user (About), Users Friends (Friends), Users Photos (Photos), Users Videos (Videos)*/}
      </div>
    </Layout>
  );
}
export default ProfilePage;
