'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext'; // Import useAuth hook
import Navbar from './Navbar';
import Image from 'next/image';
import Offcanvas from './OffCanvas';
import { useState } from 'react';

type HeaderProps = {
  scroll: boolean;
};

const Header = ({ scroll }: HeaderProps) => {
  const { user, role, loading, signOut } = useAuth();

  const [isOffCanvas, setOffCanvas] = useState(false);
  const handleOffCanvas = () => setOffCanvas(!isOffCanvas);

  // const [isSearch, setSearch] = useState(false);
  // const handleSearch = () => setSearch(!isSearch);

  return (
    <>
      <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
      <header>
        <div className="header-top-section top-style-3">
          <div className="container">
            <div className="header-top-wrapper">
              <ul className="contact-list">
                <li>
                  <i className="far fa-envelope" />
                  <Link href="/mailto:info@example.com" className="link">info@example.com</Link>
                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <Link href="/tel:2086660112">+208-666-0112</Link>
                </li>
              </ul>
              <div className="top-right">
                <div className="flag-wrap">
                  <div className="flag">
                    <img src="/assets/img/flag.png" alt="flag" />
                  </div>
                  <div className="nice-select" tabIndex={0}>
                    <span className="current">
                      English
                    </span>
                    <ul className="list">
                      <li data-value={1} className="option selected focus">
                        English
                      </li>
                      <li data-value={1} className="option">
                        Bangla
                      </li>
                      <li data-value={1} className="option">
                        Hindi
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <span>Follow Us:</span>
                  <Link href="#"><i className="fab fa-facebook-f" /></Link>
                  <Link href="#"><i className="fab fa-twitter" /></Link>
                  <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                  <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className={`header-3 ${scroll ? "sticky" : ""}`}>
          <div className="plane-shape">
            <img src="/assets/img/plane.png" alt="shape-img" />
          </div>
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo d-flex align-items-center">
                      <Image src="/assets/img/logo/Logo.svg" alt="logo-img" width={40} height={40} />
                      <h2 className='ms-2 d-inline fw-bolder'>NB <span className='fw-light'>Enterprises</span></h2>
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Navbar />
                      </nav>
                    </div>
                  </div>
                  {/* <a onClick={handleSearch} className="search-trigger search-icon"><i className="fal fa-search" /></a> */}
                  <div className="header-button">
                    <Link href="/contact" className="theme-btn bg-white">
                      <span>
                        get A Quote
                        <i className="fa-solid fa-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                  <div className="header__hamburger d-lg-none my-auto">
                    <div className="sidebar__toggle" onClick={handleOffCanvas}>
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;