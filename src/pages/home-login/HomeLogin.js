import React from 'react';
import styles from './css/style.module.css';
import cardDatas from './data';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function HomeLogin() {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  console.log(setSearch);
  const dispatch = useDispatch();
  const [listEvent, setListEvent] = useState([]);
  console.log(listEvent);
  const EventSearch = (keyword) => {
    axios
      .get(`http://see-event.herokuapp.com/home?search=${keyword}`)
      .then((res) => setListEvent(res.data.data));
  };
  console.log(listEvent);
  console.log(search);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.body}>
          <p>
            <span> Create </span> or <span> Find </span> <br />
            Interesting <br />
            <span> Events </span>
            around <br />
            The world
          </p>
        </div>
        <div className={styles.Search}>
          <button
            onClick={(e) => {
              if (e.key === 'Enter') {
                EventSearch(e.target.value);
                navigate(`/search/${search}`, { replace: true });
              }
            }}
            value={search}
          >
            Search
          </button>
          <div className={styles.icon}>
            <BsSearch />
          </div>
          <input
            className={styles.cok}
            type='text'
            placeholder='Search Event'
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                EventSearch(e.target.value);
                navigate(`/search/${search}`, { replace: true });
              }
            }}
            value={search}
          />
        </div>
        <div className={styles.top}>
          <h2>Attend an event starting soon</h2>
          <ul>
            <li>
              <a href='#'>More events</a>
            </li>
          </ul>
        </div>
        <div className={styles.cardGrid}>
          {cardDatas.map((data) => (
            <>
              <div className={styles.card}>
                <div key={data.id} className={styles.image}>
                  <img src={data.img} alt='' />
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
              <a href='#'>More events</a>
            </li>
          </ul>
        </div>
        <div className={styles.cardGrid}>
          {cardDatas.map((data) => (
            <>
              <div className={styles.card}>
                <div key={data.id} className={styles.image}>
                  <img src={data.img} alt='' />
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
      </div>
    </div>
  );
}

export default HomeLogin;
