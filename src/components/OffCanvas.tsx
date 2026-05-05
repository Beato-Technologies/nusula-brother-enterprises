'use client';

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

type NavChild = { href: string; label: string }
type NavItem = { href: string; label: string; children?: NavChild[] }

type OffcanvasProps = {
    isOffCanvas: boolean;
    handleOffCanvas: () => void;
}

export default function Offcanvas({
    isOffCanvas,
    handleOffCanvas,
}: OffcanvasProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    const navItems: NavItem[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Solutions' },
        {
            href: '/#', label: 'Subsidiaries', children: [
                { href: '/subsidiaries/tanzania', label: 'Tanzania' },
            ]
        },
        { href: '/team', label: 'Our Team' },
        { href: '/contact', label: 'Contact' },
    ]

    const toggleDropdown = (href: string) =>
        setOpenDropdown(prev => (prev === href ? null : href))
    return (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/" onClick={handleOffCanvas} className="d-flex align-items-center gap-2">
                                        <Image src="/assets/img/logo/Logo.png" alt="logo-img" width={48} height={48} style={{ width: 48, height: 'auto' }} />
                                        <div className="logo-wordmark text-uppercase">
                                            <span className="logo-wordmark__top">Nusula Brother</span>
                                            <span className="logo-wordmark__bottom">Enterprises</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="offcanvas__close" onClick={handleOffCanvas}>
                                    <button aria-label="Close menu">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>

                            {/* Nav links */}
                            <nav className="offcanvas__nav mb-4">
                                <ul className="list-unstyled m-0">
                                    {navItems.map(({ href, label, children }) => (
                                        <li key={href} style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                                            <div className="d-flex align-items-center justify-content-between" style={{ padding: '10px 0' }}>
                                                <Link
                                                    href={href}
                                                    onClick={children ? undefined : handleOffCanvas}
                                                    style={{ fontWeight: 600, fontSize: '1rem' }}
                                                >
                                                    {label}
                                                </Link>
                                                {children && (
                                                    <button
                                                        aria-label={`Toggle ${label} submenu`}
                                                        onClick={() => toggleDropdown(href)}
                                                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 4px', lineHeight: 1 }}
                                                    >
                                                        <i className={`fa-solid fa-chevron-${openDropdown === href ? 'up' : 'down'}`} style={{ fontSize: '0.75rem' }} />
                                                    </button>
                                                )}
                                            </div>
                                            {children && openDropdown === href && (
                                                <ul className="list-unstyled m-0" style={{ paddingLeft: '1rem', paddingBottom: '6px' }}>
                                                    {children.map(child => (
                                                        <li key={child.href} style={{ padding: '6px 0' }}>
                                                            <Link
                                                                href={child.href}
                                                                onClick={handleOffCanvas}
                                                                style={{ fontSize: '0.9rem' }}
                                                            >
                                                                <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem', marginRight: '6px' }} />
                                                                {child.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            Plot 16, Chango&apos;mbe Area, Dar es Salaam, Tanzania
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href="mailto:info@nusulabrotherenterprises.com">info@nusulabrotherenterprises.com</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href="tel:+255796317866">+255 796 317 866</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <Link href="/contact" className="theme-btn text-center" onClick={handleOffCanvas}>
                                        <span>Get In Touch <i className="fa-solid fa-arrow-right-long" /></span>
                                    </Link>
                                </div>
                                <div className="social-icon d-flex align-items-center mt-3">
                                    <Link href="https://www.facebook.com/Fastbakes" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="https://www.instagram.com/fastbakes_official" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></Link>
                                    <Link href="https://www.tiktok.com/@fastbakestz" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`} onClick={handleOffCanvas} />
        </>
    )
}
