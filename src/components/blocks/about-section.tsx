// No generic lucide icons needed here

const stats = [
  { value: "50+", label: "Brands Scaled" },
  { value: "12+", label: "Countries Reached" },
  { value: "3x", label: "Avg. ROI Growth" },
  { value: "100%", label: "In-House Talent" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 md:py-32 px-6 overflow-hidden border-t border-border">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
          alt="Team Collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column - Heading & Intro */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
              About Salesbridge
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-[500] tracking-[-0.035em] text-foreground leading-[1.05]">
              We don't just build websites.
              <br />
              <span className="text-muted-foreground">We build revenue engines.</span>
            </h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-foreground/80 mt-4">
              Welcome to Salesbridge, where creativity meets strategy to bring your vision to life. We are a full-stack digital agency passionate about transforming ideas into compelling visual and digital experiences.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[13px] uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10 lg:pt-16">
            <div className="flex gap-6 group">
              <div className="mt-1 h-14 w-14 shrink-0 rounded-2xl border border-primary/20 bg-primary/10 flex items-center justify-center">
                <img 
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.gif" 
                  alt="Target" 
                  className="h-10 w-10 object-contain opacity-90 transition-transform duration-300 group-hover:scale-110 drop-shadow-md" 
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-foreground">Strategic Precision</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  We specialize in crafting unique brand identities and digital strategies that resonate with your specific audience. Every decision is data-backed and goal-oriented.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="mt-1 h-14 w-14 shrink-0 rounded-2xl border border-primary/20 bg-primary/10 flex items-center justify-center">
                <img 
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif" 
                  alt="Idea" 
                  className="h-10 w-10 object-contain opacity-90 transition-transform duration-300 group-hover:scale-110 drop-shadow-md" 
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-foreground">Immersive Experiences</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  We believe in the power of design to tell stories and evoke emotions. Our development and creative teams work in lockstep to build interfaces that are impossible to ignore.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="mt-1 h-14 w-14 shrink-0 rounded-2xl border border-primary/20 bg-primary/10 flex items-center justify-center">
                <img 
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4c8/512.gif" 
                  alt="Growth" 
                  className="h-10 w-10 object-contain opacity-90 transition-transform duration-300 group-hover:scale-110 drop-shadow-md" 
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-foreground">Growth Focused</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  We empower businesses to stand out in a crowded market. Quality over quantity is our mantra, ensuring that the traffic we drive translates directly into qualified pipeline.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="mt-1 h-14 w-14 shrink-0 rounded-2xl border border-primary/20 bg-primary/10 flex items-center justify-center">
                <img 
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f91d/512.gif" 
                  alt="Partnership" 
                  className="h-10 w-10 object-contain opacity-90 transition-transform duration-300 group-hover:scale-110 drop-shadow-md" 
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-foreground">True Partnership</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Unlike traditional agencies that silo strategy, design, and execution, we operate as a single integrated team. We move as fast as you do.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
