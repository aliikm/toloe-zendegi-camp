import AboutPage from "@/components/module/about/AboutPage";

// =====================================================
// SEO METADATA
// =====================================================

export const metadata = {
  title: "درباره کمپ ترک اعتیاد طلوع زندگی | رویکرد و ارزش‌های ما",

  description:
    "با کمپ ترک اعتیاد طلوع زندگی، رویکرد درمانی، محیط اقامتی، ارزش‌ها و نحوه همراهی ما در مسیر بهبودی و بازگشت به زندگی سالم آشنا شوید.",

  keywords: [
    "کمپ ترک اعتیاد",
    "کمپ ترک اعتیاد تهران",
    "کمپ ترک اعتیاد استان تهران",
    "مرکز ترک اعتیاد",
    "درمان اعتیاد",
    "ترک اعتیاد",
    "کمپ طلوع زندگی",
    "درباره کمپ طلوع زندگی",
    "مشاوره ترک اعتیاد",
  ],

  alternates: {
    canonical: "/aboutus",
  },

  openGraph: {
    title: "درباره کمپ ترک اعتیاد طلوع زندگی",

    description:
      "آشنایی با طلوع زندگی، رویکرد ما به درمان اعتیاد، محیط مجموعه و مسیر همراهی با مراجعان.",

    url: "https://toloozendegi.ir/aboutus",

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

// =====================================================
// STRUCTURED DATA / SCHEMA
// =====================================================

const structuredData = {
  "@context": "https://schema.org",

  "@type": "WebPage",

  "@id": "https://toloozendegi.ir/aboutus/#webpage",

  url: "https://toloozendegi.ir/aboutus",

  name: "درباره کمپ ترک اعتیاد طلوع زندگی | رویکرد و ارزش‌های ما",

  description:
    "آشنایی با طلوع زندگی، رویکرد درمانی، محیط مجموعه و نحوه همراهی با مراجعان در مسیر درمان و بازتوانی.",

  isPartOf: {
    "@type": "WebSite",

    "@id": "https://toloozendegi.ir/#website",

    url: "https://toloozendegi.ir/",

    name: "طلوع زندگی",
  },

  about: {
    "@type": "Organization",

    "@id": "https://toloozendegi.ir/#organization",
  },

  inLanguage: "fa-IR",
};

// =====================================================
// BREADCRUMB SCHEMA
// =====================================================

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id": "https://toloozendegi.ir/aboutus/#breadcrumb",

  itemListElement: [
    {
      "@type": "ListItem",

      position: 1,

      name: "خانه",

      item: "https://toloozendegi.ir/",
    },

    {
      "@type": "ListItem",

      position: 2,

      name: "درباره ما",

      item: "https://toloozendegi.ir/aboutus",
    },
  ],
};

// =====================================================
// PAGE
// =====================================================

export default function AboutPageRoute() {
  return (
    <>
      {/* WebPage Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Breadcrumb Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Existing About Page */}

      <AboutPage />
    </>
  );
}
