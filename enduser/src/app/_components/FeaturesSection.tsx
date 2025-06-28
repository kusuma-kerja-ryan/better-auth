import {
  Code,
  Play,
  Lock,
  Wand2
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  locked?: boolean;
}

export const FeatureCard = ({ icon, title, description, image, locked }: FeatureCardProps) => {
  return (
    <Card className={locked ? "opacity-50 cursor-not-allowed" : "group hover:md:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"}>
      <CardHeader className="pb-1 flex items-center gap-2">
        {locked ? <Lock className="size-4 text-muted-foreground" /> : icon}
        {locked && <span className="text-xs text-muted-foreground">Coming soon</span>}
      </CardHeader>
      <CardContent className="text-left">
        <h3 className="mb-1 text-lg font-semibold group-hover:text-primary transition-colors duration-500">{title}</h3>
        <p className="leading-snug text-muted-foreground/70 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="justify-end pr-0 pb-0">
        <Image
          className="h-40 w-full rounded-tl-md object-cover object-center"
          src={image}
          width={500}
          height={500}
          alt={title}
        />
      </CardFooter>
    </Card>
  );
};


const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-5 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-pretty lg:text-4xl">
              Unlock the Power of <span className="font-bold text-primary">Smart Features</span>
            </h2>
            <p className="text-muted-foreground/70 text-center max-w-2xl mx-auto">
              Discover available tools to enhance your workflow. More features coming soon.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Code className="size-4" strokeWidth={1} />}
              title="Custom Code Editor"
              description="Write and edit code with smart color correction suggestions."
              image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            />

            <FeatureCard
              icon={<Play className="size-4" strokeWidth={1} />}
              title="Live Preview"
              description="Preview your color-graded image in real time."
              image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            />

            <FeatureCard
              icon={<Wand2 className="size-4" strokeWidth={1} />}
              title="AI Color Match"
              description="Automatically match the style and tone of your reference image."
              image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              locked
            />

            <FeatureCard
              icon={<Wand2 className="size-4" strokeWidth={1} />}
              title="Batch Grading"
              description="Apply consistent color grading across multiple photos at once."
              image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              locked
            />

            <FeatureCard
              icon={<Wand2 className="size-4" strokeWidth={1} />}
              title="Style Transfer"
              description="Transfer visual style from one image to another using AI."
              image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              locked
            />

            <FeatureCard
              icon={<Wand2 className="size-4" strokeWidth={1} />}
              title="Export Presets"
              description="Save and reuse your favorite color grading presets."
              image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              locked
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
