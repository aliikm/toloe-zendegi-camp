import Image from "next/image";
import Link from "next/link";

import { LuCheck, LuArrowLeft } from "react-icons/lu";

import styles from "@/app/styles/describeussection.module.css";

export default function DescribeUsSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-toloo-zendegi-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {/* =========================
              Image
          ========================== */}

          <div className={styles.imageWrapper}>
            <Image
              src="/image/usdescribe.webp"
              alt="محیط آرام کمپ ترک اعتیاد طلوع زندگی در استان تهران"
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
            <span className={styles.eyebrow}>
              درباره کمپ ترک اعتیاد طلوع زندگی
            </span>

            <h2 id="about-toloo-zendegi-title" className={styles.title}>
              همراه شما در مسیر
              <br />
              درمان و بازتوانی
            </h2>

            <p className={styles.description}>
              طلوع زندگی، مرکز درمان و بازتوانی در استان تهران، با فراهم کردن
              محیطی آرام و منظم تلاش می‌کند شرایط مناسبی برای آغاز و ادامه مسیر
              بهبودی فراهم کند. در این مسیر، شرایط هر فرد به‌صورت جداگانه بررسی
              می‌شود و خانواده نیز می‌تواند در مراحل مختلف درمان و بازتوانی از
              راهنمایی و حمایت لازم برخوردار شود.
            </p>

            {/* =========================
                Features
            ========================== */}

            <ul
              className={styles.features}
              aria-label="ویژگی‌های کمپ ترک اعتیاد طلوع زندگی"
            >
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

                <span>همراهی فرد و خانواده در مسیر بازتوانی</span>
              </li>
            </ul>

            {/* =========================
                CTA
            ========================== */}

            <Link
              href="/aboutus"
              className={styles.button}
              aria-label="مطالعه بیشتر درباره کمپ ترک اعتیاد طلوع زندگی"
            >
              <span>بیشتر درباره ما</span>

              <LuArrowLeft aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
