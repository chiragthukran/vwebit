import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Search, Star, TrendingUp, Users, BarChart3, Phone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Local SEO Services India — Rank Higher in Google | Vwebit",
  description:
    "Local SEO services for small businesses across India. Rank higher in Google search, get more leads, and dominate your local market. Expert local SEO from Vwebit.",
  keywords: ["local SEO services India", "local SEO for small business India", "Google local ranking India"],
  alternates: { canonical: "https://vwebit.xyz/local-seo" },
  openGraph: {
    title: "Local SEO Services India | Vwebit",
    description: "Rank higher in Google local search and get more customers. Expert local SEO for Indian SMEs.",
    url: "https://vwebit.xyz/local-seo",
  },
};

const features = [
  { icon: Search, label: "Keyword Research", desc: "We find the exact search terms your customers use and optimise your site for them." },
  { icon: MapPin, label: "Local Pack Ranking", desc: "Get your business into the Google local 3-pack for your most important keywords." },
  { icon: Star, label: "Google Business Profile", desc: "Optimise and maintain your GBP listing to drive more visibility and calls." },
  { icon: TrendingUp, label: "On-Page SEO", desc: "Optimise title tags, meta descriptions, headers, and content for local search." },
  { icon: Users, label: "Citation Building", desc: "Get listed on top Indian directories and business listings consistently." },
  { icon: BarChart3, label: "Monthly Reporting", desc: "Clear reports showing keyword rankings, traffic, and lead improvements." },
];

const faqs = [
  { question: "How long does local SEO take to show results?", answer: "Most businesses see noticeable improvements in 3–4 months. Competitive markets may take 6 months. SEO is a long-term investment with compounding returns." },
  { question: "Do you provide local SEO for businesses outside Jalandhar?", answer: "Yes. We provide local SEO services for businesses across all cities in India — Delhi, Mumbai, Bengaluru, Chandigarh, and more." },
  { question: "What's the difference between local SEO and regular SEO?", answer: "Local SEO focuses on ranking in geographically relevant searches — 'plumber in Chandigarh' or 'packers movers Jalandhar'. It targets customers near your business location." },
  { question: "Do I need a website to do local SEO?", answer: "A website significantly helps. We can optimise your Google Business Profile without a website, but a website gives you far more ranking opportunities and credibility." },
];

export default function LocalSeoPage() {
  const jsonLd = serviceSchema(
    "Local SEO Services India",
    "Local SEO services to rank higher in Google local search for Indian small businesses.",
    "/local-seo"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Local SEO" }]} />
        </div>
      </div>

      <section className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Local SEO Services</p>
            <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
              Local SEO Services in India —<br />More Customers, More Calls
            </h1>
            <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed max-w-2xl">
              We help local businesses rank higher in Google search so customers in your city find you before they find your competition.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/website-audit" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors">
                Get Free Audit <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a href="https://wa.me/918571017947?text=Hi%2C%20I%27m%20interested%20in%20local%20SEO." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors">
                <Phone className="w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="What We Do" title="Our Local SEO Services" className="mb-12" />
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
          <SectionHeader eyebrow="FAQ" title="Local SEO Questions" centered className="mb-10" />
          <div className="max-w-3xl mx-auto"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">Start Ranking Higher in Google</h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 max-w-lg mx-auto">Get a free audit of your current online presence and find out exactly where you're losing customers.</p>
          <Link href="/website-audit" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
            Get My Free Audit <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
