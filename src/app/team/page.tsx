import React from 'react';
import AppImage from '../../components/AppImage';
import Link from 'next/link';
import Breadcrumb from '@/components/BreadCrumb';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const executiveLeadership: TeamMember[] = [
  { name: 'Hajjati Nemwa Nusula Njogi', role: 'Chief Executive Officer', image: '/assets/img/team/Nusula.webp' },
  { name: 'Mr. Lujja Nasur Wawire', role: 'Executive Director (General Manager)', image: '/assets/img/team/Lujja.webp' },
  { name: 'Dr. Ismail Tijjani Kabwanga, PhD', role: 'Director, Quality Control & Human Resources', image: '/assets/img/team/Ismail.webp' },
];

const ugandaOperations: TeamMember[] = [
  { name: 'Mirembe Mida', role: 'General Manager - Factory', image: '/assets/img/team/generic.jpg' },
  { name: 'Walujjo Yusufu', role: 'Production Manager', image: '/assets/img/team/generic.jpg' },
  { name: 'Wanyenze Mariam', role: 'Sales Manager', image: '/assets/img/team/Wanyenze.jpeg' },
  { name: 'Muyonjo Adam', role: 'Sales Executive', image: '/assets/img/team/Adam.png' },
  { name: 'Nabosa Mariam', role: 'Sales Executive', image: '/assets/img/team/generic.jpg' },
  { name: 'Ochweda Musa Abdallah', role: 'Head of Transport / Logistics', image: '/assets/img/team/generic.jpg' },
  { name: 'Ahumuza Afiswa', role: 'Accounts Manager', image: '/assets/img/team/Afiswa.jpeg' },
];

const tanzaniaTeam: TeamMember[] = [
  { name: 'Lilian Reuben', role: 'Country General Manager', image: '/assets/img/team/generic.jpg' },
  { name: 'Patrick Fidelis', role: 'Production / QC Manager', image: '/assets/img/team/Mabala.jpeg' },
  { name: 'Jenifer Mushi', role: 'Sales Executive', image: '/assets/img/team/Mushi.jpeg' },
  { name: 'Hellena Felix Muyenga', role: 'Sales Executive', image: '/assets/img/team/Helena.jpeg' },
];

function TeamGrid({ title, members }: { title: string; members: TeamMember[] }) {
  return (
    <div className="mt-5">
      <div className="section-title mb-0">
        <h3 className='text-2xl pt-5 fw-bold'>{title}</h3>
      </div>
      <div className="row g-4 mt-1">
        {members.map((member, index) => (
          <div key={member.name} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(index % 4) + 3}s`}>
            <div className="team-card-items mt-0 h-100">
              <div className="team-image">
                <AppImage src={member.image} alt={`${member.name} photo`} width={270} height={280} />
                <div className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                  <ul>
                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                  </ul>
                </div>
              </div>
              <div className="team-content text-center">
                <h3>
                  <Link href="/team">{member.name}</Link>
                </h3>
                <p>{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TeamPage = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Our Team"
        bgImage="/assets/img/company/staff-ug.jpg"
        bgClasses="bg-cover"
        bgStyle={{ backgroundPositionY: '38%' }}
        overlayOpacity={0.5} />
      <section className="team-section-4 section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Our Team</span>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Leadership &amp; Functional Teams
            </h2>
          </div>
          <p className="text-center mt-3 mb-4">
            Meet the leadership and specialist teams driving Nusula and Brothers Enterprises forward through operational discipline,
            product quality, and long-term client partnerships across Uganda and Tanzania.
          </p>

          <TeamGrid title="Executive Leadership" members={executiveLeadership} />
          <TeamGrid title="Uganda Operations Team" members={ugandaOperations} />
          <TeamGrid title="Tanzania Team - Dar es Salaam" members={tanzaniaTeam} />
        </div>
      </section>
    </>
  );
};

export default TeamPage;
