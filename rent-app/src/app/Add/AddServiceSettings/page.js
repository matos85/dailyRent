// src/app/Add/AddServiceSettings/page.js
"use client"; // Add this line at the beginning of the file

import Layout from '../../../components/Navbar';
import Navbar from '../../../components/nav-dashbord';

const AddServiceSettings = () => {
  const handleSave = () => {
    // Здесь можно добавить логику для сохранения данных
    console.log("Данные сохранены!"); // Пример логики
    // Вы можете сделать запрос к API или что-то другое
  };

  return (
    <Layout>
      <Navbar />
      <h1 className="text-2xl font-bold">Служебные</h1>
      {/* Здесь можно добавить остальное содержимое страницы */}
      
      <button 
        onClick={handleSave} 
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Добавить / Сохранить
      </button>
    </Layout>
  );
};

export default AddServiceSettings;
