import { stats } from "@/data/stats";
import styles from "@/app/styles/campdetails.module.css";

export default function Stats() {
  return (
    <section className={`${styles.stats} container`}>
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div className={styles.card} key={item.id}>
            <div className={styles.header}>
              <h3>{item.number}</h3>
              <Icon className={styles.icon} />
            </div>

            <p>{item.title}</p>
          </div>
        );
      })}
    </section>
  );
}
