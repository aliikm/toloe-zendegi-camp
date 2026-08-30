import Link from "next/link";
import styles from "@/app/styles/header.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbarcontainer}>
      <div className={styles.navbar}>
        <Link href="">بلاگ</Link>

        <Link href="/servic">خدمات</Link>

        <Link href="/contact-us">تماس با ما</Link>

        <Link href="/aboutus">درباره ما</Link>

        <Link href="/acceptance">پذیرش</Link>

        <Link href="/">صفحه اصلی</Link>
      </div>
    </nav>
  );
}
