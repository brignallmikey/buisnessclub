import React from 'react';
import './CSS/profile.css';
import { TesterGroupData } from './database-group-tester';
import GroupHeader from './group-header';
import GroupTimeline from './group-timeline';
import GroupAbout from './group-about';
import Members from './members';
import GroupPhotos from './group-photos';
import Videos from './videos';


function GroupPage() {
  return (
    <div className="container">
    
    <GroupHeader />
    <GroupAbout />
    
    
    {/*Options: Posts on Group (GroupTimeline), Group Information (GroupAbout), Members of the Group (Members), Photos in the group (GroupPhotos)*/}
    </div>      
      
    
  );
}
export default GroupPage;
