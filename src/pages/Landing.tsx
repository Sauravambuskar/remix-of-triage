import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

import { StackedLogo } from "@/components/StackedLogo";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import SaleBridgeHero from "@/components/ui/ethereal-beams-hero";
import { Footer } from "@/components/Footer";
import { Gallery4 } from "@/components/blocks/gallery4";
import { ClientsSection } from "@/components/blocks/clients-section";
import { FaqAccordion } from "@/components/blocks/faq-accordion";
import { Features } from "@/components/blocks/features-9";
import { AboutSection } from "@/components/blocks/about-section";

/** Apply slate accent on mount */
const SLATE_HSL = "215 16% 47%";
const SLATE_DARK = "215 14% 55%";

const servicesData = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "High-performance websites and web apps engineered for speed, scale and conversion.",
    href: "#contact",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIlaumuE0fW0b2LvpBs2oaCIC7wO0MGFalyg&s",
  },
  {
    id: "seo",
    title: "SEO Services",
    description: "Technical SEO, on-page optimization and authority building that compounds month over month.",
    href: "#contact",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0yThmTRK0P2A5McR9g7cg0a0nNqRl1shMw&s",
  },
  {
    id: "content",
    title: "Content Marketing",
    description: "Editorial-grade content strategy, writing and distribution that earns trust and traffic.",
    href: "#contact",
    image: "https://wittypen.com/blog/wp-content/uploads/2022/10/Content-marketing-tools-1.jpg",
  },
  {
    id: "branding",
    title: "Branding & Marketing",
    description: "Identity systems, messaging and campaigns that make your brand impossible to ignore.",
    href: "#contact",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsDZdmT__kd11ZV-fSV6HteeIPHASxAWPnw&s",
  },
  {
    id: "demand-gen",
    title: "Demand Generation",
    description: "Multi-channel funnels, paid media and lifecycle programs that produce qualified pipeline.",
    href: "#contact",
    image: "https://www.shutterstock.com/image-photo/demand-generation-strategies-shown-using-600nw-2552463863.jpg",
  },
  {
    id: "partnership",
    title: "End-to-end Partnership",
    description: "One team across strategy, design, engineering and growth — moving in lockstep with yours.",
    href: "#contact",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
];

const Landing = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";


  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    const hsl = isDark ? SLATE_DARK : SLATE_HSL;
    root.style.setProperty("--primary", hsl);
    root.style.setProperty("--ring", hsl);
    root.style.setProperty("--sidebar-primary", hsl);
    root.style.setProperty("--sidebar-ring", hsl);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero — Ethereal Beams */}
      <SaleBridgeHero />

      {/* Services */}
      <div className="relative z-10 overflow-hidden bg-background">
        <Gallery4 
          title="What we do" 
          description="Five services. One partner for growth."
          items={servicesData} 
        />
      </div>

      {/* Full-width divider */}
      <div className="relative z-10 w-full border-t border-border" />

      {/* About Us */}
      <AboutSection />

      {/* Full-width divider */}
      <div className="relative z-10 w-full border-t border-border" />

      {/* Why Salesbridge — Features Grid */}
      <Features />

      {/* Social proof — Testimonials */}
      <section className="relative z-10 py-20 md:py-28 px-6 bg-background overflow-hidden border-t border-border">
        <div className="mx-auto max-w-5xl">
          {/* Label + heading */}
          <div className="text-center mb-14">
            <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground mb-3">Client Stories</p>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-[500] tracking-[-0.035em] text-foreground leading-[1.1]">
              What our clients say
            </h2>
          </div>

          {/* Testimonial cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col gap-5 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-primary text-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <blockquote className="text-[14px] leading-relaxed text-foreground/80 flex-1">
                "Salesbridge completely transformed our online presence. Traffic grew 3× in 3 months and our leads became consistent for the first time."
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">R</div>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">Rahul Sharma</p>
                  <p className="text-[12px] text-muted-foreground">Founder, OSTREE</p>
                </div>
              </div>
            </div>

            {/* Card 2 — highlighted center */}
            <div className="flex flex-col gap-5 rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-medium px-3 py-0.5 rounded-full">
                Featured
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-primary text-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <blockquote className="text-[14px] leading-relaxed text-foreground/80 flex-1">
                "They rebuilt our site, sorted our SEO and ran our launch campaign — inbound leads became predictable and organic traffic is now our #1 channel."
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-primary/20">
                <div className="h-9 w-9 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-sm shrink-0">A</div>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">Amit Kulkarni</p>
                  <p className="text-[12px] text-muted-foreground">CEO, Advance FMS</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-5 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-primary text-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <blockquote className="text-[14px] leading-relaxed text-foreground/80 flex-1">
                "Professional, fast and results-driven. Salesbridge delivered our new platform on time and our patient inquiries doubled within 60 days."
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">P</div>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">Dr. Priya Limaye</p>
                  <p className="text-[12px] text-muted-foreground">Director, Limaye Eye Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width divider */}
      <div className="relative z-10 w-full border-t border-border" />

      {/* CTA */}
      <section id="contact" className="relative z-10 pt-32 pb-40 px-6 overflow-hidden">
        <div className="mx-auto max-w-[1200px] text-center relative">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-[500] tracking-[-0.035em] text-foreground leading-[1.1] mx-auto max-w-[620px]">
            Ready to build something worth talking about?
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground max-w-[440px] mx-auto">
            Tell us about your brand, your goals and your timeline.<br />We'll come back with a plan within 48 hours.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="mailto:contact@thesalesbridge.com">
              <button
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 text-[15px] font-medium transition-all duration-200 border border-foreground/40 text-foreground hover:bg-foreground hover:text-background hover:border-foreground"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <div id="work">
        <ProjectsShowcase />
      </div>

      {/* Full-width divider */}
      <div className="relative z-10 w-full border-t border-border" />

      {/* FAQ */}
      <FaqAccordion />

      {/* Clients — directly above footer */}
      <ClientsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
