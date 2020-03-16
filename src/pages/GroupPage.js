import React from "react";

import { TesterGroupData } from "../assets/databaseprofiles/database-group-tester";
import GroupHeader from "../components/GroupHeader";
import GroupTimeline from "./GroupTimeline";
import GroupAbout from "./GroupAbout";
import Members from "./GroupMembersPage";
import GroupPhotos from "./GroupPhotos";
import Layout from "../layout/Layout";

function GroupPage() {
  return (
    <Layout>
      <div className="container">
        <GroupHeader />
        <GroupAbout />

        {/*Options: Posts on Group (GroupTimeline), Group Information (GroupAbout), Members of the Group (Members), Photos in the group (GroupPhotos)*/}
      </div>
    </Layout>
  );
}
export default GroupPage;
