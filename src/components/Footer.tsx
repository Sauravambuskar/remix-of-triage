// src/components/Footer.tsx
"use client";

import { Link } from "react-router-dom";
import { DIcons } from "dicons";
import { MapPin, Phone, Mail } from "lucide-react";
import ThemeToggle from "@/components/ui/footer";

const navigation = [
  {
    heading: "Services",
    items: [
      { name: "Website Development", href: "#services" },
      { name: "SEO Services", href: "#services" },
      { name: "Content Marketing", href: "#services" },
      { name: "Branding & Marketing", href: "#services" },
      { name: "Demand Generation", href: "#services" },
    ],
  },
  {
    heading: "Company",
    items: [
      { name: "About Us", href: "#about" },
      { name: "Our Work", href: "#work" },
      { name: "Case Studies", href: "https://thesalesbridge.com/case-studies" },
      { name: "Blog", href: "https://thesalesbridge.com/blog" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact", href: "#contact" },
    ],
  },
];

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform`;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background w-full relative z-10">

      {/* Top section — logo + description + contact + newsletter */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 lg:grid-cols-12">

        {/* Logo + tagline */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-5">
          <Link to="/">
            <img
              src="https://thesalesbridge.com/wp-content/uploads/2026/02/Salesbridge-Logo-1024x328.webp"
              alt="Salesbridge Logo"
              className="w-[200px] object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed text-foreground/60 max-w-xs">
            A full-stack digital agency helping ambitious brands grow through
            web development, SEO, content, and demand generation.
          </p>
          {/* Social icons */}
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <a aria-label="Email" href="mailto:contact@thesalesbridge.com" target="_blank" rel="noreferrer" className={Underline}>
              <DIcons.Mail strokeWidth={1.5} className="h-4 w-4" />
            </a>
            <a aria-label="X (Twitter)" href="https://x.com/thesalesbridge" target="_blank" rel="noreferrer" className={Underline}>
              <DIcons.X className="h-4 w-4" />
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/thesalesbridge/" target="_blank" rel="noreferrer" className={Underline}>
              <DIcons.Instagram className="h-4 w-4" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/thesalesbridge" target="_blank" rel="noreferrer" className={Underline}>
              <DIcons.LinkedIn className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navigation columns */}
        <div className="col-span-1 lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          {navigation.map((group) => (
            <div key={group.heading} className="flex flex-col gap-3">
              <p className="font-semibold text-foreground text-xs uppercase tracking-[0.12em]">
                {group.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    {item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/60 hover:text-foreground transition-colors text-xs leading-relaxed"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-foreground/60 hover:text-foreground transition-colors text-xs leading-relaxed"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-5 text-sm">
          <p className="font-semibold text-foreground text-xs uppercase tracking-[0.12em]">
            Get in Touch
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 text-foreground/60">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span className="text-xs leading-relaxed">
                Office No. 108, The Golden Bell<br />
                Koregaon Park Annexe Mundhwa<br />
                Pune, MH.
              </span>
            </div>
            <div className="flex items-start gap-3 text-foreground/60">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <div className="flex flex-col gap-0.5 text-xs">
                <a href="tel:9049098844" className="hover:text-foreground transition-colors">+91 90490 98844</a>
                <a href="tel:8459536766" className="hover:text-foreground transition-colors">+91 84595 36766</a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-foreground/60">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a
                href="mailto:contact@thesalesbridge.com"
                className="text-xs hover:text-foreground transition-colors"
              >
                contact@thesalesbridge.com
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-5 text-sm">
          <p className="font-semibold text-foreground text-xs uppercase tracking-[0.12em]">
            Newsletter
          </p>
          <p className="text-foreground/60 text-xs leading-relaxed">
            Get the latest insights on digital growth, design trends, and agency news straight to your inbox.
          </p>
          <form className="flex flex-col gap-2.5 mt-1" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-transparent border border-border rounded-md px-3.5 py-2.5 text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all w-full"
              required
            />
            <button 
              type="submit"
              className="bg-foreground text-background border border-foreground rounded-md px-3.5 py-2.5 text-[13px] font-medium hover:bg-transparent hover:text-foreground transition-all w-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-t border-dotted border-border" />
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-xs text-foreground/50">
          <span>© {new Date().getFullYear()}</span>
          <span>Salesbridge. All rights reserved.</span>
        </div>
        <ThemeToggle />
      </div>

    </footer>
  );
}

export default Footer;
