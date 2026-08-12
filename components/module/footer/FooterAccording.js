"use client";

import { useState } from "react";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import styles from "@/app/styles/footer.module.css";

export default function FooterAccordion({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button
        type="button"
        className={styles.accordionButton}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>

        <LuChevronDown
          className={`${styles.accordionIcon} ${
            open ? styles.accordionIconOpen : ""
          }`}
        />
      </button>

      <div
        className={`${styles.accordionContent} ${
          open ? styles.accordionContentOpen : ""
        }`}
      >
        <ul className={styles.linkList}>
          {items.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
