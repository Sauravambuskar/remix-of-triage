// src/pages/demo.tsx
"use client";

import Link from "next/link";
import { DIcons } from "dicons";
import Footer from "@/components/ui/footer";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "About", href: "/about" },
            { name: "Works", href: "/agency/works" },
            { name: "Pricing", href: "/pricing" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Products", href: "/products" },
            { name: "Agency", href: "/agency" },
            { name: "Dashboard", href: "/dashboard" },
          ],
        },
        // ... other sections omitted for brevity
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform`;

export default function Demo() {
  return (
    <div className="p-8">
      <footer className="border-t border-b border-ali/20 px-2 mx-auto w-full">
        <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
          <Link href="/">
            <p className="flex items-center justify-center rounded-full"><DIcons.Designali className="w-8 text-red-600" /></p>
          </Link>
          <p className="bg-transparent text-center text-xs leading-4 text-primary/60 md:text-left">
            Sample footer content – replace with your own branding.
          </p>
        </div>
        {/* navigation omitted for brevity */}
        <Footer />
      </footer>
    </div>
  );
}
