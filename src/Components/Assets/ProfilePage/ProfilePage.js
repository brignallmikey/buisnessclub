import React from "react";

import { TesterUserData } from "../DatabaseProfiles/database-profile-tester";
import Profileheader from "./ProfileHeader";
import Timeline from "./Pages/ProfileTimelinePage";
import About from "./Pages/ProfileAboutPage";
import Friends from "./Pages/ProfileFriendsPage";
import Photos from "./Pages/ProfilePhotosPage";
import Videos from "./Pages/ProfileVideosPage";
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
