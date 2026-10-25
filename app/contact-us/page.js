import ContactPage from "@/components/module/contact/ContactPage";

// =====================================================
// SEO METADATA
// =====================================================

export const metadata = {
  title: "تماس با ما | کمپ ترک اعتیاد طلوع زندگی در تهران",

  description:
    "برای دریافت مشاوره، اطلاع از شرایط پذیرش و کسب اطلاعات بیشتر درباره کمپ ترک اعتیاد طلوع زندگی در استان تهران و چهاردانگه با ما در تماس باشید.",

  keywords: [
    "تماس با کمپ ترک اعتیاد",
    "تماس کمپ ترک اعتیاد تهران",
    "تماس با کمپ طلوع زندگی",
    "مشاوره ترک اعتیاد",
    "مشاوره کمپ ترک اعتیاد",
    "پذیرش کمپ ترک اعتیاد",
    "کمپ ترک اعتیاد تهران",
    "کمپ ترک اعتیاد استان تهران",
    "کمپ ترک اعتیاد چهاردانگه",
    "کمپ ترک اعتیاد طلوع زندگی",
    "مرکز ترک اعتیاد تهران",
  ],

  alternates: {
    canonical: "/contact-us",
  },

  openGraph: {
    title: "تماس با کمپ ترک اعتیاد طلوع زندگی | تهران",

    description:
      "برای دریافت مشاوره، اطلاع از شرایط پذیرش و کسب اطلاعات بیشتر درباره کمپ ترک اعتیاد طلوع زندگی در استان تهران با ما در تماس باشید.",

    url: "https://toloozendegi.ir/contact-us",

    siteName: "کمپ ترک اعتیاد طلوع زندگی",

    locale: "fa_IR",

    type: "website",

    images: [
      {
        url: "/image/banner1.webp",
        width: 1200,
        height: 630,
        alt: "تماس با کمپ ترک اعتیاد طلوع زندگی",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "تماس با کمپ ترک اعتیاد طلوع زندگی",

    description:
      "دریافت مشاوره و اطلاعات شرایط پذیرش کمپ ترک اعتیاد طلوع زندگی در استان تهران.",

    images: ["/image/banner1.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// =====================================================
// WEBPAGE SCHEMA
// =====================================================

const structuredData = {
  "@context": "https://schema.org",

  "@type": "WebPage",

  "@id": "https://toloozendegi.ir/contact-us/#webpage",

  url: "https://toloozendegi.ir/contact-us",

  name: "تماس با کمپ ترک اعتیاد طلوع زندگی | تهران",

  description:
    "اطلاعات تماس، دریافت مشاوره و اطلاعات شرایط پذیرش کمپ ترک اعتیاد طلوع زندگی در استان تهران.",

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

  "@id": "https://toloozendegi.ir/contact-us/#breadcrumb",

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

      name: "تماس با ما",

      item: "https://toloozendegi.ir/contact-us",
    },
  ],
};

// =====================================================
// PAGE
// =====================================================

export default function ContactRoute() {
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

      {/* Existing Contact Page */}

      <ContactPage />
    </>
  );
}
