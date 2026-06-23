import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Smartphone, Zap, Search, BarChart3, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { PricingPlans } from "@/components/PricingPlans";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website Development for Small Business India | Vwebit",
  description:
    "Professional website development for small businesses in India. Fast, mobile-first, SEO-optimised websites starting from ₹7,999. Serving businesses across India.",
  keywords: ["website development for small business India", "small business website design India", "affordable website development India"],
  alternates: { canonical: "https://www.vwebit.xyz/website-development" },
  openGraph: {
    title: "Website Development for Small Business India | Vwebit",
    description: "Fast, mobile-first, SEO-optimised websites for Indian SMEs. Starting from ₹7,999.",
    url: "https://www.vwebit.xyz/website-development",
  },
};

const features = [
  { icon: Smartphone, label: "Mobile-First Design", desc: "Built for the 80%+ of users who browse on their phones." },
  { icon: Zap, label: "Fast Loading", desc: "Optimised for sub-2.5s load times and 95+ Lighthouse scores." },
  { icon: Search, label: "SEO Built-In", desc: "On-page SEO, schema markup, and sitemap included from day one." },
  { icon: Shield, label: "Secure & Reliable", desc: "HTTPS, security headers, and daily backups included." },
  { icon: BarChart3, label: "Lead Generation Focus", desc: "Every page is designed to convert visitors into enquiries." },
  { icon: Globe, label: "Custom Design", desc: "No templates. Your website reflects your brand and business." },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We learn about your business, goals, and target customers." },
  { step: "02", title: "Design & Content", desc: "We design your site and guide you on the right content." },
  { step: "03", title: "Build & Review", desc: "We build your site and walk you through every page." },
  { step: "04", title: "Launch & Support", desc: "We go live and provide 30 days of post-launch support." },
];

const faqs = [
  { question: "What is included in the website package?", answer: "Our standard package includes up to 5 pages, mobile-responsive design, on-page SEO, contact form, Google Search Console setup, and 30 days of post-launch support." },
  { question: "Do I need to provide content?", answer: "We guide you on what content is needed. You provide the business information and we help structure and optimise it for your target audience." },
  { question: "Will my website be visible on Google?", answer: "Yes. We submit your sitemap to Google Search Console, optimise meta tags, and set up basic on-page SEO so Google can index your site." },
  { question: "Can I update the website myself after launch?", answer: "Yes. We can add a simple CMS so you can update text and images yourself, or you can send us updates and we'll handle them." },
];

export default function WebsiteDevelopmentPage() {
  const jsonLd = serviceSchema(
    "Website Development for Small Business",
    "Professional website development for small businesses in India. Fast, mobile-first, SEO-optimised.",
    "/website-development",
    "Starting from ₹7,999"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Website Development" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">

          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Website Development</p>
          <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
            Website Development for<br />Small Business in India
          </h1>
          <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed max-w-2xl">
            We build fast, mobile-first, SEO-optimised websites that help small businesses across India get more calls, enquiries, and customers. Starting from ₹7,999.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/free-consultation" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors">
              Get Free Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a href="https://wa.me/918571017947?text=Hi%2C%20I%27m%20interested%20in%20website%20development." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors">
              WhatsApp Us
            </a>
          </div>
        
            </div>
            <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-fixed)] to-blue-200 opacity-30 blur-2xl rounded-full"></div>
              <img src="/images/web-dev-hero.png" alt="Hero Illustration" className="relative w-full max-w-[500px] h-auto object-contain mx-auto drop-shadow-sm transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
</section>

      {/* Features */}
      <section className="py-20 px-6 md:px-12" aria-labelledby="features-heading">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="What's Included" title="Everything Your Website Needs" className="mb-12" />
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

      {/* Process */}
      <section className="bg-[var(--color-surface-container-low)] border-y border-[var(--color-outline-variant)] py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="How It Works" title="Our Development Process" centered className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 font-[var(--font-geist)]">
                  {step}
                </div>
                <h3 className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-[var(--color-secondary-container)] rounded-2xl p-8 md:p-12">
            <SectionHeader eyebrow="Standard Package" title="What Every Site Includes" className="mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Up to 5 pages", "Mobile-responsive design", "On-page SEO optimisation", "Contact & enquiry form", "Google Search Console setup", "Sitemap & robots.txt", "Security headers", "30 days post-launch support", "Fast hosting guidance", "WhatsApp chat integration"].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
                  <span className="text-sm text-[var(--color-on-surface-variant)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingPlans />

      {/* FAQ */}
      <section className="bg-[var(--color-surface-container-low)] border-t border-[var(--color-outline-variant)] py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="FAQ" title="Common Questions" centered className="mb-10" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">Ready to Build Your Website?</h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 w-full max-w-[576px] mx-auto">Get a free consultation first — we'll show you exactly what your site needs to rank and convert.</p>
          <Link href="/free-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
            Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
