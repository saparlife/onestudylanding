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
          ? "bg-gray-950/90 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="text-xl sm:text-2xl font-bold gradient-text">
            1Study
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition font-medium">
              Возможности
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition font-medium">
              Тарифы
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition font-medium">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://app.1study.kz"
              className="text-gray-300 hover:text-white transition hidden sm:block font-medium"
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
