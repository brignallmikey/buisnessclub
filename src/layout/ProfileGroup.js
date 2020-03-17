import React, { Fragment } from "react";
import GroupHeader from "../components/GroupHeader";

const GroupProfile = props => {
  return (
    <Fragment>
      <GroupHeader />
      {props.children}
    </Fragment>
  );
};

export default GroupProfile;
