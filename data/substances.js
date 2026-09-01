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
      "ماده‌ای روان‌گردان که می‌تواند ادراک، خلق و تجربه حسی فرد را به‌طور قابل‌توجهی تغییر دهد.",
    icon: LuBrain,
  },

  {
    id: "chemical",
    name: "Chemical",
    persianName: "کمیکال",
    category: "نام عامیانه",
    description:
      "نامی که در برخی موارد برای ترکیبات و مواد ناشناخته یا ترکیبی به کار می‌رود و ماهیت دقیق آن می‌تواند متفاوت باشد.",
    icon: LuFlaskConical,
  },

  {
    id: "marijuana",
    name: "Marijuana",
    persianName: "ماری‌جوانا",
    category: "ماده روان‌گردان",
    description:
      "مصرف ماری‌جوانا می‌تواند بر ادراک، حافظه، تمرکز و عملکرد روزمره فرد اثر بگذارد و در برخی افراد به مصرف مشکل‌ساز منجر شود.",
    icon: LuLeaf,
  },

  {
    id: "cocaine",
    name: "Cocaine",
    persianName: "کوکائین",
    category: "محرک",
    description:
      "ماده‌ای محرک که می‌تواند بر سیستم عصبی و قلبی‌عروقی اثر بگذارد و با خطر وابستگی و پیامدهای جسمی و روانی همراه باشد.",
    icon: LuActivity,
  },

  {
    id: "od-base",
    name: "O.D. Base",
    persianName: "او دی بیس",
    category: "نام عامیانه",
    description:
      "نامی عامیانه که ممکن است برای ترکیبات متفاوت به کار رود؛ تشخیص دقیق ماده و میزان خطر آن نیازمند بررسی تخصصی است.",
    icon: LuCircleAlert,
  },

  {
    id: "pregabalin",
    name: "Pregabalin",
    persianName: "پراگابالین",
    category: "داروی قابل سوءمصرف",
    description:
      "پراگابالین یک داروی پزشکی است که مصرف خودسرانه یا سوءمصرف آن می‌تواند با عوارض و خطرات جدی همراه باشد.",
    icon: LuPill,
  },

  {
    id: "mushroom",
    name: "Magic Mushroom",
    persianName: "ماشروم",
    category: "ماده روان‌گردان",
    description:
      "برخی گونه‌های قارچ حاوی ترکیبات روان‌گردان هستند که می‌توانند ادراک، خلق و وضعیت روانی فرد را تغییر دهند.",
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
    name: "مواد ناشناخته",
    persianName: "ترکیبات جدید و ناشناخته",
    category: "هشدار",
    description:
      "ترکیباتی با نام‌ها و ترکیب شیمیایی نامشخص که به دلیل ناشناخته بودن محتوا و دوز می‌توانند خطرات پیش‌بینی‌نشده‌ای داشته باشند.",
    icon: LuHeartPulse,
  },
];
