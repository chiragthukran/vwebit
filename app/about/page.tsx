import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Target, Heart } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Vwebit — Website & SEO Agency for Indian SMEs",
  description:
    "Vwebit is a website development and SEO agency based in Jalandhar, Punjab, helping small businesses across India get more leads through professional websites and local SEO.",
  alternates: { canonical: "https://vwebit.xyz/about" },
  openGraph: {
    title: "About Vwebit | Website & SEO for Indian SMEs",
    description: "Based in Jalandhar, Punjab. Helping Indian SMEs grow online through professional websites and SEO.",
    url: "https://vwebit.xyz/about",
  },
};

const values = [
  { icon: Target, title: "Results First", desc: "We measure our work by the leads and enquiries we generate for you — not by how good the website looks on our portfolio." },
  { icon: Heart, title: "Built for Indian SMEs", desc: "We understand the reality of running a small business in India. Our pricing, communication, and approach reflects that." },
  { icon: Globe, title: "SEO at the Core", desc: "Every decision we make — from site structure to content — is made with search visibility in mind. SEO is never an add-on." },
  { icon: MapPin, title: "Local Market Knowledge", desc: "We know how Indian customers search, what builds trust, and what drives enquiries in local markets." },
];

export default function AboutPage() {
  const jsonLd = webPageSchema(
    "About Vwebit | Website & SEO Agency for Indian SMEs",
    "Vwebit is a website development and SEO agency based in Jalandhar, Punjab helping small businesses across India grow online.",
    "/about",
    "AboutPage"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "About" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">About Vwebit</p>
          <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
            We Help Indian Businesses<br />Win Online
          </h1>
          <p className="text-lg text-[var(--color-on-surface-variant)] leading-relaxed max-w-2xl">
            Vwebit is a website development and digital marketing agency based in Jalandhar, Punjab. We work exclusively with small and medium-sized businesses across India, helping them get more customers through professional websites, local SEO, and Google Business Profile optimisation.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader eyebrow="Our Story" title="Why We Started Vwebit" className="mb-6" />
              <div className="space-y-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                <p>
                  Most web agencies build websites for companies with large marketing budgets. Small businesses — the packers and movers company, the clinic, the contractor — are left with generic templates, slow sites, and zero search visibility.
                </p>
                <p>
                  We started Vwebit to fix that. We build professional, fast, SEO-optimised websites specifically for Indian SMEs — at prices that make sense for businesses that are just starting to grow online.
                </p>
                <p>
                  Every business we work with is in Jalandhar, Chandigarh, Delhi, Mumbai, or anywhere across India. The process is fully remote. The results are real.
                </p>
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Our Mission" title="What Drives Us" className="mb-6" />
              <div className="space-y-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                <p>
                  Our mission is simple: help Indian small businesses compete online. When a customer searches for your type of business in your city, you should appear — not just your bigger, more established competitors.
                </p>
                <p>
                  We achieve this by building fast, professional websites with SEO built-in from the start, and by helping businesses get the most from their Google Business Profile and local search presence.
                </p>
              </div>

              <div className="mt-8 p-6 bg-[var(--color-secondary-container)] rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm font-[var(--font-geist)]">V</span>
                  </div>
                  <div>
                    <p className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] text-sm">Vwebit Team</p>
                    <p className="text-xs text-[var(--color-on-surface-variant)]">Jalandhar, Punjab — Serving All India</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-on-surface-variant)]">
                  "We believe every local business deserves a professional online presence. Starting from ₹15,000, we make that possible."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-surface-container-low)] border-y border-[var(--color-outline-variant)] py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Our Values" title="What We Stand For" centered className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-[var(--color-outline-variant)] rounded-xl p-6">
                <div className="p-2.5 bg-[var(--color-secondary-container)] rounded-lg w-fit mb-4">
                  <Icon className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                </div>
                <h3 className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 max-w-lg mx-auto">Start with a free website audit. No obligation, no sales pressure.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/website-audit" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
              Get Free Audit <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
