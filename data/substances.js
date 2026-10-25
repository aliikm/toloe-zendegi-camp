import {
  LuBrain,
  LuLeaf,
  LuFlaskConical,
  LuPill,
  LuCircleAlert,
  LuSparkles,
  LuMoon,
  LuActivity,
  LuHeartPulse,
} from "react-icons/lu";

export const substances = [
  {
    id: "lsd",
    name: "LSD",
    persianName: "ال‌اس‌دی",
    category: "ماده روان‌گردان",
    description:
      "ال‌اس‌دی ماده‌ای روان‌گردان است که می‌تواند ادراک، خلق و تجربه حسی فرد را به‌طور قابل‌توجهی تغییر دهد.",
    icon: LuBrain,
  },

  {
    id: "chemical",
    name: "Chemical",
    persianName: "کمیکال",
    category: "نام عامیانه",
    description:
      "کمیکال نامی عامیانه برای برخی ترکیبات ناشناخته یا ترکیبی است و ماهیت دقیق آن می‌تواند متفاوت باشد؛ شناسایی ماده نیازمند بررسی تخصصی است.",
    icon: LuFlaskConical,
  },

  {
    id: "marijuana",
    name: "Marijuana",
    persianName: "ماری‌جوانا",
    category: "ماده روان‌گردان",
    description:
      "ماری‌جوانا می‌تواند بر ادراک، حافظه، تمرکز و عملکرد روزمره اثر بگذارد و در برخی افراد به مصرف مشکل‌ساز و وابستگی منجر شود.",
    icon: LuLeaf,
  },

  {
    id: "cocaine",
    name: "Cocaine",
    persianName: "کوکائین",
    category: "ماده محرک",
    description:
      "کوکائین ماده‌ای محرک است که بر سیستم عصبی و قلبی‌عروقی اثر می‌گذارد و مصرف آن می‌تواند با خطر وابستگی و پیامدهای جسمی و روانی همراه باشد.",
    icon: LuActivity,
  },

  {
    id: "od-base",
    name: "O.D. Base",
    persianName: "او دی بیس",
    category: "نام عامیانه",
    description:
      "او دی بیس نامی عامیانه است که ممکن است برای ترکیبات متفاوت به کار رود؛ به همین دلیل تشخیص دقیق ماده و میزان خطر آن نیازمند بررسی تخصصی است.",
    icon: LuCircleAlert,
  },

  {
    id: "pregabalin",
    name: "Pregabalin",
    persianName: "پراگابالین",
    category: "داروی قابل سوءمصرف",
    description:
      "پراگابالین یک داروی پزشکی است و مصرف خودسرانه یا سوءمصرف آن می‌تواند با عوارض و خطرات جسمی و روانی همراه باشد.",
    icon: LuPill,
  },

  {
    id: "mushroom",
    name: "Magic Mushroom",
    persianName: "ماشروم",
    category: "ماده روان‌گردان",
    description:
      "برخی قارچ‌های روان‌گردان حاوی ترکیباتی هستند که می‌توانند ادراک، خلق و وضعیت روانی فرد را تغییر دهند.",
    icon: LuMoon,
  },

  {
    id: "ketamine",
    name: "Ketamine",
    persianName: "کتامین",
    category: "ماده با کاربرد پزشکی",
    description:
      "کتامین کاربردهای پزشکی دارد، اما مصرف غیرپزشکی آن می‌تواند با تغییرات قابل‌توجه در ادراک و وضعیت روانی همراه باشد.",
    icon: LuActivity,
  },

  {
    id: "mdma",
    name: "MDMA / Ecstasy",
    persianName: "ام‌دی‌ام‌ای / اکستازی",
    category: "محرک و روان‌گردان",
    description:
      "MDMA که با نام اکستازی نیز شناخته می‌شود، می‌تواند بر خلق، ادراک و سیستم عصبی اثر بگذارد و مصرف آن با خطرات جسمی و روانی همراه است.",
    icon: LuSparkles,
  },

  {
    id: "new-substances",
    name: "New Psychoactive Substances",
    persianName: "مواد و ترکیبات جدید و ناشناخته",
    category: "هشدار",
    description:
      "ترکیبات جدید با نام یا ترکیب شیمیایی نامشخص می‌توانند به دلیل ناشناخته بودن محتوا و میزان ماده مؤثر، خطرات پیش‌بینی‌نشده‌ای داشته باشند.",
    icon: LuHeartPulse,
  },
];
