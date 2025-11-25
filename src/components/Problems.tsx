export function Problems() {
  const problems = [
    {
      icon: "🏴‍☠️",
      problem: "Курсы сливают в Telegram",
      description: "Ученики записывают экран и продают ваш контент за копейки",
    },
    {
      icon: "📧",
      problem: "Email попадает в спам",
      description: "Ученики не видят приглашение и не могут начать обучение",
    },
    {
      icon: "📱",
      problem: "Нет мобильного приложения",
      description: "Ученикам неудобно учиться с телефона через браузер",
    },
    {
      icon: "🌐",
      problem: "Нет казахского языка",
      description: "Платформы только на русском, а вам нужен қазақша",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Знакомые проблемы?
          </h2>
          <p className="text-xl text-gray-600">
            Другие платформы не решают главные боли онлайн-школ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-200 hover:bg-red-50/50 transition group"
            >
              <div className="flex gap-4">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-700">
                    {item.problem}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-semibold text-indigo-600">
            1Study решает все эти проблемы ↓
          </p>
        </div>
      </div>
    </section>
  );
}
