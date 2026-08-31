import Image from "next/image";
import Link from "next/link";

import NavBar from "@/components/module/header/NavBar";
import MobileMenu from "@/components/module/header/MobileMenu";

import styles from "@/app/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      {/* =====================================================
          DESKTOP NAVIGATION
      ====================================================== */}

      <nav className={styles.navbar} aria-label="منوی اصلی">
        <NavBar />
      </nav>

      {/* =====================================================
          LOGO
      ====================================================== */}

      <div className={styles.logo}>
        <Link href="/" aria-label="صفحه اصلی طلوع زندگی">
          <Image
            src="/image/logo.webp"
            width={100}
            height={100}
            alt="طلوع زندگی | مرکز درمان و بازتوانی"
            priority
          />
        </Link>
      </div>

      {/* =====================================================
          CONSULTATION
      ====================================================== */}

      <div className={styles.actions}>
        <Link
          href="/contact-us"
          className={styles.consultationButton}
          aria-label="دریافت مشاوره رایگان از طلوع زندگی"
        >
          مشاوره رایگان
        </Link>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div className={styles.mobileMenuWrapper}>
        <MobileMenu />
      </div>
    </header>
  );
}
