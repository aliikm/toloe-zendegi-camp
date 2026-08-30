import Link from "next/link";

import ContactForm from "./ContactForm";

import styles from "@/app/styles/contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero} aria-labelledby="contact-title">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>ارتباط با طلوع زندگی</span>

            <h1 id="contact-title">با ما در تماس باشید</h1>

            <p>
              اگر درباره روند درمان، شرایط پذیرش یا خدمات طلوع زندگی سوالی
              دارید، کارشناسان ما آماده پاسخگویی و راهنمایی شما هستند.
            </p>

            <div className={styles.heroActions}>
              <a
                href="tel:+989122268806"
                className={styles.primaryButton}
                aria-label="تماس تلفنی با کمپ طلوع زندگی"
              >
                تماس برای مشاوره
              </a>

              <Link href="/acceptance" className={styles.secondaryButton}>
                شرایط پذیرش
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CARDS
      ====================================================== */}

      <section
        className={styles.contactCardsSection}
        aria-labelledby="contact-methods-title"
      >
        <div className={styles.container}>
          <h2 id="contact-methods-title" className={styles.srOnly}>
            راه‌های ارتباطی با کمپ طلوع زندگی
          </h2>

          <div className={styles.contactCards}>
            {/* =================================================
                PHONE
            ================================================== */}

            <a
              href="tel:+989122268806"
              className={styles.contactCard}
              aria-label="تماس تلفنی با طلوع زندگی"
            >
              <div className={styles.cardIcon} aria-hidden="true">
                ☎
              </div>

              <div className={styles.cardContent}>
                <span>تماس تلفنی</span>

                <strong dir="ltr">0912 226 8806</strong>

                <strong dir="ltr">0935 306 0799</strong>

                <p>برای دریافت مشاوره و راهنمایی</p>
              </div>
            </a>

            {/* =================================================
                WHATSAPP
            ================================================== */}

            <a
              href="https://wa.me/989122268806"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              aria-label="ارتباط با طلوع زندگی در واتساپ"
            >
              <div className={styles.cardIcon} aria-hidden="true">
                💬
              </div>

              <div className={styles.cardContent}>
                <span>واتساپ</span>

                <strong>گفت‌وگو با مشاور</strong>

                <p>پاسخگویی و راهنمایی اولیه</p>
              </div>
            </a>

            {/* =================================================
                ADDRESS
            ================================================== */}

            <div className={styles.contactCard}>
              <div className={styles.cardIcon} aria-hidden="true">
                📍
              </div>

              <div className={styles.cardContent}>
                <span>آدرس</span>

                <strong>کمپ طلوع زندگی</strong>

                <p>استان تهران، چهاردانگه</p>
              </div>
            </div>

            {/* =================================================
                WORKING HOURS
            ================================================== */}

            <div className={styles.contactCard}>
              <div className={styles.cardIcon} aria-hidden="true">
                ◷
              </div>

              <div className={styles.cardContent}>
                <span>ساعات پاسخگویی</span>

                <strong>همه‌روزه</strong>

                <p>۲۴ ساعت شبانه‌روز</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT
      ====================================================== */}

      <section
        className={styles.mainContact}
        aria-labelledby="consultation-title"
      >
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* =================================================
                INFORMATION
            ================================================== */}

            <div className={styles.contactInfo}>
              <span className={styles.sectionEyebrow}>مشاوره و راهنمایی</span>

              <h2 id="consultation-title">
                قبل از شروع مسیر، سوالاتتان را از ما بپرسید
              </h2>

              <p>
                اگر برای انتخاب مسیر درمان یا شرایط پذیرش نیاز به اطلاعات بیشتری
                دارید، می‌توانید درخواست مشاوره خود را ارسال کنید.
              </p>

              <div className={styles.infoList}>
                {/* Item 1 */}

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    ✓
                  </span>

                  <div>
                    <strong>مشاوره پیش از پذیرش</strong>

                    <p>
                      قبل از هر تصمیمی می‌توانید اطلاعات لازم را دریافت کنید.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    ✓
                  </span>

                  <div>
                    <strong>پذیرش از سراسر کشور</strong>

                    <p>
                      برای هماهنگی پذیرش از شهرهای مختلف کشور با ما تماس بگیرید.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    ✓
                  </span>

                  <div>
                    <strong>پذیرش خانم‌ها و آقایان</strong>

                    <p>
                      برای اطلاع از شرایط پذیرش با کارشناسان ما در ارتباط باشید.
                    </p>
                  </div>
                </div>
              </div>

              {/* Acceptance Link */}

              <Link href="/paziresh" className={styles.infoLink}>
                مشاهده شرایط پذیرش
              </Link>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <span>درخواست مشاوره</span>

                <h2>با ما در ارتباط باشید</h2>

                <p>
                  اطلاعات خود را وارد کنید تا برای راهنمایی بیشتر با شما تماس
                  بگیریم.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ====================================================== */}

      <section className={styles.location} aria-labelledby="location-title">
        <div className={styles.container}>
          <div className={styles.locationGrid}>
            {/* Information */}

            <div className={styles.locationInfo}>
              <span className={styles.sectionEyebrow}>موقعیت مرکز</span>

              <h2 id="location-title">ما را پیدا کنید</h2>

              <p>برای مراجعه حضوری می‌توانید از آدرس زیر استفاده کنید.</p>

              <div className={styles.addressBox}>
                <strong>آدرس کمپ طلوع زندگی</strong>

                <p>استان تهران، چهاردانگه</p>
              </div>

              {/*
                بعداً لینک واقعی Google Maps یا نشان را اینجا قرار می‌دهیم.
              */}

              <a href="#map" className={styles.mapButton}>
                مشاهده مسیر روی نقشه
              </a>
            </div>

            {/* Map */}

            <div
              id="map"
              className={styles.mapPlaceholder}
              aria-label="موقعیت کمپ طلوع زندگی روی نقشه"
            >
              <span>نقشه مرکز</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className={styles.cta} aria-labelledby="contact-cta-title">
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span>آماده شروع یک مسیر تازه هستید؟</span>

            <h2 id="contact-cta-title">برای دریافت مشاوره با ما تماس بگیرید</h2>

            <p>کارشناسان طلوع زندگی آماده پاسخگویی و راهنمایی شما هستند.</p>

            <a
              href="tel:+989122268806"
              className={styles.ctaButton}
              aria-label="تماس برای مشاوره با کمپ طلوع زندگی"
            >
              تماس برای مشاوره
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
