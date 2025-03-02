// pages/AddObj.js
"use client"; // Убедитесь, что это первая строка в файле

import Layout from '../../../components/Navbar';
import Navbar from '../../../components/nav-dashbord';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Импортируйте из next/navigation для новых версий

const AddObj = () => {
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [howToGetThere, setHowToGetThere] = useState('');
  const router = useRouter(); // Инициализация роутера

  const handleSearchMap = () => {
    console.log('Искать на карте для адреса:', address);
  };

  const handleNext = () => {
    router.push('/Add/AddFoto'); // Переход на страницу "Фотографии"
  };

  return (
    <Layout>
      <Navbar />
      <h1 className="text-2xl font-bold">Создание объекта</h1>

      <div className="mt-4">
        <label className="block text-gray-700">Адрес и описание</label>
        
        <div className="mb-4">
          <label className="block text-gray-700">Город (обязательно):</label>
          <input 
            type="text" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            placeholder="Введите город"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Адрес (обязательно):</label>
          <div className="flex">
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              placeholder="Введите адрес"
              required
            />
            <button 
              onClick={handleSearchMap} 
              className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
            >
              Искать на карте
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Описание:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            placeholder="Введите описание"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Как добраться:</label>
          <textarea 
            value={howToGetThere} 
            onChange={(e) => setHowToGetThere(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            placeholder="Введите информацию о том, как добраться"
            rows="4"
          />
        </div>

        <button 
          onClick={handleNext} 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Далее
        </button>
      </div>
    </Layout>
  );
};

export default AddObj;
