# TODO - 1Study Landing

## SEO и мета-теги

- [ ] **Favicon** - создать и добавить:
  - `public/favicon.ico` (16x16, 32x32)
  - `public/icon.svg` (SVG версия)
  - `public/apple-touch-icon.png` (180x180)

- [ ] **OG Image** - создать `public/og-image.png`:
  - Размер: 1200x630px
  - Логотип 1Study + слоган
  - Используется при шаринге в соцсетях

- [ ] **manifest.json** - для PWA поддержки:
  ```json
  {
    "name": "1Study",
    "short_name": "1Study",
    "icons": [...],
    "theme_color": "#6366f1",
    "background_color": "#030712"
  }
  ```

- [ ] **Верификация поисковиков**:
  - Google Search Console - добавить meta тег
  - Yandex Webmaster - добавить meta тег

## Контент

- [ ] **Демо видео** - добавить в VideoDemo.tsx:
  - Записать демо платформы (2-3 мин)
  - Загрузить на YouTube
  - Вставить embed код

- [ ] **Фото клиентов** - улучшить качество:
  - Текущие: aksultan.jpg, kuanysh.jpg, ako.jpg
  - Желательно квадратные, минимум 200x200px

## Домен

- [x] **DNS настройка** - в ps.kz: ✅ ГОТОВО
  - A запись: `76.76.21.21`

- [x] **SSL** - Vercel автоматически выдал ✅ ГОТОВО

## Аналитика

- [ ] **Google Analytics** - добавить GA4 трекинг
- [ ] **Yandex Metrika** - добавить счетчик
- [ ] **Facebook Pixel** - если будет реклама

## Улучшения (опционально)

- [ ] Анимации при скролле (AOS или Framer Motion)
- [ ] Страница политики конфиденциальности
- [ ] Страница условий использования
- [ ] Блог/кейсы клиентов
- [ ] Калькулятор экономии от пиратства
- [ ] Интеграция с CRM (Bitrix24, AmoCRM)

## Тестирование

- [ ] Проверить форму заявки → Telegram
- [ ] Проверить на мобильных устройствах
- [ ] PageSpeed Insights - оптимизация
- [ ] Lighthouse SEO аудит
