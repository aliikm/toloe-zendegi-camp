import Link from "next/link";
import { LuMapPin, LuPhone, LuMail, LuClock3, LuArrowUp } from "react-icons/lu";
import SocialMedia from "@/components/social/SocialMedia";
import FooterAccordion from "@/components/module/footer/FooterAccording";
import { footerServices, footerLinks } from "@/data/footerservices";
import styles from "@/app/styles/footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* =========================
            Main
        ========================== */}

        <div className={styles.footerGrid}>
          {/* Brand */}

          <div className={styles.brandColumn}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="طلوع زندگی - صفحه اصلی"
            >
              <Image
                src="/image/logo.png"
                width={100}
                height={100}
                alt="طلوع زندگی"
              />
            </Link>

            <p className={styles.description}>
              کمپ تخصصی ترک اعتیاد طلوع زندگی با بهره‌گیری از تیمی متخصص و محیطی
              آرام، در مسیر درمان و بازگشت به یک زندگی سالم همراه شماست.
            </p>

            <SocialMedia />
          </div>

          {/* =========================
              Services
          ========================== */}

          <nav className={styles.column} aria-label="خدمات">
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

          {/* =========================
              Quick Links
          ========================== */}

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

          {/* =========================
              Contact
          ========================== */}

          <address className={styles.contactColumn}>
            <h2 className={styles.columnTitle}>ارتباط با ما</h2>

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

            <div className={styles.contactItem}>
              <LuPhone className={styles.contactIcon} aria-hidden="true" />

              <a href="tel:+9809122268806">09122268806</a>
            </div>

            <div className={styles.contactItem}>
              <LuMail className={styles.contactIcon} aria-hidden="true" />

              <a href="mailto:info@example.com">info@toloozendegi.com</a>
            </div>

            <div className={styles.contactItem}>
              <LuClock3 className={styles.contactIcon} aria-hidden="true" />

              <span>پاسخگویی ۲۴ ساعته</span>
            </div>
          </address>
        </div>

        {/* =========================
            Divider
        ========================== */}

        <div className={styles.divider} />

        {/* =========================
            Bottom
        ========================== */}

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

        {/* Back To Top */}

        <a
          href="#"
          className={styles.backToTop}
          aria-label="بازگشت به بالای صفحه"
        >
          <LuArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
