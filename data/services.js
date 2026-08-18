import {
  LuTrees,
  LuUsers,
  LuMessagesSquare,
  LuShieldCheck,
} from "react-icons/lu";

export const services = [
  {
    id: 1,
    title: "درمان انفرادی",
    description:
      "برنامه درمانی اختصاصی متناسب با شرایط هر فرد برای رسیدن به بهبودی پایدار.",
    image: "/image/individual-therapy.jpg",
    icon: LuTrees,
  },

  {
    id: 2,
    title: "درمان گروهی",
    description:
      "جلسات گروهی با حضور درمانگران و افراد در مسیر بهبودی برای افزایش انگیزه.",
    image: "/image/group-therapy.jpg",
    icon: LuUsers,
  },

  {
    id: 3,
    title: "مشاوره خانواده",
    description:
      "آموزش و همراهی خانواده در تمام مراحل درمان و بازگشت به زندگی سالم.",
    image: "/image/prevention-recovery.jpg",
    icon: LuMessagesSquare,
  },

  {
    id: 4,
    title: "پیشگیری و بازتوانی",
    description:
      "پیگیری وضعیت افراد پس از درمان برای جلوگیری از بازگشت اعتیاد.",
    image: "/image/rehabilitation-wellbeing.jpg",
    icon: LuShieldCheck,
  },
];
