"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage, Language, Currency } from "./LanguageProvider";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currDropdownOpen, setCurrDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const currRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, currency, setCurrency, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (currRef.current && !currRef.current.contains(event.target as Node)) {
        setCurrDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "kz", label: "Қазақша", flag: "🇰🇿" },
    { code: "en", label: "English", flag: "🇺🇸" },
  ];

  const currencies: { code: Currency; label: string; symbol: string }[] = [
    { code: "kzt", label: "Тенге", symbol: "₸" },
    { code: "usd", label: "Dollar", symbol: "$" },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];
  const currentCurr = currencies.find(c => c.code === currency) || currencies[0];

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
          {/* Logo */}
          <a href="/" className="text-xl sm:text-2xl font-bold gradient-text">
            1Study
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition font-medium">
              {t("nav.features")}
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition font-medium">
              {t("nav.pricing")}
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition font-medium">
              {t("nav.faq")}
            </a>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => { setLangDropdownOpen(!langDropdownOpen); setCurrDropdownOpen(false); }}
                className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-xs sm:text-sm font-medium text-gray-300"
              >
                <span>{currentLang.code.toUpperCase()}</span>
                <svg className={`w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-gray-900 border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[140px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setLangDropdownOpen(false); }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition ${
                        language === lang.code
                          ? "bg-indigo-500/20 text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div ref={currRef} className="relative">
              <button
                onClick={() => { setCurrDropdownOpen(!currDropdownOpen); setLangDropdownOpen(false); }}
                className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-xs sm:text-sm font-medium text-gray-300"
              >
                <span className="text-sm sm:text-base">{currentCurr.symbol}</span>
                <svg className={`w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform ${currDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {currDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-gray-900 border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[120px]">
                  {currencies.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => { setCurrency(curr.code); setCurrDropdownOpen(false); }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition ${
                        currency === curr.code
                          ? "bg-indigo-500/20 text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="text-base w-5">{curr.symbol}</span>
                      <span>{curr.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <a
              href="https://web.1study.kz"
              className="gradient-bg text-white px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 transition shadow-lg shadow-indigo-500/25"
            >
              {t("nav.login")}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 transition"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden py-4 border-t border-white/10">
            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2 mb-4">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition font-medium py-2"
              >
                {t("nav.features")}
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition font-medium py-2"
              >
                {t("nav.pricing")}
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition font-medium py-2"
              >
                {t("nav.faq")}
              </a>
              </nav>
          </div>
        )}
      </div>
    </header>
  );
}
