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
          <span className={styles.eyebrow}>آگاهی، شناخت و پیشگیری</span>

          <h2 id="new-substances-title" className={styles.title}>
            شناخت انواع مواد و وابستگی‌های
            <br />
            شایع و جدید
          </h2>

          <p className={styles.description}>
            شناخت انواع مواد، از مواد سنتی و مخدر گرفته تا مواد محرک، روان‌گردان
            و ترکیبات صنعتی، می‌تواند به خانواده‌ها در تشخیص زودهنگام تغییرات
            رفتاری و تصمیم‌گیری آگاهانه برای دریافت کمک تخصصی در مسیر درمان
            اعتیاد کمک کند.
          </p>
        </header>

        {/* =========================
            Substances Cards
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
              اگر درباره نوع ماده مصرفی، شرایط فرد یا شروع مسیر درمان سؤال
              دارید، می‌توانید برای دریافت مشاوره اولیه و محرمانه با ما در
              ارتباط باشید.
            </p>
          </div>

          <Link href="/contact-us" className={styles.button}>
            <span>مشاوره رایگان</span>

            <LuArrowLeft aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
