// src/app/Add/AddConveniences/page.js
"use client"; // Add this line at the beginning of the file

import Layout from '../../../components/Navbar';
import Navbar from '../../../components/nav-dashbord';
import { useRouter } from 'next/navigation'; // Импортируем useRouter

const AddConveniences = () => {
  const router = useRouter(); // Инициализация роутера

  const handleNext = () => {
    router.push('/Add/AddServiceSettings'); // Переход на страницу "Служебные"
  };

  return (
    <Layout>
      <Navbar />
      <h1 className="text-2xl font-bold">Удобства</h1>
      {/* Здесь можно добавить остальное содержимое страницы */}
      
      <button 
        onClick={handleNext} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Далее
      </button>
    </Layout>
  );
};

export default AddConveniences;
