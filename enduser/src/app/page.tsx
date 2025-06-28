import TextParallax from "@/components/animate/TextParallax";
import { Contact2 } from "./_components/ContactUs";
// import { Cta4 } from "./_components/CTASection";
import { Faq1 } from "./_components/FAQSection";
// import FeaturesSection from "./_components/FeaturesSection";
import HeroSection from "./_components/HeroSection";
// import { Pricing2 } from "./_components/PriceSection";
// import TextMask from "../components/layout/animate/TextMask";
import EmblaCarousel from "@/components/animate/RunningCarousel";
import ParallaxGalleries from "@/components/animate/ParallaxGalleries";


import {
    assetPhotography13,
    assetPhotography14,
    assetPhotography15,
    assetPhotography16,
    assetPhotography17,
    assetPhotography18,
    assetPhotography19,
    assetPhotography20,
    assetPhotography21,
    assetPhotography22,
} from "@/assets/webp"
import ZoomParallax from "@/components/animate/ZoomParallax";

const textParallax = [
  "Capturing Emotions",
  "Telling Stories Through Light",
  "Every Frame Has a Soul",
  "Moments That Matter",
  "Portraits With Purpose",
  "Light. Mood. Composition.",
  "Candid and Real",
  "Elegant & Timeless Shots",
  "Documenting Life Beautifully",
  "Framing Honest Emotions",
  "Your Story, Visually Told",
  "Natural Light Magic",
  "Artistry in Every Click",
  "Photography That Connects",
];

const slides = [
  assetPhotography13,
  assetPhotography14,
  assetPhotography15,
  assetPhotography16,
  assetPhotography17,
  assetPhotography18,
  assetPhotography19,
  assetPhotography20,
  assetPhotography21,
  assetPhotography22,
]

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      {/* <FeaturesSection /> */}
      <ZoomParallax/>
      <TextParallax pharases={textParallax}/>
      {/* <Cta4 /> */}
      {/* <Gallery6 /> */}
      {/* <TextParallax /> */}
      <div className='py-6 md:py-32 w-full flex flex-col justify-center items-center gap-7'>
        <EmblaCarousel side='right' slides={slides.slice(0, 5)} />
        <EmblaCarousel side='left' slides={slides.slice(5, 10)} />
      </div>
      <Contact2 />
      <ParallaxGalleries/>
      {/* <Pricing2 /> */}
      <Faq1 />
    </main>
  );
}