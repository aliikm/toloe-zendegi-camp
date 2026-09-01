import Hero from "@/components/module/section/Hero";
import TreatmentContainer from "@/components/module/treatment-describe/TreatmentContainer";
import DescribeUsSection from "@/components/module/describ-section/DescribeUsSection";
import CampDetails from "@/components/module/camp-details/CampDetails";
import PlanTreatmentContainer from "@/components/module/plan-treatment/PlanTreatmentContainer";
import AcceptanceSection from "@/components/module/accepatance/AcceptanceSection";
import Banner from "@/components/module/banner/Banner";
import NewSubstancesSection from "@/components/module/substances/NewSubstancesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TreatmentContainer />
      <NewSubstancesSection />
      <AcceptanceSection />
      <DescribeUsSection />
      <CampDetails />
      <Banner />
      <PlanTreatmentContainer />
    </>
  );
}
