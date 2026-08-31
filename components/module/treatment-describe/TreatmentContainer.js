import styles from "@/app/styles/treatment.module.css";
import { LuShieldCheck, LuStethoscope, LuHeartHandshake } from "react-icons/lu";
import { PiPlantLight, PiGenderIntersexLight } from "react-icons/pi";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
const highlights = [
  {
    icon: LuShieldCheck,
    title: "محیط امن و آرام",
    description:
      "محیطی آرام و منظم برای کمک به تمرکز بیشتر بر مسیر درمان و بازتوانی.",
  },
  {
    icon: PiGenderIntersexLight,
    title: "پذیرش بانوان و آقایان",
    description:
      "ارائه خدمات متناسب با شرایط بانوان و آقایان در چارچوب شرایط پذیرش مرکز.",
  },
  {
    icon: LuStethoscope,
    title: "تیم درمانی متخصص",
    description:
      "همراهی تیم تخصصی و مشاوران برای بررسی شرایط و طراحی مسیر مناسب درمان.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "برنامه درمانی متناسب با فرد",
    description:
      "مسیر درمان و حمایت بر اساس شرایط، نیازها و وضعیت هر فرد مورد بررسی قرار می‌گیرد.",
  },
  {
    icon: LuHeartHandshake,
    title: "همراهی خانواده",
    description:
      "ارائه راهنمایی و حمایت برای خانواده در مراحل مختلف مسیر درمان و بازتوانی.",
  },
  {
    icon: PiPlantLight,
    title: "پیگیری پس از درمان",
    description:
      "ادامه همراهی و توجه به مسیر بازتوانی پس از پایان دوره اقامت و درمان.",
  },
];

export default function TreatmentContainer() {
  return (
    <section
      className={styles.section}
      aria-labelledby="treatment-highlights-title"
    >
      <div className={`${styles.container} container`}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>همراهی در مسیر بهبودی</span>

          <h2 id="treatment-highlights-title">شرایطی برای یک مسیر مطمئن‌تر</h2>

          <p>
            در طلوع زندگی تلاش می‌کنیم در کنار خدمات درمانی، محیط و حمایت لازم
            برای ادامه مسیر درمان و بازتوانی را فراهم کنیم.
          </p>
        </div>

        <div className={styles.grid}>
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className={styles.card}>
                <Icon className={styles.icon} aria-hidden="true" />

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
