import Link from 'next/link';
import AppImage from './AppImage';

export default function Team() {
    return (
        <section className="team-section-3 fix section-padding section-bg" id="team">
            <div className="line-shape">
                <AppImage src="/assets/img/team/line-shape.png" alt="shape-img" width={465} height={605} />
            </div>
            <div className="mask-shape">
                <AppImage src="/assets/img/team/mask-shape-2.png" alt="shape-img" width={366} height={395} />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="wow fadeInUp">Leadership</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Executive Leadership <br /> Team
                        </h2>
                    </div>
                    <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                        View Leadership
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
                <div className="row team-equal-height-row">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay=".3s">
                        <div className="single-team-items">
                            <div className="team-image">
                                <AppImage src="/assets/img/team/Nusula.webp" alt="team-img" width={270} height={280} />
                                <div className="social-profile">
                                    <ul>
                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                    </ul>
                                    <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3>
                                    <Link href="/team-details">Hajjati Nemwa Nusula Njogi</Link>
                                </h3>
                                <p>CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay=".5s">
                        <div className="single-team-items">
                            <div className="team-image">
                                <AppImage src="/assets/img/team/Lujja.webp" alt="team-img" width={270} height={280} />
                                <div className="social-profile">
                                    <ul>
                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                    </ul>
                                    <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3>
                                    <Link href="/team-details">Mr. Lujja Nasur Wawire</Link>
                                </h3>
                                <p>Executive Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay=".7s">
                        <div className="single-team-items">
                            <div className="team-image">
                                <AppImage src="/assets/img/team/Ismail.webp" alt="team-img" width={270} height={280} />
                                <div className="social-profile">
                                    <ul>
                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                    </ul>
                                    <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3>
                                    <Link href="/team-details">Kabwanga Ismail Tijjani, PhD</Link>
                                </h3>
                                <p>Director, Quality Control & Human Resources</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay=".9s">
                        <div className="single-team-items">
                            <div className="team-image">
                                <AppImage src="/assets/img/team/generic.jpg" alt="team-img" width={270} height={280} />
                                <div className="social-profile">
                                    <ul>
                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                    </ul>
                                    <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3>
                                    <Link href="/team-details">Mirembe Mida</Link>
                                </h3>
                                <p>General Manager, Factory</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}