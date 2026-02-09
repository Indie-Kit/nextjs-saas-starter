import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this starter kit free?",
    answer:
      "Yes, this basic starter kit is completely free and open source. You can use it for personal or commercial projects.",
  },
  {
    question: "What is the difference between Starter and Pro?",
    answer:
      "The Starter kit gives you the essential foundation (Auth, DB, Payments). The Pro version includes advanced features like an Admin Dashboard, Blog System, Email Templates, User Impersonation, and much more to save you weeks of development time.",
  },
  {
    question: "Can I self-host this?",
    answer:
      "Absolutely. Since there's no vendor lock-in, you can deploy this to Vercel, Railway, or any VPS that supports Node.js.",
  },
  {
    question: "How do I deploy?",
    answer:
      "We have comprehensive documentation on deployment. Check out https://docs.indiekit.pro/deployment for step-by-step guides.",
  },
];

export default function FAQs() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Common questions about the starter kit.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
