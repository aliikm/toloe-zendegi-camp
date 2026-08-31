import Image from "next/image";
import Link from "next/link";

import { LuMapPin, LuPhone, LuMail, LuClock3, LuArrowUp } from "react-icons/lu";

import SocialMedia from "@/components/social/SocialMedia";
import FooterAccordion from "@/components/module/footer/FooterAccording";

import { footerServices, footerLinks } from "@/data/footerservices";

import styles from "@/app/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* ========================================
            MAIN FOOTER
        ======================================== */}

        <div className={styles.footerGrid}>
          {/* ========================================
              BRAND
          ======================================== */}

          <div className={styles.brandColumn}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="صفحه اصلی طلوع زندگی"
            >
              <Image
                src="/image/logo.webp"
                width={82}
                height={82}
                alt="لوگوی طلوع زندگی"
              />
            </Link>

            <p className={styles.description}>
              طلوع زندگی؛ مرکز درمان و بازتوانی با رویکردی علمی، انسانی و
              حرفه‌ای که در محیطی آرام، همراه مسیر بهبودی و بازگشت به زندگی سالم
              است.
            </p>

            <SocialMedia />
          </div>

          {/* ========================================
              SERVICES
          ======================================== */}

          <nav className={styles.column} aria-label="خدمات طلوع زندگی">
            {/* Desktop */}

            <div className={styles.desktopColumn}>
              <h2 className={styles.columnTitle}>خدمات ما</h2>

              <ul className={styles.linkList}>
                {footerServices.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile */}

            <div className={styles.mobileAccordion}>
              <FooterAccordion title="خدمات ما" items={footerServices} />
            </div>
          </nav>

          {/* ========================================
              QUICK LINKS
          ======================================== */}

          <nav className={styles.column} aria-label="دسترسی سریع">
            {/* Desktop */}

            <div className={styles.desktopColumn}>
              <h2 className={styles.columnTitle}>دسترسی سریع</h2>

              <ul className={styles.linkList}>
                {footerLinks.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile */}

            <div className={styles.mobileAccordion}>
              <FooterAccordion title="دسترسی سریع" items={footerLinks} />
            </div>
          </nav>

          {/* ========================================
              CONTACT
          ======================================== */}

          <address className={styles.contactColumn}>
            <h2 className={styles.columnTitle}>ارتباط با ما</h2>

            {/* Address */}

            <div className={styles.contactItem}>
              <LuMapPin className={styles.contactIcon} aria-hidden="true" />

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                تهران، چهاردانگه
              </a>
            </div>

            {/* Phone */}

            <div className={styles.contactItem}>
              <LuPhone className={styles.contactIcon} aria-hidden="true" />

              <a href="tel:+989122268806">۰۹۱۲۲۲۶۸۸۰۶</a>
            </div>

            {/* Email */}

            <div className={styles.contactItem}>
              <LuMail className={styles.contactIcon} aria-hidden="true" />

              <a href="mailto:info@toloozendegi.com">info@toloozendegi.com</a>
            </div>

            {/* Working Hours */}

            <div className={styles.contactItem}>
              <LuClock3 className={styles.contactIcon} aria-hidden="true" />

              <span>پاسخگویی ۲۴ ساعته</span>
            </div>
          </address>
        </div>

        {/* ========================================
            DIVIDER
        ======================================== */}

        <div className={styles.divider} />

        {/* ========================================
            FOOTER BOTTOM
        ======================================== */}

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © ۱۴۰۵ طلوع زندگی. تمامی حقوق محفوظ است.
          </p>

          <div className={styles.bottomLinks}>
            <Link href="/privacy">حریم خصوصی</Link>

            <span aria-hidden="true">|</span>

            <Link href="/terms">شرایط استفاده</Link>
          </div>
        </div>

        {/* ========================================
            BACK TO TOP
        ======================================== */}

        <a
          href="#top"
          className={styles.backToTop}
          aria-label="بازگشت به بالای صفحه"
        >
          <LuArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
