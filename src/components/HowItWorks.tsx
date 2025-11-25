export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Регистрация",
      description: "Создайте аккаунт школы за 2 минуты. Никаких документов и верификаций.",
    },
    {
      number: "2",
      title: "Загрузите контент",
      description: "Добавьте курсы, уроки, видео, PDF-материалы. Настройте дизайн под свой бренд.",
    },
    {
      number: "3",
      title: "Подключите WhatsApp",
      description: "Сканируйте QR-код — и приглашения будут уходить с вашего номера.",
    },
    {
      number: "4",
      title: "Приглашайте учеников",
      description: "Добавьте ученика — он получит ссылки на iOS, Android и веб. Готово!",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600">
            От регистрации до первого ученика — меньше часа
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-indigo-200 -translate-x-1/2" />
              )}

              <div className="bg-white p-6 rounded-2xl border border-gray-200 relative z-10">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
