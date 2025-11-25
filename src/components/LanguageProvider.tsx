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
    "hero.title.line1": "Платформа для онлайн-школ",
    "hero.title.line2": "с защитой от пиратства",
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

    // Pricing
    "pricing.label": "Тарифы",
    "pricing.title": "Простые и понятные цены",
    "pricing.subtitle": "Без скрытых платежей. Отмена в любой момент.",
    "pricing.quarterly": "Квартал",
    "pricing.yearly": "Год",
    "pricing.discount": "-20%",
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
    "footer.desc": "Платформа для создания и монетизации онлайн-школ с защитой от пиратства.",
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

    // Lead Modal
    "modal.title": "Оставьте заявку",
    "modal.subtitle": "Мы свяжемся с вами в течение 30 минут",
    "modal.name": "Ваше имя",
    "modal.phone": "Телефон",
    "modal.submit": "Отправить заявку",
    "modal.success": "Заявка отправлена!",
    "modal.successDesc": "Мы свяжемся с вами в ближайшее время",
    "modal.close": "Закрыть",

    // App Download
    "app.label": "Мобильное приложение",
    "app.title": "Учитесь где угодно",
    "app.subtitle": "Скачайте приложение 1Study и получите доступ к курсам в любое время. Офлайн режим, push-уведомления и защита контента.",
    "app.feature1": "Офлайн просмотр",
    "app.feature2": "Push-уведомления",
    "app.feature3": "Защита контента",

    // Video Demo
    "video.label": "Демо",
    "video.title": "Посмотрите платформу в действии",
    "video.subtitle": "2 минуты — и вы поймёте, как это работает",
    "video.play": "Смотреть демо",
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
    "hero.title.line1": "Platform for online schools",
    "hero.title.line2": "with piracy protection",
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

    // Pricing
    "pricing.label": "Pricing",
    "pricing.title": "Simple and clear pricing",
    "pricing.subtitle": "No hidden fees. Cancel anytime.",
    "pricing.quarterly": "Quarterly",
    "pricing.yearly": "Yearly",
    "pricing.discount": "-20%",
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
    "footer.desc": "Platform for creating and monetizing online schools with piracy protection.",
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

    // Lead Modal
    "modal.title": "Submit request",
    "modal.subtitle": "We'll contact you within 30 minutes",
    "modal.name": "Your name",
    "modal.phone": "Phone",
    "modal.submit": "Send request",
    "modal.success": "Request sent!",
    "modal.successDesc": "We'll contact you shortly",
    "modal.close": "Close",

    // App Download
    "app.label": "Mobile app",
    "app.title": "Learn anywhere",
    "app.subtitle": "Download 1Study app and access courses anytime. Offline mode, push notifications and content protection.",
    "app.feature1": "Offline viewing",
    "app.feature2": "Push notifications",
    "app.feature3": "Content protection",

    // Video Demo
    "video.label": "Demo",
    "video.title": "See the platform in action",
    "video.subtitle": "2 minutes — and you'll understand how it works",
    "video.play": "Watch demo",
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
    "hero.title.line1": "Онлайн мектептер платформасы",
    "hero.title.line2": "қарақшылықтан қорғаумен",
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

    // Pricing
    "pricing.label": "Тарифтер",
    "pricing.title": "Қарапайым және түсінікті бағалар",
    "pricing.subtitle": "Жасырын төлемдер жоқ. Кез келген уақытта бас тартуға болады.",
    "pricing.quarterly": "Тоқсан",
    "pricing.yearly": "Жыл",
    "pricing.discount": "-20%",
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
    "footer.desc": "Қарақшылықтан қорғаумен онлайн мектептер құру және монетизациялау платформасы.",
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

    // Lead Modal
    "modal.title": "Өтінім қалдыру",
    "modal.subtitle": "30 минут ішінде хабарласамыз",
    "modal.name": "Атыңыз",
    "modal.phone": "Телефон",
    "modal.submit": "Өтінім жіберу",
    "modal.success": "Өтінім жіберілді!",
    "modal.successDesc": "Жақын арада хабарласамыз",
    "modal.close": "Жабу",

    // App Download
    "app.label": "Мобильді қосымша",
    "app.title": "Кез келген жерде оқыңыз",
    "app.subtitle": "1Study қосымшасын жүктеп, курстарға кез келген уақытта қол жеткізіңіз. Офлайн режим, push-хабарландырулар және контент қорғау.",
    "app.feature1": "Офлайн көру",
    "app.feature2": "Push-хабарландырулар",
    "app.feature3": "Контент қорғау",

    // Video Demo
    "video.label": "Демо",
    "video.title": "Платформаны әрекетте көріңіз",
    "video.subtitle": "2 минут — және бұл қалай жұмыс істейтінін түсінесіз",
    "video.play": "Демо көру",
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
