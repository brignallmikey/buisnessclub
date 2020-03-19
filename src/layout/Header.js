import React, { Component } from "react";

import HeaderIn from "./HeaderIn";
import HeaderOut from "./HeaderOut";

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="page-title"/>

          {/*searchbar*/}

          <div>
            <form>
              <input type="text" className="search-bar" placeholder="Search people and places here" />
            </form>
          </div>

          {/*search friends link*/}
          <span className="search-button" />
          <a href="#" className="find-friends">
            Find Friends
          </a>

          <HeaderOut />

          
        </header>
      </div>
    );
  }
}
export default Header;
