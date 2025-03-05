"use client"
import Layout from '../../../components/Navbar';
import Navbar from '../../../components/nav-dashbord';
import { useState } from 'react';

const Partners = () => {
  const [filter, setFilter] = useState('');

  return (
    <Layout>
      <Navbar />
      <h1 className="text-2xl font-bold">Партнеры</h1>

      {/* Таблица с партнерами */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Партнеры</h2>
        <input
          type="text"
          placeholder="Фильтр..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded p-2 mb-4"
        />
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Партнер</th>
              <th className="border border-gray-300 p-2">Сайт</th>
              <th className="border border-gray-300 p-2">Статус</th>
            </tr>
          </thead>
          <tbody>
            {/* Здесь можно добавить данные партнеров */}
            <tr>
              <td className="border border-gray-300 p-2">Партнер 1</td>
              <td className="border border-gray-300 p-2">www.partner1.com</td>
              <td className="border border-gray-300 p-2">Активен</td>
            </tr>
            {/* Добавьте больше строк по мере необходимости */}
          </tbody>
        </table>
      </div>

      {/* Таблица с потенциальными партнерами */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Потенциальные партнеры</h2>
        <input
          type="text"
          placeholder="Фильтр..."
          className="border rounded p-2 mb-4"
        />
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Название</th>
              <th className="border border-gray-300 p-2">Сайт</th>
              <th className="border border-gray-300 p-2">Действия</th>
            </tr>
          </thead>
          <tbody>
            {/* Здесь можно добавить данные потенциальных партнеров */}
            <tr>
              <td className="border border-gray-300 p-2">Потенциальный партнер 1</td>
              <td className="border border-gray-300 p-2">www.potentialpartner1.com</td>
              <td className="border border-gray-300 p-2">Связаться</td>
            </tr>
            {/* Добавьте больше строк по мере необходимости */}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Partners;
