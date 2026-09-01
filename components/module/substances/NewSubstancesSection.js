import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

import { substances } from "@/data/substances";
import styles from "@/app/styles/newsubstances.module.css";

export default function NewSubstancesSection() {
  return (
    <section className={styles.section} aria-labelledby="new-substances-title">
      <div className={`${styles.container} container`}>
        {/* =========================
            Heading
        ========================== */}

        <header className={styles.heading}>
          <span className={styles.eyebrow}>آگاهی و پیشگیری</span>

          <h2 id="new-substances-title" className={styles.title}>
            مواد و ترکیباتی که خانواده‌ها
            <br />
            بیشتر درباره آن‌ها سؤال دارند
          </h2>

          <p className={styles.description}>
            الگوهای مصرف مواد در سال‌های اخیر تغییر کرده‌اند. شناخت مواد
            روان‌گردان، محرک و ترکیبات قابل سوءمصرف می‌تواند به خانواده‌ها در
            تشخیص زودهنگام و تصمیم‌گیری آگاهانه برای دریافت کمک تخصصی کمک کند.
          </p>
        </header>

        {/* =========================
            Cards
        ========================== */}

        <div className={styles.grid}>
          {substances.map((item) => {
            const Icon = item.icon;

            return (
              <article className={styles.card} key={item.id}>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrapper} aria-hidden="true">
                    <Icon className={styles.icon} />
                  </div>

                  <span className={styles.category}>{item.category}</span>
                </div>

                <div className={styles.cardContent}>
                  <h3>{item.persianName}</h3>

                  <span className={styles.englishName}>{item.name}</span>

                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================
            Bottom CTA
        ========================== */}

        <div className={styles.bottom}>
          <div className={styles.bottomText}>
            <h3>درباره مصرف مواد در خانواده نگران هستید؟</h3>

            <p>
              برای دریافت مشاوره اولیه و محرمانه درباره شرایط فرد و مسیر مناسب،
              با ما در ارتباط باشید.
            </p>
          </div>

          <Link href="/contact-us" className={styles.button}>
            <span>دریافت مشاوره</span>

            <LuArrowLeft aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
