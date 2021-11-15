import React from "react";
import "./AccountStyle.css";
import edit3 from "./Assets/edit-3.png";
import Left from "./Assets/Left.png";
import header from "./Assets/header.png";

const AccountPage = () => {
  return (
    <>
      {/* //account */}
      <div className="Container1">
        <div className="account-container">
          <div className="profile">
            <img src={header} alt="profile picture" className="picture-account" />
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
