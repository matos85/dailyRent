// pages/checkin-checkout.js
import Layout from '../../../../components/Navbar';
import Navbar from '../../../../components/nav-dashbord';
import SidebarMenu from '@/components/nav-clientsReservations'; 
import React from 'react';

const CheckinCheckout = () => {
  const reservations = [
      { name: "Иван Иванов", phone: "+7 900 123 45 67", email: "ivan@example.com", bookings: 5 },
      { name: "Петр Петров", phone: "+7 900 234 56 78", email: "petr@example.com", bookings: 3 },
      { name: "Светлана Светлова", phone: "+7 900 345 67 89", email: "svetlana@example.com", bookings: 10 },
      { name: "Алексей Алексеев", phone: "+7 900 456 78 90", email: "aleksey@example.com", bookings: 2 },
  ];

  return (
    <div>
      <Layout>
        <Navbar />
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Клиенты
        </h1>
        <div className="md:flex">
          <SidebarMenu />
          <div className="p-6 ml-4 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-white"> {/* Белый текст для таблицы */}
                <thead className="text-xs text-gray-300 uppercase bg-gray-700"> {/* Светлый текст для заголовков */}
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Имя
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Телефон
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Кол-во броней
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation, index) => (
                    <tr key={index} className="bg-gray-800 border-b hover:bg-gray-700"> {/* Темный фон для строк */}
                      <td className="px-6 py-4 font-medium whitespace-nowrap">
                        {reservation.name}
                      </td>
                      <td className="px-6 py-4">
                        {reservation.phone}
                      </td>
                      <td className="px-6 py-4">
                        {reservation.email}
                      </td>
                      <td className="px-6 py-4">
                        {reservation.bookings}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CheckinCheckout;

