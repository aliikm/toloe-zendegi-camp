import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/module/header/NavBar";
import MobileMenu from "@/components/module/header/MobileMenu";
import styles from "@/app/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      {/* ========================================
          Consultation
      ======================================== */}

      <div className={styles.actions}>
        <Link href="/contact-us" className={styles.consultationButton}>
          مشاوره رایگان
        </Link>
      </div>

      {/* ========================================
          Desktop Navigation
      ======================================== */}

      <nav className={styles.navbar} aria-label="منوی اصلی">
        <NavBar />
      </nav>

      {/* ========================================
          Logo
      ======================================== */}

      <div className={styles.logo}>
        <Link href="/" aria-label="صفحه اصلی طلوع زندگی">
          <Image
            src="/image/logo.png"
            width={100}
            height={100}
            alt="لوگوی کمپ ترک اعتیاد طلوع زندگی"
            priority
          />
        </Link>
      </div>

      {/* ========================================
          Mobile Menu
      ======================================== */}

      <div className={styles.mobileMenuWrapper}>
        <MobileMenu />
      </div>
    </header>
  );
}
