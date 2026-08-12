import Image from "next/image";
import styles from "@/app/styles/hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={`${styles.herocontainer}`}>
        <Image
          src="/image/hero-img.png"
          fill
          priority
          quality={100}
          sizes="100vw"
          alt="hero-image"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
        <div className={styles.paragraphcontainer}>
          <div className={styles.content}>
            <span className={styles.badge}>کمپ تخصصی ترک اعتیاد</span>
            <h1>
              به شروعی دوباره
              <br /> باور داریم
            </h1>
            <p>
              ما در کنار شما هستیم تا بارویکردی علمی,انسانی و حرفه ای
              <br />
              مسیر درمان را آسان تر کنیم تا به زندگی سالم و آرام برگردید
            </p>
            <div className={styles.buttons}>
              <button className={styles.primary}>درخواست پذیرش</button>

              <button className={styles.secondary}>مشاوره رایگان</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
