"use client"
import Layout from '../../../components/Navbar';
import Navbar from '../../../components/nav-dashbord';
import { useState } from 'react';

import ExpensesComponent from './Expenses/page'; // Импортируем компонент из указанного пути
import FinanceComponent from './Finance/page';
import SourcesComponent from './Sources/page';
import PaymentsComponent from './Payments/page';

const Statistics = () => {
  const [activeTab, setActiveTab] = useState('finance'); // Начальное состояние для отслеживания активной вкладки

  const renderComponent = () => {
    switch (activeTab) {
      case 'finance':
        return <FinanceComponent />;
      case 'sources':
        return <SourcesComponent />;
      case 'payments':
        return <PaymentsComponent />;
      case 'expenses':
        return <ExpensesComponent />;
      default:
        return <FinanceComponent />;
    }
  };

  return (
    <Layout>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Статистика</h1>

      {/* Вкладки навигации */}
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <li className="me-2">
          <a 
            onClick={() => setActiveTab('finance')} 
            className={`inline-block p-4 rounded-t-lg ${activeTab === 'finance' ? 'text-blue-600 bg-gray-100' : 'hover:text-gray-600 hover:bg-gray-50'} cursor-pointer`}
          >
            Финансы
          </a>
        </li>
        <li className="me-2">
          <a 
            onClick={() => setActiveTab('sources')} 
            className={`inline-block p-4 rounded-t-lg ${activeTab === 'sources' ? 'text-blue-600 bg-gray-100' : 'hover:text-gray-600 hover:bg-gray-50'} cursor-pointer`}
          >
            Источники
          </a>
        </li>
        <li className="me-2">
          <a 
            onClick={() => setActiveTab('payments')} 
            className={`inline-block p-4 rounded-t-lg ${activeTab === 'payments' ? 'text-blue-600 bg-gray-100' : 'hover:text-gray-600 hover:bg-gray-50'} cursor-pointer`}
          >
            Оплаты
          </a>
        </li>
        <li>
          <a 
            onClick={() => setActiveTab('expenses')} 
            className={`inline-block p-4 rounded-t-lg ${activeTab === 'expenses' ? 'text-blue-600 bg-gray-100' : 'hover:text-gray-600 hover:bg-gray-50'} cursor-pointer`}
          >
            Расходы
          </a>
        </li>
      </ul>

      {/* Отображение компонента в зависимости от выбранной вкладки */}
      <div className="mt-4">
        {renderComponent()}
      </div>

      {/* Здесь можно добавить остальное содержимое страницы */}
    </Layout>
  );
};

export default Statistics;
