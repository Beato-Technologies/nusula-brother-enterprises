import Link from 'next/link';

export default function Navbar() {
    return (
        <ul>
            <li className="active menu-thumb">
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/services">
                    Solutions
                </Link>
            </li>
            <li className="has-dropdown">
                <Link href="/news">
                    Regional Operations
                    <i className="fas fa-angle-down ps-1" />
                </Link>
                <ul className="submenu">
                    <li className="has-dropdown">
                        <Link href="/subsidiaries/nb-tanzania">
                            NBE Tanzania Operations
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
}