import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "1Study — Платформа для онлайн-школ с защитой от пиратства",
  description: "Создайте онлайн-школу за 24 часа. Мобильное приложение iOS и Android, защита контента от записи экрана, WhatsApp уведомления, мультиязычность.",
  keywords: "онлайн-школа, курсы, LMS, платформа для курсов, защита от пиратства, мобильное приложение",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
