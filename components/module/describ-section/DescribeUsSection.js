import Image from "next/image";
import Link from "next/link";

import { LuCheck, LuArrowLeft } from "react-icons/lu";

import styles from "@/app/styles/describeussection.module.css";

export default function DescribeUsSection() {
  return (
    <section className={styles.section} aria-labelledby="camp-details-title">
      <div className={styles.container}>
        <div className={styles.content}>
          {/* =========================
              Image
          ========================== */}

          <div className={styles.imageWrapper}>
            <Image
              src="/image/usdescribe.png"
              alt="محیط طبیعی و آرام مجموعه طلوع زندگی"
              width={900}
              height={650}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          {/* =========================
              Text Content
          ========================== */}

          <div className={styles.textContent}>
            <span className={styles.eyebrow}>درباره طلوع زندگی</span>

            <h2 id="camp-details-title" className={styles.title}>
              همراه شما برای
              <br />
              شروع یک زندگی جدید
            </h2>

            <p className={styles.description}>
              طلوع زندگی با تمرکز بر درمان و بازتوانی وابستگی به مواد، تلاش
              می‌کند محیطی آرام و منظم برای آغاز مسیر بهبودی فراهم کند. در این
              مسیر، شرایط هر فرد به‌صورت جداگانه مورد بررسی قرار می‌گیرد و
              خانواده نیز می‌تواند در مراحل مختلف مسیر از راهنمایی و حمایت لازم
              برخوردار شود.
            </p>

            {/* =========================
                Features
            ========================== */}

            <ul className={styles.features} aria-label="ویژگی‌های مجموعه">
              <li className={styles.feature}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <LuCheck />
                </span>

                <span>محیط آرام و مناسب برای ادامه مسیر درمان</span>
              </li>

              <li className={styles.feature}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <LuCheck />
                </span>

                <span>توجه به شرایط و نیازهای هر فرد</span>
              </li>

              <li className={styles.feature}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <LuCheck />
                </span>

                <span>همراهی و حمایت در مسیر بازتوانی</span>
              </li>
            </ul>

            {/* =========================
                CTA
            ========================== */}

            <Link href="/aboutus" className={styles.button}>
              <span>بیشتر درباره ما</span>

              <LuArrowLeft aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
