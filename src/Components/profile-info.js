import React from 'react';


function ProfileInfo() {
  return (
    <div className="App">
      <div className="element-container">
       <div className="element-title">
          Personal Information
        </div>
        <div className="element-content">   
          <div className="element-section"> 
          <span className="list-horizontal-subtitle">
              Gender
            </span>
            <span className="list-horizontal-text">
              Male
            </span>     
            </div>     

          <div className="element-section">
            <span className="list-horizontal-subtitle">
              Sex
            </span>
            <span className="list-horizontal-text">
              None
            </span>
          </div>

          <div className="element-section">
            <span className="list-horizontal-subtitle">
              Star sign
            </span>
            <span className="list-horizontal-text">
              *
            </span>
          </div>

          <div className="element-section">
            <span className="list-horizontal-subtitle">
              Preferred State
            </span>
            <span className="list-horizontal-text">
              Drunk and hammered and sleepy 
            </span>
          </div>

          <div className="element-section">
            <span className="list-horizontal-subtitle">
              Birthday
            </span>
            <span className="list-horizontal-text">
              12/02/2020
            </span>
          </div>

          <div className="element-section">
            <span className="list-horizontal-subtitle">
              Hometown
            </span>
            <span className="list-horizontal-text">
              Edinburgh
            </span>
          </div>

          <div className="element-section">
            <span className="list-horizontal-subtitle">
              Occupation
            </span>
            <span className="list-horizontal-text">
              Web... designer?
            </span>
          </div>
               
          </div>
          {/*content pulled from another file*/}
        </div>
      </div>
  
  );
}
export default ProfileInfo;
