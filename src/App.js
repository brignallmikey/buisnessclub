import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/main.css';

import Newsfeed from "./pages/Newsfeed";

import ProfileTimelinePage from "./pages/ProfileTimelinePage";
import ProfileAboutPage from "./pages/ProfileAboutPage";
import ProfileFriendsPage from "./pages/ProfileFriendsPage";
import ProfilePhotosPage from "./pages/ProfilePhotosPage";
import ProfileVideosPage from "./pages/ProfileVideosPage";


import GroupFriend from "./pages/GroupFriend";
import GroupTimeline from "./pages/GroupTimeline";
import GroupAbout from "./pages/GroupAbout";
import GroupMembers from "./pages/GroupMembersPage";
import GroupPhotos from "./pages/GroupPhotos";



function App() {
  return (
    <div className="background">
      {/* <ProfilePage /> */}
      <Router>
        <Route exact path="/" render={props => <Newsfeed {...props} />} />

        <Route exact path="/profile/" render={props => <ProfileTimelinePage {...props} />} />
        <Route exact path="/profile/about" render={props => <ProfileAboutPage {...props} />} />
        <Route exact path="/profile/friends" render={props => <ProfileFriendsPage {...props} />} />
        <Route exact path="/profile/photos" render={props => <ProfilePhotosPage {...props} />} />
        <Route exact path="/profile/videos" render={props => <ProfileVideosPage {...props} />} />

        <Route exact path="/groups" render={props => <GroupFriend {...props} />} />
        <Route exact path="/groups/profile" render={props => <GroupTimeline {...props} />} />
        <Route exact path="/groups/profile/about" render={props => <GroupAbout {...props} />} />
        <Route exact path="/groups/profile/members" render={props => <GroupMembers {...props} />} />
        <Route exact path="/groups/profile/photos" render={props => <GroupPhotos {...props} />} />

      </Router>

      

      {/* Options: Profile Page (ProfilePage), Newsfeed (Newsfeed), Page of Groups (FriendGroup), Group Profile (GroupPage) */}
    </div>
  );
}
export default App;
