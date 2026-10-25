import {
  LuUserRound,
  LuUsersRound,
  LuHeartHandshake,
  LuShieldCheck,
} from "react-icons/lu";

export const services = [
  {
    id: 1,
    title: "درمان فردی اعتیاد",
    description:
      "بررسی شرایط و نیازهای هر فرد و ارائه همراهی و حمایت متناسب با وضعیت او در مسیر درمان اعتیاد و بهبودی.",
    image: "/image/individual-therapy.jpg",
    icon: LuUserRound,
  },

  {
    id: 2,
    title: "درمان و جلسات گروهی",
    description:
      "برگزاری جلسات و فعالیت‌های گروهی با هدف افزایش انگیزه، تقویت مسئولیت‌پذیری و ایجاد حمایت اجتماعی در مسیر بهبودی.",
    image: "/image/group-therapy.jpg",
    icon: LuUsersRound,
  },

  {
    id: 3,
    title: "مشاوره و حمایت خانواده",
    description:
      "آموزش و همراهی خانواده برای شناخت بهتر فرایند درمان اعتیاد و ایجاد حمایت مؤثرتر از فرد در طول مسیر بهبودی.",
    image: "/image/individual-therapy.jpg",
    icon: LuHeartHandshake,
  },

  {
    id: 4,
    title: "بازتوانی و پیشگیری از بازگشت",
    description:
      "تقویت مهارت‌های فردی و اجتماعی برای بازگشت تدریجی به زندگی سالم و ادامه مسیر بهبودی پس از دوره درمان.",
    image: "/image/rehabilitation-wellbeing.jpg",
    icon: LuShieldCheck,
  },
];
