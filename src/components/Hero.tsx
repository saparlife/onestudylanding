export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            43 онлайн-школы уже с нами
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Платформа для онлайн-школ
            <span className="text-indigo-600"> с защитой от пиратства</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Мобильное приложение iOS и Android для ваших учеников.
            Нельзя сделать скриншот или запись экрана — ваш контент защищён.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
            >
              Попробовать 14 дней бесплатно
            </a>
            <a
              href="#features"
              className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition"
            >
              Узнать больше
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Без программистов</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Запуск за 24 часа</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>5000+ учеников</span>
            </div>
          </div>
        </div>

        {/* App Preview */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-b from-indigo-100 to-white rounded-3xl p-8 sm:p-12">
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-4xl mx-auto">
              {/* Mock app interface */}
              <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">Превью приложения</p>
                  <p className="text-sm text-gray-400 mt-1">Скриншоты добавим позже</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
