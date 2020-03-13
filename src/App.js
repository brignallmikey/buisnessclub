import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Components/CSS/element-container.css';

import Header from './Components/header';
import Rightsidebar from './Components/right-sidebar';
import Leftsidebar from './Components/left-sidebar';
import ProfilePage from './Components/profile-page';
import Newsfeed from './Components/newsfeed';
import FriendGroup from './Components/friend-group';
import GroupPage from './Components/group-page';



function App() {
  return (
    <div className="background">
    <Header  />
   
    
   <GroupPage />
      
{/*Options: Profile Page (ProfilePage), Newsfeed (Newsfeed), Page of Groups (FriendGroup), Group Profile (GroupPage)*/}
    </div>  

    
    
  );
}
export default App;
