import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Dropdown() {
    const handleOpen = () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.paddingRight = '';
        document.documentElement.style.overflow = 'hidden';
    };

    const handleClose = () => {
        document.documentElement.style.paddingRight = '';
        document.documentElement.style.overflow = '';
    };
    return (
        <Menu as="div" className="relative inline-block text-right">
            <div>
                <MenuButton
                    onClick={handleOpen}
                    onBlur={handleClose}
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-teal-400/10 px-3 py-2 text-sm font-semibold text-teal-300 shadow-sm ring-1 ring-inset ring-teal-300 "> {/* add hover:bg-teal-100 if you want :> */}
                    Menu
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 text-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                className={`block px-4 py-2 text-sm ${
                                    active ? 'bg-blue-500 text-white' : 'text-gray-200'
                                }`}
                            >
                                <span className="group flex items-center w-fit">
                                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                                    About
                                </span>
                            </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({active}) => (
                            <a
                                href="#"
                                className={`block px-4 py-2 text-sm ${
                                    active ? 'bg-gray-700 text-white' : 'text-gray-200'
                                }`}
                            >
                                <span className="group flex items-center w-fit">
                                    <span
                                        className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                                    Experience
                                </span> </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({active}) => (
                            <a
                                href="#"
                                className={`block px-4 py-2 text-sm ${
                                    active ? 'bg-gray-700 text-white' : 'text-gray-200'
                                }`}
                            >
                                <span className="group flex items-center w-fit">
                                    <span
                                        className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                                    Projects
                                </span>
                            </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({active}) => (
                            <a
                                href="#"
                                className={`block px-4 py-2 text-sm ${
                                    active ? 'bg-gray-700 text-white' : 'text-gray-200'
                                }`}
                            >
                                <span className="group flex items-center w-fit">
                                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                                    Contact Me
                                </span>                            </a>
                        )}
                    </MenuItem>
                    {/*<MenuItem>*/}
                    {/*    {({ active }) => (*/}
                    {/*        <button*/}
                    {/*            className={`block w-full px-4 py-2 text-sm text-right ${*/}
                    {/*                active ? 'bg-gray-700 text-white' : 'text-gray-200'*/}
                    {/*            }`}*/}
                    {/*        >*/}
                    {/*            Resume*/}
                    {/*        </button>*/}
                    {/*    )}*/}
                    {/*</MenuItem>*/}
                </div>
            </MenuItems>
        </Menu>
    );
}

export default Dropdown;
