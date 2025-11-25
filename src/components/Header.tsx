export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-indigo-600">
            1Study
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
              Возможности
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
              Тарифы
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://app.1study.kz"
              className="text-gray-600 hover:text-gray-900 transition hidden sm:block"
            >
              Войти
            </a>
            <a
              href="#pricing"
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Начать бесплатно
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
