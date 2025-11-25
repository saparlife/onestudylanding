export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Регистрация",
      description: "Создайте аккаунт школы за 2 минуты",
    },
    {
      number: "02",
      title: "Загрузите контент",
      description: "Добавьте курсы, видео, PDF-материалы",
    },
    {
      number: "03",
      title: "Подключите WhatsApp",
      description: "Сканируйте QR — приглашения с вашего номера",
    },
    {
      number: "04",
      title: "Приглашайте учеников",
      description: "Ссылки на iOS, Android и веб. Готово!",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-[120px] -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-4">Как начать</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            От регистрации до ученика — час
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl relative z-10">
                {/* Number */}
                <div className="text-5xl font-bold text-white/10 mb-4">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
