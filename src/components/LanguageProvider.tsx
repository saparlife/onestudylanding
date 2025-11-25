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
    "hero.badge": "Платформа для онлайн-школ",
    "hero.title": "Запустите свою",
    "hero.title2": "онлайн-школу",
    "hero.title3": "за 1 день",
    "hero.subtitle": "Мобильное приложение, защита от пиратства, WhatsApp уведомления — всё включено. Никакого кода.",
    "hero.cta": "Попробовать бесплатно",
    "hero.demo": "Смотреть демо",
    "hero.stats.schools": "онлайн-школ",
    "hero.stats.students": "учеников",
    "hero.stats.piracy": "сливов контента",

    // Problems
    "problems.label": "Знакомые проблемы?",
    "problems.title": "Эти боли знает каждый владелец онлайн-школы",
    "problems.1.title": "Пиратство убивает продажи",
    "problems.1.desc": "Ваши курсы сливают в Telegram через неделю после запуска. Записывают экран, делятся аккаунтами.",
    "problems.2.title": "Ученики теряются",
    "problems.2.desc": "Без push-уведомлений и напоминаний 60% учеников бросают курс, не дойдя до середины.",
    "problems.3.title": "Техническая возня",
    "problems.3.desc": "GetCourse, Tilda, отдельный чат — куча сервисов. Интеграции ломаются, данные теряются.",

    // Features
    "features.label": "Возможности",
    "features.title": "Всё для запуска и роста онлайн-школы",
    "features.subtitle": "Один продукт вместо 5 разных сервисов",

    // Testimonials
    "testimonials.label": "Отзывы",
    "testimonials.title": "Нам доверяют лидеры рынка",
    "testimonials.subtitle": "Более 1.5 млн подписчиков у наших клиентов",
    "testimonials.swipe": "← Свайпните для просмотра →",
    "testimonials.followers": "подписчиков у клиентов",
    "testimonials.schools": "онлайн-школы",
    "testimonials.leaks": "сливов контента",

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

    // FAQ
    "faq.label": "Вопросы",
    "faq.title": "Частые вопросы",

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
    "app.subtitle": "Скачайте приложение и получите доступ к курсам в любое время",
  },
  en: {
    // Header
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.login": "Login",
    "nav.start": "Start",

    // Hero
    "hero.badge": "Platform for online schools",
    "hero.title": "Launch your",
    "hero.title2": "online school",
    "hero.title3": "in 1 day",
    "hero.subtitle": "Mobile app, piracy protection, WhatsApp notifications — all included. No code required.",
    "hero.cta": "Try for free",
    "hero.demo": "Watch demo",
    "hero.stats.schools": "online schools",
    "hero.stats.students": "students",
    "hero.stats.piracy": "content leaks",

    // Problems
    "problems.label": "Familiar problems?",
    "problems.title": "Every online school owner knows these pains",
    "problems.1.title": "Piracy kills sales",
    "problems.1.desc": "Your courses get leaked to Telegram within a week. Screen recording, account sharing.",
    "problems.2.title": "Students drop out",
    "problems.2.desc": "Without push notifications and reminders, 60% of students quit before finishing the course.",
    "problems.3.title": "Technical hassle",
    "problems.3.desc": "GetCourse, Tilda, separate chat — too many services. Integrations break, data gets lost.",

    // Features
    "features.label": "Features",
    "features.title": "Everything to launch and grow your online school",
    "features.subtitle": "One product instead of 5 different services",

    // Testimonials
    "testimonials.label": "Reviews",
    "testimonials.title": "Trusted by market leaders",
    "testimonials.subtitle": "Over 1.5M followers among our clients",
    "testimonials.swipe": "← Swipe to view →",
    "testimonials.followers": "client followers",
    "testimonials.schools": "online schools",
    "testimonials.leaks": "content leaks",

    // Pricing
    "pricing.label": "Pricing",
    "pricing.title": "Simple and transparent pricing",
    "pricing.subtitle": "No hidden fees. Cancel anytime.",
    "pricing.quarterly": "Quarterly",
    "pricing.yearly": "Yearly",
    "pricing.discount": "-20%",
    "pricing.perQuarter": "/quarter",
    "pricing.perYear": "/year",
    "pricing.popular": "Popular",
    "pricing.start": "Start",
    "pricing.current": "Current",

    // FAQ
    "faq.label": "Questions",
    "faq.title": "Frequently Asked Questions",

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
    "app.subtitle": "Download the app and access courses anytime",
  },
  kz: {
    // Header
    "nav.features": "Мүмкіндіктер",
    "nav.pricing": "Тарифтер",
    "nav.faq": "Сұрақтар",
    "nav.login": "Кіру",
    "nav.start": "Бастау",

    // Hero
    "hero.badge": "Онлайн мектептер платформасы",
    "hero.title": "Өз онлайн",
    "hero.title2": "мектебіңізді",
    "hero.title3": "1 күнде ашыңыз",
    "hero.subtitle": "Мобильді қосымша, қарақшылықтан қорғау, WhatsApp хабарландырулар — барлығы қосылған. Код қажет емес.",
    "hero.cta": "Тегін байқап көру",
    "hero.demo": "Демо көру",
    "hero.stats.schools": "онлайн мектеп",
    "hero.stats.students": "оқушы",
    "hero.stats.piracy": "контент ағызу",

    // Problems
    "problems.label": "Таныс мәселелер?",
    "problems.title": "Бұл ауырсынуларды әр онлайн мектеп иесі біледі",
    "problems.1.title": "Қарақшылық сатылымды өлтіреді",
    "problems.1.desc": "Курстарыңыз бір аптада Telegram-ға ағызылады. Экранды жазу, аккаунт бөлісу.",
    "problems.2.title": "Оқушылар жоғалады",
    "problems.2.desc": "Push-хабарландырулар мен еске салуларсыз оқушылардың 60%-ы курсты аяқтамай тастайды.",
    "problems.3.title": "Техникалық қиындықтар",
    "problems.3.desc": "GetCourse, Tilda, бөлек чат — көп сервистер. Интеграциялар бұзылады, деректер жоғалады.",

    // Features
    "features.label": "Мүмкіндіктер",
    "features.title": "Онлайн мектепті ашу және өсіру үшін барлығы",
    "features.subtitle": "5 түрлі сервистің орнына бір өнім",

    // Testimonials
    "testimonials.label": "Пікірлер",
    "testimonials.title": "Нарық көшбасшылары бізге сенеді",
    "testimonials.subtitle": "Клиенттерімізде 1.5 млн+ жазылушы",
    "testimonials.swipe": "← Көру үшін сырғытыңыз →",
    "testimonials.followers": "клиент жазылушылары",
    "testimonials.schools": "онлайн мектеп",
    "testimonials.leaks": "контент ағызу",

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

    // FAQ
    "faq.label": "Сұрақтар",
    "faq.title": "Жиі қойылатын сұрақтар",

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
    "app.subtitle": "Қосымшаны жүктеп, курстарға кез келген уақытта қол жеткізіңіз",
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
