import Link from "next/link";
import AboutPage from "@/components/module/about/AboutPage";

export const metadata = {
  title: "درباره کمپ ترک اعتیاد طلوع زندگی | رویکرد و ارزش‌های ما",

  description:
    "با کمپ ترک اعتیاد طلوع زندگی، رویکرد درمانی، محیط اقامتی، ارزش‌ها و نحوه همراهی ما در مسیر بهبودی و بازگشت به زندگی سالم آشنا شوید.",

  keywords: [
    "کمپ ترک اعتیاد طلوع زندگی",
    "درباره کمپ طلوع زندگی",
    "کمپ ترک اعتیاد",
    "مرکز ترک اعتیاد",
    "درمان اعتیاد",
    "ترک اعتیاد",
  ],

  alternates: {
    canonical: "/aboutus",
  },

  openGraph: {
    title: "درباره کمپ ترک اعتیاد طلوع زندگی",
    description:
      "آشنایی با طلوع زندگی، رویکرد ما به درمان اعتیاد، محیط مجموعه و مسیر همراهی با مراجعان.",
    url: "/aboutus",
    siteName: "طلوع زندگی",
    locale: "fa_IR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "درباره کمپ ترک اعتیاد طلوع زندگی",
    description: "آشنایی با طلوع زندگی و رویکرد ما در مسیر درمان و بهبودی.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPageRoute() {
  return <AboutPage />;
}
