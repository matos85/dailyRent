"use client";
import React, { useState } from 'react';
import Layout from '../../../components/Navbar';
import Navbar from '../../../components/nav-dashbord';
import Balance from '../../../components/settings/Balance';
import Contacts from '../../../components/settings/Contacts';
import Employees from '../../../components/settings/Employees';
import PaymentProcessing from '../../../components/settings/PaymentProcessing';
import CRMIntegrations from '../../../components/settings/CRMIntegrations';
import Notifications from '../../../components/settings/Notifications';
import Seasons from '../../../components/settings/Seasons';
import Restrictions from '../../../components/settings/Restrictions';
import Sources from '../../../components/settings/Sources';
import EmailTemplates from '../../../components/settings/EmailTemplates';
import LivingRules from '../../../components/settings/LivingRules';
import BookingModule from '../../../components/settings/BookingModule';
import ColorAndSizes from '../../../components/settings/ColorsSizes';
import Profiles from '../../../components/settings/MyProfile';

const Settings = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [openMenu, setOpenMenu] = useState(null); // Состояние для отслеживания открытого меню

  const menuItems = [
    { label: 'Мой профайл', component: <Profiles /> }, // Новый пункт
    { label: 'Цвета и размер', component: <ColorAndSizes /> }, // Новый пункт
    { label: 'Агентство', submenu: [
        { label: 'Баланс', component: <Balance /> },
        { label: 'Контакты', component: <Contacts /> },
        { label: 'Сотрудники', component: <Employees /> },
        { label: 'Прием платежей', component: <PaymentProcessing /> },
        { label: 'CRM-интеграции', component: <CRMIntegrations /> },
    ]},
    { label: 'Бронь', submenu: [
        { label: 'Уведомления', component: <Notifications /> },
        { label: 'Сезоны', component: <Seasons /> },
        { label: 'Ограничения', component: <Restrictions /> },
        { label: 'Источники', component: <Sources /> },
        { label: 'Шаблоны писем', component: <EmailTemplates /> },
        { label: 'Правила проживания', component: <LivingRules /> },
        { label: 'Модуль бронирования', component: <BookingModule /> },
    ]},
  ];

  const handleMenuClick = (item) => {
    if (item.submenu) {
      // Если открыто другое меню, закрываем его
      setOpenMenu(openMenu === item.label ? null : item.label);
    } else {
      setActiveComponent(item.component);
      setOpenMenu(null); // Закрываем все меню при выборе элемента без подменю
    }
  };

  return (
    <Layout>
      <Navbar />
      <h1 className="text-2xl font-bold">Настройки</h1>
      <div className="flex">
        <nav className="bg-gray-800 text-white p-4 w-1/4">
          <h2 className="text-xl font-bold mb-4">Меню</h2>
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div
                  className="hover:bg-gray-700 hover:text-blue-300 cursor-pointer p-2 rounded transition duration-200"
                  onClick={() => handleMenuClick(item)}
                >
                  {item.label}
                </div>
                {item.submenu && openMenu === item.label && (
                  <ul className="flex flex-col space-y-2 pl-4">
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="hover:bg-gray-600 hover:text-blue-300 cursor-pointer p-2 rounded transition duration-200"
                        onClick={() => {
                          setActiveComponent(subItem.component);
                          setOpenMenu(null); // Закрываем меню при выборе подменю
                        }}
                      >
                        {subItem.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1 p-4">
          {activeComponent} {/* Отображаем активный компонент */}
        </div>
      </div>
    </Layout>
  );
};

export default Settings;

