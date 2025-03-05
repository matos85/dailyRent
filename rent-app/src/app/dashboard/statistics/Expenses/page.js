import React, { useState } from 'react';

const ExpensesComponent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([
    // Пример данных, замените на свои
    { id: 1, category: 'Продукты', date: '2023-01-15', amount: 200, apartments: '101', comment: 'Покупка еды', user: 'Иван' },
    { id: 2, category: 'Коммунальные услуги', date: '2023-02-10', amount: 1500, apartments: '102', comment: 'Оплата за свет', user: 'Мария' },
    // Добавьте больше данных по необходимости
  ]);

  const filteredData = data.filter(item => {
    const itemDate = new Date(item.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (!startDate || itemDate >= start) && (!endDate || itemDate <= end);
  });

  const totalAmount = filteredData.reduce((total, item) => total + item.amount, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold">Расходы</h1>
      <div className="mb-4">
        <label>
          Начальная дата:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="ml-2"
          />
        </label>
        <label className="ml-4">
          Конечная дата:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="ml-2"
          />
        </label>
      </div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Статья</th>
            <th className="border border-gray-300 px-4 py-2">Дата</th>
            <th className="border border-gray-300 px-4 py-2">Сумма</th>
            <th className="border border-gray-300 px-4 py-2">Квартиры</th>
            <th className="border border-gray-300 px-4 py-2">Комментарий</th>
            <th className="border border-gray-300 px-4 py-2">Пользователь</th>
            <th className="border border-gray-300 px-4 py-2">Действие</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.id}>
              <td className="border border-gray-300 px-4 py-2">{row.category}</td>
              <td className="border border-gray-300 px-4 py-2">{row.date}</td>
              <td className="border border-gray-300 px-4 py-2">{row.amount}</td>
              <td className="border border-gray-300 px-4 py-2">{row.apartments}</td>
              <td className="border border-gray-300 px-4 py-2">{row.comment}</td>
              <td className="border border-gray-300 px-4 py-2">{row.user}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">Действие</button>
              </td>
            </tr>
          ))}
          <tr className="font-bold">
            <td className="border border-gray-300 px-4 py-2" colSpan="2">Итого</td>
            <td className="border border-gray-300 px-4 py-2">{totalAmount}</td>
            <td className="border border-gray-300 px-4 py-2" colSpan="4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesComponent; // Убедитесь, что эта строка присутствует
