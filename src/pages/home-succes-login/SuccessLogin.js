import React from "react";
import cardDatas from "./data";
import styles from "../home-succes-login/css/style1.module.css";
import { BsSearch } from "react-icons/bs";

function SuccessLogin() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.body}>
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
        <div className={styles.Search}>
          <button>Search</button>
          <div className={styles.icon}>
            <BsSearch />
          </div>
          <input className={styles.cok} type="text" placeholder="Search Event" />
        </div>
        <div className={styles.top}>
          <h2>Attend an event starting soon</h2>
          <ul>
            <li>
              <a href="#">More events</a>
            </li>
          </ul>
        </div>
        <div className={styles.cardgrid}>
          {cardDatas.map((data) => (
            <>
              <div className={styles.card}>
                <div key={data.id} className={styles.image}>
                  <img src={data.img} alt="" />
                </div>
                <div className={styles.content}>
                  <div className={styles.category}>
                    <p>{data.title}</p>
                  </div>
                  <div className={styles.desc}>
                    <p>{data.description}</p>
                    <h4>{data.description1}</h4>
                    <p>{data.description2}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className={styles.top}>
          <h2>Design Events</h2>
          <ul>
            <li>
              <a href="#">More events</a>
            </li>
          </ul>
        </div>
        <div className={styles.cardgrid}>
          {cardDatas.map((data) => (
            <>
              <div className={styles.card}>
                <div key={data.id} className={styles.image}>
                  <img src={data.img} alt="" />
                </div>
                <div className={styles.content}>
                  <div className={styles.category}>
                    <p>{data.title}</p>
                  </div>
                  <div className={styles.desc}>
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
