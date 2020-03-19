import React, { Component } from "react";

import { TesterUserData } from "../assets/databaseprofiles/database-profile-micb";

class HeaderOut extends Component {
  render() {
    return (
      <div className="login">
        <div className="left-33">
          <form>
            <input
              type="text"
              className="header-signup-input"
              placeholder="example@buisnessclub.com"
            />
          </form>
        </div>

        <div className="center-33">
          <form>
            <input
              type="text"
              className="header-signup-input"
              placeholder="Password"
            />
          </form>
        </div>

        <div className="right-33">
          <div className="button-small">Log In</div>
        </div>
      </div>
    );
  }
}
export default HeaderOut;
