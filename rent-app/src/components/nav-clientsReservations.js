"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const SidebarMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Индекс активного элемента

  const menuItems = [
    {
      href: "/dashboard/clientsReservations/checkin-checkout",
      label: "Заезды / Выезды",
      icon: (
        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 20.0024V15.0024M8 20.0024C8 20.5547 8.44772 21.0024 9 21.0024H15C15.5523 21.0024 16 20.5547 16 20.0024M8 20.0024H3C2.44772 20.0024 2 19.5547 2 19.0024V15.0024C2 13.3456 3.34315 12.0024 5 12.0024C6.65685 12.0024 8 13.3456 8 15.0024M16 20.0024V15.0024M16 20.0024H21C21.5523 20.0024 22 19.5547 22 19.0024V15.0024C22 13.3456 20.6569 12.0024 19 12.0024C17.3431 12.0024 16 13.3456 16 15.0024M16 15.0024C16 13.3456 14.6569 12.0024 13 12.0024H11C9.34315 12.0024 8 13.3456 8 15.0024M15 6.00244C15 7.6593 13.6569 9.00244 12 9.00244C10.3431 9.00244 9 7.6593 9 6.00244C9 4.34559 10.3431 3.00244 12 3.00244C13.6569 3.00244 15 4.34559 15 6.00244ZM6.5 7.50244C6.5 8.33087 5.82843 9.00244 5 9.00244C4.17157 9.00244 3.5 8.33087 3.5 7.50244C3.5 6.67401 4.17157 6.00244 5 6.00244C5.82843 6.00244 6.5 6.67401 6.5 7.50244ZM20.5 7.50244C20.5 8.33087 19.8284 9.00244 19 9.00244C18.1716 9.00244 17.5 8.33087 17.5 7.50244C17.5 6.67401 18.1716 6.00244 19 6.00244C19.8284 6.00244 20.5 6.67401 20.5 7.50244Z" stroke="white" />
        </svg>
      ),
    },
    {
      href: "/dashboard/clientsReservations/clients",
      label: "Клиенты",
      icon: (
        <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.              3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
      ),
    },
    {
      href: "/dashboard/clientsReservations/reservations",
      label: "Брони",
      icon: (
        <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm0 18A8 8 0 1 1 18 10 8 8 0 0 1 10 18z" />
          <path d="M10 5a5 5 0 1 0 5 5A5 5 0 0 0 10 5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
        </svg>
      ),
    },
    // Добавьте другие элементы меню аналогичным образом
  ];

  return (
    <div className="sidebar-menu">
      <ul className="flex flex-col">
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <Link href={item.href}>
            <button
              className={`flex items-center justify-between p-2 rounded-lg transition-colors duration-200 w-full 
                bg-gray-800 text-white hover:bg-blue-700 hover:text-white`}
              onClick={() => setActiveIndex(index)}
            >

                <div className="flex items-center">
                  {item.icon}
                  {item.label}
                </div>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;

