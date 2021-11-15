import React from "react";
import Image from "./../comment/Assets/Image.png";
import "../comment/CommentStyle.css";
import Header from "../comment/Assets/Header.png";
import Calendar from "./Assets/Calendar.png";
import Share from "../comment/Assets/Share.png";
import Save from "../comment/Assets/Save.png";
import Header2 from "../comment/Assets/Header2.png";
import Header1 from "../comment/Assets/Header1.png";
import Header3 from "../comment/Assets/Header3.png";
import Submit from "../comment/Assets/Submit.png";

// mockdata
const mockComment = [
  {
    image: Header2,
    name: "Yosua Ginting",
    date: "4 days ago",
    comment: "Hi, do you have a youtube channel that I can subscribe?",
  },
  {
    image: Header1,
    name: "Agnes Mo",
    date: "4 hours ago",
    comment: "Hi pratur! I like your event, I already sent you an email about my upcoming event, could you hosted my event?",
  },
  {
    image: Header3,
    name: "Agnes Mo",
    date: "4 hours ago",
    comment: "Good Event!",
  },
];
const CommentPage = () => {
  return (
    <>
      {/* title */}
      <div className="Container2">
        <div className="title">
          <h1>ESL Game: English on Your Feet!™</h1>
        </div>
        {/* description */}
        <div className="description">
          <img src={Calendar} alt="calendar" />
          <p className="date-description">SUN, OCT 24 @ 1:15 AM ICT</p>
          <div className="link">Business</div>
        </div>
        <div className="main-image">
          <img src={Image} alt="image" />
        </div>
        {/* details */}
        <div className="detail-container">
          <div className="detail">
            <h3>Details</h3>
            <p className="paragraph">
              Welcome to the Parlor! Let's play English on Your Feet!™
              <br />
              <br />
              <br />
              GET FEEDBACK GAIN CONFIDENCE <br />
              LAYER UP <br /> YOUR ENGLISH!™
              <br />
              <br />
              <br />
              Everyone will have a chance to speak to the "audience" and receive feedback from the audience and our coaches. You don't need to prepare anything--just prepare to have fun and try!
              <br />
              Relax. Layer Up your English!™
              <br />
              We look forward to your participation.
              <br />
              PLEASE READ: 5 Important Notes about this Meetup
              <br />
              1) This event is not a lecture or conversation practice. This is a structured activity in which all attendees are expected to actively participate.
              <br />
              2) Participation in "English on Your Feet!™ is optimal for English language learners at the intermediate level and above.
              <br />
              3) Each member-participant is allowed one guest-participant per meetup as space allows. Guest-participants may attend as guests a maximum of 2 times then must join to continue.
              <br />
              4) If your plans change, please update your RSVP. Repeated "no-shows" will be removed.
              <br />
              5) We use Google Meet. A Google or Gmail account is NOT required to use the link and join our meeting. Before the meetup, please open the link (given to you when you RSVP) and explore the following features on the same device
              that you will use to attend: mute/unmute, chat box, and the additional options menu. (See the PHOTO for visual instructions.)
            </p>
            {/* comment */}
            <div>
              <h3>Comments</h3>
              <div>
                {mockComment.map((item) => (
                  <>
                    <div className="profile-comment">
                      <div className="info-comment">
                        <img src={item.image} alt="picture" className="picture-comment" />
                        <div className="data-comment">
                          <h5 className="name-comment">{item.name}</h5>
                          <p className="date-comment">{item.date}</p>
                        </div>
                      </div>
                      <div className="text-comment">
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="type-comment">
                <textarea className="box-comment" type="text" placeholder="Enter your comment here"></textarea>
                <div className="Submit">
                  <button className="btn-submit">
                    <img src={Submit} alt="Submit" className="pict-submit" />
                    <div className="text-submit">Submit</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* author */}
          <div className="author">
            <div className="profile-author">
              <img src={Header} alt="header" className="picture-author" />
              <div className="name-author">
                <div className="created">
                  <p className="created-text">Created by</p>
                </div>
                <div className="updated-text">
                  <h5>Pratur Anahata Pratama</h5>
                </div>
              </div>
            </div>
            <div className="btn-profile">
              <button className="share">
                <img src={Share} alt="share" />
                <div className="text">Share</div>
              </button>
              <button className="save">
                <img src={Save} alt="save" />
                <div className="text">Save</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentPage;
