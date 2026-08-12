"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/styles/header.module.css";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}

      <button
        type="button"
        className={styles.menuButton}
        onClick={() => setOpen(true)}
        aria-label="باز کردن منو"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}

      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuHeader}>
          <span className={styles.mobileMenuTitle}>منوی سایت</span>

          <button
            type="button"
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="بستن منو"
          >
            ×
          </button>
        </div>

        <nav className={styles.mobileNav}>
          <Link href="/" onClick={closeMenu}>
            صفحه اصلی
          </Link>

          <Link href="/paziresh" onClick={closeMenu}>
            پذیرش
          </Link>

          <Link href="/aboutus" onClick={closeMenu}>
            درباره ما
          </Link>

          <Link href="/contact-us" onClick={closeMenu}>
            تماس با ما
          </Link>

          <Link href="/servic" onClick={closeMenu}>
            خدمات
          </Link>

          <Link href="/blog" onClick={closeMenu}>
            بلاگ
          </Link>
        </nav>
      </div>

      {/* Overlay */}

      {open && <div className={styles.mobileOverlay} onClick={closeMenu} />}
    </>
  );
}
