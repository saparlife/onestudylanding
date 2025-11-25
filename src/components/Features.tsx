export function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Антипиратство",
      description: "Нельзя сделать скриншот или запись экрана. Как в банковском приложении — чёрный экран при попытке записи.",
      badge: "Эксклюзив",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "WhatsApp от вашего имени",
      description: "Ученик получает приглашение с вашего WhatsApp. Отвечает — и попадает прямо к вам.",
      badge: "Эксклюзив",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Мультиязычность",
      description: "Контент на казахском, русском или любом другом языке. Один курс — несколько языков.",
      badge: "Қазақша",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Мобильное приложение",
      description: "Полноценное iOS и Android приложение. Уведомления, удобный интерфейс, тёмная тема.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "PDF без скачивания",
      description: "Ученик читает материалы прямо в приложении. Нельзя скачать или сделать скриншот.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Свой дизайн",
      description: "Настройте цвета, логотип, вкладки под свой бренд. Каждая школа выглядит уникально.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 font-semibold mb-4">Возможности</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Чего нет у{" "}
            <span className="gradient-text">конкурентов</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            GetCourse, Courstore и другие платформы не дают этих возможностей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-3xl bg-gradient-to-br ${feature.bgGradient} border border-gray-100 hover-lift cursor-default`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Badge */}
              {feature.badge && (
                <span className={`absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} text-white`}>
                  {feature.badge}
                </span>
              )}

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
