import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './Components/CSS/main.css';

import ProfilePage from "./Components/Assets/ProfilePage/ProfilePage";
import About from "./Components/Assets/ProfilePage/Pages/ProfileAboutPage";

import Newsfeed from "./Components/Assets/Newsfeed";
import GroupFriend from "./Components/Assets/GroupPage/GroupFriend";
import GroupPage from "./Components/Assets/GroupPage/GroupPage";

function App() {
  return (
    <div className="background">
      {/* <ProfilePage /> */}
      <Router>
        <Route exact path="/" render={props => <Newsfeed {...props} />} />
        <Route exact path="/profile/" render={props => <ProfilePage {...props} />} />
        <Route exact path="/profile/about" render={props => <About {...props} />} />

        <Route exact path="/groups" render={props => <GroupPage {...props} />} />

      </Router>

      

      {/* Options: Profile Page (ProfilePage), Newsfeed (Newsfeed), Page of Groups (FriendGroup), Group Profile (GroupPage) */}
    </div>
  );
}
export default App;
