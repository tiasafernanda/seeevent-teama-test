import React from 'react';
import styles from './assets/footer.module.scss';
import footerlogo from './assets/footer-logo.png';
import facebook from './assets/Facebook.png';
import instagram from './assets/Instagram.png';
import twitter from './assets/Twitter.png';
import youtube from './assets/Youtube.png';
import { useLocation, Link } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  console.log(location);
  const Home = window.location.pathname === '/';
  return (
    <div className={Home ? styles.footerHome : styles.container}>
      <footer className='row row-cols-6 py-5 pe-0 me-0'>
        <div className='col-4 ps-5'>
          <a href='/' className='d-flex align-items-center mb-3 link-dark'>
            <img src={footerlogo} height='50' alt='...' />
          </a>
          <p>
            SeeEvent is a platform where you can create or find an amazing events around the world.
          </p>
          <h5>Follow Us on</h5>
          <div className={styles.socials}>
            <ul className='nav d-flex'>
              <li>
                <a href='/' className='pe-3'>
                  <img src={facebook} alt='...' />
                </a>
              </li>
              <li>
                <a href='/' className='pe-3'>
                  <img src={instagram} alt='...' />
                </a>
              </li>
              <li>
                <a href='/' className='pe-3'>
                  <img src={twitter} alt='...' />
                </a>
              </li>
              <li>
                <a href='/' className='pe-3'>
                  <img src={youtube} alt='...' />
                </a>
              </li>
            </ul>
          </div>
          <p>© 2021 SeeEvent All rights reserved.</p>
        </div>

        <div className='col-1'></div>

        <div className='col-2'>
          <h5>Links</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 '>
                Home
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 '>
                Explore
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 '>
                My Events
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 '>
                Bookmarks
              </a>
            </li>
          </ul>
        </div>

        <div className='col-2'>
          <h5>Top Categories</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 '>
                Design
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 '>
                Photography
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 '>
                Development
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 '>
                Marketing
              </a>
            </li>
          </ul>
        </div>

        <div className='col-3 pe-0'>
          <h5>Contact Us</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>Indonesia</li>
            <li className='nav-item mb-2'>Jl. Planet Namek No. 123, Surabaya</li>
            <li className='nav-item mb-2'>Telp : 083849420146</li>
            <li className='nav-item mb-2'>Email : Johndoe@seeevent.com</li>
          </ul>
          <div className={styles.terms}>
            <ul>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='#'>Terms of Service</a>
              </li>
              <li>
                <a href='#'>Helps</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
