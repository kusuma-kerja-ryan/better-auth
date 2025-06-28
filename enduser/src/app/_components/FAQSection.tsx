import TextMask from "@/components/animate/TextMask";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const heading = "Frequently asked questions"
const items = [
  {
    question: "What kind of photography do you offer?",
    answer:
      "I specialize in capturing authentic moments — from portraits and events to editorial and lifestyle sessions, all with a storytelling approach.",
  },
  {
    question: "Do I need experience in front of the camera?",
    answer:
      "Not at all. I guide you through everything — from posing to choosing locations and outfits — so you feel comfortable and confident during the shoot.",
  },
  {
    question: "Will I get to preview the photos before final delivery?",
    answer:
      "Yes! You'll receive a gallery of previews to select your favorite shots before I apply the final edits and deliver the high-resolution files.",
  },
  {
    question: "How is your editing different from filters or presets?",
    answer:
      "Every image is edited manually with care — tailored to lighting, skin tones, and the overall mood of your shoot. No one-click presets here.",
  },
];


const Faq1 = () => {
  return (
    <section className="py-20 md:py-52">
      <div className="container max-w-3xl mx-auto space-y-8 md:space-y-16 px-8 md:px-10">
        <TextMask phrases={[heading]} className="text-2xl font-semibold md:text-4xl text-center uppercase max-w-[80%] md:max-w-full mx-auto"/>
        <Accordion type="single" collapsible className="px-6">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base md:text-xl font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="ml-2 text-muted-foreground/70 !leading-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq1 };
