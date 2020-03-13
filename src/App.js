import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Components/CSS/element-container.css";

import ProfilePage from "./Components/profile-page";
import Newsfeed from "./Components/newsfeed";
import FriendGroup from "./Components/friend-group";
import GroupPage from "./Components/group-page";

function App() {
  return (
    <div className="background">
      {/* <ProfilePage /> */}
      <Router>
        <Route exact path="/" render={props => <ProfilePage {...props} />} />
        <Route exact path="/news" render={props => <Newsfeed {...props} />} />
        <Route exact path="/groups" render={props => <GroupPage {...props} />} />
      </Router>

      <FriendGroup />

      {/* Options: Profile Page (ProfilePage), Newsfeed (Newsfeed), Page of Groups (FriendGroup), Group Profile (GroupPage) */}
    </div>
  );
}
export default App;
