"use client";

import { CircleCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    id: "basic",
    name: "Basic",
    description: "Great for hobbyists and creators starting out",
    monthlyPrice: "$9",
    yearlyPrice: "$79",
    features: [
      { text: "Upload up to 10 images/month" },
      { text: "Basic AI color matching" },
      { text: "Access to 1 color style" },
      { text: "Standard output resolution" },
    ],
    button: {
      text: "Start Basic",
      url: "#",
    },
  },
  {
    id: "pro",
    name: "Pro",
    description: "Perfect for professionals and design teams",
    monthlyPrice: "$29",
    yearlyPrice: "$249",
    features: [
      { text: "Unlimited image uploads" },
      { text: "Advanced AI tone matching" },
      { text: "Multiple color style presets" },
      { text: "High-resolution export" },
      { text: "Priority email support" },
    ],
    button: {
      text: "Go Pro",
      url: "#",
    },
  },
];
const heading = "Pricing";
const description = "Check out our affordable pricing plans";

const Pricing2 = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="py-12 md:py-20 px-5 md:px-10" id="pricing">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-pretty lg:text-4xl">
              {heading}
            </h2>
            <p className="text-muted-foreground/70 text-sm md:text-base">{description}</p>
          </div>
          <div className="flex items-center gap-x-5 text-lg">
            <Button onClick={() => setIsYearly(false)} className={`hover:scale-105 hover:shadow-md duration-500 ${!isYearly ? "bg-primary" : "bg-white border-[1px] border-primary text-primary hover:bg-primary/20"}`}>
              Monthly
            </Button>
            <Button onClick={() => setIsYearly(true)} className={`hover:scale-105 hover:shadow-md duration-500 ${isYearly ? "bg-primary" : "bg-white border-[1px] border-primary text-primary hover:bg-primary/20"}`}>
              Yearly
            </Button>
          </div>
          <div className="flex flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className="flex w-80 flex-col justify-between text-left"
              >
                <CardHeader>
                  <CardTitle>
                    <p className="text-lg">{plan.name}</p>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-sm text-muted-foreground/70">
                      {plan.description}
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end">
                    <span className="text-4xl font-semibold">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-2xl font-semibold text-muted-foreground">
                      {isYearly ? "/yr" : "/mo"}
                    </span>
                  </div>
                  <Separator className="my-6" />
                  {plan.id === "pro" && (
                    <p className="mb-3 font-semibold">
                      Everything in Plus, and:
                    </p>
                  )}
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CircleCheck className="size-4" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full hover:scale-105 hover:shadow-md duration-300">
                    <a href={plan.button.url} target="_blank">
                      {plan.button.text}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing2 };
