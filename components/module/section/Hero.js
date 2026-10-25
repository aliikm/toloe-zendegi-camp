import Image from "next/image";
import Link from "next/link";

import styles from "@/app/styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.herocontainer}>
      <Image
        src="/image/hero-img.webp"
        fill
        priority
        quality={75}
        sizes="100vw"
        alt="محیط آرام کمپ ترک اعتیاد طلوع زندگی در استان تهران"
        className={styles.image}
      />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.paragraphcontainer}>
        <div className={styles.content}>
          <span className={styles.badge}>مرکز درمان و بازتوانی اعتیاد</span>

          <h1>
            کمپ ترک اعتیاد طلوع زندگی
            <br />
            باور به شروعی دوباره
          </h1>

          <p>
            در طلوع زندگی تلاش می‌کنیم با ایجاد محیطی آرام و حمایتگر، در مسیر
            درمان، بازتوانی و بازگشت به زندگی سالم همراه شما و خانواده‌تان
            باشیم.
          </p>

          <div className={styles.buttons}>
            <Link href="/acceptance" className={styles.primary}>
              درخواست پذیرش
            </Link>

            <Link href="/contact-us" className={styles.secondary}>
              مشاوره رایگان
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
