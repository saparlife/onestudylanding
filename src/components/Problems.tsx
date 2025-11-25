"use client";

import { useLanguage } from "./LanguageProvider";

export function Problems() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: t("problems.1.icon"),
      problem: t("problems.1.title"),
      description: t("problems.1.desc"),
    },
    {
      icon: t("problems.2.icon"),
      problem: t("problems.2.title"),
      description: t("problems.2.desc"),
    },
    {
      icon: t("problems.3.icon"),
      problem: t("problems.3.title"),
      description: t("problems.3.desc"),
    },
    {
      icon: t("problems.4.icon"),
      problem: t("problems.4.title"),
      description: t("problems.4.desc"),
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-400 font-medium mb-4">{t("problems.label")}</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            {t("problems.title")}
          </h2>
          <p className="text-xl text-gray-400">
            {t("problems.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex gap-5">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.problem}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-full">
            <span className="text-2xl">✨</span>
            <p className="text-lg font-semibold text-white">
              {t("problems.solution")}
            </p>
            <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
