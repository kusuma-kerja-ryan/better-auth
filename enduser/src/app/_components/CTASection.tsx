import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const items = [
  "Match photo tones effortlessly",
  "AI-powered color analysis",
  "Real-time preview available",
  "Upload and compare multiple images",
  "No design skills required",
];

const CtaData: CtaProps = {
  title: "Bring Color Consistency to Every Project",
  description: "Match the tone and mood of your photos instantly with the power of AI.",
  buttonText: "Try It Now",
  buttonUrl: "https://shadcnblocks.com",
};


const Cta4 = () => {
  const { title, description, buttonText, buttonUrl } = CtaData;
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex justify-center">
          <div className="max-w-5xl">
            <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
              <div className="md:w-1/2">
                <h4 className="text-2xl font-bold md:text-3xl">{title}</h4>
                <p className="mt-4 text-muted-foreground/70 text-sm md:text-base">{description}</p>
                <Button size="md" className="mt-6 hover:scale-105 hover:shadow-lg duration-500" asChild>
                  <a href={buttonUrl} target="_blank">
                    {buttonText} <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="md:w-1/3">
                <ul className="flex flex-col space-y-3 h-full text-sm font-medium">
                  {items.map((item, idx) => (
                    <li className="flex items-center" key={idx}>
                      <Check className="mr-4 size-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta4 };
