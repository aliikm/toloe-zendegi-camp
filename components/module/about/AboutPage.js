import Link from "next/link";
import styles from "@/app/styles/aboutpage.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* ========================================
          HERO
      ======================================== */}

      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>درباره طلوع زندگی</span>

            <h1 id="about-title">
              کمپ ترک اعتیاد طلوع زندگی؛
              <br />
              همراه مسیر یک زندگی سالم
            </h1>

            <p>
              در طلوع زندگی تلاش می‌کنیم محیطی امن، آرام و حمایتگر برای افرادی
              فراهم کنیم که تصمیم گرفته‌اند مسیر بهبودی و بازگشت به یک زندگی
              سالم را آغاز کنند.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          STORY
      ======================================== */}

      <section className={styles.story} aria-labelledby="story-title">
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div
              className={styles.storyImage}
              role="img"
              aria-label="محیط کمپ ترک اعتیاد طلوع زندگی"
            />

            <div className={styles.storyContent}>
              <span className={styles.sectionEyebrow}>داستان ما</span>

              <h2 id="story-title">همراه شما برای ساختن یک مسیر تازه</h2>

              <p>
                کمپ ترک اعتیاد طلوع زندگی با هدف ایجاد محیطی امن و آرام برای
                افرادی شکل گرفته است که تصمیم گرفته‌اند مسیر تازه‌ای برای زندگی
                خود آغاز کنند.
              </p>

              <p>
                باور ما این است که مسیر بهبودی تنها به قطع مصرف محدود نمی‌شود؛
                بلکه می‌تواند شامل بازسازی آرامش، روابط، اعتماد و کیفیت زندگی
                نیز باشد.
              </p>

              <span>
                تیم طلوع زندگی تلاش می‌کند با همراهی و حمایت مستمر، مراجعان و
                خانواده‌های آن‌ها را در مسیر درمان و بازگشت به زندگی سالم همراهی
                کند.
              </span>

              <h4>با مدیریت: آقای حسن پورگل</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          APPROACH
      ======================================== */}

      <section className={styles.approach} aria-labelledby="approach-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>رویکرد ما</span>

            <h2 id="approach-title">درمان با نگاه انسانی</h2>

            <p>
              در طلوع زندگی، هر فرد شرایط، نیازها و مسیر متفاوتی دارد و تلاش
              می‌کنیم این تفاوت‌ها در روند همراهی و درمان مورد توجه قرار گیرد.
            </p>
          </div>

          <div className={styles.approachGrid}>
            <article className={styles.approachCard}>
              <div className={styles.icon} aria-hidden="true">
                ✓
              </div>

              <h3>محیط امن و آرام</h3>

              <p>فراهم کردن فضایی آرام و حمایتگر برای طی کردن مسیر بهبودی.</p>
            </article>

            <article className={styles.approachCard}>
              <div className={styles.icon} aria-hidden="true">
                ✓
              </div>

              <h3>توجه به شرایط فرد</h3>

              <p>
                شرایط و نیازهای هر فرد در روند پذیرش و مسیر درمان مورد توجه قرار
                می‌گیرد.
              </p>
            </article>

            <article className={styles.approachCard}>
              <div className={styles.icon} aria-hidden="true">
                ✓
              </div>

              <h3>همراهی مستمر</h3>

              <p>
                هدف ما تنها شروع درمان نیست؛ بلکه همراهی در مسیر بازگشت به زندگی
                سالم و پایدار است.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================
          VALUES
      ======================================== */}

      <section className={styles.values} aria-labelledby="values-title">
        <div className={styles.container}>
          <div className={styles.sectionHeadingCenter}>
            <span className={styles.sectionEyebrow}>ارزش‌های ما</span>

            <h2 id="values-title">چیزهایی که به آن‌ها باور داریم</h2>
          </div>

          <div className={styles.valuesGrid}>
            <article className={styles.valueCard}>
              <h3>احترام</h3>

              <p>حفظ کرامت و احترام هر فرد در تمام مراحل همراهی و درمان.</p>
            </article>

            <article className={styles.valueCard}>
              <h3>اعتماد</h3>

              <p>تلاش برای ایجاد رابطه‌ای مبتنی بر اعتماد، صداقت و احترام.</p>
            </article>

            <article className={styles.valueCard}>
              <h3>همراهی</h3>

              <p>تلاش برای تنها نگذاشتن فرد و خانواده در مسیر بهبودی.</p>
            </article>

            <article className={styles.valueCard}>
              <h3>مسئولیت‌پذیری</h3>

              <p>
                پایبندی به کیفیت خدمات و مسئولیت‌پذیری در روند همراهی با
                مراجعان.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================
          WHY US
      ======================================== */}

      <section className={styles.whyUs} aria-labelledby="why-us-title">
        <div className={styles.container}>
          <div className={styles.whyUsBox}>
            <div className={styles.whyUsContent}>
              <span className={styles.sectionEyebrow}>چرا طلوع زندگی؟</span>

              <h2 id="why-us-title">شروع دوباره، با یک انتخاب آگاهانه</h2>

              <p>
                انتخاب یک مرکز مناسب برای شروع مسیر بهبودی تصمیم مهمی است. ما
                تلاش می‌کنیم این مسیر با آرامش، احترام و اطلاعات روشن‌تری همراه
                باشد.
              </p>

              <ul>
                <li>محیط آرام و حمایتگر</li>
                <li>پذیرش بانوان و آقایان</li>
                <li>پذیرش مراجعان از سراسر کشور</li>
                <li>مشاوره و راهنمایی پیش از پذیرش</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA
      ======================================== */}

      <section className={styles.cta} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span>آماده شروع یک مسیر تازه هستید؟</span>

            <h2 id="cta-title">برای دریافت مشاوره با ما در تماس باشید</h2>

            <p>
              پیش از پذیرش می‌توانید برای دریافت اطلاعات بیشتر درباره شرایط
              پذیرش و روند شروع درمان با ما تماس بگیرید.
            </p>

            <div className={styles.ctaActions}>
              <a
                href="tel:09122268806"
                className={styles.ctaButton}
                aria-label="تماس برای دریافت مشاوره از کمپ طلوع زندگی"
              >
                تماس برای مشاوره
              </a>

              <Link href="/paziresh" className={styles.ctaSecondary}>
                مشاهده شرایط پذیرش
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
