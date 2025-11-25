export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Регистрация",
      description: "Создайте аккаунт школы за 2 минуты. Никаких документов и верификаций.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      number: "02",
      title: "Загрузите контент",
      description: "Добавьте курсы, уроки, видео, PDF-материалы. Настройте дизайн под свой бренд.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Подключите WhatsApp",
      description: "Сканируйте QR-код — и приглашения будут уходить с вашего номера.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      number: "04",
      title: "Приглашайте учеников",
      description: "Добавьте ученика — он получит ссылки на iOS, Android и веб. Готово!",
      gradient: "from-rose-500 to-orange-500",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 font-semibold mb-4">Как начать</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            От регистрации до первого ученика —{" "}
            <span className="gradient-text">меньше часа</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all relative z-10 hover-lift">
                {/* Number */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-2xl font-extrabold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
