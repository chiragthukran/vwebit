import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HardHat, ImageIcon, Phone, Star, MapPin, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website Development for Contractors in India | Vwebit",
  description:
    "Professional website for contractors and builders in India. Showcase your projects, get more local enquiries, and rank on Google for contractor-related searches.",
  keywords: ["website for contractors", "contractor website design India", "builder website development India"],
  alternates: { canonical: "https://www.vwebit.xyz/contractor-website-development" },
  openGraph: {
    title: "Website for Contractors and Builders in India | Vwebit",
    description: "Showcase your projects and get more local enquiries with a professional contractor website.",
    url: "https://www.vwebit.xyz/contractor-website-development",
  },
};

const features = [
  { icon: ImageIcon, label: "Project Portfolio", desc: "Showcase your best work with a professional photo portfolio." },
  { icon: Phone, label: "Enquiry Forms", desc: "Let potential clients request a quote or site visit directly." },
  { icon: MapPin, label: "Local SEO", desc: "Rank for 'contractor in [city]' and 'builder in [area]' searches." },
  { icon: Star, label: "Trust Building", desc: "Years of experience, completed projects, and service guarantees." },
  { icon: Wrench, label: "Services Pages", desc: "Dedicated pages for construction, renovation, interiors, and more." },
  { icon: HardHat, label: "Mobile Ready", desc: "Works perfectly on all devices for clients browsing on the go." },
];

const faqs = [
  { question: "How will a website help my contracting business?", answer: "A professional website lets potential clients find you on Google, see your past work, and contact you directly. It builds credibility and generates enquiries even when you're on-site." },
  { question: "Can I showcase my past projects?", answer: "Yes. We include a portfolio section with photos of your completed projects, which is one of the most effective ways to convert website visitors into paying clients." },
  { question: "Do you help with local SEO for contractors?", answer: "Yes. We optimise your website to rank for contractor-related searches in your city or area. We also set up your Google Business Profile." },
  { question: "What is the cost?", answer: "Contractor websites start from ₹15,000. Contact us for a quote based on your specific requirements." },
];

export default function ContractorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Website for Contractors", "Professional website development for contractors and builders in India.", "/contractor-website-development", "Starting from ₹15,000")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Industries", href: "/industries" }, { label: "Contractors & Builders" }]} />
        </div>
      </div>

      <section className="relative overflow-hidden bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">For Contractors & Builders</p>
            <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
              Website for Contractors and Builders in India
            </h1>
            <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed max-w-2xl">
              A portfolio-driven website that showcases your projects, builds trust with potential clients, and generates more local enquiries and site visit requests.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/free-consultation" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors">
                Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a href="https://wa.me/918571017947?text=Hi%2C%20I%20need%20a%20website%20for%20my%20contractor%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
            <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-fixed)] to-blue-200 opacity-30 blur-2xl rounded-full"></div>
              <img src="/images/contractor-hero.png" alt="Hero Illustration" className="relative w-full max-w-[500px] h-auto object-contain mx-auto drop-shadow-sm transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
</section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Features" title="Built for Contractors" className="mb-12" />
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
          <SectionHeader eyebrow="FAQ" title="Questions Answered" centered className="mb-10" />
          <div className="max-w-3xl mx-auto"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">Ready to Showcase Your Work?</h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 w-full max-w-[512px] mx-auto">Get a free consultation and see how a professional website can grow your contracting business.</p>
          <Link href="/free-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
            Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
