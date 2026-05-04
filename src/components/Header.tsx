'use client';

import Link from 'next/link';
import AppImage from './AppImage';
import Navbar from './Navbar';
import Image from 'next/image';
import Offcanvas from './OffCanvas';
import { useState } from 'react';

type HeaderProps = {
  scroll: boolean;
};

const Header = ({ scroll }: HeaderProps) => {

  const [isOffCanvas, setOffCanvas] = useState(false);
  const handleOffCanvas = () => setOffCanvas(!isOffCanvas);

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
                  <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}`} className="link">{process.env.NEXT_PUBLIC_EMAIL_TO ?? 'info@example.com'}</Link>
                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER ?? '+0000000000'}`} className="link">{process.env.NEXT_PUBLIC_PHONE_NUMBER ?? '+0000000000'}</Link>
                </li>
              </ul>
              <div className="top-right">
                <div className="social-icon d-flex align-items-center">
                  <span>Follow Us:</span>
                  <Link href="#" target='_blank'><i className="fab fa-facebook-f" /></Link>
                  <Link href="#" target='_blank'><i className="fab fa-twitter" /></Link>
                  <Link href="https://www.tiktok.com/@fastbakes7" target='_blank'><i className="fab fa-tiktok" /></Link>
                  <Link href="#" target='_blank'><i className="fab fa-youtube" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className={`header-3 ${scroll ? "sticky" : ""}`}>
          <div className="plane-shape">
            <AppImage src="/assets/img/plane.png" alt="shape-img" width={115} height={71} />
          </div>
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo d-flex align-items-center">
                      <Image src="/assets/img/logo/Logo.svg" alt="logo-img" width={40} height={40} />
                      <h3 className='ms-2 d-inline fw-bolder'>NB <span className='fw-light'>Enterprises</span></h3>
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
                  <div className="header-button">
                    <Link href="/contact" className="theme-btn bg-white">
                      <span>
                        Get In Touch
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