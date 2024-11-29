import { useState } from 'react';
import dotaIcon from '../assets/dotaicon.png';
import Dropdown from "./Dropdown";

function Header({ activeSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact Me' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="flex h-15 p-7 items-center justify-between fixed top-0 left-0 right-0 z-50">
            <img src={dotaIcon} alt="GG" className="h-10 w-10 object-contain" />
            <nav className="flex">
                <ul className="hidden sm:flex space-x-10 items-center">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`cursor-pointer underline-effect hover:text-teal-500 transition-all ease-linear duration-300 ${
                                    activeSection === item.href.slice(1) ? 'active' : ''
                                }`}
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            className="border border-teal-400 font-semibold text-teal-300 bg-teal-400/10 py-1 px-2 rounded hover:bg-teal-400/20 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="sm:hidden">
                <Dropdown isOpen={isMenuOpen} toggleMenu={toggleMenu} activeSection={activeSection} handleNavClick={handleNavClick} />
            </div>
        </header>
    );
}

export default Header;

