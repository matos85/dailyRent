import Layout from '../../../../components/Navbar';
import Navbar from '../../../../components/nav-dashbord';
import SidebarMenu from '@/components/nav-clientsReservations'; 
import React from 'react';

const CheckinCheckout = () => {
  const reservations = [
    { object: "Отель Солнечный", checkIn: "2023-10-01", checkOut: "2023-10-05", contacts: "ivan@example.com", notes: "Поздний заезд", guests: 2, amount: 15000, source: "Сайт", manager: "Анна" },
    { object: "Гостевой дом Лесной", checkIn: "2023-10-02", checkOut: "2023-10-06", contacts: "+7 900 123 45 67", notes: "Нужна кухня", guests: 4, amount: 25000, source: "Реклама", manager: "Сергей" },
    { object: "Апартаменты на берегу", checkIn: "2023-10-03", checkOut: "2023-10-07", contacts: "petr@example.com", notes: "Ранний заезд", guests: 3, amount: 18000, source: "Соцсети", manager: "Елена" },
];
  return (
    <div>
      
      <Layout>
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Брони
      </h1>
      <div className="md:flex">
        <SidebarMenu />
        <div className="p-6 ml-4 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <div className="p-6 ml-4 bg-gray-800 rounded-lg w-full">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-white">
                <thead className="text-xs text-gray-300 uppercase bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">Объект</th>
                    <th scope="col" className="px-6 py-3">Заезд</th>
                    <th scope="col" className="px-6 py-3">Выезд</th>
                    <th scope="col" className="px-6 py-3">Контакты</th>
                    <th scope="col" className="px-6 py-3">Примечания</th>
                    <th scope="col" className="px-6 py-3">Гостей</th>
                    <th scope="col" className="px-6 py-3">Сумма</th>
                    <th scope="col" className="px-6 py-3">Источник</th>
                    <th scope="col" className="px-6 py-3">Менеджер</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation, index) => (
                    <tr key={index} className="bg-gray-800 border-b hover:bg-gray-700">
                      <td className="px-6 py-4">{reservation.object}</td>
                      <td className="px-6 py-4">{reservation.checkIn}</td>
                      <td className="px-6 py-4">{reservation.checkOut}</td>
                      <td className="px-6 py-4">{reservation.contacts}</td>
                      <td className="px-6 py-4">{reservation.notes}</td>
                      <td className="px-6 py-4">{reservation.guests}</td>
                      <td className="px-6 py-4">{reservation.amount} ₽</td>
                      <td className="px-6 py-4">{reservation.source}</td>
                      <td className="px-6 py-4">{reservation.manager}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-600 font-bold">
                    <td colSpan="7" className="px-6 py-4 text-right">ИТОГО:</td>
                    <td className="px-6 py-4">58000 ₽</td>
                    <td className="px-6 py-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>


    </Layout>
    </div>
  );
};

export default CheckinCheckout;
