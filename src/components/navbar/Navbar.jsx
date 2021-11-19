import React from 'react';
import navbarlogo from './assets/navbar-logo.png';
import styles from './assets/navbar.module.scss';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import Avatar from '../../account/Assets/header.png';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

export default function Navbar() {
  const [listEvent, setListEvent] = useState([]);
  console.log(listEvent);
  const EventSearch = (keyword) => {
    axios
      .get(`http://see-event.herokuapp.com/search?${keyword}`)
      .then((res) => setListEvent(res.data));
  };
  const fakeToken = localStorage.getItem('fakeToken');
  const location = useLocation();
  console.log(location);
  const Home = window.location.pathname === '/';
  return (
    <div className={Home ? styles.navHome : styles.container}>
      <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3'>
        <a
          href='/'
          className='d-flex align-items-center col-md-3 mb-2 mb-md-0 ms-1  text-dark text-decoration-none'
        >
          <img src={navbarlogo} height='40' alt='...' />
        </a>

        {fakeToken ? (
          <div className={styles.loginNav}>
            <div className={styles.searchBar}>
              <span className={styles.icon}>
                <FiSearch />
              </span>
              <input
                type='text'
                placeholder='Search Event'
                onChange={(e) => EventSearch(e.target.value)}
              />
            </div>
            <div className={styles.profile}>
              <img src={Avatar} alt='' />
              <Link to='/account-page'>My Account</Link>
            </div>
          </div>
        ) : (
          <div className='col-md-3 pe-3 text-end'>
            <Link className='me-4' to='/signup'>
              Sign Up
            </Link>
            <Link to='/login'>Sign In</Link>
          </div>
        )}
      </header>
    </div>
  );
}
