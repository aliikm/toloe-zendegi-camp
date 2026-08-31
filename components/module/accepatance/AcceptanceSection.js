import Link from "next/link";
import { LuArrowLeft, LuCheck } from "react-icons/lu";

import { acceptanceFeatures, acceptanceBenefits } from "@/data/accept";

import styles from "@/app/styles/acceptancedection.module.css";

export default function AcceptanceSection() {
  return (
    <section className={styles.section} aria-labelledby="acceptance-title">
      <div className={styles.container}>
        <div className={styles.content}>
          {/* =========================
              Text Content
          ========================== */}

          <div className={styles.textContent}>
            <span className={styles.eyebrow}>شرایط پذیرش</span>

            <h2 id="acceptance-title" className={styles.title}>
              پذیرش بانوان و آقایان
              <br />
              از سراسر کشور
            </h2>

            <p className={styles.description}>
              طلوع زندگی امکان بررسی شرایط پذیرش مراجعان از شهرهای مختلف کشور را
              فراهم کرده است. پیش از پذیرش، شرایط هر فرد توسط تیم مربوطه بررسی
              می‌شود تا اطلاعات لازم درباره روند درمان، اقامت و مراحل پذیرش در
              اختیار فرد و خانواده قرار گیرد.
            </p>

            {/* =========================
                Benefits
            ========================== */}

            <ul className={styles.benefits} aria-label="مزایای پذیرش">
              {acceptanceBenefits.map((item) => (
                <li key={item.id}>
                  <span className={styles.check} aria-hidden="true">
                    <LuCheck />
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
                <article key={item.id} className={styles.card}>
                  <div className={styles.iconWrapper} aria-hidden="true">
                    <Icon />
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
