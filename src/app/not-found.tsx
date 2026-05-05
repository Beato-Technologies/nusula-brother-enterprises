import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="Error-section section-padding fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="error-items">
                            <div className="error-image">
                                <Image src="/assets/img/404.png" alt="img" width={500} height={500} />
                            </div>
                            <h2>
                                This Page Is Currently Unavailable <br />
                                Or Has Been Moved
                            </h2>
                            <Link href="/" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                Return To Homepage
                                <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}