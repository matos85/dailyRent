import React, { useState } from 'react';

const SourcesComponent = () => {
  // Пример данных
  const [data] = useState([
    { source: 'Booking.com', bookings: 10, nights: 20, amount: 50000, canceled: 2 },
    { source: 'Airbnb', bookings: 5, nights: 15, amount: 30000, canceled: 1 },
    { source: 'Direct', bookings: 8, nights: 12, amount: 25000, canceled: 0 },
    // Добавьте больше данных по необходимости
  ]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Источники</h1>
      
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
            <th className="border border-gray-300 px-4 py-2">Источник</th>
            <th className="border border-gray-300 px-4 py-2">Кол-во броней</th>
            <th className="border border-gray-300 px-4 py-2">Ночей</th>
            <th className="border border-gray-300 px-4 py-2">Сумма, ₽</th>
            <th className="border border-gray-300 px-4 py-2">Отмененных</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{row.source}</td>
              <td className="border border-gray-300 px-4 py-2">{row.bookings}</td>
              <td className="border border-gray-300 px-4 py-2">{row.nights}</td>
              <td className="border border-gray-300 px-4 py-2">{row.amount}</td>
              <td className="border border-gray-300 px-4 py-2">{row.canceled}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SourcesComponent;
