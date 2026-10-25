import Link from "next/link";
import styles from ".././../../app/styles/aboutpage.module.css";
export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* =========================
          HERO
      ========================== */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>درباره طلوع زندگی</span>

          <h1>
            کمپ ترک اعتیاد طلوع زندگی؛
            <br />
            همراه مسیر یک زندگی سالم
          </h1>

          <p>
            طلوع زندگی با هدف ایجاد محیطی امن، آرام و حمایتگر، در مسیر درمان،
            بازتوانی و بازگشت افراد به یک زندگی سالم همراه مراجعان و خانواده‌های
            آن‌هاست.
          </p>

          <div className={styles.heroActions}>
            <Link href="/acceptance" className={styles.primaryButton}>
              شرایط پذیرش
            </Link>

            <Link href="/contact-us" className={styles.secondaryButton}>
              مشاوره و تماس
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          STORY
      ========================== */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div
              className={styles.storyImage}
              role="img"
              aria-label="محیط کمپ ترک اعتیاد طلوع زندگی"
            >
              <div className={styles.storyImageContent}>
                <span>طلوع زندگی</span>
                <strong>شروع یک مسیر تازه</strong>
              </div>
            </div>

            <div className={styles.storyContent}>
              <span className={styles.sectionEyebrow}>داستان ما</span>

              <h2>
                همراه شما برای ساختن
                <br />
                یک مسیر تازه
              </h2>

              <p>
                درمان اعتیاد فقط به معنای قطع مصرف نیست؛ بلکه مسیری برای بازسازی
                فرد، تقویت مهارت‌های زندگی و ایجاد شرایط مناسب برای بازگشت به یک
                زندگی سالم است.
              </p>

              <p>
                در طلوع زندگی تلاش می‌کنیم محیطی آرام و حمایتگر فراهم کنیم تا
                مراجعان بتوانند با تمرکز بیشتری مسیر درمان و بازتوانی خود را طی
                کنند.
              </p>

              <p>
                رویکرد ما بر پایه احترام به فرد، توجه به شرایط هر مراجعه‌کننده و
                همراهی در مراحل مختلف مسیر بهبودی است.
              </p>

              <div className={styles.manager}>
                <span>با مدیریت</span>
                <br />
                <strong>آقای حسن پورگل</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          APPROACH
      ========================== */}
      <section className={styles.approach}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>رویکرد ما</span>

            <h2>درمان؛ فراتر از قطع مصرف</h2>

            <p>
              مسیر بهبودی نیازمند توجه به شرایط فرد، حمایت مستمر و ایجاد محیط
              مناسب برای بازسازی جسمی و روانی است.
            </p>
          </div>

          <div className={styles.cards}>
            <article className={styles.card}>
              <span className={styles.cardNumber}>01</span>

              <h3>محیط امن و آرام</h3>

              <p>
                فراهم کردن محیطی آرام و حمایتگر برای تمرکز بیشتر بر روند درمان و
                بازتوانی.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.cardNumber}>02</span>

              <h3>توجه به شرایط فرد</h3>

              <p>
                شرایط و نیازهای هر فرد متفاوت است و مسیر درمان باید با توجه به
                وضعیت مراجع بررسی و هماهنگ شود.
              </p>
            </article>

            <article className={styles.card}>
              <span className={styles.cardNumber}>03</span>

              <h3>همراهی مستمر</h3>

              <p>
                خانواده و مراجع در مسیر درمان نیازمند آگاهی، ارتباط و همراهی
                هستند.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          VALUES
      ========================== */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.valuesGrid}>
            <div>
              <span className={styles.sectionEyebrow}>ارزش‌های ما</span>

              <h2>پایه‌های طلوع زندگی</h2>

              <p>
                اعتماد و احترام، بخش مهمی از رابطه میان مراجع، خانواده و مجموعه
                درمانی است.
              </p>
            </div>

            <div className={styles.valuesList}>
              <div className={styles.valueItem}>
                <span>01</span>
                <div>
                  <h3>احترام</h3>
                  <p>احترام به کرامت و شرایط هر فرد در مسیر درمان.</p>
                </div>
              </div>

              <div className={styles.valueItem}>
                <span>02</span>
                <div>
                  <h3>اعتماد</h3>
                  <p>ایجاد ارتباطی شفاف و قابل اعتماد با مراجع و خانواده.</p>
                </div>
              </div>

              <div className={styles.valueItem}>
                <span>03</span>
                <div>
                  <h3>همراهی</h3>
                  <p>همراهی مراجع و خانواده در مراحل مختلف مسیر بهبودی.</p>
                </div>
              </div>

              <div className={styles.valueItem}>
                <span>04</span>
                <div>
                  <h3>مسئولیت‌ پذیری</h3>
                  <p>توجه جدی به مسئولیت‌های حرفه‌ای و انسانی در مسیر درمان.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHY US
      ========================== */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>چرا طلوع زندگی؟</span>

            <h2>شروع دوباره، با یک انتخاب آگاهانه</h2>

            <p>
              پیش از شروع مسیر درمان، شناخت شرایط پذیرش و دریافت اطلاعات درست
              می‌تواند به تصمیم‌گیری بهتر خانواده کمک کند.
            </p>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <span>✓</span>
              <p>محیط آرام و حمایتگر</p>
            </div>

            <div className={styles.whyItem}>
              <span>✓</span>
              <p>پذیرش بانوان و آقایان</p>
            </div>

            <div className={styles.whyItem}>
              <span>✓</span>
              <p>پذیرش مراجعان از سراسر کشور</p>
            </div>

            <div className={styles.whyItem}>
              <span>✓</span>
              <p>مشاوره و راهنمایی پیش از پذیرش</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <span className={styles.sectionEyebrow}>قدم اول را بردارید</span>

            <h2>
              برای شروع مسیر درمان
              <br />
              با ما در ارتباط باشید
            </h2>

            <p>
              اگر درباره شرایط پذیرش، روند درمان یا نحوه شروع مسیر سؤال دارید،
              می‌توانید پیش از پذیرش با ما تماس بگیرید.
            </p>

            <div className={styles.ctaActions}>
              <Link href="/contact-us" className={styles.primaryButton}>
                مشاوره و تماس
              </Link>

              <Link href="/acceptance" className={styles.secondaryButton}>
                مشاهده شرایط پذیرش
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
