import Link from "next/link"
import { CSSProperties } from "react"

type BreadcrumbProps = {
    breadcrumbTitle: string;
    bgImage?: string;
    bgClasses?: string;
    bgStyle?: CSSProperties;
    overlayOpacity?: number;
};

export default function Breadcrumb({ breadcrumbTitle, bgImage, bgClasses = 'bg-cover', bgStyle, overlayOpacity }: BreadcrumbProps) {
    const mergedStyle: CSSProperties = {
        backgroundImage: `url(${bgImage || '/assets/img/breadcrumb.jpg'})`,
        ...(overlayOpacity !== undefined ? { ['--breadcrumb-overlay-opacity' as string]: String(overlayOpacity) } : {}),
        ...bgStyle,
    };

    return (
        <>
            <div className={`breadcrumb-wrapper ${bgClasses}`} style={mergedStyle}>
                {/* <div> */}
                {/* <div className="line-shape">
                    <img src="/assets/img/line-element.png" alt="shape-img" />
                </div> */}
                <div className="container">
                    <div className="page-heading">
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">{breadcrumbTitle}</h1>
                        <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right" />
                            </li>
                            <li>
                                {breadcrumbTitle}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
