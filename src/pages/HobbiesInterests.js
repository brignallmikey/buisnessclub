import React from "react";
import { Link } from "react-router-dom";

import { TesterUserData } from "../assets/databaseprofiles/database-profile-micb";

import Layout from "../layout/Layout";

function HobbiesInterests() {
  return (
    <Layout>
      <div className="container">
        <button
          $
          {...function createTextArea() {
            console.log("Infocreation");
            var textarea = document.createElement("textarea");
            textarea.statusupdate = document.getElementsByClassName(
              "statusupdate"
            ).value;

            document.body.appendChild(textarea);
          }}
          className="button-small"
          onClick="createTextArea()"
        >
          Create new element !
        </button>
        <br />
        <br />
        <textarea className="status-update" placeholder="hi" />
        <br />
        <br />
      </div>
    </Layout>
  );
}
export default HobbiesInterests;
