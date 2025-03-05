export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="max-w-sm w-full">
        <h1 className="text-center text-2xl font-bold mb-5">Вход</h1>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Ваша email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@email.com" required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Ваш пароль</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Запомни меня</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Войти</button>
        <br/><br/>
        <div className="flex items-center justify-center">
          <a href="/dashboard/calendar" className="text-white bg-red-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            ВРЕМЕННАЯ КНОПКА (будет удалена). Для перехода на ПАНЕЛЬ УПРАВЛЕНИЯ пока нет авторизации/регистрации
          </a>
        </div>
      </form>
    </div>
  );
}
