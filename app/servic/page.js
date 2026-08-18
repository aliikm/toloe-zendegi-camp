import Link from "next/link";

import {
  facilityServices,
  treatmentServices,
  substanceServices,
  recoverySteps,
} from "../../data/servicesContent.js";

import styles from "../styles/servic.module.css";

export const metadata = {
  title: "خدمات و امکانات | طلوع زندگی",
  description:
    "آشنایی با خدمات، امکانات، برنامه‌های درمانی و بازتوانی کمپ طلوع زندگی و خدمات ارائه‌شده برای افراد دارای وابستگی به مواد مختلف.",
};

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>خدمات و امکانات طلوع زندگی</span>

            <h1 className={styles.heroTitle}>
              فضایی برای درمان،
              <br />
              بازتوانی و بازگشت به زندگی
            </h1>

            <p className={styles.heroDescription}>
              در طلوع زندگی تلاش می‌کنیم در کنار خدمات درمانی و مشاوره‌ای، محیطی
              آرام و مناسب برای ادامه مسیر بهبودی و بازتوانی فراهم کنیم.
            </p>

            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryButton}>
                دریافت مشاوره
              </Link>

              <a href="tel:09122268806" className={styles.secondaryButton}>
                تماس مستقیم
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>همراهی فراتر از درمان</span>

            <h2>خدماتی برای یک مسیر کامل‌تر</h2>

            <p>
              مسیر بهبودی فقط به شروع درمان محدود نمی‌شود. محیط مناسب،
              فعالیت‌های سالم، حمایت تخصصی و همراهی خانواده می‌توانند در ادامه
              این مسیر نقش مهمی داشته باشند.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section className={styles.facilities} aria-labelledby="facilities-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>امکانات مرکز</span>

              <h2 id="facilities-title">امکاناتی برای یک اقامت آرام‌تر</h2>
            </div>

            <p>
              امکانات رفاهی و فعالیت‌های سالم در کنار فرایند درمان می‌توانند به
              ایجاد محیطی آرام‌تر و منظم‌تر کمک کنند.
            </p>
          </div>

          <div className={styles.facilityGrid}>
            {facilityServices.map((service) => (
              <article key={service.id} className={styles.facilityCard}>
                <div className={styles.cardIcon} aria-hidden="true">
                  <span>+</span>
                </div>

                <div>
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TREATMENT SERVICES
      ===================================================== */}

      <section className={styles.treatment} aria-labelledby="treatment-title">
        <div className={styles.container}>
          <div className={styles.treatmentLayout}>
            <div className={styles.treatmentIntro}>
              <span className={styles.eyebrow}>خدمات تخصصی</span>

              <h2 id="treatment-title">همراهی تخصصی در مسیر درمان</h2>

              <p>
                شرایط هر فرد متفاوت است. به همین دلیل خدمات حمایتی و درمانی باید
                متناسب با شرایط و نیازهای هر فرد مورد بررسی قرار بگیرد.
              </p>

              <Link href="/contact" className={styles.textLink}>
                دریافت مشاوره
                <span aria-hidden="true">←</span>
              </Link>
            </div>

            <div className={styles.treatmentList}>
              {treatmentServices.map((service, index) => (
                <article key={service.id} className={styles.treatmentItem}>
                  <span className={styles.itemNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    SUBSTANCE TREATMENT
===================================================== */}

      <section className={styles.substances} aria-labelledby="substances-title">
        <div className={styles.container}>
          <div className={styles.substanceHeader}>
            <span className={styles.eyebrow}>حوزه‌های درمان و بازتوانی</span>

            <h2 id="substances-title">پوشش درمانی وابستگی به انواع مواد</h2>

            <p>
              خدمات درمان و بازتوانی مرکز برای افراد دارای وابستگی به طیف مختلفی
              از مواد ارائه می‌شود. نوع ماده مصرفی، میزان و مدت مصرف و شرایط
              جسمی و روانی هر فرد در فرایند ارزیابی و تعیین مسیر درمان مورد توجه
              قرار می‌گیرد.
            </p>
          </div>

          <div className={styles.substanceGroups}>
            {/* مواد سنتی */}

            <div className={styles.substanceGroup}>
              <div className={styles.groupHeader}>
                <span className={styles.groupNumber}>01</span>

                <div>
                  <h3>مواد سنتی</h3>

                  <p>برخی از مواد و فرآورده‌های سنتی رایج</p>
                </div>
              </div>

              <ul className={styles.substanceList}>
                {substanceServices
                  .filter((item) => item.category === "مواد سنتی")
                  .map((item) => (
                    <li key={item.id}>
                      <span className={styles.listIcon} aria-hidden="true">
                        ✓
                      </span>

                      <span>{item.title}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* مواد صنعتی */}

            <div className={styles.substanceGroup}>
              <div className={styles.groupHeader}>
                <span className={styles.groupNumber}>02</span>

                <div>
                  <h3>مواد صنعتی و محرک</h3>

                  <p>مواد محرک، روان‌گردان و ترکیبات صنعتی</p>
                </div>
              </div>

              <ul className={styles.substanceList}>
                {substanceServices
                  .filter(
                    (item) =>
                      item.category === "مواد صنعتی" ||
                      item.category === "مواد صنعتی و محرک",
                  )
                  .map((item) => (
                    <li key={item.id}>
                      <span className={styles.listIcon} aria-hidden="true">
                        ✓
                      </span>

                      <span>{item.title}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className={styles.substanceNote}>
            <span aria-hidden="true">*</span>

            <p>
              فهرست بالا صرفاً جهت آشنایی با حوزه‌های خدمات مرکز ارائه شده است.
              شرایط پذیرش و مناسب بودن خدمات برای هر فرد پس از بررسی وضعیت او
              مشخص می‌شود.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          RECOVERY PROCESS
      ===================================================== */}

      <section className={styles.recovery} aria-labelledby="recovery-title">
        <div className={styles.container}>
          <div className={styles.recoveryHeader}>
            <span className={styles.eyebrow}>مسیر همراهی</span>

            <h2 id="recovery-title">از اولین تماس تا بازتوانی</h2>
          </div>

          <div className={styles.steps}>
            {recoverySteps.map((step) => (
              <article key={step.number} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ACCEPTANCE
      ===================================================== */}

      <section className={styles.acceptance} aria-labelledby="acceptance-title">
        <div className={styles.container}>
          <div className={styles.acceptanceContent}>
            <span className={styles.eyebrow}>پذیرش و هماهنگی</span>

            <h2 id="acceptance-title">برای شروع مسیر، با ما صحبت کنید</h2>

            <p>
              امکان بررسی شرایط پذیرش بانوان و همچنین هماهنگی برای مراجعان از
              شهرهای مختلف کشور وجود دارد. شرایط هر فرد پیش از پذیرش بررسی
              می‌شود.
            </p>

            <div className={styles.acceptanceActions}>
              <Link href="/acceptance" className={styles.primaryButton}>
                شرایط پذیرش
              </Link>

              <Link href="/contact" className={styles.outlineButton}>
                دریافت مشاوره
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span className={styles.eyebrow}>طلوع زندگی</span>

            <h2>برای شروع، لازم نیست همه پاسخ‌ها را داشته باشید.</h2>

            <p>
              اگر درباره شرایط درمان، امکانات مرکز یا پذیرش سؤال دارید، با ما
              تماس بگیرید.
            </p>

            <Link href="/contact" className={styles.ctaButton}>
              دریافت مشاوره
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
