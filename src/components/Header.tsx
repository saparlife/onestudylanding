"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="text-xl sm:text-2xl font-bold gradient-text">
            1Study
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition font-medium">
              Возможности
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition font-medium">
              Тарифы
            </a>
            <a href="#faq" className="text-gray-600 hover:text-indigo-600 transition font-medium">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://app.1study.kz"
              className="text-gray-600 hover:text-indigo-600 transition hidden sm:block font-medium"
            >
              Войти
            </a>
            <a
              href="#pricing"
              className="gradient-bg text-white px-4 sm:px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition shadow-lg shadow-indigo-500/25"
            >
              Начать
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
