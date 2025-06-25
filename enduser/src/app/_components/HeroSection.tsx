"use client";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect } from "react";
import Lenis from "lenis";
import { iconsHero } from "@/constant/icons";
const HeroSection = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-32 px-5 md:px-10">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                alt="logo"
                className="h-16"
              />
            </div>
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl font-bold tracking-tight text-pretty sm:text-3xl md:text-4xl lg:text-5xl">
                Match the Mood of Any Photo with{" "}
                <span className="text-primary">ColorSync</span>
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground/80 text-sm sm:text-base md:text-lg lg:text-xl lg:!leading-8">
                Upload a photo and a reference image — we'll automatically adjust the colors of your photo to match the tone and style of your reference. Perfect for photographers, designers, and content creators.
              </p>
            </div>
            <div className="mt-4 md:mt-6 flex justify-center gap-3">
              <Button size={"md"} className="shadow-sm transition-all hover:scale-105 duration-300 hover:shadow px-8">
                Get Started
              </Button>
              <Button size={"md"} variant="outline" className="group transition-all hover:scale-105 duration-300 shadow-sm border-primary border-[2px]">
                Learn more{" "}
                <ExternalLink className="ml-1 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            <div className="mt-20 flex flex-col items-center gap-5">
              <p className="font-medium text-muted-foreground lg:text-left">
                Built with open-source technologies
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {
                  iconsHero.map((icon, idx) => (
                    <a
                    key={`${icon.alt}-${idx}`}
                      href="#"
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "group flex aspect-square h-12 md:h-16 items-center justify-center p-0",
                      )}
                    >
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="h-6 md:h-8 saturate-0 transition-all group-hover:saturate-100"
                      />
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection
