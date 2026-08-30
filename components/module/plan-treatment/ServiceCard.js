import Image from "next/image";
import Link from "next/link";

import styles from "@/app/styles/servicecard.module.css";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className={styles.card}>
      {/* =========================
          Image
      ========================== */}

      <div className={styles.imageWrapper}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className={styles.image}
        />

        <div className={styles.iconBox} aria-hidden="true">
          <Icon className={styles.icon} />
        </div>
      </div>

      {/* =========================
          Content
      ========================== */}

      <div className={styles.content}>
        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <Link
          href="/servic"
          className={styles.link}
          aria-label={`مشاهده خدمات ${service.title}`}
        >
          <span>مشاهده خدمات</span>

          <span aria-hidden="true">←</span>
        </Link>
      </div>
    </article>
  );
}
