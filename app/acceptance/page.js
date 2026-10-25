import Link from "next/link";

import {
  LuArrowLeft,
  LuArrowRight,
  LuCheck,
  LuCircleHelp,
  LuMapPin,
  LuPhone,
  LuUsers,
} from "react-icons/lu";

import {
  acceptanceBenefits,
  acceptanceSteps,
  acceptanceFaqs,
} from "@/data/paziresh";

import styles from "../styles/paziresh.module.css";

export const metadata = {
  title: "شرایط پذیرش کمپ ترک اعتیاد | پذیرش آقایان و بانوان | طلوع زندگی",

  description:
    "شرایط پذیرش کمپ ترک اعتیاد طلوع زندگی برای آقایان و بانوان از سراسر کشور. بررسی شرایط، دریافت مشاوره اولیه و هماهنگی مراحل پذیرش و اقامت.",

  keywords: [
    "شرایط پذیرش کمپ ترک اعتیاد",
    "پذیرش کمپ ترک اعتیاد",
    "پذیرش بانوان",
    "پذیرش آقایان",
    "پذیرش از سراسر کشور",
    "کمپ ترک اعتیاد تهران",
    "کمپ ترک اعتیاد استان تهران",
    "کمپ طلوع زندگی",
    "کمپ رایگان",
    "کمپ ترک اعتیاد رایگان",
    "کمپ رایگان ترک اعتیاد",
    "مرکز ترک اعتیاد رایگان",
    "مشاوره رایگان ترک اعتیاد",
  ],

  alternates: {
    canonical: "/acceptance",
  },

  openGraph: {
    title: "شرایط پذیرش کمپ ترک اعتیاد | طلوع زندگی",

    description:
      "اطلاعات شرایط پذیرش آقایان و بانوان، مراحل پذیرش و نحوه هماهنگی از سراسر کشور در کمپ ترک اعتیاد طلوع زندگی.",

    url: "https://toloozendegi.ir/acceptance",

    type: "website",

    locale: "fa_IR",
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

  "@id": "https://toloozendegi.ir/acceptance/#webpage",

  url: "https://toloozendegi.ir/acceptance",

  name: "شرایط پذیرش کمپ ترک اعتیاد | پذیرش آقایان و بانوان | طلوع زندگی",

  description:
    "شرایط پذیرش کمپ ترک اعتیاد طلوع زندگی برای آقایان و بانوان از سراسر کشور، مراحل پذیرش و نحوه هماهنگی.",

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

  "@id": "https://toloozendegi.ir/acceptance/#breadcrumb",

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

      name: "شرایط پذیرش",

      item: "https://toloozendegi.ir/acceptance",
    },
  ],
};

// =====================================================
// FAQ SCHEMA
// =====================================================

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  "@id": "https://toloozendegi.ir/acceptance/#faq",

  mainEntity: acceptanceFaqs.map((faq) => ({
    "@type": "Question",

    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",

      text: faq.answer,
    },
  })),
};

// =====================================================
// PAGE
// =====================================================

