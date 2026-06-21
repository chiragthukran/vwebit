import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe, Search, Smartphone, HeadphonesIcon, ArrowRight,
  CheckCircle2, Zap, TrendingUp, IndianRupee, Building2,
  Truck, Stethoscope, HardHat
} from "lucide-react";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingPlans } from "@/components/PricingPlans";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { faqSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Get More Leads with a Professional Website | Vwebit",
  description:
    "Vwebit helps local businesses in India generate more inquiries through modern websites, local SEO, Google Business Profile optimization, and business automation. Starting from ₹15,000.",
  alternates: { canonical: "https://www.vwebit.xyz" },
  openGraph: {
    title: "Get More Leads with a Professional Website | Vwebit",
    description:
      "Professional websites, local SEO, and Google Business Profile optimization for Indian SMEs. Starting from ₹15,000.",
    url: "https://www.vwebit.xyz",
  },
};

const faqs = [
  {
    question: "How much does a website cost for a small business in India?",
    answer:
      "Our websites start from ₹15,000 for a professional 5-page site. Pricing depends on features, pages, and complexity. We offer transparent packages with no hidden charges.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website takes 7–14 working days from content approval to launch. Larger projects with custom features may take 3–4 weeks.",
  },
  {
    question: "Do you provide SEO with website development?",
    answer:
      "Yes. Every website we build comes with on-page SEO optimisation, Google Search Console setup, and a site speed consultation. SEO is built in from day one.",
  },
  {
    question: "Can you help with Google Business Profile?",
    answer:
      "Absolutely. We offer dedicated Google Business Profile setup and optimisation services so your business appears prominently in local search results and Google Maps.",
  },
  {
    question: "Do you work with businesses outside Jalandhar?",
    answer:
      "Yes. We serve businesses across all of India. Our entire workflow is 100% remote — design, development, and support all happen online.",
  },
  {
    question: "What is business automation?",
    answer:
      "Business automation means using tools to handle repetitive tasks automatically — WhatsApp follow-ups, lead notifications, appointment reminders, and more — so you focus on running your business.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Every website we build is mobile-first. We test across Android and iOS devices to ensure your site looks and performs perfectly on all screen sizes.",
  },
  {
    question: "What support do you provide after launch?",
    answer:
      "We provide post-launch support including minor content updates, technical troubleshooting, and performance monitoring for 30 days after launch.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, mobile-first websites built for lead generation. Optimised for Google from day one.",
    href: "/website-development",
  },
  {
    icon: Search,
    title: "Local SEO",
    description: "Rank higher in local search results and attract customers searching for your services.",
    href: "/local-seo",
  },
  {
    icon: TrendingUp,
    title: "Google Business Profile",
    description: "Optimise your GBP listing to appear in Google Maps and local pack results.",
    href: "/google-business-profile",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Automate WhatsApp follow-ups, lead notifications, and reminders to save time.",
    href: "/business-automation",
  },
];

const whyVwebit = [
  {
    title: "Built for Indian SMEs",
    description:
      "We understand the needs and budgets of small businesses in India. Our solutions are tailored for local markets, not generic templates.",
  },
  {
    title: "Affordable & Transparent Pricing",
    description:
      "No hidden fees, no surprises. Flat-rate packages starting from ₹15,000 with everything you need included.",
  },
  {
    title: "SEO From Day One",
    description:
      "Every site we build is search-engine optimised from the first line of code. We don't add SEO as an afterthought.",
  },
  {
    title: "Ongoing Support After Launch",
    description:
      "We don't disappear after handover. Our team is available via WhatsApp for support, updates, and questions.",
  },
];

const industries = [
  { icon: Truck, label: "Packers & Movers", href: "/packers-movers-website-development" },
  { icon: Building2, label: "Transport Companies", href: "/transport-company-website" },
  { icon: HardHat, label: "Contractors & Builders", href: "/contractor-website-development" },
  { icon: Stethoscope, label: "Clinics & Healthcare", href: "/clinic-website-design" },
];

