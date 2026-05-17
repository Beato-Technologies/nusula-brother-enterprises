import React from 'react';
import Breadcrumb from '@/components/BreadCrumb';
import TeamMembersBlock, { TeamMember } from '@/components/TeamMembersBlock';

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

          <TeamMembersBlock
            title="Executive Leadership"
            members={executiveLeadership}
            wrapperClassName="mt-5"
            rowClassName="row g-4 mt-1"
            cardClassName="team-card-items mt-0 h-100"
            nameHrefFallback="/team"
          />
          <TeamMembersBlock
            title="Uganda Operations Team"
            members={ugandaOperations}
            wrapperClassName="mt-5"
            rowClassName="row g-4 mt-1"
            cardClassName="team-card-items mt-0 h-100"
            nameHrefFallback="/team"
          />
          <TeamMembersBlock
            title="Tanzania Team - Dar es Salaam"
            members={tanzaniaTeam}
            wrapperClassName="mt-5"
            rowClassName="row g-4 mt-1"
            cardClassName="team-card-items mt-0 h-100"
            nameHrefFallback="/team"
          />
        </div>
      </section>
    </>
  );
};

export default TeamPage;
