import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="Error-section section-padding fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="error-items">
                            {/* Creative typographic 404 */}
                            <div className="nbe-404-display" aria-hidden="true">
                                <span className="nbe-404-digit">4</span>
                                <span className="nbe-404-icon">
                                    <i className="fa-solid fa-wheat-awn" />
                                </span>
                                <span className="nbe-404-digit">4</span>
                            </div>

                            <div className="section-title mb-4">
                                <span>Page Not Found</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                                    This Ingredient Is Missing
                                </h2>
                            </div>

                            <p className="wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: '48ch', margin: '0 auto 2rem' }}>
                                The page you&apos;re looking for isn&apos;t in our recipe. It may have been moved,
                                renamed, or is temporarily out of stock. Let&apos;s get you back on track.
                            </p>

                            <div className="d-flex gap-3 justify-content-center flex-wrap wow fadeInUp" data-wow-delay=".6s">
                                <Link href="/" className="theme-btn">
                                    Return To Homepage
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                                <Link href="/contact" className="theme-btn border-white" style={{ background: 'transparent', border: '2px solid var(--theme)', color: 'var(--theme)' }}>
                                    Contact Us
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
