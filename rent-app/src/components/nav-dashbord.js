import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
            </button>

            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7146 19.5C10.7146 20.3284 10.0239 21 9.17176 21C8.31967 21 7.62891 20.3284 7.62891 19.5" stroke="white" strokeWidth="1" strokeLinecap="round" className="my-path"></path>
                            <path d="M16.8865 19.5C16.8865 20.3284 16.1957 21 15.3436 21C14.4915 21 13.8008 20.3284 13.8008 19.5" stroke="white" strokeWidth="1" strokeLinecap="round" className="my-path"></path>
                            <path d="M3.51429 6L4.96114 13.7354C5.25319 15.2968 5.39921 16.0775 5.95475 16.5387C6.51029 17 7.30451 17 8.89296 17H15.6218C17.2103 17 18.0046 17 18.5601 16.5387C19.1157 16.0774 19.2617 15.2967 19.5537 13.7352L20.1146 10.7352C20.5248 8.54152 20.7299 7.44469 20.1301 6.72234C19.5303 6 18.4144 6 16.1827 6H3.51429ZM3.51429 6L3 3" stroke="white" strokeWidth="1" strokeLinecap="round" className="my-path"></path>
                            </svg>
                        </Link>
                    </li>





                    <li>
                    <button
                        id="dropdownNavbarLink"
                        data-dropdown-toggle="dropdownNavbar"
                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                        Добавить +
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Добавить обьект</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Добвить расход</Link>
                        </li>
                        </ul>
                        <div className="py-1">
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                        </div>
                    </div>
                    </li>

                    <li>
                    <Link href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Имя пользователя</Link>
                    </li>
                </ul>



            </div>
        </div>
    </nav>
  );
};

export default Navbar;

