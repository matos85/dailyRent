import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Боковая панель меню */}
      <nav className="w-64 bg-gray-800 text-white p-4">
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
        </ul>
      </nav>

      {/* Основное содержимое */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold">Основное содержимое</h1>
        {/* Здесь будет динамическое содержимое, загружаемое через маршрутизацию */}
      </div>
    </div>
  );
}
