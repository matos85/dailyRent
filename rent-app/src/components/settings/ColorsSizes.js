"use client"
import React, { useState } from 'react';

// Генерация случайных цветов
const generateRandomColors = () => {
  const colors = [];
  for (let i = 0; i < 12; i++) {
    colors.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
  }
  return colors;
};

const SettingsComponent = () => {
  const [selectedButton, setSelectedButton] = useState('Заявка');
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#28a745'); // Зеленый по умолчанию
  const colors = generateRandomColors();

  const handleButtonClick = (buttonName, defaultColor) => {
    setSelectedButton(buttonName);
    setSelectedColor(defaultColor);
    setShowColors(false);
  };

  const handleSaveColors = () => {
    // Логика для сохранения выбранных цветов
    console.log('Цвета сохранены:', selectedButton, selectedColor);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Цвета и размер в оформлении</h2>
      <h3 className="text-lg mb-2">Цвета по умолчанию для Всех</h3>
      
      <div className="flex space-x-4 mb-4">
        {['Заявка', 'Бронь', 'Отменено', 'Удалено'].map((button, index) => {
          const colorsMap = {
            'Заявка': '#28a745', // Зеленый
            'Бронь': '#dc3545', // Красный
            'Отменено': '#6c757d', // Серый
            'Удалено': '#007bff', // Синий
          };
          const color = colorsMap[button];
          
          return (
            <div key={index} className="relative">
              <button
                onClick={() => {
                  setShowColors(!showColors);
                  handleButtonClick(button, color);
                }}
                className={`bg-${color} text-white py-2 px-4 rounded flex items-center`}
              >
                {button} <span className="ml-2">▼</span>
              </button>
              {showColors && (
                <div className="absolute z-10 bg-white border border-gray-300 mt-1 rounded shadow-lg">
                  {colors.map((color, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedColor(color);
                        setShowColors(false);
                      }}
                      className="cursor-pointer p-2 hover:bg-gray-200"
                      style={{ backgroundColor: color }}
                    >
                      <span className="text-white">{selectedButton === button ? '✔' : ''}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={handleSaveColors}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Сохранить
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Что показывать на шахматке Лично Вам</h2>

        <div className="mb-4">
          <label className="block mb-2">Занятость объекта</label>
          <select className="block w-full border border-gray-300 rounded-md p-2">
            <option>С начала дня</option>
            <option>С середины дня</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Размер клеток</label>
          <select className="block w-full border border-gray-300 rounded-md p-2">
            <option>Маленькие клетки</option>
            <option>Средние клетки</option>
            <option>Большие клетки</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Цвет фона</label>
          <select className="block w-full border border-gray-300 rounded-md p-2">
            <option>Белый</option>
            <option>Серый</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Левая граница шахматки</label>
          <select className="block w-full border border-gray-300 rounded-md p-2">
            <option>С сегодняшней даты</option>
            <option>3 предыдущих дня</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Объектов на странице</label>
          <select className="block w-full border border-gray-300 rounded-md p-2">
            <option>Все</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Настройки отображения:</label>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="highlightToday" className="mr-2" />
            <label htmlFor="highlightToday">Выделять сегодняшний день красной линией</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="verticalLines" className="mr-2" />
            <label htmlFor="verticalLines">Вертикальные линии у клеток</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="showPrices" className="mr-2" />
            <label htmlFor="showPrices">Цены в клетках</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="priceReduction" className="mr-2" />
            <label htmlFor="priceReduction">Сокращение цены на шахматке</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="debtIndicator" className="mr-2" />
            <label htmlFor="debtIndicator">Долг на графике</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="paymentIndicator" className="mr-2" />
            <label htmlFor="paymentIndicator">Индикатор оплаты</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="bookingSources" className="mr-2" />
            <label htmlFor="bookingSources">Источники броней</label>
          </div>
        </div>

        <button
          onClick={() => {
            // Логика для сохранения настроек шахматки
            console.log('Настройки шахматки сохранены');
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default SettingsComponent;

