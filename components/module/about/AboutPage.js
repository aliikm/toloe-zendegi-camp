import styles from "@/app/styles/aboutpage.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>درباره طلوع زندگی</span>

            <h1>
              ما یک کمپ نیستیم؛
              <br />
              ما آغاز یک زندگی جدید هستیم
            </h1>

            <p>
              در طلوع زندگی تلاش می‌کنیم محیطی امن، آرام و حرفه‌ای برای شروع
              مسیر بهبودی و بازگشت به یک زندگی سالم فراهم کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              {/* عکس را بعداً اینجا قرار می‌دهیم */}
            </div>

            <div className={styles.storyContent}>
              <span className={styles.sectionEyebrow}>داستان ما</span>

              <h2>همراه شما برای ساختن یک مسیر تازه</h2>

              <p>
                طلوع زندگی با هدف ایجاد محیطی امن و آرام برای افرادی شکل گرفته
                است که تصمیم گرفته‌اند مسیر تازه‌ای را برای زندگی خود آغاز کنند.
              </p>

              <p>
                باور ما این است که بهبودی فقط به معنای کنار گذاشتن مصرف نیست؛
                بلکه آغاز مسیری برای بازسازی اعتماد، آرامش، روابط و کیفیت زندگی
                است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className={styles.approach}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>رویکرد ما</span>

            <h2>درمان با نگاه انسانی</h2>

            <p>
              در طلوع زندگی، هر فرد را با شرایط و مسیر منحصربه‌فرد خودش
              می‌بینیم.
            </p>
          </div>

          <div className={styles.approachGrid}>
            <article className={styles.approachCard}>
              <div className={styles.icon}>✓</div>

              <h3>محیط امن و آرام</h3>

              <p>فراهم کردن فضایی آرام و حمایتگر برای طی کردن مسیر بهبودی.</p>
            </article>

            <article className={styles.approachCard}>
              <div className={styles.icon}>✓</div>

              <h3>توجه به فرد</h3>

              <p>شرایط و نیازهای هر فرد را در مسیر درمان در نظر می‌گیریم.</p>
            </article>

            <article className={styles.approachCard}>
              <div className={styles.icon}>✓</div>

              <h3>همراهی مستمر</h3>

              <p>
                هدف ما فقط شروع درمان نیست؛ بلکه همراهی در مسیر بازگشت به زندگی
                سالم است.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeadingCenter}>
            <span className={styles.sectionEyebrow}>ارزش‌های ما</span>

            <h2>چیزهایی که به آن‌ها باور داریم</h2>
          </div>

          <div className={styles.valuesGrid}>
            <article className={styles.valueCard}>
              <h3>احترام</h3>
              <p>حفظ کرامت و احترام هر فرد در تمام مراحل.</p>
            </article>

            <article className={styles.valueCard}>
              <h3>اعتماد</h3>
              <p>ایجاد رابطه‌ای مبتنی بر اعتماد و صداقت.</p>
            </article>

            <article className={styles.valueCard}>
              <h3>همراهی</h3>
              <p>تنها گذاشتن فرد در هیچ مرحله‌ای از مسیر.</p>
            </article>

            <article className={styles.valueCard}>
              <h3>مسئولیت‌پذیری</h3>
              <p>پایبندی به کیفیت و مسئولیت در مسیر درمان.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <div className={styles.whyUsBox}>
            <div className={styles.whyUsContent}>
              <span className={styles.sectionEyebrow}>چرا طلوع زندگی؟</span>

              <h2>شروع دوباره، با یک انتخاب درست</h2>

              <p>
                انتخاب یک مرکز مناسب برای شروع مسیر بهبودی تصمیم مهمی است. ما
                تلاش می‌کنیم این مسیر با آرامش، احترام و همراهی بیشتری طی شود.
              </p>

              <ul>
                <li>محیط آرام و حمایتگر</li>
                <li>پذیرش خانم‌ها و آقایان</li>
                <li>پذیرش مراجعان از سراسر کشور</li>
                <li>مشاوره و راهنمایی پیش از پذیرش</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <span>آماده شروع یک مسیر تازه هستید؟</span>

            <h2>برای دریافت مشاوره با ما در تماس باشید</h2>

            <p>
              قبل از پذیرش می‌توانید برای دریافت اطلاعات و راهنمایی بیشتر با ما
              تماس بگیرید.
            </p>

            <a
              href="tel:09122268806"
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
