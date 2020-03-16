import React, { Fragment } from "react";
import ProfileHeader from "../components/ProfileHeader";

const Profile = props => {
  return (
    <Fragment>
      <ProfileHeader />
      {props.children}
    </Fragment>
  );
};

export default Profile;
