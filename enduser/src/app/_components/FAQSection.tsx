import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const heading = "Frequently asked questions"
const items = [
  {
    question: "What does this app do?",
    answer:
      "This app lets you match the color tone of one photo to another automatically using AI. Simply upload a source and a reference image.",
  },
  {
    question: "Do I need editing experience to use it?",
    answer:
      "Not at all. The interface is simple, and the AI handles the color matching for you — perfect for beginners and professionals alike.",
  },
  {
    question: "Can I preview the results before downloading?",
    answer:
      "Yes! You can see a real-time preview of the color-graded image before saving or exporting it.",
  },
  {
    question: "How is this different from filters or presets?",
    answer:
      "Instead of fixed filters, this app analyzes your reference image and applies color adjustments tailored specifically to your original photo — giving you a more accurate match.",
  },
];


const Faq1 = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container max-w-3xl mx-auto space-y-4 md:space-y-11">
        <h1 className="text-3xl font-semibold md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
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
