"use client";

import { useState } from "react";
import { useLeadModal } from "./LeadModalProvider";
import { useLanguage } from "./LanguageProvider";

type BillingPeriod = "monthly" | "quarterly" | "yearly";

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");
  const { openModal } = useLeadModal();
  const { t, currency } = useLanguage();

  const plansData = {
    kzt: [
      {
        name: t("pricing.plan1.name"),
        monthlyPrice: 31900,
        quarterlyPrice: 25900,
        yearlyPrice: 15900,
        symbol: "₸",
      },
      {
        name: t("pricing.plan2.name"),
        monthlyPrice: 79900,
        quarterlyPrice: 63900,
        yearlyPrice: 39900,
        symbol: "₸",
      },
      {
        name: t("pricing.plan3.name"),
        monthlyPrice: 159900,
        quarterlyPrice: 125900,
        yearlyPrice: 79900,
        symbol: "₸",
      },
    ],
    usd: [
      {
        name: t("pricing.plan1.name"),
        monthlyPrice: 49,
        quarterlyPrice: 39,
        yearlyPrice: 29,
        symbol: "$",
      },
      {
        name: t("pricing.plan2.name"),
        monthlyPrice: 129,
        quarterlyPrice: 99,
        yearlyPrice: 79,
        symbol: "$",
      },
      {
        name: t("pricing.plan3.name"),
        monthlyPrice: 249,
        quarterlyPrice: 199,
        yearlyPrice: 149,
        symbol: "$",
      },
    ],
  };

  const plansMeta = [
    {
      description: t("pricing.plan1.desc"),
      limits: [
        { label: t("pricing.feature.studentsPerMonth"), value: "200" },
        { label: t("pricing.feature.courses"), value: "3" },
        { label: t("pricing.limit.storage"), value: "30 ГБ" },
      ],
      features: [
        t("pricing.feature.mobileApp"),
        t("pricing.feature.antiPiracy"),
        t("pricing.feature.whatsappReg"),
        t("pricing.feature.certificates"),
        t("pricing.feature.analytics"),
        t("pricing.feature.courseBuilder"),
      ],
      highlight: false,
      tier: "start",
    },
    {
      description: t("pricing.plan2.desc"),
      limits: [
        { label: t("pricing.feature.students"), value: "∞" },
        { label: t("pricing.feature.courses"), value: "∞" },
        { label: t("pricing.limit.storage"), value: "100 ГБ" },
      ],
      features: [
        t("pricing.plan1.name") + " +",
        t("pricing.feature.roles"),
        t("pricing.feature.hwTests"),
        t("pricing.feature.ownWhatsapp"),
      ],
      highlight: true,
      tier: "school",
    },
    {
      description: t("pricing.plan3.desc"),
      limits: [
        { label: t("pricing.feature.students"), value: "∞" },
        { label: t("pricing.feature.courses"), value: "∞" },
        { label: t("pricing.limit.storage"), value: "∞" },
      ],
      features: [
        t("pricing.plan2.name") + " +",
        t("pricing.feature.whatsappBroadcast"),
        t("pricing.feature.customDesign"),
        t("pricing.feature.customDomain"),
        t("pricing.feature.aiAssistant"),
      ],
      extraFeatures: [
        t("pricing.feature.rfm"),
        t("pricing.feature.certDesign"),
        t("pricing.feature.customPages"),
        "White-label",
        t("pricing.feature.customPayments"),
        "AMO CRM",
        t("pricing.feature.aiBuilder"),
      ],
      highlight: false,
      tier: "academy",
    },
  ];

  const plans = plansData[currency].map((priceData, i) => ({
    ...priceData,
    ...plansMeta[i],
  }));

  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU");
  };

  const getPrice = (plan: typeof plans[0]) => {
    switch (billingPeriod) {
      case "yearly": return plan.yearlyPrice;
      case "quarterly": return plan.quarterlyPrice;
      default: return plan.monthlyPrice;
    }
  };

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyTotal = plan.monthlyPrice * 12;
    const yearlyTotal = plan.yearlyPrice * 12;
    const quarterlyTotal = plan.quarterlyPrice * 12;

    if (billingPeriod === "yearly") {
      return monthlyTotal - yearlyTotal;
    } else if (billingPeriod === "quarterly") {
      return monthlyTotal - quarterlyTotal;
    }
    return 0;
  };

  const getTotalPrice = (plan: typeof plans[0]) => {
    switch (billingPeriod) {
      case "yearly": return plan.yearlyPrice * 12;
      case "quarterly": return plan.quarterlyPrice * 3;
      default: return plan.monthlyPrice;
    }
  };

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

          {/* Billing Period Toggle */}
          <div className="inline-flex items-center gap-1 bg-white/5 backdrop-blur border border-white/10 p-1.5 rounded-full">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 sm:px-6 py-2.5 rounded-full font-medium transition cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-white text-gray-900"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("pricing.monthly")}
            </button>
            <button
              onClick={() => setBillingPeriod("quarterly")}
              className={`px-4 sm:px-6 py-2.5 rounded-full font-medium transition cursor-pointer flex items-center gap-2 ${
                billingPeriod === "quarterly"
                  ? "bg-white text-gray-900"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("pricing.quarterly")}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                billingPeriod === "quarterly" ? "bg-green-500 text-white" : "bg-green-500/20 text-green-400"
              }`}>
                -20%
              </span>
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 sm:px-6 py-2.5 rounded-full font-medium transition cursor-pointer flex items-center gap-2 ${
                billingPeriod === "yearly"
                  ? "bg-white text-gray-900"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("pricing.yearly")}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                billingPeriod === "yearly" ? "bg-green-500 text-white" : "bg-green-500/20 text-green-400"
              }`}>
                -50%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl transition-all duration-300 overflow-hidden ${
                plan.tier === "academy"
                  ? "bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40 border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/10"
                  : plan.highlight
                  ? "bg-gradient-to-b from-white/10 to-white/5 border-2 border-indigo-400/50 scale-[1.02]"
                  : "bg-white/[0.03] border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Highlight badge */}
              {plan.highlight && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-6 py-1.5 rounded-b-xl">
                    {t("pricing.popular")}
                  </div>
                </div>
              )}

              {/* Academy special badge */}
              {plan.tier === "academy" && (
                <div className="absolute -top-px right-6">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-b-xl flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    PRO
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.tier === "academy" ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300" : "text-white"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-5xl font-bold text-white">
                      {currency === "usd" ? "$" : ""}{formatPrice(getPrice(plan))}{currency === "kzt" ? " ₸" : ""}
                    </span>
                    <span className="text-gray-400 text-lg">/{t("pricing.perMonthShort")}</span>
                  </div>

                  {billingPeriod !== "monthly" && (
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-gray-500 line-through text-sm">
                        {currency === "usd" ? "$" : ""}{formatPrice(plan.monthlyPrice)}{currency === "kzt" ? " ₸" : ""}
                      </span>
                      <span className="text-green-400 text-sm font-medium bg-green-400/10 px-2 py-0.5 rounded">
                        {t("pricing.save")} {currency === "usd" ? "$" : ""}{formatPrice(getSavings(plan))}{currency === "kzt" ? " ₸" : ""}
                      </span>
                    </div>
                  )}

                  <p className="text-gray-500 text-sm mt-2">
                    {billingPeriod === "yearly" && `${currency === "usd" ? "$" : ""}${formatPrice(getTotalPrice(plan))}${currency === "kzt" ? " ₸" : ""} ${t("pricing.perYear")}`}
                    {billingPeriod === "quarterly" && `${currency === "usd" ? "$" : ""}${formatPrice(getTotalPrice(plan))}${currency === "kzt" ? " ₸" : ""} ${t("pricing.perQuarter")}`}
                    {billingPeriod === "monthly" && t("pricing.billedMonthly")}
                  </p>
                </div>

                {/* Limits */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-white/5 rounded-2xl">
                  {plan.limits.map((limit, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-2xl font-bold ${
                        limit.value === "∞" ? "text-indigo-400 text-3xl" : "text-white"
                      }`}>
                        {limit.value}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">{limit.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.tier === "academy" ? "bg-indigo-500/20" : "bg-green-500/20"
                      }`}>
                        <svg className={`w-3 h-3 ${
                          plan.tier === "academy" ? "text-indigo-400" : "text-green-400"
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}

                  {/* Extra features for Academy */}
                  {plan.extraFeatures && (
                    <li className="relative group flex items-center gap-3 pt-2 cursor-pointer">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 text-xs font-bold">+{plan.extraFeatures.length}</span>
                      </div>
                      <span className="text-purple-300 text-sm group-hover:text-purple-200 transition-colors">
                        {t("pricing.moreFeatures")}
                      </span>

                      {/* Tooltip */}
                      <div className="absolute left-0 bottom-full mb-2 w-64 p-4 bg-gray-900 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                        <p className="text-white text-xs font-medium mb-2">{t("pricing.includedAlso")}:</p>
                        <ul className="space-y-1.5">
                          {plan.extraFeatures.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300 text-xs">
                              <svg className="w-3 h-3 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="absolute left-6 -bottom-1.5 w-3 h-3 bg-gray-900 border-r border-b border-white/10 transform rotate-45" />
                      </div>
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => openModal(plan.name)}
                  className={`block w-full py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-200 cursor-pointer ${
                    plan.tier === "academy"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-500/25"
                      : plan.highlight
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
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
