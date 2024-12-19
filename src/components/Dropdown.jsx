import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

import PropTypes from 'prop-types';

function Dropdown({ toggleMenu, activeSection, handleNavClick }) {
    const menuItems = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact Me' },
    ];

    // Get label for the current active section
    const getCurrentLabel = () => {
        const currentItem = menuItems.find((item) => item.href.slice(1) === activeSection);
        return currentItem ? currentItem.label : 'Menu'; // Default to "Menu" if no active section
    };

    return (
        <Menu as="div" className="relative inline-block text-right">
            <div>
                <Menu.Button
                    onClick={toggleMenu}
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-teal-400/10 px-3 py-2 text-sm font-semibold text-teal-300 shadow-sm ring-1 ring-inset ring-teal-300 hover:bg-teal-400/20 transition-colors duration-300"
                >
                    {getCurrentLabel()} {/* Dynamically update label */}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-in-out duration-200"
                enterFrom="opacity-0 translate-y-2 scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-2 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-lg bg-gray-800 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {menuItems.map((item) => (
                            <Menu.Item key={item.href}>
                                {({ active }) => (
                                    <a
                                        href={item.href}
                                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                                            active || activeSection === item.href.slice(1)
                                                ? 'bg-teal-400 text-gray-900'
                                                : 'text-gray-300 hover:bg-teal-500 hover:text-white'
                                        }`}
                                        onClick={(e) => {
                                            handleNavClick(e, item.href);
                                            toggleMenu();
                                        }}
                                    >
                            <span
                                className={`mr-3 inline-flex h-6 w-6 items-center justify-center rounded-md bg-teal-600 text-white ${
                                    active ? 'bg-teal-700' : 'bg-teal-400'
                                }`}
                            >
                                {item.label.charAt(0)}
                            </span>
                                        {item.label}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

Dropdown.propTypes = {

    toggleMenu: PropTypes.func.isRequired,
    activeSection: PropTypes.string.isRequired,
    handleNavClick: PropTypes.func.isRequired,
};

export default Dropdown;