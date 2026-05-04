'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileMenu() {
    const [activeItem, setActiveItem] = useState(1);
    console.log("Active Item:", activeItem);

    const handleActiveItem = (index: number) => {
        setActiveItem(index);
    };

    return (
        <div className="mobile-menu fix mb-3 mean-container">
            <div className="mean-bar">
                <Link
                    href="/#nav"
                    className="meanmenu-reveal"
                    style={{ right: 0, left: 'auto', display: 'inline' }}
                >
                    <span>
                        <span>
                            <span />
                        </span>
                    </span>
                </Link>
                <nav className="mean-nav">
                    <ul>
                        <li className="has-dropdown active menu-thumb">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/services">
                                Services
                            </Link>
                        </li>
                        <li className="has-dropdown">
                            <Link href="#">
                                Subsidiaries
                                <i className="fas fa-angle-down" />
                            </Link>
                            <ul
                                className="submenu"
                                style={{ display: `${activeItem === 3 ? 'block' : 'none'}` }}
                            >
                                <li>
                                    <Link href="/subsidiaries/nbe-tanzania">NBE Tanzania</Link>
                                </li>
                            </ul>
                            <a
                                className={`mean-expand ${activeItem === 3 ? 'mean-clicked' : ''}`}
                                onClick={() => handleActiveItem(3)}
                            >
                                <i className="far fa-plus" />
                            </a>
                        </li>
                        <li className="mean-last">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
