import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/main.css';

import Timeline from "./pages/ProfileTimelinePage";
import About from "./pages/ProfileAboutPage";

import Newsfeed from "./pages/Newsfeed";

import GroupPage from "./pages/GroupPage";


function App() {
  return (
    <div className="background">
      {/* <ProfilePage /> */}
      <Router>
        <Route exact path="/" render={props => <Newsfeed {...props} />} />
        <Route exact path="/profile/" render={props => <Timeline {...props} />} />
        <Route exact path="/profile/about" render={props => <About {...props} />} />

        <Route exact path="/groups" render={props => <GroupPage {...props} />} />

      </Router>

      

      {/* Options: Profile Page (ProfilePage), Newsfeed (Newsfeed), Page of Groups (FriendGroup), Group Profile (GroupPage) */}
    </div>
  );
}
export default App;
