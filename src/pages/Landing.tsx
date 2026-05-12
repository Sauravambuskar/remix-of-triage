import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import testimonialAvatarAsset from "@/assets/testimonial-avatar.jpg.asset.json";
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
  const diagonalLineColor = isDark ? "hsl(240 4% 26%" : "hsl(240 4% 80%";

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

      {/* Why Salesbridge — Features Grid */}
      <Features />

      {/* Social proof */}
      <section className="relative z-10 py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              ${diagonalLineColor} / 0.55) 0px,
              ${diagonalLineColor} / 0.55) 1px,
              transparent 1px,
              transparent 8px
            )`,
            backgroundSize: "100% 100%",
          }}
        />
        <div className="mx-auto max-w-[1200px] relative">
          <div className="border border-border bg-background p-10 max-w-[720px] mx-auto">
            <blockquote className="text-[20px] font-[400] leading-[1.5] tracking-[-0.01em] text-foreground/85">
              "Ussmai rebuilt our site, fixed our SEO and ran our launch campaign — organic traffic tripled in 90 days and inbound leads finally became predictable."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <img src={testimonialAvatarAsset.url} alt="Jamie Kim" className="h-8 w-8 rounded-full object-cover" />
              <div>
                <span className="text-[13px] font-medium text-foreground">Jamie Kim</span>
                <span className="text-[13px] text-muted-foreground ml-2">Head of Growth, Acme Corp</span>
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
            <Link to="/auth">
              <button
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 text-[15px] font-medium transition-all duration-200 border border-foreground/40 text-foreground hover:bg-foreground hover:text-background hover:border-foreground"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
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
