"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "@/app/styles/header.module.css";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  function openMenu() {
    setOpen(true);
  }

  /* =====================================================
     ESC + BODY SCROLL LOCK
  ====================================================== */

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =================================================
          HAMBURGER BUTTON
      ================================================== */}

      <button
        type="button"
        className={styles.menuButton}
        onClick={openMenu}
        aria-label="باز کردن منوی سایت"
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {/* =================================================
          OVERLAY
      ================================================== */}

      {open && (
        <div
          className={styles.mobileOverlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* =================================================
          MOBILE MENU
      ================================================== */}

      <aside
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!open}
      >
        {/* =================================================
            MENU HEADER
        ================================================== */}

        <div className={styles.mobileMenuHeader}>
          <span className={styles.mobileMenuTitle}>منوی سایت</span>

          <button
            type="button"
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="بستن منوی سایت"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {/* =================================================
            NAVIGATION
        ================================================== */}

        <nav className={styles.mobileNav} aria-label="منوی موبایل">
          <Link href="/" onClick={closeMenu}>
            صفحه اصلی
          </Link>

          <Link href="/aboutus" onClick={closeMenu}>
            درباره ما
          </Link>

          <Link href="/servic" onClick={closeMenu}>
            خدمات
          </Link>

          <Link href="/acceptance" onClick={closeMenu}>
            پذیرش
          </Link>

          <Link href="/contact-us" onClick={closeMenu}>
            تماس با ما
          </Link>

          <Link href="/blog" onClick={closeMenu}>
            بلاگ
          </Link>
        </nav>

        {/* =================================================
            MOBILE MENU CTA
        ================================================== */}

        <div className={styles.mobileMenuFooter}>
          <Link
            href="/contact-us"
            className={styles.mobileConsultationButton}
            onClick={closeMenu}
          >
            دریافت مشاوره
          </Link>
        </div>
      </aside>
    </>
  );
}
