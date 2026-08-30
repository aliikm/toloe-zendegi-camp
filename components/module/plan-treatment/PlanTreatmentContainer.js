import styles from "@/app/styles/plantreatment.module.css";
import ServiceCard from "@/components/module/plan-treatment/ServiceCard";
import { services } from "@/data/services";

export default function PlanTreatmentContainer() {
  return (
    <section
      className={`${styles.container} container`}
      aria-labelledby="treatment-programs-title"
    >
      {/* =========================
          Section Header
      ========================== */}

      <header className={styles.headercontainer}>
        <span className={styles.label}>خدمات و برنامه‌های درمانی</span>

        <h2 id="treatment-programs-title" className={styles.title}>
          برنامه‌های درمان و بازتوانی اعتیاد
        </h2>

        <p className={styles.description}>
          برنامه‌های درمانی و حمایتی طلوع زندگی با توجه به شرایط هر فرد، با
          تمرکز بر درمان، بازتوانی و ادامه مسیر بهبودی ارائه می‌شوند.
        </p>
      </header>

      {/* =========================
          Services
      ========================== */}

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
