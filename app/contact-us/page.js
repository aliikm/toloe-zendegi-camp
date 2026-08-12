import ContactPage from "../../components/module/contact/ContactPage";

export const metadata = {
  title: "تماس با ما | کمپ ترک اعتیاد طلوع زندگی",

  description:
    "برای دریافت مشاوره، اطلاع از شرایط پذیرش و کسب اطلاعات بیشتر درباره کمپ طلوع زندگی با ما در تماس باشید.",

  keywords: [
    "تماس با کمپ طلوع زندگی",
    "تماس کمپ ترک اعتیاد",
    "مشاوره ترک اعتیاد",
    "پذیرش کمپ ترک اعتیاد",
    "کمپ ترک اعتیاد طلوع زندگی",
  ],

  openGraph: {
    title: "تماس با کمپ ترک اعتیاد طلوع زندگی",
    description:
      "برای دریافت مشاوره و اطلاع از شرایط پذیرش با کمپ طلوع زندگی در تماس باشید.",
    type: "website",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
