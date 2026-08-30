import Image from "next/image";
import Link from "next/link";

import styles from "@/app/styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.herocontainer}>
      <Image
        src="/image/hero-img.png"
        fill
        priority
        quality={80}
        sizes="100vw"
        alt="محیط آرام مرکز طلوع زندگی برای درمان و بازتوانی"
        className={styles.image}
      />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.paragraphcontainer}>
        <div className={styles.content}>
          <span className={styles.badge}>مرکز تخصصی درمان و بازتوانی</span>

          <h1>
            به شروعی دوباره
            <br />
            باور داریم
          </h1>

          <p>
            ما در کنار شما هستیم تا با رویکردی علمی، انسانی و حرفه‌ای، مسیر
            درمان و بازتوانی را برای شما هموارتر کنیم و گامی برای بازگشت به
            زندگی سالم و آرام برداریم.
          </p>

          <div className={styles.buttons}>
            <Link href="/acceptance" className={styles.primary}>
              درخواست پذیرش
            </Link>

            <Link href="/contact-us" className={styles.secondary}>
              دریافت مشاوره
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
