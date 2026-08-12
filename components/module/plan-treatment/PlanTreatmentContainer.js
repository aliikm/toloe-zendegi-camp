import styles from "../../../app/styles/plantreatment.module.css";
import ServiceCard from "@/components/module/plan-treatment/ServiceCard";
import { services } from "@/data/services";
export default function PlanTreatmentContainer() {
  return (
    <>
      <section className={`${styles.container} container`}>
        <div className={styles.headercontainer}>
          <span className={styles.label}>برنامه‌های درمانی ما</span>

          <h2 className={styles.title}>درمان علمی، انسانی و پایدار</h2>

          <p className={styles.description}>
            برنامه‌های درمانی ما متناسب با شرایط و نیاز هر فرد طراحی می‌شوند تا
            بهترین نتیجه درمانی حاصل شود.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
