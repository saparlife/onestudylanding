export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-indigo-600 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Готовы защитить свои курсы?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Попробуйте 1Study бесплатно 14 дней. Без привязки карты, без ограничений.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.1study.kz/register"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition"
            >
              Начать бесплатно
            </a>
            <a
              href="https://wa.me/77001234567"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition"
            >
              Написать в WhatsApp
            </a>
          </div>

          <p className="text-indigo-200 mt-6 text-sm">
            Уже 43 онлайн-школы доверяют нам свой контент
          </p>
        </div>
      </div>
    </section>
  );
}
