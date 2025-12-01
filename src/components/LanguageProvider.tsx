"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "ru" | "en" | "kz";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Header
    "nav.features": "Возможности",
    "nav.pricing": "Тарифы",
    "nav.faq": "FAQ",
    "nav.login": "Войти",
    "nav.start": "Начать",

    // Hero
    "hero.badge": "43 онлайн-школы уже с нами",
    "hero.title.line1": "Платформа для",
    "hero.title.line2": "онлайн-школ",
    "hero.title.line3": "с защитой от пиратства",
    "hero.subtitle": "Мобильное приложение для ваших учеников. Нельзя сделать скриншот — контент защищён.",
    "hero.cta": "Попробовать 14 дней бесплатно",
    "hero.learnMore": "Узнать больше",
    "hero.stats.schools": "онлайн-школы",
    "hero.stats.students": "учеников",
    "hero.stats.launch": "на запуск",
    "hero.stats.hoursSuffix": "ч",

    // Problems
    "problems.label": "Проблемы",
    "problems.title": "Знакомые проблемы?",
    "problems.subtitle": "Другие платформы не решают главные боли онлайн-школ",
    "problems.1.icon": "🏴‍☠️",
    "problems.1.title": "Курсы сливают в Telegram",
    "problems.1.desc": "Ученики записывают экран и продают ваш контент за копейки",
    "problems.2.icon": "📧",
    "problems.2.title": "Email попадает в спам",
    "problems.2.desc": "Ученики не видят приглашение и не могут начать обучение",
    "problems.3.icon": "📱",
    "problems.3.title": "Нет мобильного приложения",
    "problems.3.desc": "Ученикам неудобно учиться с телефона через браузер",
    "problems.4.icon": "🌐",
    "problems.4.title": "Нет казахского языка",
    "problems.4.desc": "Платформы только на русском, а вам нужен қазақша",
    "problems.solution": "1Study решает все эти проблемы",

    // Features
    "features.label": "Возможности",
    "features.title": "Чего нет у конкурентов",
    "features.subtitle": "GetCourse, Courstore и другие не дают этих возможностей",
    "features.1.title": "Антипиратство",
    "features.1.desc": "Чёрный экран при попытке записи.",
    "features.1.badge": "Эксклюзив",
    "features.2.title": "WhatsApp от вашего имени",
    "features.2.desc": "Ученик получает приглашение с вашего WhatsApp. Отвечает — попадает к вам.",
    "features.2.badge": "Эксклюзив",
    "features.3.title": "Мультиязычность",
    "features.3.desc": "Контент на казахском, русском или любом другом языке.",
    "features.3.badge": "Қазақша",
    "features.4.title": "Мобильное приложение",
    "features.4.desc": "iOS и Android приложение. Уведомления, тёмная тема.",
    "features.5.title": "PDF без скачивания",
    "features.5.desc": "Ученик читает материалы в приложении. Нельзя скачать.",
    "features.6.title": "Свой дизайн",
    "features.6.desc": "Настройте цвета, логотип, вкладки под свой бренд.",

    // Testimonials
    "testimonials.label": "Отзывы",
    "testimonials.title": "Нам доверяют лидеры рынка",
    "testimonials.subtitle": "Более 1.5 млн подписчиков у наших клиентов",
    "testimonials.swipe": "← Свайпните для просмотра →",
    "testimonials.stats.followers": "подписчиков у клиентов",
    "testimonials.stats.schools": "онлайн-школы",
    "testimonials.stats.leaks": "сливов контента",
    "testimonials.1.name": "Аксултан Кали",
    "testimonials.1.role": "Baipket Academy",
    "testimonials.1.followers": "1 млн подписчиков",
    "testimonials.1.quote": "1Study помог защитить наши курсы от пиратства. Раньше контент сливали в телеграм, теперь всё под контролем. Ученики довольны мобильным приложением.",
    "testimonials.2.name": "Куаныш Шонбай",
    "testimonials.2.role": "Shonbay.Lab",
    "testimonials.2.followers": "330K подписчиков",
    "testimonials.2.quote": "Перешли на 1Study и сразу почувствовали разницу. WhatsApp уведомления работают отлично, ученики не теряются. Рекомендую всем онлайн-школам.",
    "testimonials.3.name": "Ako_Speaks",
    "testimonials.3.role": "Орыс тілі №1 академия",
    "testimonials.3.followers": "283K подписчиков",
    "testimonials.3.quote": "Мобильное приложение — это то, чего не хватало нашим ученикам. Теперь они учатся в любом месте, а мы спокойны за контент.",

    // Pricing
    "pricing.label": "Тарифы",
    "pricing.title": "Простые и понятные цены",
    "pricing.subtitle": "Без скрытых платежей. Отмена в любой момент.",
    "pricing.quarterly": "Квартал",
    "pricing.yearly": "Год",
    "pricing.discount": "-50%",
    "pricing.perQuarter": "/квартал",
    "pricing.perYear": "/год",
    "pricing.popular": "Популярный",
    "pricing.start": "Начать",
    "pricing.current": "Текущий",
    "pricing.plan1.name": "Старт",
    "pricing.plan1.desc": "Для начинающих школ",
    "pricing.plan2.name": "Школа",
    "pricing.plan2.desc": "Для растущих школ",
    "pricing.plan3.name": "Академия",
    "pricing.plan3.desc": "Для крупных школ",
    "pricing.feature.students": "учеников",
    "pricing.feature.courses": "курсов",
    "pricing.feature.unlimitedStudents": "Безлимит учеников",
    "pricing.feature.unlimitedCourses": "Безлимит курсов",
    "pricing.feature.mobileApp": "Мобильное приложение",
    "pricing.feature.antiPiracy": "Антипиратство",
    "pricing.feature.whatsapp": "WhatsApp уведомления",
    "pricing.feature.analytics": "Аналитика",
    "pricing.feature.priority": "Приоритетная поддержка",
    "pricing.feature.manager": "Персональный менеджер",
    "pricing.feature.api": "API доступ",

    // FAQ
    "faq.label": "Вопросы",
    "faq.title": "Частые вопросы",
    "faq.1.q": "Как работает защита от пиратства?",
    "faq.1.a": "При попытке записи экрана видео становится чёрным. Это работает на iOS и Android. Также мы блокируем скриншоты.",
    "faq.2.q": "Можно перенести курсы с GetCourse?",
    "faq.2.a": "Да, мы помогаем с миграцией. Перенесём видео, материалы и базу учеников бесплатно.",
    "faq.3.q": "Сколько времени занимает запуск?",
    "faq.3.a": "Базовая настройка — 1 день. Полная миграция с другой платформы — до 1 недели.",
    "faq.4.q": "Есть ли пробный период?",
    "faq.4.a": "Да, 14 дней бесплатно на любом тарифе. Карта не требуется.",
    "faq.5.q": "Как работает WhatsApp интеграция?",
    "faq.5.a": "Ученик получает приглашение с вашего номера WhatsApp. Если отвечает — сообщение приходит вам. Это повышает открываемость до 95%.",

    // CTA
    "cta.title": "Готовы запустить свою онлайн-школу?",
    "cta.subtitle": "Присоединяйтесь к 43+ школам, которые уже защитили свой контент",
    "cta.button": "Начать бесплатно",
    "cta.note": "14 дней бесплатно · Без карты · Отмена в любой момент",

    // Footer
    "footer.desc": "Платформа для онлайн-школ с защитой от пиратства. Мобильное приложение, WhatsApp уведомления, мультиязычность.",
    "footer.product": "Продукт",
    "footer.company": "Компания",
    "footer.support": "Поддержка",
    "footer.rights": "Все права защищены.",
    "footer.features": "Возможности",
    "footer.pricing": "Тарифы",
    "footer.faq": "FAQ",
    "footer.about": "О нас",
    "footer.blog": "Блог",
    "footer.careers": "Карьера",
    "footer.help": "Помощь",
    "footer.contact": "Контакты",
    "footer.telegram": "Telegram",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",

    // Lead Modal
    "modal.title": "Оставьте заявку",
    "modal.titlePlan": "Тариф",
    "modal.titleFree": "Начать бесплатно",
    "modal.subtitle": "Оставьте заявку и мы поможем начать",
    "modal.name": "Ваше имя",
    "modal.namePlaceholder": "Например, Айгерим",
    "modal.phone": "Номер телефона",
    "modal.phonePlaceholder": "+7 777 123 45 67",
    "modal.submit": "Оставить заявку",
    "modal.submitting": "Отправка...",
    "modal.success": "Заявка отправлена!",
    "modal.successDesc": "Мы свяжемся с вами в ближайшее время",
    "modal.error": "Ошибка отправки. Попробуйте позже.",
    "modal.errorEmpty": "Заполните все поля",
    "modal.privacy": "Нажимая кнопку, вы соглашаетесь с",
    "modal.privacyLink": "политикой конфиденциальности",
    "modal.close": "Закрыть",

    // App Download
    "app.label": "Мобильное приложение",
    "app.title": "Скачайте приложение",
    "app.subtitle": "Ваши ученики смогут учиться с телефона. Уведомления, тёмная тема, защита от записи экрана — всё включено.",
    "app.feature1": "Push-уведомления о новых уроках",
    "app.feature2": "Тёмная и светлая тема",
    "app.feature3": "Офлайн просмотр материалов",
    "app.downloadIn": "Скачать в",
    "app.screen2": "Экран 2",

    // Video Demo
    "video.label": "Демо",
    "video.title": "Посмотрите как это работает",
    "video.subtitle": "2 минуты — и вы поймёте всё",
    "video.play": "Смотреть демо",
    "video.preview": "Превью видео",
    "video.placeholder": "Видео будет здесь",
    "video.placeholderHint": "Вставить YouTube/Vimeo embed или загрузить видео",
    "video.feature1": "Мобильное приложение",
    "video.feature2": "Защита контента",
    "video.feature3": "WhatsApp интеграция",

    // How It Works
    "howItWorks.label": "Как начать",
    "howItWorks.title": "От регистрации до ученика — час",
    "howItWorks.step1.title": "Регистрация",
    "howItWorks.step1.desc": "Создайте аккаунт школы за 2 минуты",
    "howItWorks.step2.title": "Загрузите контент",
    "howItWorks.step2.desc": "Добавьте курсы, видео, PDF-материалы",
    "howItWorks.step3.title": "Подключите WhatsApp",
    "howItWorks.step3.desc": "Сканируйте QR — приглашения с вашего номера",
    "howItWorks.step4.title": "Приглашайте учеников",
    "howItWorks.step4.desc": "Ссылки на iOS, Android и веб. Готово!",
  },
  en: {
    // Header
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.login": "Login",
    "nav.start": "Start",

    // Hero
    "hero.badge": "43 online schools already with us",
    "hero.title.line1": "Platform for",
    "hero.title.line2": "online schools",
    "hero.title.line3": "with piracy protection",
    "hero.subtitle": "Mobile app for your students. Screenshots blocked — content protected.",
    "hero.cta": "Try 14 days free",
    "hero.learnMore": "Learn more",
    "hero.stats.schools": "online schools",
    "hero.stats.students": "students",
    "hero.stats.launch": "to launch",
    "hero.stats.hoursSuffix": "h",

    // Problems
    "problems.label": "Problems",
    "problems.title": "Familiar problems?",
    "problems.subtitle": "Other platforms don't solve the main pains of online schools",
    "problems.1.icon": "🏴‍☠️",
    "problems.1.title": "Courses leaked to Telegram",
    "problems.1.desc": "Students record screen and sell your content for pennies",
    "problems.2.icon": "📧",
    "problems.2.title": "Email goes to spam",
    "problems.2.desc": "Students don't see invitations and can't start learning",
    "problems.3.icon": "📱",
    "problems.3.title": "No mobile app",
    "problems.3.desc": "Students find it inconvenient to learn from phone via browser",
    "problems.4.icon": "🌐",
    "problems.4.title": "No Kazakh language",
    "problems.4.desc": "Platforms only in Russian, but you need Kazakh",
    "problems.solution": "1Study solves all these problems",

    // Features
    "features.label": "Features",
    "features.title": "What competitors don't have",
    "features.subtitle": "GetCourse, Courstore and others don't offer these features",
    "features.1.title": "Anti-piracy",
    "features.1.desc": "Black screen when trying to record.",
    "features.1.badge": "Exclusive",
    "features.2.title": "WhatsApp from your name",
    "features.2.desc": "Student receives invitation from your WhatsApp. Replies go to you.",
    "features.2.badge": "Exclusive",
    "features.3.title": "Multilingual",
    "features.3.desc": "Content in Kazakh, Russian or any other language.",
    "features.3.badge": "Қазақша",
    "features.4.title": "Mobile app",
    "features.4.desc": "iOS and Android app. Notifications, dark theme.",
    "features.5.title": "PDF without download",
    "features.5.desc": "Student reads materials in app. Cannot download.",
    "features.6.title": "Custom design",
    "features.6.desc": "Set colors, logo, tabs for your brand.",

    // Testimonials
    "testimonials.label": "Reviews",
    "testimonials.title": "Trusted by market leaders",
    "testimonials.subtitle": "Over 1.5M followers among our clients",
    "testimonials.swipe": "← Swipe to view →",
    "testimonials.stats.followers": "client followers",
    "testimonials.stats.schools": "online schools",
    "testimonials.stats.leaks": "content leaks",
    "testimonials.1.name": "Aksultan Kali",
    "testimonials.1.role": "Baipket Academy",
    "testimonials.1.followers": "1M followers",
    "testimonials.1.quote": "1Study helped protect our courses from piracy. Before, content was leaked to Telegram, now everything is under control. Students love the mobile app.",
    "testimonials.2.name": "Kuanysh Shonbay",
    "testimonials.2.role": "Shonbay.Lab",
    "testimonials.2.followers": "330K followers",
    "testimonials.2.quote": "We switched to 1Study and immediately felt the difference. WhatsApp notifications work great, students don't get lost. Recommend to all online schools.",
    "testimonials.3.name": "Ako_Speaks",
    "testimonials.3.role": "Russian Language #1 Academy",
    "testimonials.3.followers": "283K followers",
    "testimonials.3.quote": "Mobile app is what our students were missing. Now they learn anywhere, and we're calm about our content.",

    // Pricing
    "pricing.label": "Pricing",
    "pricing.title": "Simple and clear pricing",
    "pricing.subtitle": "No hidden fees. Cancel anytime.",
    "pricing.quarterly": "Quarterly",
    "pricing.yearly": "Yearly",
    "pricing.discount": "-50%",
    "pricing.perQuarter": "/quarter",
    "pricing.perYear": "/year",
    "pricing.popular": "Popular",
    "pricing.start": "Start",
    "pricing.current": "Current",
    "pricing.plan1.name": "Start",
    "pricing.plan1.desc": "For beginner schools",
    "pricing.plan2.name": "School",
    "pricing.plan2.desc": "For growing schools",
    "pricing.plan3.name": "Academy",
    "pricing.plan3.desc": "For large schools",
    "pricing.feature.students": "students",
    "pricing.feature.courses": "courses",
    "pricing.feature.unlimitedStudents": "Unlimited students",
    "pricing.feature.unlimitedCourses": "Unlimited courses",
    "pricing.feature.mobileApp": "Mobile app",
    "pricing.feature.antiPiracy": "Anti-piracy",
    "pricing.feature.whatsapp": "WhatsApp notifications",
    "pricing.feature.analytics": "Analytics",
    "pricing.feature.priority": "Priority support",
    "pricing.feature.manager": "Personal manager",
    "pricing.feature.api": "API access",

    // FAQ
    "faq.label": "Questions",
    "faq.title": "Frequently Asked Questions",
    "faq.1.q": "How does piracy protection work?",
    "faq.1.a": "When trying to record the screen, the video turns black. This works on iOS and Android. We also block screenshots.",
    "faq.2.q": "Can I transfer courses from GetCourse?",
    "faq.2.a": "Yes, we help with migration. We'll transfer videos, materials and student database for free.",
    "faq.3.q": "How long does launch take?",
    "faq.3.a": "Basic setup — 1 day. Full migration from another platform — up to 1 week.",
    "faq.4.q": "Is there a trial period?",
    "faq.4.a": "Yes, 14 days free on any plan. No card required.",
    "faq.5.q": "How does WhatsApp integration work?",
    "faq.5.a": "Student receives invitation from your WhatsApp number. If they reply — message comes to you. This increases open rate to 95%.",

    // CTA
    "cta.title": "Ready to launch your online school?",
    "cta.subtitle": "Join 43+ schools that have already protected their content",
    "cta.button": "Start for free",
    "cta.note": "14 days free · No card required · Cancel anytime",

    // Footer
    "footer.desc": "Platform for online schools with piracy protection. Mobile app, WhatsApp notifications, multilingual.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.rights": "All rights reserved.",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.faq": "FAQ",
    "footer.about": "About",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.help": "Help",
    "footer.contact": "Contact",
    "footer.telegram": "Telegram",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Lead Modal
    "modal.title": "Submit request",
    "modal.titlePlan": "Plan",
    "modal.titleFree": "Start for free",
    "modal.subtitle": "Submit a request and we'll help you get started",
    "modal.name": "Your name",
    "modal.namePlaceholder": "e.g., John",
    "modal.phone": "Phone number",
    "modal.phonePlaceholder": "+7 777 123 45 67",
    "modal.submit": "Submit request",
    "modal.submitting": "Sending...",
    "modal.success": "Request sent!",
    "modal.successDesc": "We'll contact you shortly",
    "modal.error": "Send error. Try again later.",
    "modal.errorEmpty": "Fill in all fields",
    "modal.privacy": "By clicking the button, you agree to the",
    "modal.privacyLink": "privacy policy",
    "modal.close": "Close",

    // App Download
    "app.label": "Mobile app",
    "app.title": "Download the app",
    "app.subtitle": "Your students can learn from their phones. Notifications, dark theme, screen recording protection — all included.",
    "app.feature1": "Push notifications for new lessons",
    "app.feature2": "Dark and light theme",
    "app.feature3": "Offline viewing of materials",
    "app.downloadIn": "Download on",
    "app.screen2": "Screen 2",

    // Video Demo
    "video.label": "Demo",
    "video.title": "See how it works",
    "video.subtitle": "2 minutes — and you'll understand everything",
    "video.play": "Watch demo",
    "video.preview": "Video preview",
    "video.placeholder": "Video will be here",
    "video.placeholderHint": "Insert YouTube/Vimeo embed or upload video",
    "video.feature1": "Mobile app",
    "video.feature2": "Content protection",
    "video.feature3": "WhatsApp integration",

    // How It Works
    "howItWorks.label": "How to start",
    "howItWorks.title": "From registration to student — 1 hour",
    "howItWorks.step1.title": "Registration",
    "howItWorks.step1.desc": "Create a school account in 2 minutes",
    "howItWorks.step2.title": "Upload content",
    "howItWorks.step2.desc": "Add courses, videos, PDF materials",
    "howItWorks.step3.title": "Connect WhatsApp",
    "howItWorks.step3.desc": "Scan QR — invitations from your number",
    "howItWorks.step4.title": "Invite students",
    "howItWorks.step4.desc": "Links for iOS, Android and web. Done!",
  },
  kz: {
    // Header
    "nav.features": "Мүмкіндіктер",
    "nav.pricing": "Тарифтер",
    "nav.faq": "Сұрақтар",
    "nav.login": "Кіру",
    "nav.start": "Бастау",

    // Hero
    "hero.badge": "43 онлайн мектеп бізбен бірге",
    "hero.title.line1": "Онлайн мектептер",
    "hero.title.line2": "платформасы",
    "hero.title.line3": "қарақшылықтан қорғаумен",
    "hero.subtitle": "Оқушыларыңыз үшін мобильді қосымша. Скриншот түсіру мүмкін емес — контент қорғалған.",
    "hero.cta": "14 күн тегін байқап көру",
    "hero.learnMore": "Көбірек білу",
    "hero.stats.schools": "онлайн мектеп",
    "hero.stats.students": "оқушы",
    "hero.stats.launch": "іске қосу",
    "hero.stats.hoursSuffix": "сағ",

    // Problems
    "problems.label": "Мәселелер",
    "problems.title": "Таныс мәселелер?",
    "problems.subtitle": "Басқа платформалар онлайн мектептердің негізгі мәселелерін шешпейді",
    "problems.1.icon": "🏴‍☠️",
    "problems.1.title": "Курстар Telegram-ға ағызылады",
    "problems.1.desc": "Оқушылар экранды жазып, контентіңізді тиын-тебенге сатады",
    "problems.2.icon": "📧",
    "problems.2.title": "Email спамға түседі",
    "problems.2.desc": "Оқушылар шақыруды көрмейді және оқуды бастай алмайды",
    "problems.3.icon": "📱",
    "problems.3.title": "Мобильді қосымша жоқ",
    "problems.3.desc": "Оқушыларға браузер арқылы телефоннан оқу ыңғайсыз",
    "problems.4.icon": "🌐",
    "problems.4.title": "Қазақ тілі жоқ",
    "problems.4.desc": "Платформалар тек орысша, ал сізге қазақша керек",
    "problems.solution": "1Study барлық мәселелерді шешеді",

    // Features
    "features.label": "Мүмкіндіктер",
    "features.title": "Бәсекелестерде не жоқ",
    "features.subtitle": "GetCourse, Courstore және басқалар бұл мүмкіндіктерді бермейді",
    "features.1.title": "Қарақшылыққа қарсы",
    "features.1.desc": "Жазуға әрекет кезінде қара экран.",
    "features.1.badge": "Эксклюзив",
    "features.2.title": "Сіздің атыңыздан WhatsApp",
    "features.2.desc": "Оқушы сіздің WhatsApp-тан шақыру алады. Жауап берсе — сізге келеді.",
    "features.2.badge": "Эксклюзив",
    "features.3.title": "Көптілділік",
    "features.3.desc": "Қазақ, орыс немесе кез келген басқа тілде контент.",
    "features.3.badge": "Қазақша",
    "features.4.title": "Мобильді қосымша",
    "features.4.desc": "iOS және Android қосымшасы. Хабарландырулар, қараңғы тема.",
    "features.5.title": "PDF жүктеусіз",
    "features.5.desc": "Оқушы материалдарды қосымшада оқиды. Жүктеу мүмкін емес.",
    "features.6.title": "Өз дизайн",
    "features.6.desc": "Түстерді, логотипті, қойындыларды өз брендіңізге баптаңыз.",

    // Testimonials
    "testimonials.label": "Пікірлер",
    "testimonials.title": "Нарық көшбасшылары бізге сенеді",
    "testimonials.subtitle": "Клиенттерімізде 1.5 млн+ жазылушы",
    "testimonials.swipe": "← Көру үшін сырғытыңыз →",
    "testimonials.stats.followers": "клиент жазылушылары",
    "testimonials.stats.schools": "онлайн мектеп",
    "testimonials.stats.leaks": "контент ағызу",
    "testimonials.1.name": "Ақсұлтан Қали",
    "testimonials.1.role": "Baipket Academy",
    "testimonials.1.followers": "1 млн жазылушы",
    "testimonials.1.quote": "1Study курстарымызды қарақшылықтан қорғауға көмектесті. Бұрын контент Telegram-ға ағызылатын, енді бәрі бақылауда. Оқушылар мобильді қосымшадан разы.",
    "testimonials.2.name": "Куаныш Шонбай",
    "testimonials.2.role": "Shonbay.Lab",
    "testimonials.2.followers": "330K жазылушы",
    "testimonials.2.quote": "1Study-ге көшіп, бірден айырмашылықты сезіндік. WhatsApp хабарландырулар тамаша жұмыс істейді, оқушылар жоғалмайды. Барлық онлайн мектептерге ұсынамын.",
    "testimonials.3.name": "Ako_Speaks",
    "testimonials.3.role": "Орыс тілі №1 академия",
    "testimonials.3.followers": "283K жазылушы",
    "testimonials.3.quote": "Мобильді қосымша — оқушыларымызға жетіспейтін нәрсе еді. Енді олар кез келген жерде оқиды, ал біз контент үшін тыныштамыз.",

    // Pricing
    "pricing.label": "Тарифтер",
    "pricing.title": "Қарапайым және түсінікті бағалар",
    "pricing.subtitle": "Жасырын төлемдер жоқ. Кез келген уақытта бас тартуға болады.",
    "pricing.quarterly": "Тоқсан",
    "pricing.yearly": "Жыл",
    "pricing.discount": "-50%",
    "pricing.perQuarter": "/тоқсан",
    "pricing.perYear": "/жыл",
    "pricing.popular": "Танымал",
    "pricing.start": "Бастау",
    "pricing.current": "Ағымдағы",
    "pricing.plan1.name": "Старт",
    "pricing.plan1.desc": "Жаңадан бастаушы мектептер үшін",
    "pricing.plan2.name": "Мектеп",
    "pricing.plan2.desc": "Өсіп келе жатқан мектептер үшін",
    "pricing.plan3.name": "Академия",
    "pricing.plan3.desc": "Ірі мектептер үшін",
    "pricing.feature.students": "оқушы",
    "pricing.feature.courses": "курс",
    "pricing.feature.unlimitedStudents": "Шексіз оқушылар",
    "pricing.feature.unlimitedCourses": "Шексіз курстар",
    "pricing.feature.mobileApp": "Мобильді қосымша",
    "pricing.feature.antiPiracy": "Қарақшылыққа қарсы",
    "pricing.feature.whatsapp": "WhatsApp хабарландырулар",
    "pricing.feature.analytics": "Аналитика",
    "pricing.feature.priority": "Басымдықты қолдау",
    "pricing.feature.manager": "Жеке менеджер",
    "pricing.feature.api": "API қол жетімділік",

    // FAQ
    "faq.label": "Сұрақтар",
    "faq.title": "Жиі қойылатын сұрақтар",
    "faq.1.q": "Қарақшылықтан қорғау қалай жұмыс істейді?",
    "faq.1.a": "Экранды жазуға әрекет кезінде видео қара болады. Бұл iOS және Android-та жұмыс істейді. Скриншоттарды да блоктаймыз.",
    "faq.2.q": "GetCourse-тан курстарды көшіруге бола ма?",
    "faq.2.a": "Иә, миграцияға көмектесеміз. Видеоларды, материалдарды және оқушылар базасын тегін көшіреміз.",
    "faq.3.q": "Іске қосу қанша уақыт алады?",
    "faq.3.a": "Негізгі баптау — 1 күн. Басқа платформадан толық миграция — 1 аптаға дейін.",
    "faq.4.q": "Сынақ мерзімі бар ма?",
    "faq.4.a": "Иә, кез келген тарифте 14 күн тегін. Карта қажет емес.",
    "faq.5.q": "WhatsApp интеграциясы қалай жұмыс істейді?",
    "faq.5.a": "Оқушы сіздің WhatsApp нөміріңізден шақыру алады. Жауап берсе — хабарлама сізге келеді. Бұл ашылу деңгейін 95%-ға дейін арттырады.",

    // CTA
    "cta.title": "Онлайн мектебіңізді ашуға дайынсыз ба?",
    "cta.subtitle": "Контентін қорғаған 43+ мектепке қосылыңыз",
    "cta.button": "Тегін бастау",
    "cta.note": "14 күн тегін · Картасыз · Кез келген уақытта бас тартуға болады",

    // Footer
    "footer.desc": "Қарақшылықтан қорғаумен онлайн мектептер платформасы. Мобильді қосымша, WhatsApp хабарландырулар, көптілділік.",
    "footer.product": "Өнім",
    "footer.company": "Компания",
    "footer.support": "Қолдау",
    "footer.rights": "Барлық құқықтар қорғалған.",
    "footer.features": "Мүмкіндіктер",
    "footer.pricing": "Тарифтер",
    "footer.faq": "Сұрақтар",
    "footer.about": "Біз туралы",
    "footer.blog": "Блог",
    "footer.careers": "Мансап",
    "footer.help": "Көмек",
    "footer.contact": "Байланыс",
    "footer.telegram": "Telegram",
    "footer.privacy": "Құпиялылық саясаты",
    "footer.terms": "Пайдалану шарттары",

    // Lead Modal
    "modal.title": "Өтінім қалдыру",
    "modal.titlePlan": "Тариф",
    "modal.titleFree": "Тегін бастау",
    "modal.subtitle": "Өтінім қалдырыңыз, біз бастауға көмектесеміз",
    "modal.name": "Атыңыз",
    "modal.namePlaceholder": "Мысалы, Айгерім",
    "modal.phone": "Телефон нөмірі",
    "modal.phonePlaceholder": "+7 777 123 45 67",
    "modal.submit": "Өтінім қалдыру",
    "modal.submitting": "Жіберілуде...",
    "modal.success": "Өтінім жіберілді!",
    "modal.successDesc": "Жақын арада хабарласамыз",
    "modal.error": "Жіберу қатесі. Кейінірек қайталаңыз.",
    "modal.errorEmpty": "Барлық өрістерді толтырыңыз",
    "modal.privacy": "Батырманы басу арқылы сіз",
    "modal.privacyLink": "құпиялылық саясатымен келісесіз",
    "modal.close": "Жабу",

    // App Download
    "app.label": "Мобильді қосымша",
    "app.title": "Қосымшаны жүктеңіз",
    "app.subtitle": "Оқушыларыңыз телефоннан оқи алады. Хабарландырулар, қараңғы тема, экран жазудан қорғау — бәрі қосылған.",
    "app.feature1": "Жаңа сабақтар туралы Push-хабарландырулар",
    "app.feature2": "Қараңғы және жарық тема",
    "app.feature3": "Материалдарды офлайн көру",
    "app.downloadIn": "Жүктеу",
    "app.screen2": "Экран 2",

    // Video Demo
    "video.label": "Демо",
    "video.title": "Бұл қалай жұмыс істейтінін көріңіз",
    "video.subtitle": "2 минут — және бәрін түсінесіз",
    "video.play": "Демо көру",
    "video.preview": "Видео алдын ала көру",
    "video.placeholder": "Видео осында болады",
    "video.placeholderHint": "YouTube/Vimeo embed қосыңыз немесе видео жүктеңіз",
    "video.feature1": "Мобильді қосымша",
    "video.feature2": "Контент қорғау",
    "video.feature3": "WhatsApp интеграция",

    // How It Works
    "howItWorks.label": "Қалай бастау",
    "howItWorks.title": "Тіркелуден оқушыға дейін — сағат",
    "howItWorks.step1.title": "Тіркелу",
    "howItWorks.step1.desc": "2 минутта мектеп аккаунтын жасаңыз",
    "howItWorks.step2.title": "Контент жүктеңіз",
    "howItWorks.step2.desc": "Курстар, видео, PDF-материалдар қосыңыз",
    "howItWorks.step3.title": "WhatsApp қосыңыз",
    "howItWorks.step3.desc": "QR сканерлеңіз — сіздің нөміріңізден шақырулар",
    "howItWorks.step4.title": "Оқушыларды шақырыңыз",
    "howItWorks.step4.desc": "iOS, Android және веб сілтемелер. Дайын!",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && ["ru", "en", "kz"].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
