import {
  LuUserRound,
  LuUsersRound,
  LuHeartHandshake,
  LuShieldCheck,
} from "react-icons/lu";

export const services = [
  {
    id: 1,
    title: "درمان فردی",
    description:
      "بررسی شرایط هر فرد و همراهی در مسیر درمان با توجه به نیازها و شرایط اختصاصی او.",
    image: "/image/individual-therapy.jpg",
    icon: LuUserRound,
  },

  {
    id: 2,
    title: "درمان گروهی",
    description:
      "جلسات گروهی و فعالیت‌های حمایتی برای تقویت انگیزه، مسئولیت‌پذیری و همراهی در مسیر بهبودی.",
    image: "/image/group-therapy.jpg",
    icon: LuUsersRound,
  },

  {
    id: 3,
    title: "حمایت و مشاوره خانواده",
    description:
      "آموزش و همراهی خانواده برای شناخت بهتر فرایند درمان و حمایت مؤثر از فرد در مسیر بهبودی.",
    image: "/image/individual-therapy.jpg",
    icon: LuHeartHandshake,
  },

  {
    id: 4,
    title: "بازتوانی و پیشگیری از بازگشت",
    description:
      "تمرکز بر بازگشت تدریجی به زندگی سالم و تقویت مهارت‌های لازم برای ادامه مسیر پس از درمان.",
    image: "/image/rehabilitation-wellbeing.jpg",
    icon: LuShieldCheck,
  },
];
