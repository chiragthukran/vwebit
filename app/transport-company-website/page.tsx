import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Truck, MapPin, Phone, BarChart3, Globe, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website for Transport Company in India | Vwebit",
  description:
    "Professional website development for transport and logistics companies in India. Get more freight enquiries with a fast, professional logistics website. Starting from ₹15,000.",
  keywords: ["website for transport company", "transport company website design India", "logistics website development India"],
  alternates: { canonical: "https://www.vwebit.xyz/transport-company-website" },
  openGraph: {
    title: "Website for Transport Company in India | Vwebit",
    description: "Get more freight enquiries with a professional transport company website.",
    url: "https://www.vwebit.xyz/transport-company-website",
  },
};

const features = [
  { icon: Phone, label: "Freight Enquiry Form", desc: "Let customers request a freight quote directly from your website." },
  { icon: MapPin, label: "Route Showcase", desc: "Display all the routes, cities, and states you serve." },
  { icon: Truck, label: "Fleet Display", desc: "Showcase your vehicle fleet to build credibility." },
  { icon: Globe, label: "Pan-India SEO", desc: "Rank for transport-related searches across your service corridors." },
  { icon: BarChart3, label: "Services Pages", desc: "Dedicated pages for FTL, LTL, express delivery, and speciality freight." },
  { icon: Shield, label: "Trust Building", desc: "Years of experience, on-time delivery stats, and partner certifications." },
];

const faqs = [
  { question: "Why does my transport company need a website?", answer: "Most businesses search for transport partners online. Without a website, you're invisible to potential clients searching for freight solutions in your area or routes." },
  { question: "Can you create pages for multiple routes?", answer: "Yes. We create dedicated route pages (e.g., Delhi to Mumbai freight, Chandigarh to Pune transport) that rank for route-specific searches." },
  { question: "Do you provide SEO for transport companies?", answer: "Yes. We optimise your website for freight-related keywords, route-specific searches, and set up your Google Business Profile for local transport searches." },
  { question: "What is the cost of a transport company website?", answer: "Websites start from ₹15,000. The exact cost depends on the number of routes, pages, and features needed. Contact us for a tailored quote." },
];

export default function TransportCompanyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Website for Transport Company", "Professional website development for transport and logistics companies in India.", "/transport-company-website", "Starting from ₹15,000")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Industries", href: "/industries" }, { label: "Transport Companies" }]} />
        </div>
      </div>

      <section className="relative overflow-hidden bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">For Transport Companies</p>
            <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
              Website for Transport Company in India
            </h1>
            <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed max-w-2xl">
              A professional website that generates more freight enquiries, showcases your routes and fleet, and ranks on Google for transport searches across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/free-consultation" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors">
                Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a href="https://wa.me/918571017947?text=Hi%2C%20I%20need%20a%20website%20for%20my%20transport%20company." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
            <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-fixed)] to-blue-200 opacity-30 blur-2xl rounded-full"></div>
              <img src="/images/transport-hero.png" alt="Hero Illustration" className="relative w-full max-w-[500px] h-auto object-contain mx-auto drop-shadow-sm transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
</section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Features" title="Built for Logistics Businesses" className="mb-12" />
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

      <section className="bg-[var(--color-surface-container-low)] border-t border-[var(--color-outline-variant)] py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="FAQ" title="Common Questions" centered className="mb-10" />
          <div className="max-w-3xl mx-auto"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">Ready to Grow Your Transport Business?</h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 w-full max-w-[512px] mx-auto">Get a free consultation and find out how a professional website can get you more freight enquiries.</p>
          <Link href="/free-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
            Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
