import Image from "next/image";
import Link from "next/link";
import styles from "../../../app/styles/servicecard.module.css";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* <Image
          src={service.image}
          alt={service.title}
          fill
          className={styles.image}
        /> */}
        picture
        <div className={styles.iconBox}>
          <Icon className={styles.icon} />
        </div>
      </div>

      <div className={styles.content}>
        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <Link href="/">اطلاعات بیشتر</Link>
      </div>
    </article>
  );
}
