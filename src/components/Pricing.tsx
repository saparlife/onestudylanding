export function Pricing() {
  const plans = [
    {
      name: "Эконом",
      price: "9 900",
      period: "₸/мес",
      description: "Для начинающих",
      students: "20 учеников/мес",
      features: [
        "iOS и Android приложение",
        "Защита от записи экрана",
        "WhatsApp уведомления",
        "Мультиязычность",
      ],
      popular: false,
    },
    {
      name: "Школа",
      price: "39 900",
      period: "₸/мес",
      description: "Для растущих школ",
      students: "200 учеников/мес",
      features: [
        "Всё из Эконом",
        "Приоритетная поддержка",
        "Аналитика",
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
      students: "1000 учеников/мес",
      features: [
        "Всё из Школа",
        "Личный менеджер",
        "API интеграции",
        "White-label",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-4">Тарифы</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Простые и прозрачные
          </h2>
          <p className="text-xl text-gray-400">
            14 дней бесплатно. Без привязки карты.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all ${
                plan.popular
                  ? "bg-gradient-to-b from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500/50"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gradient-bg text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    Популярный
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-indigo-400 text-sm mt-1">{plan.students}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://app.1study.kz/register"
                  className={`block w-full py-3 px-6 rounded-full font-semibold text-center transition ${
                    plan.popular
                      ? "gradient-bg text-white hover:opacity-90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Начать бесплатно
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12">
          Нужно больше?{" "}
          <a href="mailto:hello@1study.kz" className="text-indigo-400 hover:underline">
            Напишите нам
          </a>
        </p>
      </div>
    </section>
  );
}
