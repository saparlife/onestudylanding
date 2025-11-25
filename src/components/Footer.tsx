export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-bold text-white">
              1Study
            </a>
            <p className="mt-4 max-w-sm">
              Платформа для онлайн-школ с защитой от пиратства. Мобильное приложение, WhatsApp уведомления, мультиязычность.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition">Возможности</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Тарифы</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@1study.kz" className="hover:text-white transition">hello@1study.kz</a></li>
              <li><a href="https://wa.me/77001234567" className="hover:text-white transition">WhatsApp</a></li>
              <li><a href="https://instagram.com/1study.kz" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} 1Study. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="hover:text-white transition">Политика конфиденциальности</a>
            <a href="/terms" className="hover:text-white transition">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
