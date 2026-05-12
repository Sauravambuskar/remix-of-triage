import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  tag: string;
  url: string;
  image: string;
  desc?: string;
};

const featured: Project[] = [
  { title: "OSTREE", tag: "E-commerce", url: "https://ostree.in/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-324-1024x576.png", desc: "Scalable fashion platform with high availability" },
  { title: "SJA MICRO FINANCE", tag: "FinTech", url: "https://sjamicrofoundation.com/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-327-1024x576.png", desc: "Secure microfinance platform with reliable infrastructure" },
  { title: "STUDDY LMS", tag: "EdTech SaaS", url: "https://studdyy.vercel.app/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-332-1024x576.png", desc: "Learning platform used by 5000+ students" },
  { title: "ADVANCE FMS", tag: "Enterprise", url: "https://advancefms.in/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-326-1024x576.png", desc: "Facility management digital platform" },
  { title: "TRUVARA EXIM", tag: "Import/Export", url: "https://truvaraaexim.com/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-330-1024x576.png", desc: "Global trade platform improving visibility" },
  { title: "LIMAYE EYE CARE", tag: "Healthcare", url: "https://limayeeyehospital.com/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-338-1024x576.png", desc: "Patient-focused healthcare platform" },
];

const others: Project[] = [
  { title: "ADVANCED GROUP", tag: "Business", url: "https://theadvancedgroup.in/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-2026-01-06-135414-1024x576.png" },
  { title: "JYOTI CLEANING", tag: "Services", url: "https://jyotishine.vercel.app/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-331-1024x576.png" },
  { title: "TRIVENI GAURAKSHAN", tag: "NGO", url: "https://trivenigaurakshan.org/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-333.png" },
  { title: "DR B P DESHPANDE", tag: "Healthcare", url: "https://drbipindeshpande.com/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-334-1024x576.png" },
  { title: "ROYAL RESIDENCY", tag: "Hospitality", url: "https://hotelroyalenclave.com/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-335.png" },
  { title: "SP RESIDENCY", tag: "Hospitality", url: "https://spresidencyhostel.com/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-336-1024x576.png" },
  { title: "LIMSON ENGINEERING", tag: "Engineering", url: "https://limson.co.in/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-337.png" },
  { title: "GLOBAL PACKAGING", tag: "Manufacturing", url: "https://globalpkg.net/", image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-339.png" },
  { title: "SJA LAND DEVELOPERS", tag: "Real Estate", url: "https://sjalanddevelopers.com/", image: "/screenshots/sjalanddevelopers.png" },
  { title: "SJA LANDS", tag: "Real Estate", url: "https://www.sjalands.in/", image: "/screenshots/sjalands.png" },
  { title: "AKASH ENTERPRISES", tag: "Signage", url: "https://akashsignage.vercel.app/", image: "/screenshots/akashsignage.png" },
  { title: "QUANTOM CLOUDS", tag: "Technology", url: "https://quantomclouds.vercel.app/", image: "/screenshots/quantomclouds.png" },
  { title: "DHARMA VOICE", tag: "Wellness", url: "https://dharma-voice.vercel.app/", image: "/screenshots/dharma-voice.png" },
  { title: "THE OCD VOICE", tag: "Healthcare", url: "https://theocdvoice.vercel.app/", image: "/screenshots/theocdvoice.png" },
  { title: "IGNITE INDIANS", tag: "Digital Agency", url: "https://igniteindians.com/", image: "/screenshots/igniteindians.png" },
  { title: "DR MILIND BAPAT", tag: "Healthcare", url: "https://drmilindbapat.in/", image: "/screenshots/drmilindbapat.png" },
  { title: "MOUNTAIN BREEZE", tag: "Adventure", url: "https://mountainbreeze.farm/", image: "/screenshots/mountainbreeze.png" },
  { title: "ADVANCE SMT", tag: "EdTech SaaS", url: "https://advancesmt.com/", image: "/screenshots/advancesmt.png" },
];

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="absolute inset-0 bg-[#1F1F1F]" aria-label={`${alt} preview unavailable`} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    />
  );
}

function FeaturedCard({ p }: { p: Project }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-[#1F1F1F] bg-black transition-colors duration-200 hover:border-[#333333]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#1F1F1F]">
        <ProjectImage src={p.image} alt={p.title} />
      </div>
      <div className="flex items-start justify-between gap-6 border-t border-[#1F1F1F] p-6">
        <div className="min-w-0">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">{p.tag}</p>
          <h3 className="truncate text-lg font-bold tracking-tight text-white">{p.title}</h3>
          {p.desc && <p className="mt-2 text-sm font-normal leading-relaxed text-white/60">{p.desc}</p>}
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-colors group-hover:text-white" />
      </div>
    </a>
  );
}

function GridCard({ p }: { p: Project }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-[#1F1F1F] bg-black transition-colors duration-200 hover:border-[#333333]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#1F1F1F]">
        <ProjectImage src={p.image} alt={p.title} />
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-[#1F1F1F] px-4 py-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">{p.tag}</p>
          <h4 className="truncate text-sm font-bold tracking-tight text-white">{p.title}</h4>
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-white" />
      </div>
    </a>
  );
}

export default function ProjectsShowcase() {
  const [expanded, setExpanded] = useState(false);

  // First 4 of others shown by default (6 featured + 4 = 10 total)
  const initialOthers = others.slice(0, 4);
  const moreOthers = others.slice(4);

  return (
    <section className="bg-black font-sans text-white antialiased">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Header */}
        <header className="mb-16 flex flex-col gap-6 border-b border-[#1F1F1F] pb-10 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
              Selected Work / 2024—2026
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Projects.</h1>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            A collection of platforms, products and digital experiences crafted across industries — from finance and
            healthcare to commerce and education.
          </p>
        </header>

        {/* Featured */}
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">Featured</h2>
          <span className="font-mono text-[11px] tracking-[0.14em] text-white/30">
            {String(featured.length).padStart(2, "0")}
          </span>
        </div>
        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {featured.map((p) => (
            <FeaturedCard key={p.url} p={p} />
          ))}
        </div>

        {/* All projects — first 4 always visible */}
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">All Projects</h2>
          <span className="font-mono text-[11px] tracking-[0.14em] text-white/30">
            {String(others.length).padStart(2, "0")}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {initialOthers.map((p) => (
            <GridCard key={p.url} p={p} />
          ))}

          {/* Extra projects — revealed on expand */}
          {expanded && moreOthers.map((p) => (
            <GridCard key={p.url} p={p} />
          ))}
        </div>

        {/* Explore More button */}
        {!expanded ? (
          <div className="mt-12 flex flex-col items-center gap-3">
            {/* Fade hint */}
            <div className="pointer-events-none relative -mt-20 h-20 w-full bg-gradient-to-t from-black to-transparent" />
            <button
              onClick={() => setExpanded(true)}
              className="group relative inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-105"
            >
              <span>Explore More Projects</span>
              <span className="font-mono text-[11px] text-white/40">+{moreOthers.length}</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-[13px] text-white/50 hover:text-white/80 transition-colors duration-200"
            >
              <svg className="h-3.5 w-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              Show less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

