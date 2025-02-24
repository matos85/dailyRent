# dailyRent
daily rent of apartments / посуточная сдача квартир

Объяснение структуры
Папка app: Здесь находятся страницы вашего приложения. Каждая страница имеет свой собственный каталог, где находится файл page.js, который экспортирует компоненты для отображения. Это позволяет легко управлять маршрутизацией и вложенными страницами.

Файл layout.js: Этот файл используется для определения общего макета вашего приложения, который будет применяться ко всем страницам внутри папки app. Здесь вы можете добавить навигационную панель, футер и другие общие компоненты.

Компоненты: Папка components остается без изменений, где вы можете хранить переиспользуемые компоненты, такие как модальные окна и навигационная панель.

Утилиты: Папка utils для хранения функций и конфигураций, таких как API.

rent-app/
├── public/
│   ├── images/             # Папка для изображений
│   └── ...                 # Другие статические файлы
├── src/
│   ├── app/                # Страницы приложения
│   │   ├── layout.js        # Основной макет приложения
│   │   ├── page.js          # Главная страница
│   │   ├── login/           # Страница авторизации
│   │   │   └── page.js
│   │   ├── register/        # Страница регистрации
│   │   │   └── page.js
│   │   ├── dashboard/       # Панель управления
│   │   │   ├── page.js
│   │   │   ├── calendar/    # Страница Календаря
│   │   │   │   └── page.js
│   │   │   ├── clients/     # Страница Клиентов и Брони
│   │   │   │   └── page.js
│   │   │   ├── partners/     # Страница Партнеров
│   │   │   │   └── page.js
│   │   │   ├── channel-manager/ # Страница Менеджера Каналов
│   │   │   │   └── page.js
│   │   │   ├── statistics/   # Страница Статистики
│   │   │   │   └── page.js
│   │   │   ├── cart/         # Страница Корзины
│   │   │   │   └── page.js
│   │   │   ├── settings/      # Страница Настроек
│   │   │   │   └── page.js
│   │   │   └── knowledge-base/ # Страница Базы Знаний
│   │   │       └── page.js
│   ├── components/         # Переиспользуемые компоненты
│   │   ├── Modal/          # Модальные окна
│   │   │   ├── AddObject.js
│   │   │   └── AddExpense.js
│   │   └── Navbar.js       # Навигационная панель
│   ├── styles/             # Стили приложения
│   │   └── globals.css     # Глобальные стили
│   ├── utils/              # Утилиты и конфигурации
│   │   └── api.js          # Конфигурация API
├── .eslintrc.json          # Конфигурация ESLint
├── tailwind.config.js      # Конфигурация Tailwind CSS
├── postcss.config.js       # Конфигурация PostCSS
├── package.json            # Файл зависимостей
└── README.md               # Документация проекта


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

