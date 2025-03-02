import React, { useState } from 'react';

const AddExpense = ({ isOpen, onClose }) => {
    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [comments, setComments] = useState('');
    const [isAgencyExpense, setIsAgencyExpense] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    if (!isOpen) return null;

    const handleAddExpense = () => {
        // Здесь вы можете добавить логику для добавления расхода
        console.log("Добавить расход:", { expenseName, amount, date, comments, isAgencyExpense });
        // Закрыть модальное окно после добавления (если нужно)
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                    &times;
                </button>
                <h2 className="text-lg">Добавление расхода</h2>
                
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Название новой статьи:</label>
                        <input 
                            type="text" 
                            value={expenseName} 
                            onChange={(e) => setExpenseName(e.target.value)} 
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            placeholder="Введите название статьи"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Сумма:</label>
                        <input 
                            type="number" 
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)} 
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            placeholder="Введите сумму"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Дата:</label>
                        <input 
                            type="date" 
                            value={date} 
                            onChange={(e) => setDate(e.target.value)} 
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Комментарии:</label>
                        <textarea 
                            value={comments} 
                            onChange={(e) => setComments(e.target.value)} 
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            placeholder="Введите комментарии"
                            rows="4"
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input 
                            type="checkbox" 
                            checked={isAgencyExpense} 
                            onChange={(e) => setIsAgencyExpense(e.target.checked)} 
                            className="mr-2"
                        />
                        <label className="text-gray-700">Общие расходы агентства</label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Поиск по названию:</label>
                        <input 
                            type="text" 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)} 
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            placeholder="Введите название для поиска"
                        />
                    </div>
                    <button 
                        type="button" 
                        onClick={handleAddExpense} // Обработчик для добавления расхода
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded ml-2"
                    >
                        Добавить расход
                    </button>
                    <button 
                        type="button" 
                        onClick={onClose} 
                        className="mt-2 bg-black text-white px-4 py-2 rounded ml-2"
                    >
                        Закрыть окно
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddExpense;
