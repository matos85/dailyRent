"use client"
import React, { useState } from 'react';

const ProfileComponent = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [browserNotifications, setBrowserNotifications] = useState(false);

  const handleSaveProfile = () => {
    // Логика для сохранения профиля
    console.log('Profile saved:', { firstName, lastName, phone, email, emailNotifications, browserNotifications });
  };

  const handleChangePassword = () => {
    // Логика для изменения пароля
    console.log('Password changed:', { oldPassword, newPassword, confirmPassword });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Мой профиль</h2>
      
      <div className="mb-6">
        <label className="block mb-2">
          Имя
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>
        
        <label className="block mb-2">
          Фамилия
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block mb-2">
          Телефон
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block mb-2">
          Электронная почта
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="mr-2"
          />
          <label>Отправлять уведомления на почту</label>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={browserNotifications}
            onChange={() => setBrowserNotifications(!browserNotifications)}
            className="mr-2"
          />
          <label>Отправлять уведомления в браузер</label>
        </div>

        <button
          onClick={handleSaveProfile}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Сохранить
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Сменить пароль</h2>

        <label className="block mb-2">
          Старый пароль
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block mb-2">
          Новый пароль
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block mb-2">
          Подтверждение пароля
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
  
          <button
            onClick={handleChangePassword}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Сохранить
          </button>
        </div>
      </div>
    );
  };
  
  export default ProfileComponent;
  
