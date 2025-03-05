import React, { useState } from 'react';

const PaymentsComponent = () => {
  // Пример данных
  const [data] = useState([
    { date: '2025-03-01', booking: 'Бронь 1', amount: 15000, invoice: 'Счет 001', comment: 'Комментарий 1', user: 'Пользователь 1' },
    { date: '2025-03-02', booking: 'Бронь 2', amount: 20000, invoice: 'Счет 002', comment: 'Комментарий 2', user: 'Пользователь 2' },
    { date: '2025-03-03', booking: 'Бронь 3', amount: 12000, invoice: 'Счет 003', comment: 'Комментарий 3', user: 'Пользователь 3' },
    { date: '2025-03-04', booking: 'Бронь 4', amount: 18000, invoice: 'Счет 004', comment: 'Комментарий 4', user: 'Пользователь 4' },
  ]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  // Фильтрация данных по датам
  const filteredData = data.filter((row) => {
    const rowDate = new Date(row.date);
    const isWithinDateRange = (!startDate || rowDate >= new Date(startDate)) && 
                              (!endDate || rowDate <= new Date(endDate));
    return isWithinDateRange;
  });

  // Подсчет итоговой суммы
  const totalAmount = filteredData.reduce((sum, row) => sum + row.amount, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Оплаты</h1>
      
      <div className="mb-4">
        <label className="mr-2">Созданы с:</label>
        <input 
          type="date" 
          value={startDate} 
          onChange={handleStartDateChange} 
          className="border border-gray-300 rounded p-2"
        />
        <label className="mx-2">по:</label>
        <input 
          type="date" 
          value={endDate} 
          onChange={handleEndDateChange} 
          className="border border-gray-300 rounded p-2"
        />
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Когда</th>
            <th className="border border-gray-300 px-4 py-2">Бронь</th>
            <th className="border border-gray-300 px-4 py-2">Сумма</th>
            <th className="border border-gray-300 px-4 py-2">Счет</th>
            <th className="border border-gray-300 px-4 py-2">Комментарий</th>
            <th className="border border-gray-300 px-4 py-2">Пользователь</th>
            <th className="border border-gray-300 px-4 py-2">Списать</th>
            <th className="border border-gray-300 px-4 py-2">Действие</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{row.date}</td>
              <td className="border border-gray-300 px-4 py-2">{row.booking}</td>
              <td className="border border-gray-300 px-4 py-2">{row.amount}</td>
              <td className="border border-gray-300 px-4 py-2">{row.invoice}</td>
              <td className="border border-gray-300 px-4 py-2">{row.comment}</td>
              <td className="border border-gray-300 px-4 py-2">{row.user}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Списать</button>
              </td>
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

export default PaymentsComponent; // Убедитесь, что эта строка присутствует

