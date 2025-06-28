"use client";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Lenis from "lenis";
import Image from "next/image";
import TextMask from "@/components/animate/TextMask";
const HeroSection = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
    });
    // Initialize Lenis

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-28 md:py-40 px-5 md:px-10">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <Image
          alt="background"
          fill
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90 w-full"
        />
      </div>
      <div className="relative z-10 container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <Image
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                alt="logo"
                width={500}
                height={500}
                className="h-16 w-fit"
              />
            </div>
            <div className="space-y-6 md:space-y-6">
              <h1 className="text-3xl font-bold tracking-tight text-pretty sm:text-4xl md:text-5xl lg:text-6xl">
                Capturing Emotions Through{" "}
                <span className="text-primary">Every Frame</span>
              </h1>
              {
                <>
                  <div className="hidden md:block">
                    <TextMask phrases={["I'm a freelance photographer passionate about storytelling through light,", "composition, and emotion. From candid moments to styled portraits, my work", " blends authenticity with a touch of artistry."]} className="text-muted-foreground/80 text-sm sm:text-base md:text-lg lg:text-xl lg:!leading-8" tag="p" />
                  </div>
                  <div className="md:hidden">
                    <TextMask phrases={["I'm a freelance photographer passionate about storytelling through light, composition, and emotion. From candid moments to styled portraits, my work blends authenticity with a touch of artistry."]} className="text-muted-foreground/80 text-sm sm:text-base md:text-lg lg:text-xl lg:!leading-8" tag="p" />
                  </div>
                </>
              }
            </div>
            <div className="mt-4 md:mt-6 flex justify-center gap-3">
              <Button size={"md"} className="shadow-sm transition-all hover:scale-105 duration-300 hover:shadow px-8">
                View Portfolio
              </Button>
              <Button
                onClick={() => {
                  const contactSection = document.getElementById("contact-us");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                size={"md"} variant="outline" className="group transition-all hover:scale-105 duration-300 shadow-sm border-primary border-[2px]">
                Contact Me{" "}
                <ExternalLink className="ml-1 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection
