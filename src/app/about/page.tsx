import AppImage from '../../components/AppImage';
import CounterUp from '@/components/CounterUp';
import TeamMembersBlock, { TeamMember } from '@/components/TeamMembersBlock';
import Link from 'next/link';

const aboutTeamMembers: TeamMember[] = [
  {
    name: 'Dr. Ismail Tijjani Kabwanga, PhD',
    role: 'Director, Quality Control & H/R',
    image: '/assets/img/team/Ismail.webp',
  },
  {
    name: 'Mirembe Mida',
    role: 'General Manager - Factory',
    image: '/assets/img/team/generic.jpg',
  },
  {
    name: 'Lilian Reuben',
    role: 'Country General Manager - Tanzania',
    image: '/assets/img/team/generic.jpg',
  },
  {
    name: 'Ochweda Musa Abdallah',
    role: 'Head of Transport / Logistics',
    image: '/assets/img/team/generic.jpg',
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="about-section section-padding fix bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-2.jpg")' }}>
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="circle-shape">
                    <AppImage src="/assets/img/about/circle.png" alt="shape-img" width={138} height={138} />
                  </div>
                  <div className="counter-shape float-bob-y">
                    <div className="icon">
                      <AppImage src="/assets/img/about/icon-1.svg" alt="icon-img" width={40} height={40} />
                    </div>
                    <div className="content">
                      <h3><CounterUp count={8} />+ Years</h3>
                      <p>of Industry Growth</p>
                    </div>
                  </div>
                  <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("/assets/img/company/product-cake-gel-3-sizes.jpg")' }}>
                    <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                      <AppImage src="/assets/img/company/optimized-cake-gel.png" alt="about-img" width={247} height={247} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">ABOUT NUSULA & BROTHER ENTERPRISES</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Strategic Ingredient Solutions for <span>East Africa</span>
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Since 2018, we have evolved from a focused trading company into an integrated trading and manufacturing enterprise driven by research and innovation. <br /> Today, Fastbakes is a trusted brand in Uganda and across East Africa.
                  </p>
                  <div className="about-icon-items">
                    <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                      <div className="icon">
                        <AppImage src="/assets/img/about/icon-4.svg" alt="icon-img" width={44} height={44} />
                      </div>
                      <div className="content">
                        <h4>Vision</h4>
                        <p>
                          To be the leading manufacturer and supplier of specialized food ingredients.
                        </p>
                      </div>
                    </div>
                    <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                      <div className="icon">
                        <AppImage src="/assets/img/about/icon-5.svg" alt="icon-img" width={44} height={44} />
                      </div>
                      <div className="content">
                        <h4>Mission</h4>
                        <p>
                          We strive constantly to supply sustainable solutions to the food processing industries, connecting food processing communities across East Africa.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-author">
                    <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                      <Link href="/about" className="theme-btn">
                        Explore More
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                    <div className="author-image wow fadeInUp" data-wow-delay=".7s">
                      <AppImage src="/assets/img/about/author.png" alt="author-img" width={56} height={56} />
                      <div className="content">
                        <h6>Fastbakes Brand</h6>
                        <p>Uganda &bull; Tanzania &mdash; 45 Employees &bull; Est. 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Marque Section Start >>*/}
      <div className="marque-section-3">
        <div className="container-fluid">
          <div className="marquee-wrapper style-2 text-slider">
            <div className="marquee-inner to-left">
              <ul className="marqee-list d-flex">
                <li className="marquee-item style-2">
                  <span className="text-slider"><AppImage src="/assets/img/asterisk.svg" alt="img" width={50} height={54} /></span><span className="text-slider text-style">Food Ingredients</span>
                  <span className="text-slider"><AppImage src="/assets/img/asterisk.svg" alt="img" width={50} height={54} /></span><span className="text-slider text-style">Research & Innovation</span>
                  <span className="text-slider"><AppImage src="/assets/img/asterisk.svg" alt="img" width={50} height={54} /></span><span className="text-slider text-style">Manufacturing</span>
                  <span className="text-slider"><AppImage src="/assets/img/asterisk.svg" alt="img" width={50} height={54} /></span><span className="text-slider text-style">Trading</span>
                  <span className="text-slider"><AppImage src="/assets/img/asterisk.svg" alt="img" width={50} height={54} /></span><span className="text-slider text-style">Food Processing Solutions</span>
                  <span className="text-slider"><AppImage src="/assets/img/asterisk.svg" alt="img" width={50} height={54} /></span><span className="text-slider text-style">Sustainability</span>
                  <span className="text-slider"><AppImage src="/assets/img/asterisk.svg" alt="img" width={50} height={54} /></span><span className="text-slider text-style">Client Partnership</span>
                  <span className="text-slider"><AppImage src="/assets/img/asterisk.svg" alt="img" width={50} height={54} /></span><span className="text-slider text-style">Industry Leadership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*<< Team Section Start >>*/}
      <section className="team-section-3 fix section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="wow fadeInUp">Team Members</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Our Dedicated Team <br /> Members
              </h2>
            </div>
            <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
              All Members
              <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
          <TeamMembersBlock members={aboutTeamMembers} rowClassName="row" cardClassName="single-team-items" />
        </div>
      </section>
    </div>
  );
};
