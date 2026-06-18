import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Star, Phone, Eye, MessageSquare, BarChart3, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization India | Vwebit",
  description:
    "Google Business Profile optimization services for Indian businesses. Rank in Google Maps, attract local customers, and get more calls. Expert GBP optimization from Vwebit.",
  keywords: ["Google Business Profile optimization India", "Google My Business optimization India", "GBP optimization India"],
  alternates: { canonical: "https://vwebit.com/google-business-profile" },
  openGraph: {
    title: "Google Business Profile Optimization India | Vwebit",
    description: "Optimise your Google Business Profile to rank in Google Maps and get more local customers.",
    url: "https://vwebit.com/google-business-profile",
  },
};

const features = [
  { icon: CheckCircle2, label: "Profile Setup & Verification", desc: "Complete GBP setup and verification if not already done." },
  { icon: Eye, label: "Listing Optimisation", desc: "Optimise business name, category, description, and attributes." },
  { icon: MapPin, label: "Google Maps Ranking", desc: "Strategies to improve your ranking in Google Maps results." },
  { icon: Star, label: "Review Strategy", desc: "Guidance on how to request and respond to genuine customer reviews." },
  { icon: MessageSquare, label: "Q&A Optimisation", desc: "Add and answer key questions customers ask about your business." },
  { icon: BarChart3, label: "Insights Reporting", desc: "Monthly reports on views, calls, and direction requests from your GBP." },
];

const faqs = [
  { question: "What is Google Business Profile?", answer: "Google Business Profile (formerly Google My Business) is a free tool that lets you manage how your business appears on Google Search and Google Maps. It's essential for local businesses." },
  { question: "Why is GBP important for my business?", answer: "When someone searches for your type of business in your city, Google shows a 'local pack' with 3 businesses. Appearing in that local pack can dramatically increase calls and visits to your business." },
  { question: "Can you create a GBP for my business?", answer: "Yes. We can set up, verify, and fully optimise your Google Business Profile from scratch if you don't have one." },
  { question: "How long does it take to see results from GBP optimisation?", answer: "Basic improvements in visibility can be seen in 2–4 weeks. Significant ranking improvements typically take 2–3 months of consistent optimisation and activity." },
];

export default function GoogleBusinessProfilePage() {
  const jsonLd = serviceSchema(
    "Google Business Profile Optimization India",
    "Google Business Profile optimization to rank higher in Google Maps and local search for Indian businesses.",
    "/google-business-profile"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Google Business Profile" }]} />
        </div>
      </div>

      <section className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Google Business Profile</p>
            <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
              Google Business Profile<br />Optimization in India
            </h1>
            <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed max-w-2xl">
              Appear in Google Maps and local search results when customers search for businesses like yours in your area.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/website-audit" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors">
                Get Free Audit <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a href="https://wa.me/918571017947?text=Hi%2C%20I%27m%20interested%20in%20Google%20Business%20Profile%20optimization." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors">
                <Phone className="w-4 h-4" aria-hidden="true" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Our GBP Services" title="What We Optimise" className="mb-12" />
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
          <SectionHeader eyebrow="FAQ" title="GBP Questions Answered" centered className="mb-10" />
          <div className="max-w-3xl mx-auto"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">Appear in Google Maps Today</h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 max-w-lg mx-auto">Get a free audit and find out how well your Google Business Profile is performing.</p>
          <Link href="/website-audit" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
            Get My Free Audit <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
