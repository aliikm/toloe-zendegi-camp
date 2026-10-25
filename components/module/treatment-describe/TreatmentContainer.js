import styles from "@/app/styles/treatment.module.css";
import { LuShieldCheck, LuStethoscope, LuHeartHandshake } from "react-icons/lu";
import { PiPlantLight, PiGenderIntersexLight } from "react-icons/pi";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const highlights = [
  {
    icon: LuShieldCheck,
    title: "محیط امن و آرام",
    description:
      "محیطی آرام و منظم برای کمک به تمرکز بیشتر بر مسیر درمان اعتیاد و بازتوانی.",
  },
  {
    icon: PiGenderIntersexLight,
    title: "پذیرش بانوان و آقایان",
    description:
      "پذیرش بانوان و آقایان بر اساس شرایط پذیرش و بررسی وضعیت هر مراجعه‌کننده.",
  },
  {
    icon: LuStethoscope,
    title: "همراهی تیم درمانی",
    description:
      "همراهی تیم درمانی و مشاوران برای بررسی شرایط فرد و انتخاب مسیر مناسب درمان.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "برنامه درمانی متناسب با فرد",
    description:
      "روند درمان و حمایت با توجه به شرایط، نیازها و وضعیت هر فرد مورد بررسی قرار می‌گیرد.",
  },
  {
    icon: LuHeartHandshake,
    title: "همراهی خانواده",
    description:
      "ارائه راهنمایی و حمایت از خانواده در مراحل مختلف درمان و بازتوانی.",
  },
  {
    icon: PiPlantLight,
    title: "پیگیری پس از درمان",
    description:
      "توجه به ادامه مسیر بازتوانی و همراهی پس از پایان دوره اقامت و درمان.",
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

          <h2 id="treatment-highlights-title">
            درمان و بازتوانی؛ متناسب با شرایط هر فرد
          </h2>

          <p>
            در طلوع زندگی تلاش می‌کنیم در کنار خدمات درمانی، محیطی آرام و
            حمایتگر برای ادامه مسیر درمان اعتیاد، بازتوانی و بازگشت به زندگی
            سالم فراهم کنیم.
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
