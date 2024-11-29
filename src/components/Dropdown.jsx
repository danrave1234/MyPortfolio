import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

function Dropdown({ isOpen, toggleMenu, activeSection }) {
    const menuItems = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact Me' },
    ];

    return (
        <Menu as="div" className="relative inline-block text-right">
            <div>
                <Menu.Button
                    onClick={toggleMenu}
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-teal-400/10 px-3 py-2 text-sm font-semibold text-teal-300 shadow-sm ring-1 ring-inset ring-teal-300 hover:bg-teal-400/20 transition-colors duration-300"
                >
                    Menu
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {menuItems.map((item) => (
                            <Menu.Item key={item.href}>
                                {({ active }) => (
                                    <a
                                        href={item.href}
                                        className={`block px-4 py-2 text-sm ${
                                            active || activeSection === item.href.slice(1)
                                                ? 'bg-gray-700 text-white'
                                                : 'text-gray-200'
                                        }`}
                                        onClick={toggleMenu}
                                    >
                    <span className="group flex items-center w-fit">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                        {item.label}
                    </span>
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

export default Dropdown;

