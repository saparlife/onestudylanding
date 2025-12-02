import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LeadModalProvider } from "@/components/LeadModalProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "1Study — Платформа для онлайн-школ с защитой от пиратства",
  description: "Создайте онлайн-школу за 24 часа. Мобильное приложение iOS и Android, защита контента от записи экрана, WhatsApp уведомления. 14 дней бесплатно.",
  keywords: [
    "онлайн-школа",
    "платформа для курсов",
    "LMS",
    "защита от пиратства",
    "мобильное приложение для курсов",
    "создать онлайн-школу",
    "продажа курсов",
    "онлайн обучение",
    "образовательная платформа",
    "GetCourse альтернатива",
    "Courstore альтернатива",
    "онлайн курсы Казахстан",
    "1study",
  ],
  authors: [{ name: "1Study" }],
  creator: "1Study",
  publisher: "1Study",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://1study.kz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://1study.kz",
    siteName: "1Study",
    title: "1Study — Платформа для онлайн-школ с защитой от пиратства",
    description: "Создайте онлайн-школу за 24 часа. Мобильное приложение iOS и Android, защита контента от записи экрана. 14 дней бесплатно.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "1Study - Платформа для онлайн-школ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1Study — Платформа для онлайн-школ с защитой от пиратства",
    description: "Создайте онлайн-школу за 24 часа. Мобильное приложение iOS и Android, защита контента от записи экрана.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-542RMBVB');`}
        </Script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={`${manrope.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-542RMBVB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider>
          <LanguageProvider>
            <LeadModalProvider>
              {children}
            </LeadModalProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
