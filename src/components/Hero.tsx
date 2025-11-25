"use client";

import { AnimatedCounter } from "./AnimatedCounter";
import { useLeadModal } from "./LeadModalProvider";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { openModal } = useLeadModal();
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full filter blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/20 rounded-full filter blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          {t("hero.badge")}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
          {t("hero.title.line1")}
          <br />
          <span className="gradient-text">{t("hero.title.line2")}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => openModal()}
            className="group gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition shadow-2xl shadow-indigo-500/25 flex items-center justify-center gap-2"
          >
            {t("hero.cta")}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <a
            href="#features"
            className="border border-white/20 bg-white/5 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            {t("hero.learnMore")}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
              <AnimatedCounter end={43} />
            </div>
            <div className="text-gray-500 text-sm">{t("hero.stats.schools")}</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
              <AnimatedCounter end={5000} suffix="+" />
            </div>
            <div className="text-gray-500 text-sm">{t("hero.stats.students")}</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
              <AnimatedCounter end={24} suffix={t("hero.stats.hoursSuffix")} />
            </div>
            <div className="text-gray-500 text-sm">{t("hero.stats.launch")}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
