// pages/checkin-checkout.js
import Layout from '../../../../components/Navbar';
import Navbar from '../../../../components/nav-dashbord';
import SidebarMenu from '@/components/nav-clientsReservations'; 
import React from 'react';

const CheckinCheckout = ({ label, value, onChange }) => {
  return (
    <div>
      
      <Layout>
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Заезды и выезды
      </h1>
      

      <div className="md:flex">
        <SidebarMenu />
        <div className="p-6 ml-4 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">{label}</label>
          <input
            type="date"
            value={value}
            onChange={onChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Время
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Квартира
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Контакты
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Примечания
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Файлы
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Даты проживания
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Сумма
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Оплачено
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Внесён залог
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              12:00
                          </th>
                          <td class="px-6 py-4">
                              Квартира 101
                          </td>
                          <td class="px-6 py-4">
                              +7 (999) 123-45-67
                          </td>
                          <td class="px-6 py-4">
                              Нет
                          </td>
                          <td class="px-6 py-4">
                              файл1.pdf
                          </td>
                          <td class="px-6 py-4">
                              01.01.2024 - 05.01.2024
                          </td>
                          <td class="px-6 py-4">
                              5000 руб
                          </td>
                          <td class="px-6 py-4">
                              Да
                          </td>
                          <td class="px-6 py-4">
                              1000 руб
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              15:30
                          </th>
                          <td class="px-6 py-4">
                              Квартира 202
                          </td>
                          <td class="px-6 py-4">
                              +7 (999) 987-65-43
                          </td>
                          <td class="px-6 py-4">
                              Поздний заезд
                          </td>
                          <td class="px-6 py-4">
                              файл2.pdf
                          </td>
                          <td class="px-6 py-4">
                              10.01.2024 - 12.01.2024
                          </td>
                          <td class="px-6 py-4">
                              3000 руб
                          </td>
                          <td class="px-6 py-4">
                              Нет
                          </td>
                          <td class="px-6 py-4">
                              500 руб
                          </td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              18:00
                          </th>
                          <td class="px-6 py-4">
                              Квартира 303
                          </td>
                          <td class="px-6 py-4">
                              +7 (999) 456-78-90
                          </td>
                          <td class="px-6 py-4">
                          Уборка через день
                          </td>
                          <td class="px-6 py-4">
                              файл3.pdf
                          </td>
                          <td class="px-6 py-4">
                              15.01.2024 - 20.01.2024
                          </td>
                          <td class="px-6 py-4">
                              7000 руб
                          </td>
                          <td class="px-6 py-4">
                              Да
                          </td>
                          <td class="px-6 py-4">
                              1500 руб
                          </td>
                      </tr>
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
