"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";

import styles from "@/app/styles/footer.module.css";

export default function FooterAccordion({ title, items = [] }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  const toggleAccordion = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.accordion}>
      <button
        type="button"
        className={styles.accordionButton}
        onClick={toggleAccordion}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span>{title}</span>

        <LuChevronDown
          className={`${styles.accordionIcon} ${
            open ? styles.accordionIconOpen : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={contentId}
        className={`${styles.accordionContent} ${
          open ? styles.accordionContentOpen : ""
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <ul className={styles.linkList}>
          {items
            .filter((item) => item.href?.trim())
            .map((item) => (
              <li key={item.id}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
