import { LuInstagram, LuSend, LuMessageCircle } from "react-icons/lu";
import styles from "../../app/styles/socialmedia.module.css";

const socialLinks = [
  {
    id: 1,
    title: "اینستاگرام",
    href: "", // لینک واقعی اینستاگرام را وارد کن
    icon: <LuInstagram aria-hidden="true" />,
  },
  {
    id: 2,
    title: "تلگرام",
    href: "https://t.me/+989122268806",
    icon: <LuSend aria-hidden="true" />,
  },
  {
    id: 3,
    title: "واتساپ",
    href: "https://wa.me/989122268806",
    icon: <LuMessageCircle aria-hidden="true" />,
  },
];

export default function SocialMedia() {
  return (
    <div className={styles.social}>
      {socialLinks
        .filter((item) => item.href.trim() !== "")
        .map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
          >
            {item.icon}
          </a>
        ))}
    </div>
  );
}
