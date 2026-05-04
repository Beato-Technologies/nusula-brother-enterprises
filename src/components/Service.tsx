import Link from 'next/link'
import AppImage from "./AppImage";

export default function Service() {
    return (
        <section className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-3.jpg")' }}>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span>Our Specializations</span>
                        <h2>
                            Premium Food Ingredients <br /> For East Africa
                        </h2>
                    </div>
                    <Link href="/services" className="theme-btn">
                        Explore All Services
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service-card-items">
                            <div className="service-image">
                                <AppImage src="/assets/img/service/02.jpg" alt="service-img" width={270} height={160} />
                            </div>
                            <div className="icon-2">
                                <AppImage src="/assets/img/service/icon/s-icon-1.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="service-content">
                                <div className="icon">
                                    <AppImage src="/assets/img/service/icon/s-icon-1.svg" alt="img" width={40} height={40} />
                                </div>
                                <h4>
                                    <Link href="/service-details">Food Ingredient Trading</Link>
                                </h4>
                                <p>
                                    Supply of specialized food ingredients across East Africa with dependable sourcing and delivery.
                                </p>
                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                    Learn More
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service-card-items">
                            <div className="service-image">
                                <AppImage src="/assets/img/service/03.jpg" alt="service-img" width={270} height={160} />
                            </div>
                            <div className="icon-2">
                                <AppImage src="/assets/img/service/icon/s-icon-2.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="service-content">
                                <div className="icon">
                                    <AppImage src="/assets/img/service/icon/s-icon-2.svg" alt="img" width={40} height={40} />
                                </div>
                                <h4>
                                    <Link href="/service-details">Food Manufacturing</Link>
                                </h4>
                                <p>
                                    Large-scale production under the Fastbakes brand with consistent quality and safety controls.
                                </p>
                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                    Learn More
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service-card-items">
                            <div className="service-image">
                                <AppImage src="/assets/img/service/04.jpg" alt="service-img" width={270} height={160} />
                            </div>
                            <div className="icon-2">
                                <AppImage src="/assets/img/service/icon/s-icon-4.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="service-content">
                                <div className="icon">
                                    <AppImage src="/assets/img/service/icon/s-icon-5.svg" alt="img" width={40} height={40} />
                                </div>
                                <h4>
                                    <Link href="/service-details">Research & Innovation</Link>
                                </h4>
                                <p>
                                    Continuous research to develop practical ingredient solutions for modern food processing.
                                </p>
                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                    Learn More
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service-card-items">
                            <div className="service-image">
                                <AppImage src="/assets/img/service/05.jpg" alt="service-img" width={270} height={160} />
                            </div>
                            <div className="icon-2">
                                <AppImage src="/assets/img/service/icon/s-icon-3.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="service-content">
                                <div className="icon">
                                    <AppImage src="/assets/img/service/icon/s-icon-3.svg" alt="img" width={40} height={40} />
                                </div>
                                <h4>
                                    <Link href="/service-details">Regional Distribution</Link>
                                </h4>
                                <p>
                                    Efficient distribution networks across Uganda and East Africa to keep your operations running.
                                </p>
                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                    Learn More
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cta-banner-2 section-padding">
                <div className="container">
                    <div className="cta-wrapper-2">
                        <div className="author-icon">
                            <div className="icon">
                                <i className="fa-solid fa-phone" />
                            </div>
                            <div className="content">
                                <span>Call Us Now</span>
                                <h4>
                                    <Link href="/tel:+256703412545">+256-703-412-545</Link>
                                </h4>
                            </div>
                        </div>
                        <h3>
                            Partner With Us For <br /> Quality Food Ingredients
                        </h3>
                        <Link href="/contact" className="theme-btn bg-white">
                            Request Quotation
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}