import React from 'react';


function GroupInfo() {
  return (
    <div className="App">
      <div className="element-container">
       <div className="element-title">
          Group Information
        </div>
        <div className="element-content">   
          <div className="element-section"> 
          <span className="list-horizontal-subtitle">
              Created
            </span>
            <span className="list-horizontal-text">
              2020
            </span>     
            </div>     

          <div className="element-section">
            <span className="list-horizontal-subtitle">
              Purpose
            </span>
            <span className="list-horizontal-text">
              Demonstrating the fact that it works
            </span>
          </div>

          <div className="element-section">
            <span className="list-horizontal-subtitle">
              Members
            </span>
            <span className="list-horizontal-text">
              1
            </span>
          </div>

          
               
          </div>
          {/*content pulled from another file*/}
        </div>
      </div>
  
  );
}
export default GroupInfo;
