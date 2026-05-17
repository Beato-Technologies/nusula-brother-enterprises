import Link from 'next/link';
import AppImage from './AppImage';

export type TeamMember = {
    name: string;
    role: string;
    image: string;
    profileHref?: string;
    imageWidth?: number;
    imageHeight?: number;
};

type TeamMembersBlockProps = {
    members: TeamMember[];
    title?: string;
    wrapperClassName?: string;
    titleClassName?: string;
    rowClassName?: string;
    columnClassName?: string;
    cardClassName?: string;
    nameHrefFallback?: string;
    wowDelayStart?: number;
    wowDelayStep?: number;
};

const SOCIAL_LINKS = [
    { href: '#', iconClassName: 'fab fa-facebook-f', label: 'Facebook' },
    { href: '#', iconClassName: 'fa-brands fa-twitter', label: 'Twitter' },
    { href: '#', iconClassName: 'fab fa-linkedin-in', label: 'LinkedIn' },
];

function formatDelay(index: number, start: number, step: number) {
    return `${(start + (index % 4) * step).toFixed(1)}s`;
}

export default function TeamMembersBlock({
    members,
    title,
    wrapperClassName = '',
    titleClassName = 'text-2xl pt-5 fw-bold',
    rowClassName = 'row',
    columnClassName = 'col-xl-3 col-lg-4 col-md-6 wow fadeInUp d-flex',
    cardClassName = 'single-team-items',
    nameHrefFallback = '/team-details',
    wowDelayStart = 0.3,
    wowDelayStep = 0.2,
}: TeamMembersBlockProps) {
    return (
        <div className={wrapperClassName}>
            {title ? (
                <div className="section-title mb-0">
                    <h3 className={titleClassName}>{title}</h3>
                </div>
            ) : null}

            <div className={rowClassName}>
                {members.map((member, index) => (
                    <div
                        key={`${member.name}-${index}`}
                        className={columnClassName}
                        data-wow-delay={formatDelay(index, wowDelayStart, wowDelayStep)}
                    >
                        <div className={`${cardClassName} h-100`}>
                            <div className="team-image">
                                <AppImage
                                    src={member.image}
                                    alt={`${member.name} photo`}
                                    width={member.imageWidth ?? 270}
                                    height={member.imageHeight ?? 280}
                                />
                                <div className="social-profile">
                                    <ul>
                                        {SOCIAL_LINKS.map((social) => (
                                            <li key={social.label}>
                                                <Link href={social.href} aria-label={`${member.name} on ${social.label}`}>
                                                    <i className={social.iconClassName} />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <span className="plus-btn">
                                        <i className="fas fa-share-alt" />
                                    </span>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3>
                                    <Link href={member.profileHref ?? nameHrefFallback}>{member.name}</Link>
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
