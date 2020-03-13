import React from 'react';
import './CSS/about-profile-info.css';



function AboutProfileInfo() {
  return (
    <div>
    <div className="about-box">
       <div className="title25">
          Title
        </div>
        <div className="profile-content">   
          <div className="profile-section"> 
          <span className="profile-item-title">
              Gender
            </span>
            <span className="profile-item-info">
              Male
            </span>     
            </div>     

          <div className="profile-section">
            <span className="profile-item-title">
              Sex
            </span>
            <span className="profile-item-info">
              None
            </span>
          </div>

          <div className="profile-section">
            <span className="profile-item-title">
              Star sign
            </span>
            <span className="profile-item-info">
              *
            </span>
          </div>

          <div className="profile-section">
            <span className="profile-item-title">
              Preferred State
            </span>
            <span className="profile-item-info">
              Drunk and hammered and sleepy
            </span>
          </div>

          <div className="profile-section">
            <span className="profile-item-title">
              Birthday
            </span>
            <span className="profile-item-info">
              12/02/2020
            </span>
          </div>

          <div className="profile-section">
            <span className="profile-item-title">
              Hometown
            </span>
            <span className="profile-item-info">
              Edinburgh
            </span>
          </div>

          <div className="profile-section">
            <span className="profile-item-title">
              Occupation
            </span>
            <span className="profile-item-info">
              Web... designer?
            </span>
          </div>

          <div className="profile-section">
            <span className="profile-item-title">
              Status
            </span>
            <span className="profile-item-info">
              Desperate
            </span>
          </div>

          <div className="profile-section">
            <span className="profile-item-title">
              Joined
            </span>
            <span className="profile-item-info">
              13/02/2020
            </span>
          </div>
               
          </div>
      
          


          </div>
          {/*content pulled from another file*/}
    </div>
  );
}
export default AboutProfileInfo;