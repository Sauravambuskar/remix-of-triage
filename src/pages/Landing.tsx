import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import testimonialAvatarAsset from "@/assets/testimonial-avatar.jpg.asset.json";
import { useTheme } from "next-themes";
import { useEffect } from "react";

import { StackedLogo } from "@/components/StackedLogo";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import SaleBridgeHero from "@/components/ui/ethereal-beams-hero";

/** Apply slate accent on mount */
const SLATE_HSL = "215 16% 47%";
const SLATE_DARK = "215 14% 55%";

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
      {/* Services */}
      <section id="services" className="relative z-10 pt-24 pb-24 px-6 overflow-hidden">
        <div className="mx-auto max-w-[1200px] relative">
          <p className="text-[13px] uppercase tracking-[0.15em] text-muted-foreground mb-4">
            What we do
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-[500] tracking-[-0.03em] text-foreground max-w-[620px] leading-[1.15]">
            Five services.<br />One partner for growth.
          </h2>

          <div className="mt-16 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  no: "01",
                  title: "Website Development",
                  desc: "High-performance websites and web apps engineered for speed, scale and conversion.",
                },
                {
                  no: "02",
                  title: "SEO Services",
                  desc: "Technical SEO, on-page optimization and authority building that compounds month over month.",
                },
                {
                  no: "03",
                  title: "Content Marketing",
                  desc: "Editorial-grade content strategy, writing and distribution that earns trust and traffic.",
                },
                {
                  no: "04",
                  title: "Branding & Marketing",
                  desc: "Identity systems, messaging and campaigns that make your brand impossible to ignore.",
                },
                {
                  no: "05",
                  title: "Demand Generation",
                  desc: "Multi-channel funnels, paid media and lifecycle programs that produce qualified pipeline.",
                },
                {
                  no: "06",
                  title: "End-to-end Partnership",
                  desc: "One team across strategy, design, engineering and growth — moving in lockstep with yours.",
                },
              ].map((f, i) => (
                <div
                  key={f.title}
                  className={`p-8 border-border ${i % 3 !== 2 ? "lg:border-r" : ""} ${i % 2 === 0 ? "md:border-r lg:border-r" : "md:border-r-0"} ${i >= 1 ? "border-t md:border-t" : ""} ${i < 3 ? "lg:border-t-0" : "lg:border-t"}`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
                    {f.no}
                  </p>
                  <h3 className="text-[17px] font-medium text-foreground mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-[13px] leading-[1.6] text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width divider */}
      <div className="relative z-10 w-full border-t border-border" />

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

      {/* Footer */}
      <div className="relative z-10 border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 -ml-0.5">
            <StackedLogo size={16} />
            <span className="text-[12px] font-bold text-foreground uppercase tracking-[0.08em]">Triage</span>
          </div>
          <span className="text-[12px] text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
