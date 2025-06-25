import { Contact2 } from "./_components/ContactUs";
import { Cta4 } from "./_components/CTASection";
import { Faq1 } from "./_components/FAQSection";
import FeaturesSection from "./_components/FeaturesSection";
import { Gallery6 } from "./_components/GalleriesSection";
import HeroSection from "./_components/HeroSection";
import { Pricing2 } from "./_components/PriceSection";

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection/>
      <Cta4/>
      <Gallery6/>
      <Contact2/>
      <Pricing2/>
      <Faq1/>
    </main>
  );
}