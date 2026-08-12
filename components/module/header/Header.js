import NavBar from "@/components/module/header/NavBar";
import MobileMenu from "@/components/module/header/MobileMenu";
import Image from "next/image";
import styles from "@/app/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      {/* دکمه مشاوره */}
      <div className={styles.actions}>
        <button>مشاوره رایگان</button>
      </div>

      {/* منوی دسکتاپ */}
      <div className={styles.navbar}>
        <NavBar />
      </div>

      {/* لوگو */}
      <div className={styles.logo}>
        <Image
          src="/image/logo.png"
          width={100}
          height={100}
          alt="طلوع زندگی"
        />
      </div>

      {/* منوی موبایل */}
      <MobileMenu />
    </header>
  );
}
