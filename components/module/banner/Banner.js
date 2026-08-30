import Link from "next/link";
import styles from "@/app/styles/banner.module.css";

export default function Banner() {
  return (
    <section
      className={`${styles.banner} container`}
      aria-labelledby="banner-title"
    >
      {/* Background */}
      <div className={styles.background} aria-hidden="true" />

      {/* Overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>همین امروز قدم اول را بردارید</p>

        <h2 id="banner-title" className={styles.title}>
          برای آینده‌ای روشن،
          <br />
          ما در کنار شما هستیم
        </h2>

        <p className={styles.description}>
          مشاوره اولیه و محرمانه برای آشنایی با روند پذیرش و درمان.
        </p>

        <div className={styles.actions}>
          <Link href="/contact-us" className={styles.primaryButton}>
            <span>تماس با ما</span>

            <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.1.4 2.2.6 3.4.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.1 21 3 12.9 3 3c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.3.6 3.4.1.4 0 .8-.2 1.1l-2.2 2.3Z" />
            </svg>
          </Link>

          <Link href="/acceptance" className={styles.secondaryButton}>
            <span>درخواست پذیرش</span>

            <svg
              className={styles.arrow}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
