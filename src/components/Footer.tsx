import Link from "next/link"
import AppImage from './AppImage';
import Image from "next/image"

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-widgets-wrapper footer-bg">
          <div className="shape-1">
            <AppImage src="/assets/img/footer-shape-1.png" alt="shape-img" width={361} height={372} />
          </div>
          <div className="shape-2">
            <AppImage src="/assets/img/footer-shape-2.png" alt="shape-img" width={288} height={383} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link href="/" className='header-logo d-flex align-items-center gap-2'>
                      <Image src="/assets/img/logo/Logo.png" alt="logo-img" width={56} height={56} className='logo-mark' />
                      <div className="logo-wordmark text-white text-uppercase">
                        <span className="logo-wordmark__top">Nusula Brother</span>
                        <span className="logo-wordmark__bottom">Enterprises</span>
                      </div>
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      A trusted regional partner for specialized food ingredients, manufacturing excellence, and dependable commercial support across East Africa.
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      <Link href="https://www.facebook.com/Fastbakes" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></Link>
                      <Link href="https://www.instagram.com/fastbakes_official" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></Link>
                      <Link href="https://www.tiktok.com/@fastbakestz" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok" /></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Quick Links</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/about">
                        <i className="fa-solid fa-chevron-right" />
                        About NB Enterprises
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <i className="fa-solid fa-chevron-right" />
                        Our Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/team">
                        <i className="fa-solid fa-chevron-right" />
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <i className="fa-solid fa-chevron-right" />
                        Request Quote
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <i className="fa-solid fa-chevron-right" />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                <div className="single-footer-widget style-margin">
                  <div className="widget-head">
                    <h3>Recent Posts</h3>
                  </div>
                  <div className="recent-post-area">
                    <div className="recent-post-items">
                      <div className="thumb">
                        <AppImage src="/assets/img/news/pp1.jpg" alt="post-img" width={78} height={79} />
                      </div>
                      <div className="content">
                        <ul className="post-date">
                          <li>
                            <i className="fa-solid fa-calendar-days me-2" />
                            20 Feb, 2024
                          </li>
                        </ul>
                        <h6>
                          <Link href="/news-details">
                            Top 5 Most Famous <br />
                            Baking Trends In 2026
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="recent-post-items mb-0">
                      <div className="thumb">
                        <AppImage src="/assets/img/news/pp2.jpg" alt="post-img" width={78} height={79} />
                      </div>
                      <div className="content">
                        <ul className="post-date">
                          <li>
                            <i className="fa-solid fa-calendar-days me-2" />
                            15 Dec, 2024
                          </li>
                        </ul>
                        <h6>
                          <Link href="/news-details">
                            The Importance Of Cake Gels <br />
                            In Baking
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Contact Us</h3>
                  </div>
                  <div className="footer-content">
                    <ul className="contact-info">
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        Plot 16, Chango&apos;mbe Area, Dar es Salaam, Tanzania
                      </li>
                      <li>
                        <i className="fa-solid fa-phone-volume" />
                        <Link href="tel:+255796317866">+255 796 317 866</Link>
                      </li>
                      <li>
                        <i className="fa-regular fa-envelope" />
                        <Link href="mailto:info@nusulabrotherenterprises.com">info@nusulabrotherenterprises.com</Link>
                      </li>
                    </ul>
                    <Link href="/contact" className="theme-btn hover-white mt-4">
                      Get In Touch
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                © All Copyright {new Date().getFullYear()} by <Link href="https://beatotechnologies.com" target='_blank'>Beato Technologies</Link>
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <Link href="/#">
                    Terms &amp; Condition
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="#top" id="scrollUp" className="scroll-icon">
            <i className="far fa-arrow-up" />
          </Link>
        </div>
      </footer>
    </>
  )
}