export default function AcceptancePage() {
  return (
    <main className={styles.page}>
      {/* ==================================================
          STRUCTURED DATA
      ================================================== */}

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

      {/* FAQ Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ==================================================
          HERO
      ================================================== */}

      <section className={styles.hero} aria-labelledby="acceptance-title">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>شرایط پذیرش</span>

            <h1 id="acceptance-title">
              پذیرش کمپ ترک اعتیاد
              <br />
              برای آقایان و بانوان
            </h1>

            <p className={styles.heroDescription}>
              مجموعه طلوع زندگی آماده بررسی شرایط و هماهنگی پذیرش مراجعان آقا و
              خانم از شهرهای مختلف کشور است. برای دریافت اطلاعات اولیه درباره
              شرایط پذیرش، روند درمان و مراحل هماهنگی می‌توانید با مجموعه در
              ارتباط باشید.
            </p>

            <div className={styles.heroActions}>
              <a
                href="tel:09122268806"
                className={styles.primaryButton}
                aria-label="تماس با طلوع زندگی برای مشاوره پذیرش"
              >
                <LuPhone aria-hidden="true" />

                <span>مشاوره رایگان</span>
              </a>

              <Link href="/" className={styles.secondaryButton}>
                بازگشت به صفحه اصلی
                <LuArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTRO
      ================================================== */}

      <section className={styles.intro} aria-labelledby="intro-title">
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <span className={styles.sectionEyebrow}>پذیرش در طلوع زندگی</span>

              <h2 id="intro-title">شروع مسیر با آگاهی و هماهنگی</h2>

              <p>
                تصمیم برای شروع روند درمان اعتیاد، برای فرد و خانواده اهمیت
                زیادی دارد. به همین دلیل توصیه می‌شود پیش از پذیرش، اطلاعات لازم
                درباره شرایط، خدمات و مراحل مربوط به پذیرش دریافت شود.
              </p>

              <p>
                تیم مجموعه طلوع زندگی آماده پاسخگویی به پرسش‌های اولیه و هماهنگی
                مراحل پذیرش برای مراجعان از شهرها و استان‌های مختلف کشور است.
              </p>
            </div>

            <div className={styles.introCard}>
              <div className={styles.introIcon}>
                <LuMapPin aria-hidden="true" />
              </div>

              <h3>پذیرش از سراسر ایران</h3>

              <p>
                اگر در تهران یا یکی از شهرهای دیگر کشور زندگی می‌کنید، برای
                دریافت اطلاعات درباره شرایط پذیرش و هماهنگی مراحل درمان
                می‌توانید با مجموعه در ارتباط باشید.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          BENEFITS
      ================================================== */}

      <section className={styles.benefits} aria-labelledby="benefits-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>امکانات پذیرش</span>

            <h2 id="benefits-title">شرایط و خدمات مرتبط با پذیرش</h2>

            <p>
              برای شروع فرآیند پذیرش، اطلاعات لازم در اختیار مراجع و خانواده
              قرار می‌گیرد تا مراحل بعدی با آگاهی بیشتری انجام شود.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {acceptanceBenefits.map((item) => (
              <article className={styles.benefitCard} key={item.id}>
                <div className={styles.benefitIcon}>
                  <LuCheck aria-hidden="true" />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          MEN / WOMEN
      ================================================== */}

      <section className={styles.genderSection} aria-labelledby="gender-title">
        <div className={styles.container}>
          <div className={styles.sectionHeadingCenter}>
            <span className={styles.sectionEyebrow}>پذیرش مراجعان</span>

            <h2 id="gender-title">پذیرش آقایان و بانوان</h2>

            <p>
              برای آگاهی از شرایط پذیرش، ظرفیت و جزئیات مربوط به هر فرد، پیش از
              مراجعه با مجموعه تماس بگیرید.
            </p>
          </div>

          <div className={styles.genderGrid}>
            <article className={styles.genderCard}>
              <div className={styles.genderIcon}>
                <LuUsers aria-hidden="true" />
              </div>

              <h3>پذیرش آقایان</h3>

              <p>
                آقایان می‌توانند برای دریافت اطلاعات درباره شرایط پذیرش، خدمات و
                هماهنگی مراحل مربوطه با مجموعه تماس بگیرند.
              </p>
            </article>

            <article className={styles.genderCard}>
              <div className={styles.genderIcon}>
                <LuUsers aria-hidden="true" />
              </div>

              <h3>پذیرش بانوان</h3>

              <p>
                بانوان نیز می‌توانند برای اطلاع از شرایط پذیرش و هماهنگی مراحل
                مربوط به خود با مجموعه در ارتباط باشند.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ==================================================
          STEPS
      ================================================== */}

      <section className={styles.steps} aria-labelledby="steps-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>روند پذیرش</span>

            <h2 id="steps-title">مراحل پذیرش چگونه انجام می‌شود؟</h2>

            <p>
              آشنایی با مراحل پذیرش کمک می‌کند فرد و خانواده با اطلاعات روشن‌تری
              برای شروع مسیر درمان تصمیم بگیرند.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {acceptanceSteps.map((step) => (
              <article className={styles.stepCard} key={step.id}>
                <div className={styles.stepNumber}>{step.id}</div>

                <div>
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          NATIONAL ADMISSION
      ================================================== */}

      <section className={styles.national} aria-labelledby="national-title">
        <div className={styles.container}>
          <div className={styles.nationalCard}>
            <div className={styles.nationalIcon}>
              <LuMapPin aria-hidden="true" />
            </div>

            <div className={styles.nationalContent}>
              <span>پذیرش از سراسر کشور</span>

              <h2 id="national-title">
                از هر شهری که هستید، برای دریافت اطلاعات با ما در ارتباط باشید.
              </h2>

              <p>
                مراجعان شهرهای مختلف کشور می‌توانند برای دریافت اطلاعات اولیه
                درباره شرایط پذیرش و هماهنگی مراحل بعدی با مجموعه تماس بگیرند.
              </p>
            </div>

            <a
              href="tel:09122268806"
              className={styles.nationalButton}
              aria-label="تماس با طلوع زندگی"
            >
              تماس با ما
              <LuPhone aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================
          FAQ
      ================================================== */}

      <section className={styles.faq} aria-labelledby="faq-title">
        <div className={styles.container}>
          <div className={styles.sectionHeadingCenter}>
            <span className={styles.sectionEyebrow}>پرسش‌های متداول</span>

            <h2 id="faq-title">سوالات مربوط به پذیرش کمپ ترک اعتیاد</h2>
          </div>

          <div className={styles.faqList}>
            {acceptanceFaqs.map((item) => (
              <details className={styles.faqItem} key={item.id}>
                <summary>
                  <span>{item.question}</span>

                  <LuCircleHelp aria-hidden="true" />
                </summary>

                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={styles.container}>
          <div className={styles.finalCtaContent}>
            <span className={styles.finalEyebrow}>
              نیاز به اطلاعات بیشتر دارید؟
            </span>

            <h2 id="final-cta-title">قبل از پذیرش، سوالات خود را بپرسید</h2>

            <p>
              برای دریافت اطلاعات اولیه درباره شرایط پذیرش آقایان و بانوان،
              هزینه‌ها، خدمات و هماهنگی مراحل مربوطه با مجموعه تماس بگیرید.
            </p>

            <a
              href="tel:09122268806"
              className={styles.finalButton}
              aria-label="تماس با طلوع زندگی برای دریافت مشاوره"
            >
              <LuPhone aria-hidden="true" />
              مشاوره رایگان
              <LuArrowLeft aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
