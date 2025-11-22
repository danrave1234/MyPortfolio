import { useState } from 'react';
import logo from '../assets/Logo - Website Development.svg';
import Dropdown from "./Dropdown";

import PropTypes from 'prop-types';

function Header({ activeSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Capabilities' },
        { href: '#achievements', label: 'Achievements' },
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
            <img src={logo} alt="Danrave C. Keh Portfolio Logo" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            <nav className="flex">
                <ul className="hidden sm:flex space-x-10 items-center">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`cursor-pointer underline-effect hover:text-[#12B7C9] transition-all ease-linear duration-300 ${
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
                            href="/Resume.pdf" // Path to the PDF in the public folder
                            className="border border-[#12B7C9] font-semibold text-[#12B7C9] bg-[#12B7C9]/10 py-1 px-2 rounded hover:bg-[#12B7C9]/20 transition-colors duration-300"
                            download="Resume.pdf" // File name for the downloaded PDF
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

Header.propTypes = {
    activeSection: PropTypes.string.isRequired,
};

export default Header;