import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables); // Регистрация необходимых компонентов

const FinanceComponent = () => {
  const data = [
    { object: "Объект 1", income: 101000, dailyIncome: 2500, expenses: 3482.76, profit: 96617.24, commission: 200, downtime: 2, avgStayDuration: 3 },
    { object: "Объект 2", income: 120000, dailyIncome: 3000, expenses: 5000, profit: 115000, commission: 250, downtime: 1, avgStayDuration: 2 },
    { object: "Объект 3", income: 90000, dailyIncome: 2200, expenses: 4000, profit: 86000, commission: 150, downtime: 3, avgStayDuration: 4 },
  ];

  const chartData = {
    labels: data.map(item => item.object),
    datasets: [
      {
        label: 'Доходы',
        data: data.map(item => item.income),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Расходы',
        data: data.map(item => item.expenses),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  // Подсчет итоговых значений
  const totalIncome = data.reduce((acc, item) => acc + item.income, 0);
  const totalExpenses = data.reduce((acc, item) => acc + item.expenses, 0);
  const totalProfit = totalIncome - totalExpenses;
  const totalCommission = data.reduce((acc, item) => acc + item.commission, 0);
  const totalDowntime = data.reduce((acc, item) => acc + item.downtime, 0);
  const totalAvgStayDuration = data.reduce((acc, item) => acc + item.avgStayDuration, 0); // Сумма всех значений
  const avgStayDuration = (totalAvgStayDuration / data.length).toFixed(2); // Среднее значение

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">График доходов и расходов</h2>
      <Bar data={chartData} options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Доходы и расходы за указанный период',
          },
        },
      }} />

      <h1 className="text-2xl font-bold mb-4 mt-8">Финансовая статистика</h1>
      <table className="min-w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Объект</th>
            <th className="border border-gray-300 px-4 py-2">Доход</th>
            <th className="border border-gray-300 px-4 py-2">Среднесуточный доход</th>
            <th className="border border-gray-300 px-4 py-2">Расходы</th>
            <th className="border border-gray-300 px-4 py-2">Прибыль</th>
            <th className="border border-gray-300 px-4 py-2">Комиссия площадок</th>
            <th className="border border-gray-300 px-4 py-2">Простоев</th>
            <th className="border border-gray-300 px-4 py-2">Ср. длительность проживания</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border border-gray-300 px-4 py-2">{row.object}</td>
              <td className="border border-gray-300 px-4 py-2">{row.income}</td>
              <td className="border border-gray-300 px-4 py-2">{row.dailyIncome}</td>
              <td className="border border-gray-300 px-4 py-2">{row.expenses}</td>
              <td className="border border-gray-300 px-4 py-2">{row.profit}</td>
              <td className="border border-gray-300 px-4 py-2">{row.commission}</td>
              <td className="border border-gray-300 px-4 py-2">{row.downtime}</td>
              <td className="border border-gray-300 px-4 py-2">{row.avgStayDuration}</td>
            </tr>
          ))}
          <tr className="font-bold bg-gray-200">
            <td className="border border-gray-300 px-4 py-2">Итого</td>
            <td className="border border-gray-300 px-4 py-2">{totalIncome}</td>
            <td className="border border-gray-300 px-4 py-2">{(totalIncome / data.length).toFixed(2)}</td>
            <td className="border border-gray-300 px-4 py-2">{totalExpenses}</td>
            <td className="border border-gray-300 px-4 py-2">{totalProfit}</td>
            <td className="border border-gray-300 px-4 py-2">{totalCommission}</td>
            <td className="border border-gray-300 px-4 py-2">{totalDowntime}</td>
            <td className="border border-gray-300 px-4 py-2">{totalAvgStayDuration}</td> {/* Общее значение */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinanceComponent; // Экспортируем компонент

