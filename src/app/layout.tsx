import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";
import { appRelease } from "@/config/app-release";

const thmanyah = localFont({
  src: [
    { path: "../fonts/thmanyahsans-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/thmanyahsans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/thmanyahsans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/thmanyahsans-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/thmanyahsans-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-thmanyah",
  display: "swap",
});

const siteDescription =
  "الموقع الرسمي لتحميل تطبيق حراج يمني لنظام Android مع نسخة Demo تجريبية وتعليمات التثبيت وروابط الإصدار.";

export const metadata: Metadata = {
  metadataBase: new URL("https://haraj-yamani.example"),
  title: {
    default: `${appRelease.appName} | الموقع الرسمي للتحميل`,
    template: `%s | ${appRelease.appName}`,
  },
  description: siteDescription,
  applicationName: appRelease.appName,
  authors: [{ name: appRelease.appName }],
  icons: {
    icon: "/brand/icon-maskable-192.png",
    apple: "/brand/icon-maskable-192.png",
  },
  openGraph: {
    title: `${appRelease.appName} | الموقع الرسمي للتحميل`,
    description: siteDescription,
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${appRelease.appName} - الموقع الرسمي للتحميل`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${appRelease.appName} | الموقع الرسمي للتحميل`,
    description: siteDescription,
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={thmanyah.variable}>
      <body>{children}</body>
    </html>
  );
}
