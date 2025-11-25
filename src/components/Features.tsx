export function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Антипиратство",
      description: "Нельзя сделать скриншот или запись экрана. Как в банковском приложении — чёрный экран при попытке записи.",
      badge: "Только у нас",
      highlight: true,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "WhatsApp от вашего имени",
      description: "Ученик получает приглашение с вашего WhatsApp. Отвечает — и попадает прямо к вам, а не в общий чат платформы.",
      badge: "Только у нас",
      highlight: true,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Мультиязычность",
      description: "Контент на казахском, русском или любом другом языке. Один курс — несколько языков, ученик выбирает свой.",
      badge: "Қазақша",
      highlight: true,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Мобильное приложение",
      description: "Полноценное iOS и Android приложение, а не сайт в браузере. Уведомления, офлайн-доступ, удобный интерфейс.",
      highlight: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "PDF без скачивания",
      description: "Ученик читает материалы прямо в приложении. Нельзя скачать или сделать скриншот — ваши книги и методички защищены.",
      highlight: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      title: "Тёмная тема",
      description: "Приятное обучение в любое время суток. Ученик сам выбирает светлую или тёмную тему.",
      highlight: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Свой дизайн",
      description: "Настройте цвета, логотип, вкладки под свой бренд. Каждая школа выглядит уникально.",
      highlight: false,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Домашки и тесты",
      description: "Проверка знаний с автоматическими результатами. Ученик сразу видит ошибки и правильные ответы.",
      highlight: false,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Чего нет у конкурентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            GetCourse, Courstore и другие платформы не дают этих возможностей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition ${
                feature.highlight
                  ? "bg-indigo-50 border-indigo-200 hover:border-indigo-300"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                feature.highlight ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
              }`}>
                {feature.icon}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                {feature.badge && (
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    feature.highlight ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
                  }`}>
                    {feature.badge}
                  </span>
                )}
              </div>

              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