const trustIndicators = [
  { icon: Zap, label: "Fast Websites", sub: "95+ Lighthouse score" },
  { icon: Search, label: "SEO Ready", sub: "Built-in from day one" },
  { icon: Smartphone, label: "Mobile First", sub: "Works on all devices" },
  { icon: HeadphonesIcon, label: "Ongoing Support", sub: "Post-launch help" },
];

const whyFeatures = [
  "Fast websites that load in under 2 seconds",
  "SEO-first development for better rankings",
  "Mobile optimised for all screen sizes",
  "Affordable pricing starting from ₹15,000",
  "Ongoing support after your site goes live",
  "Clear communication throughout the project",
];

export default function HomePage() {
  const jsonLd = webPageSchema(
    "Get More Leads with a Professional Website | Vwebit",
    "Vwebit helps local businesses in India generate more inquiries through modern websites, local SEO, and Google Business Profile optimization.",
    "/"
  );
  const faqJsonLd = faqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative border-b border-[var(--color-outline-variant)] overflow-hidden bg-white">
        {/* Custom Hero Background Layer */}
        <div 
          className="absolute inset-0 z-0 opacity-90"
          style={{
            backgroundImage: "url('/images/hero-custom.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* Subtle gradients to ensure text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent lg:w-1/2" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white/90" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text & CTAs & Illustration */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-secondary-container)] text-[var(--color-primary)] text-xs font-semibold rounded-full mb-6 animate-fade-in">
                <IndianRupee className="w-3 h-3" aria-hidden="true" />
                Starting from ₹15,000
              </div>
              <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-on-surface)] leading-tight tracking-tight mb-6 animate-fade-in-up">
                Get More Leads with a{" "}
                <span className="text-[var(--color-primary)]">Professional Website</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                We help local businesses generate more inquiries and customers through modern
                websites, local SEO, Google Business Profile optimization, and business automation.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <a
                  href="https://wa.me/918571017947?text=Hi%2C%20I%27m%20interested%20in%20Vwebit%27s%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-cta"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST INDICATORS ──────────────────────────────────── */}
      <section className="bg-[var(--color-surface-container-low)] border-b border-[var(--color-outline-variant)]" aria-label="Key features">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustIndicators.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="p-2 bg-[var(--color-secondary-container)] rounded-lg shrink-0">
                  <Icon className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-[var(--font-geist)] font-semibold text-sm text-[var(--color-on-surface)]">{label}</p>
                  <p className="text-xs text-[var(--color-on-surface-variant)]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES OVERVIEW ─────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto" aria-labelledby="services-heading">
        <SectionHeader
          eyebrow="What We Do"
          title="Services That Drive Real Results"
          subtitle="Everything your business needs to attract more customers online, in one place."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group bg-white border border-[var(--color-outline-variant)] rounded-xl p-6 hover:shadow-md hover:border-[var(--color-primary-fixed-dim)] transition-all duration-200"
            >
              <div className="p-2.5 bg-[var(--color-secondary-container)] rounded-lg w-fit mb-4 group-hover:bg-[var(--color-primary-fixed)] transition-colors">
                <Icon className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
              </div>
              <h3 className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] mb-2">
                {title}
              </h3>
              <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mb-4">
                {description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <PricingPlans />

      {/* ── 4. WHY CHOOSE VWEBIT ─────────────────────────────────── */}
      <section className="bg-[var(--color-surface-container-low)] border-y border-[var(--color-outline-variant)] py-20 px-6 md:px-12" aria-labelledby="why-heading">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Vwebit"
                title="Why Businesses Choose Vwebit"
                subtitle="We're not just another web agency. We're a growth partner built specifically for Indian SMEs."
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-[var(--color-on-surface-variant)]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyVwebit.map(({ title, description }) => (
                <div
                  key={title}
                  className="bg-white border border-[var(--color-outline-variant)] rounded-xl p-5"
                >
                  <h3 className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] text-sm mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. INDUSTRIES ────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto" aria-labelledby="industries-heading">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Built for Your Industry"
          subtitle="We've built websites and SEO strategies for businesses across key Indian industries."
          centered
          className="mb-12"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, label, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center gap-4 p-6 bg-white border border-[var(--color-outline-variant)] rounded-xl hover:border-[var(--color-primary-fixed-dim)] hover:shadow-sm transition-all text-center"
            >
              <div className="p-3 bg-[var(--color-secondary-container)] rounded-xl group-hover:bg-[var(--color-primary-fixed)] transition-colors">
                <Icon className="w-6 h-6 text-[var(--color-primary)]" aria-hidden="true" />
              </div>
              <span className="font-[var(--font-geist)] font-semibold text-sm text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors">
                {label}
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:gap-3 transition-all"
          >
            View all industries <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── 6. PORTFOLIO PREVIEW ─────────────────────────────────── */}
      <section className="bg-[var(--color-surface-container-low)] border-y border-[var(--color-outline-variant)] py-20 px-6 md:px-12" aria-labelledby="portfolio-heading">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Our Work"
              title="Concept Projects"
              subtitle="Concept projects demonstrating solutions we can build for businesses."
            />
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] shrink-0 hover:gap-3 transition-all"
            >
              View all <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Packers & Movers Website", tag: "Demo", img: "/images/portfolio-packers-movers.png" },
              { title: "Transport Company Website", tag: "Demo", img: "/images/portfolio-transport.png" },
              { title: "Clinic Booking Website", tag: "Demo", img: "/images/portfolio-clinic.png" },
            ].map((p) => (
              <Link
                key={p.title}
                href="/portfolio"
                className="group bg-white border border-[var(--color-outline-variant)] rounded-xl overflow-hidden hover:shadow-md transition-all duration-200"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.tag}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2 py-1 bg-[var(--color-secondary-container)] text-[var(--color-primary)] text-xs font-semibold rounded-full">
                    {p.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] text-sm">
                    {p.title} — {p.tag}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHY BUSINESSES CHOOSE VWEBIT (replaces testimonials) ─ */}
      <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto" aria-labelledby="trust-heading">
        <SectionHeader
          eyebrow="Our Approach"
          title="Why Businesses Choose Vwebit"
          subtitle="We focus on what actually matters: helping you get more calls, bookings, and enquiries."
          centered
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Fast Websites", desc: "Sites that load in under 2.5 seconds so you never lose a visitor to slow loading.", icon: Zap },
            { title: "SEO-First Development", desc: "Every page is built with search visibility in mind — right from the code structure to the content.", icon: TrendingUp },
            { title: "Mobile Optimised", desc: "80% of your visitors are on mobile. Every site we build is designed mobile-first.", icon: Smartphone },
            { title: "Affordable Pricing", desc: "Professional quality at Indian SME budgets. Starting from ₹15,000 with no hidden fees.", icon: IndianRupee },
            { title: "Ongoing Support", desc: "30 days of post-launch support included. We're reachable on WhatsApp anytime.", icon: HeadphonesIcon },
            { title: "Built for Indian Markets", desc: "We understand local business needs, regional keywords, and India-specific customer behaviour.", icon: Globe },
          ].map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="bg-white border border-[var(--color-outline-variant)] rounded-xl p-6"
            >
              <div className="p-2.5 bg-[var(--color-secondary-container)] rounded-lg w-fit mb-4">
                <Icon className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
              </div>
              <h3 className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] mb-2">{title}</h3>
              <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────────── */}
      <section className="bg-[var(--color-surface-container-low)] border-y border-[var(--color-outline-variant)] py-20 px-6 md:px-12" aria-labelledby="faq-heading">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            centered
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ── 9. CTA BANNER ───────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[var(--color-primary)]" aria-labelledby="cta-heading">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 id="cta-heading" className="font-[var(--font-geist)] text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-[var(--color-primary-fixed-dim)] text-lg mb-8 w-full max-w-xl mx-auto">
            Get a free consultation and discover exactly how to get more leads from your online presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-consultation"
              id="cta-banner-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors shadow-sm"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href="https://wa.me/918571017947?text=Hi%2C%20I%27m%20interested%20in%20Vwebit%27s%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <FloatingContactWidget />
    </>
  );
}
