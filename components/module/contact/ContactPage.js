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

            <h1 id="contact-title">تماس با کمپ ترک اعتیاد طلوع زندگی</h1>

            <p>
              اگر درباره روند درمان اعتیاد، خدمات، شرایط پذیرش یا نحوه شروع مسیر
              بهبودی سؤال دارید، می‌توانید با کمپ طلوع زندگی در استان تهران تماس
              بگیرید و اطلاعات لازم را دریافت کنید.
            </p>

            <div className={styles.heroActions}>
              <a
                href="tel:+989122268806"
                className={styles.primaryButton}
                aria-label="تماس تلفنی با کمپ ترک اعتیاد طلوع زندگی"
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
            راه‌های ارتباطی با کمپ ترک اعتیاد طلوع زندگی
          </h2>

          <div className={styles.contactCards}>
            {/* =================================================
                PHONE
            ================================================== */}

            <div className={styles.contactCard}>
              <div className={styles.cardIcon} aria-hidden="true">
                ☎
              </div>

              <div className={styles.cardContent}>
                <span>تماس تلفنی</span>

                <a
                  href="tel:+989122268806"
                  aria-label="تماس با شماره 0912 226 8806"
                >
                  <strong dir="ltr">0912 226 8806</strong>
                </a>

                <a
                  href="tel:+989353060799"
                  aria-label="تماس با شماره 0935 306 0799"
                >
                  <strong dir="ltr">0935 306 0799</strong>
                </a>

                <p>برای دریافت مشاوره و راهنمایی</p>
              </div>
            </div>

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
                قبل از شروع مسیر، سؤال‌هایتان را از ما بپرسید
              </h2>

              <p>
                اگر برای انتخاب مسیر درمان اعتیاد، خدمات مجموعه یا شرایط پذیرش
                نیاز به اطلاعات بیشتری دارید، می‌توانید با ما تماس بگیرید یا
                درخواست مشاوره خود را ارسال کنید.
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
                      قبل از هر تصمیمی می‌توانید درباره شرایط و مراحل پذیرش
                      اطلاعات لازم را دریافت کنید.
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
                      برای هماهنگی پذیرش از شهرها و استان‌های مختلف کشور با ما
                      در ارتباط باشید.
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
                      برای اطلاع از شرایط و ظرفیت پذیرش بانوان و آقایان با
                      کارشناسان مجموعه تماس بگیرید.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/acceptance"
                className={styles.infoLink}
                aria-label="مشاهده شرایط پذیرش کمپ ترک اعتیاد طلوع زندگی"
              >
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

              <h2 id="location-title">
                کمپ ترک اعتیاد طلوع زندگی در استان تهران
              </h2>

              <p>
                کمپ طلوع زندگی در استان تهران، محدوده چهاردانگه قرار دارد. برای
                مراجعه حضوری، پیش از حرکت با مجموعه تماس بگیرید تا اطلاعات دقیق
                مسیر و هماهنگی لازم را دریافت کنید.
              </p>

              <div className={styles.addressBox}>
                <strong>آدرس کمپ طلوع زندگی</strong>

                <p>استان تهران، چهاردانگه</p>
              </div>

              <a
                href="#map"
                className={styles.mapButton}
                aria-label="مشاهده موقعیت کمپ طلوع زندگی روی نقشه"
              >
                مشاهده موقعیت روی نقشه
              </a>
            </div>

            {/* Map */}

            <div
              id="map"
              className={styles.mapPlaceholder}
              aria-label="موقعیت کمپ طلوع زندگی روی نقشه"
              role="img"
            >
              <span>موقعیت کمپ طلوع زندگی</span>
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

            <p>
              کارشناسان طلوع زندگی آماده پاسخگویی و راهنمایی شما درباره شرایط
              درمان و پذیرش هستند.
            </p>

            <a
              href="tel:+989122268806"
              className={styles.ctaButton}
              aria-label="تماس برای مشاوره با کمپ ترک اعتیاد طلوع زندگی"
            >
              تماس برای مشاوره
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
