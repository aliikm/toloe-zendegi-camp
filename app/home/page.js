import Hero from "@/components/module/section/Hero";
import TreatmentContainer from "@/components/module/treatment-describe/TreatmentContainer";
import DescribeUsSection from "@/components/module/describ-section/DescribeUsSection";
import CampDetails from "@/components/module/camp-details/CampDetails";
import PlanTreatmentContainer from "@/components/module/plan-treatment/PlanTreatmentContainer";
import AcceptanceSection from "@/components/module/accepatance/AcceptanceSection";
import Banner from "@/components/module/banner/Banner";
import NewSubstancesSection from "@/components/module/substances/NewSubstancesSection";

// =====================================================
// HOME PAGE SEO
// =====================================================

export const metadata = {
  title: "کمپ ترک اعتیاد طلوع زندگی | مرکز درمان و بازتوانی در تهران",

  description:
    "کمپ ترک اعتیاد طلوع زندگی در استان تهران، با ارائه خدمات درمان، مشاوره و بازتوانی، همراه مراجعان و خانواده‌ها در مسیر بهبودی است.",

  keywords: [
    "کمپ ترک اعتیاد",
    "کمپ ترک اعتیاد تهران",
    "کمپ ترک اعتیاد استان تهران",
    "مرکز ترک اعتیاد",
    "مرکز درمان اعتیاد",
    "درمان اعتیاد",
    "ترک اعتیاد",
    "مشاوره ترک اعتیاد",
    "کمپ ترک اعتیاد چهاردانگه",
    "طلوع زندگی",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "کمپ ترک اعتیاد طلوع زندگی | مرکز درمان و بازتوانی",

    description:
      "آشنایی با خدمات، امکانات، روند درمان و شرایط پذیرش کمپ ترک اعتیاد طلوع زندگی در استان تهران.",

    url: "https://toloozendegi.ir/",

    siteName: "طلوع زندگی",

    locale: "fa_IR",

    type: "website",

    images: [
      {
        url: "/image/banner1.webp",
        width: 1200,
        height: 630,
        alt: "کمپ ترک اعتیاد طلوع زندگی",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "کمپ ترک اعتیاد طلوع زندگی",

    description: "مرکز درمان و بازتوانی طلوع زندگی در استان تهران.",

    images: ["/image/banner1.webp"],
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

  "@id": "https://toloozendegi.ir/#webpage",

  url: "https://toloozendegi.ir/",

  name: "کمپ ترک اعتیاد طلوع زندگی | مرکز درمان و بازتوانی در تهران",

  description:
    "کمپ ترک اعتیاد طلوع زندگی در استان تهران با ارائه خدمات درمان، مشاوره و بازتوانی.",

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
// HOME PAGE
// =====================================================

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero */}
      <Hero />

      {/* Treatment */}
      <TreatmentContainer />

      {/* New / Industrial Substances */}
      <NewSubstancesSection />

      {/* Acceptance */}
      <AcceptanceSection />

      {/* About */}
      <DescribeUsSection />

      {/* Camp Details */}
      <CampDetails />

      {/* CTA Banner */}
      <Banner />

      {/* Treatment Programs */}
      <PlanTreatmentContainer />
    </>
  );
}
