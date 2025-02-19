import FAQSection from "@/components/home/FAQ";
import HeroSection from "@/components/home/Hero";
import VirtualOffice from "@/components/home/VirtualOffice";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="text-yellow-900">
      <HeroSection/>
      <VirtualOffice/>
      <WhyChooseUs/>
      <FAQSection/>
    </div>
  );
}
