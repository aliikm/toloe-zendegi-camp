import Link from "next/link";

import ContactForm from "./ContactForm";

import styles from "@/app/styles/contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>ارتباط با طلوع زندگی</span>

            <h1>با ما در تماس باشید</h1>

            <p>
              اگر درباره روند درمان، شرایط پذیرش یا خدمات طلوع زندگی سوالی
              دارید، کارشناسان ما آماده پاسخگویی و راهنمایی شما هستند.
            </p>

            <div className={styles.heroActions}>
              <a
                href="tel:+989121234567"
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

      <section className={styles.contactCardsSection}>
        <div className={styles.container}>
          <div className={styles.contactCards}>
            {/* Phone */}

            <a
              href="tel:+989121234567"
              className={styles.contactCard}
              aria-label="تماس تلفنی با طلوع زندگی"
            >
              <div className={styles.cardIcon}>☎</div>

              <div>
                <span>تماس تلفنی</span>

                <strong dir="ltr">0912 123 4567</strong>

                <p>برای دریافت مشاوره</p>
              </div>
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/989121234567"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              aria-label="ارتباط با طلوع زندگی در واتساپ"
            >
              <div className={styles.cardIcon}>💬</div>

              <div>
                <span>واتساپ</span>

                <strong>گفت‌وگو با مشاور</strong>

                <p>پاسخگویی و راهنمایی</p>
              </div>
            </a>

            {/* Address */}

            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>📍</div>

              <div>
                <span>آدرس</span>

                <strong>آدرس مرکز</strong>

                <p>آدرس کامل مرکز در این قسمت قرار می‌گیرد.</p>
              </div>
            </div>

            {/* Working Hours */}

            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>◷</div>

              <div>
                <span>ساعات پاسخگویی</span>

                <strong>همه‌روزه</strong>

                <p>ساعت پاسخگویی مرکز</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT
      ====================================================== */}

      <section className={styles.mainContact}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Information */}

            <div className={styles.contactInfo}>
              <span className={styles.sectionEyebrow}>مشاوره و راهنمایی</span>

              <h2>قبل از شروع مسیر، سوالاتتان را از ما بپرسید</h2>

              <p>
                اگر برای انتخاب مسیر درمان یا شرایط پذیرش نیاز به اطلاعات بیشتری
                دارید، می‌توانید درخواست مشاوره خود را ارسال کنید.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✓</span>

                  <div>
                    <strong>مشاوره پیش از پذیرش</strong>

                    <p>
                      قبل از هر تصمیمی می‌توانید اطلاعات لازم را دریافت کنید.
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✓</span>

                  <div>
                    <strong>پذیرش از سراسر کشور</strong>

                    <p>برای هماهنگی پذیرش از شهرهای مختلف با ما تماس بگیرید.</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✓</span>

                  <div>
                    <strong>پذیرش خانم‌ها و آقایان</strong>

                    <p>
                      برای اطلاع از شرایط پذیرش با کارشناسان ما در ارتباط باشید.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}

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

      <section className={styles.location}>
        <div className={styles.container}>
          <div className={styles.locationGrid}>
            <div className={styles.locationInfo}>
              <span className={styles.sectionEyebrow}>موقعیت مرکز</span>

              <h2>ما را پیدا کنید</h2>

              <p>برای مراجعه حضوری می‌توانید از آدرس زیر استفاده کنید.</p>

              <div className={styles.addressBox}>
                <strong>آدرس کمپ طلوع زندگی</strong>

                <p>استان — شهر — خیابان — کوچه — پلاک — کدپستی</p>
              </div>

              <a href="#" className={styles.mapButton}>
                مشاهده مسیر روی نقشه
              </a>
            </div>

            <div
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

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span>آماده شروع یک مسیر تازه هستید؟</span>

            <h2>برای دریافت مشاوره با ما تماس بگیرید</h2>

            <p>کارشناسان طلوع زندگی آماده پاسخگویی و راهنمایی شما هستند.</p>

            <a
              href="tel:+989121234567"
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
