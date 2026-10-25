import { stats } from "@/data/stats";
import styles from "@/app/styles/campdetails.module.css";

export default function Stats() {
  return (
    <section
      className={`${styles.stats} container`}
      aria-labelledby="camp-stats-title"
    >
      <h2 id="camp-stats-title" className={styles.srOnly}>
        اطلاعات و آمار کمپ ترک اعتیاد طلوع زندگی
      </h2>

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <article className={styles.card} key={item.id}>
            <div className={styles.header}>
              <span
                className={styles.number}
                aria-label={`${item.number} ${item.title}`}
              >
                {item.number}
              </span>

              <Icon className={styles.icon} aria-hidden="true" />
            </div>

            <p>{item.title}</p>
          </article>
        );
      })}
    </section>
  );
}
