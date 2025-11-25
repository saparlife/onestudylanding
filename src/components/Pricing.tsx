export function Pricing() {
  const plans = [
    {
      name: "Эконом",
      price: "9 900",
      period: "₸/мес",
      description: "Для начинающих школ",
      students: "20 новых учеников/мес",
      features: [
        "Мобильное приложение iOS и Android",
        "Защита от записи экрана",
        "WhatsApp уведомления",
        "Мультиязычность",
        "Домашки и тесты",
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-700",
    },
    {
      name: "Школа",
      price: "39 900",
      period: "₸/мес",
      description: "Для растущих школ",
      students: "200 новых учеников/мес",
      features: [
        "Всё из тарифа Эконом",
        "Приоритетная поддержка",
        "Аналитика по ученикам",
        "База знаний",
        "Свой домен",
      ],
      popular: true,
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      name: "Академия",
      price: "99 000",
      period: "₸/мес",
      description: "Для крупных школ",
      students: "1000 новых учеников/мес",
      features: [
        "Всё из тарифа Школа",
        "Личный менеджер",
        "API интеграции",
        "White-label приложение",
        "Обучение команды",
      ],
      popular: false,
      gradient: "from-gray-800 to-gray-900",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 font-semibold mb-4">Тарифы</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Простые и{" "}
            <span className="gradient-text">прозрачные</span>
          </h2>
          <p className="text-xl text-gray-600">
            14 дней бесплатно на любом тарифе. Без привязки карты.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl transition-all duration-300 ${
                plan.popular
                  ? "bg-white shadow-2xl shadow-indigo-200/50 scale-105 z-10"
                  : "bg-white shadow-xl hover:shadow-2xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-bg text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    Популярный
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-500">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 font-medium">{plan.period}</span>
                  </div>
                  <p className={`mt-2 font-semibold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.students}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://app.1study.kz/register"
                  className={`block w-full py-4 px-6 rounded-2xl font-bold text-center transition ${
                    plan.popular
                      ? "gradient-bg text-white hover:opacity-90 shadow-lg shadow-indigo-500/30"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Начать бесплатно
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12 text-lg">
          Нужно больше?{" "}
          <a href="mailto:hello@1study.kz" className="text-indigo-600 font-semibold hover:underline">
            Напишите нам
          </a>{" "}
          — обсудим индивидуальные условия.
        </p>
      </div>
    </section>
  );
}
