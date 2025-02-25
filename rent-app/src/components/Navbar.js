// components/Layout.js
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Боковая панель меню */}
      <nav className="w-64 bg-gray-800 text-white p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-4">Панель управления</h1>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard/calendar" className="block p-2 hover:bg-gray-700 rounded">
                Календарь
              </Link>
            </li>
            <li>
              <Link href="/dashboard/clients" className="block p-2 hover:bg-gray-700 rounded">
                Клиенты и бронь
              </Link>
            </li>
            <li>
              <Link href="/dashboard/partners" className="block p-2 hover:bg-gray-700 rounded">
                Партнеры
              </Link>
            </li>
            <li>
              <Link href="/dashboard/channel-manager" className="block p-2 hover:bg-gray-700 rounded">
                Менеджер каналов
              </Link>
            </li>
            <li>
              <Link href="/dashboard/statistics" className="block p-2 hover:bg-gray-700 rounded">
                Статистика
              </Link>
            </li>
          </ul>
        </div>

        {/* Ссылки внизу */}
        <div className="mt-auto">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard/settings" className="block p-2 hover:bg-gray-700 rounded">
                Настройки
              </Link>
            </li>
            <li>
              <Link href="/dashboard/knowledge-base" className="block p-2 hover:bg-gray-700 rounded">
                База знаний
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Основное содержимое */}
      <div className="flex-grow p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout; // Убедитесь, что это строка присутствует
