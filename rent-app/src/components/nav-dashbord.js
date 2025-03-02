"use client"; // Add this line at the beginning of the file

import React, { useState } from 'react'; // Импортируйте useState
import { useRouter } from 'next/navigation'; // Correct import for App Router

// import AddExpense from '../../modal/AddExpense'; // Путь может быть другим, проверьте его
import AddExpense from '../components/modal/AddExpense';


const Navbar = () => {
    const router = useRouter(); // Инициализация роутера
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для управления модальным окном

    const openModal = () => {
        setIsModalOpen(true); // Функция для открытия модального окна
    };

    const closeModal = () => {
        setIsModalOpen(false); // Функция для закрытия модального окна
    };

    const navigateToAddObject = () => {
        router.push('Add/AddObject'); // Переход на страницу добавления объекта
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse"></a>
                <button 
                    data-collapse-toggle="navbar-dropdown" 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-dropdown" 
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="flex items-center">
                            <a href="#" className="flex items-center block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                    <path d="M3 12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4H13C16.7712 4 18.6569 4 19.8284 5.17157C21 6.34315 21 8.22876 21 12C21 15.7712 21 17.6569 19.8284 18.8284C18.6569 20 16.7712 20 13 20H11C7.22876 20 5.34315 20 4.17157 18.8284C3 17.6569 3 15.7712 3 12Z" stroke="white" />
                                    <path d="M3.54883 6.73307L7.76733 9.36198C9.82587 10.6448 10.8551 11.2863 11.9998 11.2861C13.1445 11.2859 14.1736 10.6441 16.2317 9.36063L20.461 6.72314" stroke="white" />
                                </svg>
                                Корзина
                            </a>
                        </li>
                        <li className="relative group"> 
                            <button 
                                id="dropdownNavbarLink" 
                                data-dropdown-toggle="dropdownNavbar" 
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                                + Добавить...
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            
                            <div id="dropdownNavbar" className={`absolute z-10 hidden group-hover:block font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a onClick={navigateToAddObject} 
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Добавить объект
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={openModal} // Здесь теперь используется openModal
                                        >
                                            Добавить расход
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Тут имя пользователя
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Компонент модального окна */}
            <AddExpense isOpen={isModalOpen} onClose={closeModal} />
        </nav>
    );
};

export default Navbar;



