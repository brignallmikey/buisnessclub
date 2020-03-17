import React from 'react';
import { Link } from "react-router-dom";

import { TesterGroupData } from '../assets/databaseprofiles/database-group-tester';
import Layout from '../layout/Layout';

function GroupHeader() {
  return (
    <Layout>
    <div className="container">
      <div className="profile-page-header">
      <img src={TesterGroupData.cover_photo} className="cover-photo" alt="cp" />
        
        {/*profile tabs left*/}
        
        <div className="profile-banner">
          
            <div className="pagetabsGL">
            <Link to="/groups/profile" onClick={() => console.log("Feed")}>
              Feed
            </Link>
              </div>
            
        
              <div className="pagetabsGL">
            <Link to="/groups/profile/about" onClick={() => console.log("About")}>
              About
            </Link>
              </div>

{/*profilename*/}

         <div className="name">
         {TesterGroupData.name}
            </div>
          <div className="location">
            {TesterGroupData.bio}
            </div>

{/*profile tabs right*/}

            <div className="pagetabsGR">
            <Link to="/groups/profile/members" onClick={() => console.log("Members")}>
              Members
            </Link>
              </div>

              <div className="pagetabsGR">
            <Link to="/groups/profile/photos" onClick={() => console.log("Photos")}>
              Photos
            </Link>
              </div>
        </div>  
        
    
    <img src={TesterGroupData.avatar_url_124} className="profile-picture" alt="pp" />
    

  </div>
</div>
</Layout>
    
  );
}
export default GroupHeader;
