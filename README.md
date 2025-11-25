# 1Study Landing

Лендинг для платформы онлайн-школ 1Study.

## Стек

- Next.js 16
- TypeScript
- Tailwind CSS
- Vercel

## Запуск

```bash
npm install
npm run dev
```

## Деплой

Автоматический деплой на Vercel при пуше в main.

**Production:** https://1study.kz

## Структура

```
src/
├── app/
│   ├── layout.tsx      # SEO, метаданные, шрифты
│   ├── page.tsx        # Главная страница
│   └── globals.css     # Глобальные стили
├── components/
│   ├── Header.tsx      # Навигация
│   ├── Hero.tsx        # Главный экран
│   ├── Problems.tsx    # Проблемы
│   ├── Features.tsx    # Возможности
│   ├── VideoDemo.tsx   # Демо видео
│   ├── Testimonials.tsx # Отзывы
│   ├── AppDownload.tsx # Скачать приложение
│   ├── HowItWorks.tsx  # Как начать
│   ├── Pricing.tsx     # Тарифы
│   ├── FAQ.tsx         # Вопросы
│   ├── CTA.tsx         # Призыв к действию
│   ├── Footer.tsx      # Подвал
│   ├── LeadModal.tsx   # Форма заявки
│   └── LeadModalProvider.tsx
public/
├── testimonials/       # Фото клиентов
└── ...                 # Иконки, OG изображение
```

## Переменные окружения

```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=xxx
NEXT_PUBLIC_TELEGRAM_CHAT_ID=xxx
```

Заявки с формы отправляются в Telegram группу.

## Домен

- `1study.kz` → Vercel (этот лендинг)
- `app.1study.kz` → Firebase (Flutter приложение)
- `web.1study.kz` → Firebase (веб-версия)
