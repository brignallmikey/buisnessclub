import React, { Component, useState } from "react";

import SignUp from "../pages/SignUp";
import HeaderIn from "./HeaderIn";
import HeaderOut from "./HeaderOut";

import { TesterUserData } from "../assets/databaseprofiles/database-profile-micb";

const signedIn = false;

const ProfileLogo = () => {
  if (signedIn) {
    return <HeaderIn />;
  } else {
    return <HeaderOut />;
  }
};

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="page-title" />

          {/*searchbar*/}

          <div>
            <form>
              <input
                type="text"
                className="search-bar"
                placeholder="Search people and places here"
              />
            </form>
          </div>

          {/*search friends link*/}
          <span className="search-button" />
          <a href="#" className="find-friends">
            Find Friends
          </a>

          {/* <div
            {...function(loggedin) {
              var document = document.getDocumentById(SignUp);
              var page;
              if ((document = SignUp)) {
                return "HeaderOut";
              } else {
                return "HeaderIn";
              }
              document.getElementById.loggedin = page;
            }}
          ></div> */}

          <ProfileLogo />
        </header>
      </div>
    );
  }
}
export default Header;
