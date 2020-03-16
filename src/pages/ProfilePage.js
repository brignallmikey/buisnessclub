import React from "react";

import { TesterUserData } from "../assets/databaseprofiles/database-profile-tester";
import Profileheader from "../components/ProfileHeader";
import Timeline from "./ProfileTimelinePage";
import About from "./ProfileAboutPage";
import Friends from "./ProfileFriendsPage";
import Photos from "./ProfilePhotosPage";
import Videos from "./ProfileVideosPage";
import Layout from "../layout/Layout";

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
