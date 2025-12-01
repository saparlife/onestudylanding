"use client";

import { useState } from "react";
import { useLeadModal } from "./LeadModalProvider";
import { useLanguage } from "./LanguageProvider";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const { openModal } = useLeadModal();
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.plan1.name"),
      monthlyPrice: "26 000",
      yearlyPrice: "16 000",
      quarterTotal: "78 000",
      yearTotal: "192 000",
      description: t("pricing.plan1.desc"),
      students: "100 " + t("pricing.feature.students") + "/мес",
      courses: "3 " + t("pricing.feature.courses"),
      storage: "30 ГБ",
      features: [
        t("pricing.feature.mobileApp"),
        t("pricing.feature.antiPiracy"),
        t("pricing.feature.whatsapp"),
        t("features.3.title"),
      ],
      popular: false,
    },
    {
      name: t("pricing.plan2.name"),
      monthlyPrice: "64 000",
      yearlyPrice: "40 000",
      quarterTotal: "192 000",
      yearTotal: "480 000",
      description: t("pricing.plan2.desc"),
      students: "500 " + t("pricing.feature.students") + "/мес",
      courses: "10 " + t("pricing.feature.courses"),
      storage: "100 ГБ",
      features: [
        t("pricing.plan1.name") + " +",
        t("pricing.feature.priority"),
        t("pricing.feature.analytics"),
        t("features.5.title"),
      ],
      popular: true,
    },
    {
      name: t("pricing.plan3.name"),
      monthlyPrice: "126 000",
      yearlyPrice: "79 000",
      quarterTotal: "378 000",
      yearTotal: "948 000",
      description: t("pricing.plan3.desc"),
      students: t("pricing.feature.unlimitedStudents"),
      courses: t("pricing.feature.unlimitedCourses"),
      storage: "300 ГБ",
      features: [
        t("pricing.plan2.name") + " +",
        t("pricing.feature.manager"),
        t("pricing.feature.api"),
        "White-label",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-medium mb-4">{t("pricing.label")}</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {t("pricing.subtitle")}
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur border border-white/10 p-1.5 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full font-medium transition cursor-pointer ${
                !isYearly
                  ? "bg-white text-gray-900"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("pricing.quarterly")}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full font-medium transition cursor-pointer flex items-center gap-2 ${
                isYearly
                  ? "bg-white text-gray-900"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("pricing.yearly")}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                isYearly ? "bg-green-500 text-white" : "bg-green-500/20 text-green-400"
              }`}>
                {t("pricing.discount")}
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all ${
                plan.popular
                  ? "bg-gradient-to-b from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500/50"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gradient-bg text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    {t("pricing.popular")}
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400">₸/мес</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    {isYearly
                      ? `${plan.yearTotal} ₸ ${t("pricing.perYear")}`
                      : `${plan.quarterTotal} ₸ ${t("pricing.perQuarter")}`
                    }
                  </p>
                </div>

                {/* Limits */}
                <div className="space-y-2 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400 font-medium">{plan.students}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>{plan.courses}</span>
                    <span className="text-white/20">•</span>
                    <span>{plan.storage}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => openModal(plan.name)}
                  className={`block w-full py-3 px-6 rounded-full font-semibold text-center transition cursor-pointer ${
                    plan.popular
                      ? "gradient-bg text-white hover:opacity-90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {t("cta.button")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12">
          {t("footer.contact")}:{" "}
          <a href="https://wa.me/77476899983" className="text-indigo-400 hover:underline">
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
