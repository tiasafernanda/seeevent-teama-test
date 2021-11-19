import React from "react";
import "./AccountStyle.css";
import edit3 from "./Assets/edit-3.png";
import Left from "./Assets/Left.png";
import header from "./Assets/header.png";
import { formatProfileName } from "../helper/FormatProfileName.js";

const AccountPage = () => {
  const first_name = dataEvent && dataEvent.user.first_name;
  const last_name = dataEvent && dataEvent.user.last_name;
  const errorImage = true;
  return (
    <>
      {/* //account */}
      <div className="Container1">
        <div className="account-container">
          <div className="profile">
            {errorImage ? <div className="picture-account">{dataEvent && formatProfileName(first_name, last_name)}</div> : <img src={header} alt="profile picture" className="picture-account" />}
            <div className="profile-container">
              <h4>This is Profile</h4>
              <p>ini alamat email</p>
            </div>
          </div>
        </div>
        {/* //button */}
        <div className="btn-container">
          <button className="edit-btn">
            <img src={edit3} className="edit" />
            <div className="edit">Edit Profile</div>
          </button>
          <button className="signout-btn">
            <img src={Left} />
            <div className="signout">Sign out</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
