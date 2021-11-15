import React from "react";
import cardDatas from "./data";
import "../home-succes-login/css/style1.css";
import { BsSearch } from "react-icons/bs";

function SuccessLogin() {
  return (
    <div>
      <div className="container">
        <div className="body">
          {/* Put NavBar Below */}

          {/* End of Navbar */}
          <p>
            <span> Create </span> or <span> Find </span> <br />
            Interesting <br />
            <span> Events </span>
            around <br />
            The world
          </p>
        </div>
        <div className="Search">
          <button>Search</button>
          <div className="icon">
            <BsSearch />
          </div>
          <input type="text" placeholder="Search Event" />
        </div>
        <div className="top">
          <h2>Attend an event starting soon</h2>
          <ul>
            <li>
              <a href="#">More events</a>
            </li>
          </ul>
        </div>
        <div className="card-grid">
          {cardDatas.map((data) => (
            <>
              <div className="card">
                <div key={data.id} className="image">
                  <img src={data.img} alt="" />
                </div>
                <div className="content">
                  <div className="category">
                    <p>{data.title}</p>
                  </div>
                  <div className="desc">
                    <p>{data.description}</p>
                    <h4>{data.description1}</h4>
                    <p>{data.description2}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="top">
          <h2>Design Events</h2>
          <ul>
            <li>
              <a href="#">More events</a>
            </li>
          </ul>
        </div>
        <div className="card-grid">
          {cardDatas.map((data) => (
            <>
              <div className="card">
                <div key={data.id} className="image">
                  <img src={data.img} alt="" />
                </div>
                <div className="content">
                  <div className="category">
                    <p>{data.title}</p>
                  </div>
                  <div className="desc">
                    <p>{data.description}</p>
                    <h4>{data.description1}</h4>
                    <p>{data.description2}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* Put Footer Below */}

        {/* End of Footer */}
      </div>
    </div>
  );
}

export default SuccessLogin;
