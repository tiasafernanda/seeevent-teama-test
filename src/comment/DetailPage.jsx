import React from "react";
import "../comment/DetailPage.css";
import Image from "../comment/Assets/Image.png";
import Header from "../comment/Assets/Header.png";
import Calendar from "./Assets/Calendar.png";
import Share from "../comment/Assets/Share.png";
import Save from "../comment/Assets/Save.png";
// import Header2 from "../comment/Assets/Header2.png";
// import Header1 from "../comment/Assets/Header1.png";
// import Header3 from "../comment/Assets/Header3.png";
import Submit from "../comment/Assets/Submit.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { formatProfileName } from "./../helper/FormatProfileName.js";
import { getEventDetail } from "../store/actions/event";

const ReviewDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const storeGlobal = useSelector((state) => state.event);
  console.log(storeGlobal);
  console.log(id, "params");
  // console.log(dataEvent);
  useEffect(() => {
    dispatch(getEventDetail(id));
  }, [dispatch]);

  const first_name = storeGlobal && storeGlobal.data.user.first_name;
  const last_name = storeGlobal && storeGlobal.data.user.last_name;

  const errorImage = true;

  return (
    <>
      {/* title */}
      <div className="Container2">
        <div className="title">
          <h1>{storeGlobal && storeGlobal.data.data.event_title}</h1>
        </div>
        {/* description */}
        <div className="description">
          <img src={Calendar} alt="calendar" />
          <p className="date-description">{storeGlobal && storeGlobal.data.data.date_and_time}</p>
          <div className="link">{storeGlobal && storeGlobal.data.data.category.name}</div>
        </div>
        <div className="main-image">
          <img
            src={storeGlobal && storeGlobal.data.data.event_photo}
            alt="image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = Image;
            }}
          />
        </div>
        {/* details */}
        <div className="detail-container">
          <div className="detail">
            <h3 className="detail-title" data-testid="getTextByTitle">
              Details
            </h3>
            <p className="paragraph">{storeGlobal && storeGlobal.data.data.event_detail}</p>

            {/* comment */}
            <div className="detail">
              <h3 className="detail-title">Comments</h3>
              <div>
                {/* {storeGlobal((item) => (
                  <>
                    <div className="profile-comment" key={item.id}>
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
                ))} */}
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
              {errorImage ? <div className="picture-author">{storeGlobal && formatProfileName(first_name, last_name)}</div> : <img src={Header} alt="header" className="picture-author" />}
              <div className="name-author">
                <div className="created">
                  <p className="created-text">Created by</p>
                </div>
                <div className="updated-text">{storeGlobal && `${storeGlobal.data.data.user.first_name} ${storeGlobal.data.data.user.last_name}`}</div>
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

export default ReviewDetailPage;
