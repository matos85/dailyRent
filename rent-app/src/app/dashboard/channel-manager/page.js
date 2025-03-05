"use client"
// pages/dashboard/channel-manager.js
import Layout from '../../../components/Navbar'; // Проверьте путь
import Navbar from '../../../components/nav-dashbord';
import { useState } from 'react';

const ChannelManager = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Layout>
      <Navbar />
      <h1 className="text-2xl font-bold">Менеджер каналов</h1>
      
      {/* Контейнер с поиском и таблицей */}
      <div className="flex mt-4">
        {/* Левая часть с поиском и таблицей */}
        <div className="w-1/2 pr-4">
          {/* Поле поиска */}
          <input
            type="text"
            placeholder="Поиск по ID, названию, адресу"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded p-2 w-full mb-4" // Добавлен отступ снизу
          />
          
          {/* Таблица с каналами */}
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Объект</th>
                <th className="border border-gray-300 p-2">Каналы</th>
                <th className="border border-gray-300 p-2">Действия</th>
              </tr>
            </thead>
            <tbody>
              {/* Пример данных */}
              <tr>
                <td className="border border-gray-300 p-2">Горького 1</td>
                <td className="border border-gray-300 p-2">Нет интеграций</td>
                <td className="border border-gray-300 p-2">
                  <a href="#" className="text-blue-500">+ link</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Горького 2</td>
                <td className="border border-gray-300 p-2">Нет интеграций</td>
                <td className="border border-gray-300 p-2">
                  <a href="#" className="text-blue-500">+ link</a>
                </td>
              </tr>
              {/* Добавьте больше строк по мере необходимости */}
            </tbody>
          </table>
        </div>

        {/* Правая часть с интеграцией */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center mb-4">
            <p className="text-sm text-center mb-2">Получайте больше броней, подключив</p>
            <img className="mb-2" src="/images\yandex.png" alt="Yandex Travel Logo" />
            <button className="btn btn-sm btn-primary bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
              Настроить интеграцию
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChannelManager; // Убедитесь, что эта строка присутствует
