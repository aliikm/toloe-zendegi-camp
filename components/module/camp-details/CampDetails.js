import { stats } from "@/data/stats";
import styles from "@/app/styles/campdetails.module.css";

export default function Stats() {
  return (
    <section
      className={`${styles.stats} container`}
      aria-label="آمار و اطلاعات مجموعه طلوع زندگی"
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div className={styles.card} key={item.id}>
            <div className={styles.header}>
              <span className={styles.number}>{item.number}</span>

              <Icon className={styles.icon} aria-hidden="true" />
            </div>

            <p>{item.title}</p>
          </div>
        );
      })}
    </section>
  );
}
