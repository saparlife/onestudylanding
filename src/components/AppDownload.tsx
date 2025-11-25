"use client";

import { useLanguage } from "./LanguageProvider";

export function AppDownload() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full filter blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-indigo-400 font-medium mb-4">{t("app.label")}</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              {t("app.title")}
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {t("app.subtitle")}
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">{t("app.feature1")}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">{t("app.feature2")}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">{t("app.feature3")}</span>
              </li>
            </ul>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://apps.apple.com/my/app/1study/id6738660263"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">{t("app.downloadIn")}</div>
                  <div className="text-sm font-bold -mt-0.5">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=kz.onestudy.main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">{t("app.downloadIn")}</div>
                  <div className="text-sm font-bold -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Phone mockups */}
          <div className="relative flex justify-center">
            {/* Phone mockup placeholder */}
            <div className="relative">
              {/* Back phone */}
              <div className="absolute -right-8 top-8 w-48 h-96 rounded-[2.5rem] bg-gray-800 border-4 border-gray-700 shadow-2xl transform rotate-6 opacity-50">
                <div className="absolute inset-2 rounded-[2rem] bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">{t("app.screen2")}</span>
                </div>
              </div>

              {/* Front phone */}
              <div className="relative w-56 h-[28rem] rounded-[2.5rem] bg-gray-800 border-4 border-gray-700 shadow-2xl z-10">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />

                {/* Screen */}
                <div className="absolute inset-2 rounded-[2rem] bg-gradient-to-b from-indigo-900 to-purple-900 overflow-hidden">
                  {/* App content placeholder */}
                  <div className="p-4 pt-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                        1S
                      </div>
                      <div>
                        <div className="w-20 h-2 bg-white/30 rounded" />
                        <div className="w-12 h-2 bg-white/20 rounded mt-1" />
                      </div>
                    </div>

                    {/* Lesson cards placeholder */}
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white/10 rounded-xl p-3">
                          <div className="w-full h-16 bg-white/10 rounded-lg mb-2" />
                          <div className="w-3/4 h-2 bg-white/30 rounded" />
                          <div className="w-1/2 h-2 bg-white/20 rounded mt-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
