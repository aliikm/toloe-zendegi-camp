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
              alt="محیط طبیعی و آرام کمپ ترک اعتیاد طلوع زندگی"
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
            <span className={styles.eyebrow}>درباره ما</span>

            <h2 id="camp-details-title" className={styles.title}>
              ما یک کمپ نیستیم،
              <br />
              ما آغاز یک زندگی جدید هستیم
            </h2>

            <p className={styles.description}>
              کمپ تخصصی ترک اعتیاد طلوع زندگی با بیش از یک دهه تجربه در زمینه
              درمان اعتیاد، با بهره‌گیری از دانش علمی و تخصصی، محیطی آرام و امن
              برای شروع دوباره زندگی فراهم کرده است. ما در این مسیر در کنار شما
              هستیم.
            </p>

            {/* =========================
                  Features
            ========================== */}

            <ul className={styles.features}>
              <li className={styles.feature}>
                <span className={styles.checkIcon}>
                  <LuCheck aria-hidden="true" />
                </span>

                <span>دارای مجوز رسمی از وزارت بهداشت</span>
              </li>

              <li className={styles.feature}>
                <span className={styles.checkIcon}>
                  <LuCheck aria-hidden="true" />
                </span>

                <span>تجربه موفق در درمان مراجعین</span>
              </li>

              <li className={styles.feature}>
                <span className={styles.checkIcon}>
                  <LuCheck aria-hidden="true" />
                </span>

                <span>استفاده از روش‌های علمی و به‌روز</span>
              </li>
            </ul>

            {/* =========================
                  CTA
            ========================== */}

            <Link href="/about" className={styles.button}>
              <span>بیشتر درباره ما</span>

              <LuArrowLeft aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
