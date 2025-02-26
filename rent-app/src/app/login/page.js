export default function Login() {
    return (
      <div class="flex items-center justify-center min-h-screen">
        <form class="max-w-sm w-full">
          <h1 class="text-center text-2xl font-bold mb-5">Вход</h1>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Ваша email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@email.com" required />
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Ваш пароль</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900">Запомни меня</label>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Войти</button>
          <br/><br/>
          <div class="flex items-center justify-center">
            <a href="/dashboard" class="text-white bg-red-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                ВРЕМЕННАЯ КНОПКА (будет удалена)
            </a>
          </div>


        </form>
      </div>

    );
  }
  