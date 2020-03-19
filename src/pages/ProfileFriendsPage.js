import React from "react";

import { TesterUserData } from "../assets/databaseprofiles/database-profile-tester";
import FriendCard from "../components/FriendCard";

import Profile from "../layout/Profile";

function ProfileFriendsPage() {
  return (
    <Profile>
      <div className="container-multi">
        <div className="element-container">
          <div className="friend-title list-horizontal-subtitle">
            {TesterUserData.slug}'s friends
          </div>

          <div className="friend-search">
            <form>
              <input
                type="text"
                className="friend-search"
                placeholder="Search Friends"
              />
            </form>
          </div>
        </div>

        <FriendCard />
      </div>
    </Profile>
  );
}
export default ProfileFriendsPage;
