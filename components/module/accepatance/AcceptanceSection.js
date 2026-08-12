import Link from "next/link";

import { LuUsers, LuMapPin, LuArrowLeft, LuCheck } from "react-icons/lu";

import { acceptanceFeatures, acceptanceBenefits } from "@/data/accept";

import styles from "@/app/styles/acceptancedection.module.css";

export default function AcceptanceSection() {
  return (
    <section
      className={`${styles.section} container`}
      aria-labelledby="acceptance-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {/* =========================
              Text Content
          ========================== */}

          <div className={styles.textContent}>
            <span className={styles.eyebrow}>شرایط پذیرش</span>

            <h2 id="acceptance-title" className={styles.title}>
              پذیرش آقایان و بانوان
              <br />
              از سراسر کشور
            </h2>

            <p className={styles.description}>
              کمپ طلوع زندگی آماده پذیرش آقایان و بانوان از سراسر کشور است. پیش
              از پذیرش، شرایط مراجع توسط تیم مربوطه بررسی می‌شود تا اطلاعات لازم
              درباره روند درمان، اقامت و مراحل پذیرش در اختیار فرد و خانواده
              قرار گیرد.
            </p>

            {/* =========================
                Benefits
            ========================== */}

            <ul className={styles.benefits}>
              {acceptanceBenefits.map((item) => (
                <li key={item.id}>
                  <span className={styles.check}>
                    <LuCheck aria-hidden="true" />
                  </span>

                  <span>{item.title}</span>
                </li>
              ))}
            </ul>

            {/* =========================
                CTA
            ========================== */}

            <Link href="/paziresh" className={styles.button}>
              <span>مشاهده شرایط پذیرش</span>

              <LuArrowLeft aria-hidden="true" />
            </Link>
          </div>

          {/* =========================
              Feature Cards
          ========================== */}

          <div className={styles.cards}>
            {acceptanceFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <article className={styles.card} key={item.id}>
                  <div className={styles.iconWrapper}>
                    <Icon aria-hidden="true" />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
