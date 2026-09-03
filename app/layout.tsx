import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ContentLab — разработка сайтов для бизнеса",
    template: "%s | ContentLab",
  },

  description:
    "ContentLab — студия разработки сайтов для бизнеса. Создаём лендинги, сайты компаний и небольшие интернет-магазины. Индивидуальный дизайн, адаптивная разработка и запуск.",

  keywords: [
    "разработка сайтов",
    "создание сайтов",
    "сайт для бизнеса",
    "разработка лендингов",
    "лендинг",
    "корпоративный сайт",
    "сайт компании",
    "интернет-магазин",
    "веб-разработка",
    "ContentLab",
  ],

  authors: [
    {
      name: "ContentLab",
    },
  ],

  creator: "ContentLab",
  publisher: "ContentLab",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "ContentLab",
    title: "ContentLab — разработка сайтов для бизнеса",
    description:
      "Лендинги, сайты компаний и небольшие интернет-магазины. Разработка сайтов от идеи до запуска.",
  },

  twitter: {
    card: "summary_large_image",
    title: "ContentLab — разработка сайтов для бизнеса",
    description:
      "Лендинги, сайты компаний и небольшие интернет-магазины. Разработка сайтов от идеи до запуска.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}