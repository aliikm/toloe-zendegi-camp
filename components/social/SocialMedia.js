import { LuInstagram, LuSend, LuMessageCircle } from "react-icons/lu";
import styles from "../../app/styles/socialmedia.module.css";
export default function SocialMedia() {
  const socialLinks = [
    {
      id: 1,
      title: "Instagram",
      href: "https://instagram.com",
      icon: <LuInstagram />,
    },

    {
      id: 2,
      title: "Telegram",
      href: "https://telegram.org",
      icon: <LuSend />,
    },

    {
      id: 3,
      title: "WhatsApp",
      href: "https://wa.me/982112345678",
      icon: <LuMessageCircle />,
    },
  ];

  return (
    <div className={styles.social}>
      {socialLinks.map((item) => (
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
