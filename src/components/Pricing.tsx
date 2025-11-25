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
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Простые тарифы
          </h2>
          <p className="text-xl text-gray-600">
            14 дней бесплатно на любом тарифе. Без привязки карты.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition ${
                plan.popular
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-indigo-600 font-medium mt-2">{plan.students}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.1study.kz/register"
                className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Начать бесплатно
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8">
          Нужно больше? <a href="mailto:hello@1study.kz" className="text-indigo-600 hover:underline">Напишите нам</a> — обсудим индивидуальные условия.
        </p>
      </div>
    </section>
  );
}
