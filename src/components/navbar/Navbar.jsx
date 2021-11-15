import React from 'react';
import navbarlogo from './assets/navbar-logo.png';
import styles from './assets/navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
        <a
          href='/'
          className='d-flex align-items-center col-md-3 mb-2 mb-md-0 ms-1  text-dark text-decoration-none'
        >
          <img src={navbarlogo} height='40' alt='...' />
        </a>

        <div className='col-md-3 pe-3 text-end'>
          <a className='me-4' href='#'>
            Sign Up
          </a>
          <a href='#'>Sign In</a>
        </div>
      </header>
    </div>
  );
}
