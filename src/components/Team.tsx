import Link from 'next/link';
import AppImage from './AppImage';
import TeamMembersBlock, { TeamMember } from './TeamMembersBlock';

const leadershipMembers: TeamMember[] = [
    {
        name: 'Hajjati Nemwa Nusula Njogi',
        role: 'CEO',
        image: '/assets/img/team/Nusula.webp',
    },
    {
        name: 'Mr. Lujja Nasur Wawire',
        role: 'Executive Director',
        image: '/assets/img/team/Lujja.webp',
    },
    {
        name: 'Kabwanga Ismail Tijjani, PhD',
        role: 'Director, Quality Control & Human Resources',
        image: '/assets/img/team/Ismail.webp',
    },
    {
        name: 'Mirembe Mida',
        role: 'General Manager, Factory',
        image: '/assets/img/team/generic.jpg',
    },
];

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
                <TeamMembersBlock
                    members={leadershipMembers}
                    rowClassName="row team-equal-height-row"
                />
            </div>
        </section>
    );
}