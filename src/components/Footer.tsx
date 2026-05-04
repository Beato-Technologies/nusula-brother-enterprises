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
                    <Link href="/">
                      <Image src="/assets/img/logo/Logo.svg" alt="logo-img" width={40} height={40} />
                      <h3 className='ms-2'>NB <span className='fw-light'>Enterprises</span></h3>
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      Your trusted partner in specialized food ingredients. We deliver quality products and reliable support for food processing businesses across East Africa.
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      <Link href="#"><i className="fab fa-facebook-f" /></Link>
                      <Link href="#"><i className="fab fa-twitter" /></Link>
                      <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                      <Link href="#"><i className="fa-brands fa-youtube" /></Link>
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
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/news">
                        <i className="fa-solid fa-chevron-right" />
                        Our Blogs
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <i className="fa-solid fa-chevron-right" />
                        FAQ’S
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
                        SMS House Industrial Area, Kampala, Uganda
                      </li>
                      <li>
                        <i className="fa-solid fa-phone-volume" />
                        <Link href="tel:+256703412545">+256-703-412-545</Link>
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