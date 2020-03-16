import React, { Component } from "react";

import { TesterUserData } from '../assets/databaseprofiles/database-profile-micb';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="page-title">PageTitle</div>

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

          {/*profile section name-quote-image*/}

          <div className="profile">
            <div className="profile-status"></div>
            <img src={TesterUserData.avatar_url_40} className="profile-image" />
            <div className="profile-name">{TesterUserData.name}</div>
            <div className="profile-quote">Ye shall be mine... or something.</div>
          </div>

          {/*control bar notification-message-friendrequest*/}

          <div className="yellow-circle"></div>
          <div className="purple-circle"></div>
          <div className="blue-circle"></div>

          {/*friend request dropdown*/}

          <div className="box-fr">
            <div className="arrow"></div>
            <div className="box-content">
              <div className="dropdown-menu">
                <span className="title-text">FRIEND REQUESTS</span>
                <a className="menu-text" href="#">
                  SETTINGS
                </a>
                <a className="menu-text" href="#">
                  FIND FRIENDS
                </a>
              </div>
              <div className="check-all-fr">Check all friend requests</div>
            </div>
          </div>

          {/*message box dropdown*/}

          <div className="box-m">
            <div className="arrow"></div>
            <div className="box-content">
              <div className="dropdown-menu">
                <span className="title-text">CHAT/MESSAGES</span>
                <a className="menu-text" href="#">
                  SETTINGS
                </a>
                <a className="menu-text" href="#">
                  MARK ALL AS READ
                </a>
              </div>
              <div className="check-all-m">See all messages</div>
            </div>
          </div>

          {/*notificiation box drpodown*/}

          <div className="box-n">
            <div className="arrow"></div>
            <div className="box-content">
              <div className="dropdown-menu">
                <span className="title-text">Notifications</span>
                <a className="menu-text" href="#">
                  SETTINGS
                </a>
                <a className="menu-text" href="#">
                  MARK ALL AS READ
                </a>
              </div>
              <div className="check-all-n">See all notifications</div>
            </div>
          </div>

          {/*profile box dropdown*/}

          <div className="profile-box">
            <div className="arrow-profile"></div>
            <div className="content">
              <div className="title-menu">
                <div className="title-text">YOUR ACCOUNT</div>
              </div>
              <p>
                <a className="account" href="#">
                  Profile Settings
                </a>{" "}
              </p>
              <p>
                <a className="account" href="#">
                  Create Favourite Page
                </a>{" "}
              </p>
              <p>
                <a className="account" href="#">
                  Log Out
                </a>{" "}
              </p>

              <div className="title-menu-double">
                <div className="title-text">CHAT SETTINGS</div>
              </div>

              <div className="chat-settings-overlay">
                <a href="#">
                  <div className="online"></div>
                  <div className="chat-settings">Online</div>
                </a>
              </div>

              <div className="chat-settings-overlay">
                <a href="#">
                  <div className="away"></div>
                  <div className="chat-settings">Away</div>
                </a>
              </div>

              <div className="chat-settings-overlay">
                <a href="#">
                  <div className="disconnected"></div>
                  <div className="chat-settings">Disconnected</div>
                </a>
              </div>

              <div className="chat-settings-overlay">
                <a href="#">
                  <div className="invisible"></div>
                  <div className="chat-settings">Invisible</div>
                </a>
              </div>

              <div className="title-menu-double">
                <div className="title-text">CUSTOM STATUS</div>
              </div>

              <div className="custom-status">
                <form>
                  <input type="text" className="custom-status" placeholder="New status" />
                </form>
              </div>

              <div className="title-menu-double">
                <div className="title-text">ABOUT</div>
              </div>

              <p>
                <a className="account" href="#">
                  Terms and Conditions
                </a>
              </p>
              <p>
                <a className="account" href="#">
                  FAQs
                </a>{" "}
              </p>
              <p>
                <a className="account" href="#">
                  Careers
                </a>
              </p>
              <p>
                <a className="account" href="#">
                  Contact
                </a>
              </p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
