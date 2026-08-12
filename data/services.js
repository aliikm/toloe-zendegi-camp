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
    image: "/images/services/service-1.jpg",
    icon: LuTrees,
  },

  {
    id: 2,
    title: "درمان گروهی",
    description:
      "جلسات گروهی با حضور درمانگران و افراد در مسیر بهبودی برای افزایش انگیزه.",
    image: "/images/services/service-2.jpg",
    icon: LuUsers,
  },

  {
    id: 3,
    title: "مشاوره خانواده",
    description:
      "آموزش و همراهی خانواده در تمام مراحل درمان و بازگشت به زندگی سالم.",
    image: "/images/services/service-3.jpg",
    icon: LuMessagesSquare,
  },

  {
    id: 4,
    title: "پیشگیری و بازتوانی",
    description:
      "پیگیری وضعیت افراد پس از درمان برای جلوگیری از بازگشت اعتیاد.",
    image: "/images/services/service-4.jpg",
    icon: LuShieldCheck,
  },
];
