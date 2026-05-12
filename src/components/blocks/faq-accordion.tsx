import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    id: "01",
    title: "What services does Salesbridge offer?",
    content:
      "Salesbridge offers a comprehensive suite of digital growth services including website development, SEO, content marketing, branding & marketing, demand generation, and end-to-end strategic partnerships. We work as an extension of your team to deliver measurable results.",
  },
  {
    id: "02",
    title: "How long does it take to see results from SEO?",
    content:
      "SEO is a compounding investment. Most clients begin seeing meaningful organic traffic improvements within 3–6 months, with significant pipeline impact typically visible within 6–12 months. Our technical-first approach accelerates this timeline compared to traditional agencies.",
  },
  {
    id: "03",
    title: "Do you work with early-stage startups or only established businesses?",
    content:
      "We work with both. For early-stage startups, we help establish brand identity, launch high-converting websites, and build the content foundation needed for long-term growth. For established businesses, we layer on advanced SEO, paid media, and full-funnel demand generation programs.",
  },
  {
    id: "04",
    title: "What makes Salesbridge different from other digital agencies?",
    content:
      "Unlike traditional agencies that silo strategy, design, and execution, Salesbridge operates as a single integrated team. We combine editorial thinking with engineering precision — every website we build, campaign we run, and piece of content we create is designed to drive revenue, not just vanity metrics.",
  },
  {
    id: "05",
    title: "How do you measure success for your clients?",
    content:
      "We track metrics that matter to your business — qualified inbound leads, organic traffic growth, conversion rate improvements, and revenue attribution. Every engagement starts with a clear baseline and defined KPIs so you always know exactly what you're getting.",
  },
  {
    id: "06",
    title: "Can I start with just one service and expand later?",
    content:
      "Absolutely. Many clients start with a website redesign or an SEO audit and expand into content marketing and demand generation as they see results. Our modular approach means you can start lean and scale up when ready.",
  },
  {
    id: "07",
    title: "How do I get started with Salesbridge?",
    content:
      "Simply click 'Start a project' and tell us about your brand, goals, and timeline. Our team will review your brief and come back with a tailored plan within 48 hours — no lengthy discovery calls required to get the conversation started.",
  },
];

export function FaqAccordion() {
  return (
    <section className="relative z-10 py-24 px-6 bg-background">
      <div className="mx-auto max-w-[860px]">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
            FAQ
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-[500] tracking-[-0.035em] text-foreground leading-[1.1]">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground max-w-[480px] mx-auto">
            Everything you need to know about working with Salesbridge.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" defaultValue="01" collapsible className="w-full space-y-3">
          {faqs.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-border rounded-xl overflow-hidden last:border"
            >
              <AccordionTrigger className="group w-full hover:no-underline px-0 py-0">
                <div className="flex w-full items-center justify-between gap-4 px-6 py-5 bg-muted/40 hover:bg-muted/60 transition-colors duration-200 data-[state=open]:bg-primary/5">
                  <span className="text-[16px] md:text-[18px] font-medium text-foreground text-left leading-snug">
                    {item.title}
                  </span>
                  <div className="relative shrink-0 h-6 w-6">
                    <Plus
                      className={cn(
                        "absolute inset-0 h-6 w-6 text-muted-foreground transition-all duration-300",
                        "group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90"
                      )}
                    />
                    <X
                      className={cn(
                        "absolute inset-0 h-6 w-6 text-primary transition-all duration-300",
                        "opacity-0 -rotate-90",
                        "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0"
                      )}
                    />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-6 py-5 text-[14px] md:text-[15px] leading-relaxed text-muted-foreground border-t border-border">
                  {item.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
