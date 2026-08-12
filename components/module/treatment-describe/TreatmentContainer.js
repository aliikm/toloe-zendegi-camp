import styles from "@/app/styles/treatment.module.css";
import { LuShieldCheck } from "react-icons/lu";
import { LuStethoscope } from "react-icons/lu";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { LuHeartHandshake } from "react-icons/lu";
import { PiPlantLight } from "react-icons/pi";
import { PiGenderIntersexLight } from "react-icons/pi";

export default function TreatmentContainer() {
  return (
    <>
      <div className={`${styles.container} container`}>
        <div>
          <LuShieldCheck className={styles.icon} />
          <h4>محیط امن و ارام</h4>
          <p>محیطی امن برای آرامش ذهن و بدن</p>
        </div>
        <div>
          <PiGenderIntersexLight className={styles.icon} />
          <h4>درمان بانوان و آقایان</h4>
          <p>درمان تخصصی بانوان و آقایان در محیط مجزا</p>
        </div>
        <div>
          <LuStethoscope className={styles.icon} />
          <h4>تیم درمانی متخصص</h4>
          <p>متشکل از پزشکان,روانشناسان و مشاوران</p>
        </div>
        <div>
          <HiOutlineClipboardDocumentCheck className={styles.icon} />
          <h4>برنامه درمانی اختصاصی</h4>
          <p>طراحی شده بر اساس نیاز هر فرد</p>
        </div>
        <div>
          <LuHeartHandshake className={styles.icon} />
          <h4>پشتیبانی خانواده</h4>
          <p>همراهی و آموزش خانواده در تمام مسیر</p>
        </div>
        <div>
          <PiPlantLight className={styles.icon} />
          <h4>پیگیری پس از درمان</h4>
          <p>ما بعد از ترخیص هم کنارتان هستیم</p>
        </div>
      </div>
    </>
  );
}
