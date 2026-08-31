import type { Metadata } from "next";

import { vazir } from "@/app/Fonts";

import "./globals.css";

import Header from "@/components/module/header/Header";
import Footer from "@/components/module/footer/Footer";

// =====================================================
// GLOBAL SEO
// =====================================================

export const metadata: Metadata = {
  metadataBase: new URL("https://toloozendegi.ir"),

  title: {
    default: "طلوع زندگی | مرکز درمان و بازتوانی",
    template: "%s | طلوع زندگی",
  },

  description:
    "طلوع زندگی؛ مرکز درمان و بازتوانی وابستگی به مواد با ارائه خدمات حمایتی، مشاوره‌ای و برنامه‌های بازتوانی در محیطی آرام و مناسب.",

  keywords: [
    "طلوع زندگی",
    "مرکز ترک اعتیاد",
    "مرکز درمان اعتیاد",
    "بازتوانی اعتیاد",
    "درمان وابستگی به مواد",
    "کمپ ترک اعتیاد",
    "مشاوره ترک اعتیاد",
  ],

  authors: [
    {
      name: "طلوع زندگی",
    },
  ],

  creator: "طلوع زندگی",

  publisher: "طلوع زندگی",

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
    locale: "fa_IR",
    siteName: "طلوع زندگی",

    title: "طلوع زندگی | مرکز درمان و بازتوانی",

    description: "آشنایی با خدمات، امکانات و مسیر درمان و بازتوانی طلوع زندگی.",

    url: "https://toloozendegi.com",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "طلوع زندگی | مرکز درمان و بازتوانی",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "طلوع زندگی | مرکز درمان و بازتوانی",

    description: "مرکز درمان و بازتوانی طلوع زندگی.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

// =====================================================
// ROOT LAYOUT
// =====================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className={vazir.variable}>
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
