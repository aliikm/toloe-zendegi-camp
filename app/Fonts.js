import localFont from "next/font/local";

export const vazir = localFont({
  src: [
    {
      path: "../fonts/Vazir.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Vazir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Vazir-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
});
