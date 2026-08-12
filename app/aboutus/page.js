import AboutPage from "@/components/module/about/AboutPage";

export const metadata = {
  title: "درباره ما | کمپ ترک اعتیاد طلوع زندگی",

  description:
    "با کمپ ترک اعتیاد طلوع زندگی، رویکرد درمانی، ارزش‌ها و مسیر همراهی ما برای بازگشت به یک زندگی سالم و پایدار آشنا شوید.",

  keywords: [
    "کمپ ترک اعتیاد طلوع زندگی",
    "درباره کمپ طلوع زندگی",
    "مرکز ترک اعتیاد",
    "ترک اعتیاد",
    "بازگشت به زندگی سالم",
  ],

  openGraph: {
    title: "درباره کمپ ترک اعتیاد طلوع زندگی",
    description:
      "آشنایی با کمپ طلوع زندگی، رویکرد درمانی، ارزش‌ها و مسیر همراهی با مراجعان.",
    type: "website",
  },
};

export default function AboutPageRoute() {
  return <AboutPage />;
}
