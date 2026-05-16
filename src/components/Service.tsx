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
                            Premium Ingredient Solutions <br /> For East Africa
                        </h2>
                    </div>
                    <Link href="/services" className="theme-btn">
                        Explore All Solutions
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service-card-items">
                            <div className="service-image">
                                <AppImage src="/assets/img/company/product-cake-gel-3-sizes.jpg" alt="service-img" width={270} height={160} />
                            </div>
                            <div className="icon-2">
                                <AppImage src="/assets/img/service/icon/s-icon-1.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="service-content">
                                <div className="icon">
                                    <AppImage src="/assets/img/service/icon/s-icon-1.svg" alt="img" width={40} height={40} />
                                </div>
                                <h4>
                                    <Link href="/services">Manufactured Ingredients</Link>
                                </h4>
                                <p>
                                    Cake Gel, Baker&apos;s Fat, Icing Sugar, Pan Grease, White Table Vinegar and CR Products (CR600 &amp; CR630) — made under strict UNBS &amp; TBS standards.
                                </p>
                                <Link href="/services" className="theme-btn-2 mt-3">
                                    Learn More
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service-card-items">
                            <div className="service-image">
                                <AppImage src="/assets/img/company/product-icing-sugar.jpg" alt="service-img" width={270} height={160} />
                            </div>
                            <div className="icon-2">
                                <AppImage src="/assets/img/service/icon/s-icon-2.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="service-content">
                                <div className="icon">
                                    <AppImage src="/assets/img/service/icon/s-icon-2.svg" alt="img" width={40} height={40} />
                                </div>
                                <h4>
                                    <Link href="/services">Cake Premixes</Link>
                                </h4>
                                <p>
                                    A full range of Fastbakes premixes — American Oil Muffin, Spongy Cake, Red Velvet, Cup Cake, Smoothie Cake, Magdalenas, and more.
                                </p>
                                <Link href="/services" className="theme-btn-2 mt-3">
                                    Learn More
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service-card-items">
                            <div className="service-image">
                                <AppImage src="/assets/img/company/product-cr-630.jpg" alt="service-img" width={270} height={160} />
                            </div>
                            <div className="icon-2">
                                <AppImage src="/assets/img/service/icon/s-icon-4.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="service-content">
                                <div className="icon">
                                    <AppImage src="/assets/img/service/icon/s-icon-5.svg" alt="img" width={40} height={40} />
                                </div>
                                <h4>
                                    <Link href="/services">Traded Specialty Ingredients</Link>
                                </h4>
                                <p>
                                    Caramel, Potassium &amp; Calcium Sorbate, Desiccated Coconut, Corn Starch, Gelatin, Xanthan Gum, Food Flavors, and more — reliably sourced.
                                </p>
                                <Link href="/services" className="theme-btn-2 mt-3">
                                    Learn More
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service-card-items">
                            <div className="service-image">
                                <AppImage src="/assets/img/company/company-truck-with-products.jpg" alt="service-img" width={270} height={160} />
                            </div>
                            <div className="icon-2">
                                <AppImage src="/assets/img/service/icon/s-icon-3.svg" alt="img" width={40} height={40} />
                            </div>
                            <div className="service-content">
                                <div className="icon">
                                    <AppImage src="/assets/img/service/icon/s-icon-3.svg" alt="img" width={40} height={40} />
                                </div>
                                <h4>
                                    <Link href="/services">Regional Distribution</Link>
                                </h4>
                                <p>
                                    Serving Uganda and Tanzania with efficient delivery networks — supporting bakeries, processors, and food manufacturers across East Africa.
                                </p>
                                <Link href="/services" className="theme-btn-2 mt-3">
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
                            Partner With Us For <br /> Reliable Ingredient Performance
                        </h3>
                        <Link href="/contact" className="theme-btn bg-white">
                            Request A Commercial Quote
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}