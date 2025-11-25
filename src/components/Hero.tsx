export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-indigo-100 text-indigo-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-indigo-100/50 animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            43 онлайн-школы уже с нами
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Платформа для{" "}
            <span className="gradient-text">онлайн-школ</span>
            <br />
            с защитой от пиратства
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Мобильное приложение iOS и Android для ваших учеников.
            <span className="text-gray-900 font-semibold"> Нельзя сделать скриншот</span> — ваш контент защищён.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#pricing"
              className="group gradient-bg text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-2"
            >
              Попробовать 14 дней бесплатно
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#features"
              className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-indigo-300 hover:text-indigo-600 transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Посмотреть возможности
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-gray-500 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">Без программистов</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-medium">Запуск за 24 часа</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="font-medium">5000+ учеников</span>
            </div>
          </div>
        </div>

        {/* App Preview */}
        <div className="mt-20 relative animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-20 scale-95" />
          <div className="relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-3 sm:p-6 border border-gray-200 shadow-2xl">
            <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              {/* Mock app interface */}
              <div className="text-center p-8">
                <div className="w-20 h-20 animated-gradient rounded-3xl mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg">Превью приложения</p>
                <p className="text-gray-600 mt-2">Добавьте скриншоты вашего приложения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
