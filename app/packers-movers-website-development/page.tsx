import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Truck, MapPin, Phone, Clock, Star, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website for Packers and Movers in India | Vwebit",
  description:
    "Get a professional website for your packers and movers business in India. Generate more shifting enquiries with a fast, mobile-friendly site optimised for local search.",
  keywords: ["website for packers and movers", "packers movers website design India", "movers website development"],
  alternates: { canonical: "https://www.vwebit.xyz/packers-movers-website-development" },
  openGraph: {
    title: "Website for Packers and Movers in India | Vwebit",
    description: "Get more shifting enquiries with a professional packers & movers website. Starting from ₹15,000.",
    url: "https://www.vwebit.xyz/packers-movers-website-development",
  },
};

const features = [
  { icon: Phone, label: "Instant Quote Form", desc: "Let customers request a shifting quote directly from your website." },
  { icon: MapPin, label: "City-Specific SEO", desc: "Rank for 'packers movers [city]' searches across all cities you serve." },
  { icon: Clock, label: "Fast Loading", desc: "Customers won't wait — your site loads in under 2 seconds." },
  { icon: Star, label: "Trust Signals", desc: "Experience stats, service areas, and customer proof to build confidence." },
  { icon: Shield, label: "Mobile First", desc: "Most shifting enquiries come from mobile. Your site works perfectly on all phones." },
  { icon: Truck, label: "Services Showcase", desc: "Clear pages for home shifting, office relocation, vehicle transport, and more." },
];

const faqs = [
  { question: "How will a website help my packers and movers business?", answer: "A website lets customers find you on Google, request a quote online, and trust you before calling. Most people search 'packers movers [city]' before picking a company." },
  { question: "Will my website rank on Google for local searches?", answer: "Yes. We optimise every page for your target cities and services. We also set up your Google Business Profile to appear in local map searches." },
  { question: "Can I add multiple cities to my website?", answer: "Absolutely. We can create city-specific pages for every city you serve, each optimised for local search in that city." },
  { question: "What is the starting price for a packers and movers website?", answer: "Our websites start from ₹15,000. The exact price depends on the number of pages, cities, and features you need. Contact us for a custom quote." },
];

export default function PackersMoversPage() {
  const jsonLd = serviceSchema(
    "Website for Packers and Movers",
    "Professional website development for packers and movers businesses in India to generate more shifting enquiries.",
    "/packers-movers-website-development",
    "Starting from ₹15,000"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Industries", href: "/industries" }, { label: "Packers & Movers" }]} />
        </div>
      </div>

      <section className="relative overflow-hidden bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[672px]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">For Packers & Movers</p>
            <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
              Website for Packers and Movers in India
            </h1>
            <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed max-w-[672px]">
              Get more shifting enquiries with a professional website built specifically for packers and movers. Rank on Google, generate instant quotes, and build trust with customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/free-consultation" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors">
                Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a href="https://wa.me/918571017947?text=Hi%2C%20I%20need%20a%20website%20for%20my%20packers%20and%20movers%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
            <div className="relative animate-fade-in-up mt-12 lg:mt-0 block" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-fixed)] to-blue-200 opacity-30 blur-2xl rounded-full"></div>
              <img src="/images/packers-hero.png" alt="Hero Illustration" className="relative max-w-[500px] h-auto object-contain mx-auto drop-shadow-sm transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
</section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="What's Included" title="Everything Your Packers & Movers Website Needs" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-white border border-[var(--color-outline-variant)] rounded-xl p-6">
                <div className="p-2.5 bg-[var(--color-secondary-container)] rounded-lg w-fit mb-4">
                  <Icon className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                </div>
                <h3 className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] mb-2">{label}</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-container-low)] border-y border-[var(--color-outline-variant)] py-16 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-white border border-[var(--color-outline-variant)] rounded-2xl p-8 md:p-10">
            <SectionHeader eyebrow="Standard Package" title="What's in Your Website" className="mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Home page with hero & quote form", "Services page (home shifting, office relocation, vehicle transport)", "City pages for your service areas", "About us page", "Contact page", "Mobile-responsive design", "Google Business Profile setup", "On-page SEO optimisation", "Fast loading performance", "WhatsApp integration"].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
                  <span className="text-sm text-[var(--color-on-surface-variant)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="FAQ" title="Questions About Your Website" centered className="mb-10" />
          <div className="max-w-[768px] mx-auto"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">Ready to Get More Shifting Enquiries?</h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 max-w-[512px] mx-auto">Get a free consultation and see exactly how to grow your packers and movers business online.</p>
          <Link href="/free-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
            Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
