import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Stethoscope, Calendar, Shield, Phone, MapPin, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Clinic Website Design India — Website for Clinic | Vwebit",
  description:
    "Professional clinic website design for doctors and healthcare providers in India. Get a patient-friendly website with appointment booking, doctor profiles, and local health search rankings.",
  keywords: ["clinic website design", "website for clinic", "doctor website design India", "medical clinic website India"],
  alternates: { canonical: "https://www.vwebit.xyz/clinic-website-design" },
  openGraph: {
    title: "Clinic Website Design India | Vwebit",
    description: "Patient-friendly clinic websites with appointment features and local health search rankings.",
    url: "https://www.vwebit.xyz/clinic-website-design",
  },
};

const features = [
  { icon: Calendar, label: "Appointment Booking", desc: "Let patients book appointments directly from your website." },
  { icon: Users, label: "Doctor Profiles", desc: "Dedicated profiles for each doctor with specialties and qualifications." },
  { icon: Stethoscope, label: "Speciality Pages", desc: "Pages for each medical service or speciality you offer." },
  { icon: MapPin, label: "Local Health SEO", desc: "Rank for 'clinic in [city]' and doctor-specific local searches." },
  { icon: Shield, label: "Trust & Credentials", desc: "Display qualifications, certifications, and hospital affiliations." },
  { icon: Phone, label: "Emergency Contact", desc: "Clear, prominent contact numbers for urgent patient needs." },
];

const faqs = [
  { question: "Why does my clinic need a website?", answer: "Patients search online before choosing a doctor or clinic. A professional website helps them find you, understand your services, and contact you — before they ever call." },
  { question: "Can patients book appointments through the website?", answer: "Yes. We integrate a simple appointment request form so patients can choose a date, select a doctor, and submit their booking request directly." },
  { question: "Do you understand healthcare-specific SEO?", answer: "Yes. We optimise for medical keywords, local health searches, and Google Business Profile optimisation specific to clinics and healthcare providers." },
  { question: "Is my website compliant with patient communication guidelines?", answer: "We ensure your website follows best practices for medical websites in India — no misleading claims, clear emergency contacts, and appropriate content." },
];

export default function ClinicWebsitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Clinic Website Design India", "Patient-friendly clinic website design with appointment booking and local health SEO for Indian healthcare providers.", "/clinic-website-design", "Starting from ₹15,000")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Industries", href: "/industries" }, { label: "Clinic Website Design" }]} />
        </div>
      </div>

      <section className="relative overflow-hidden bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">For Clinics & Healthcare</p>
            <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
              Clinic Website Design in India
            </h1>
            <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed max-w-2xl">
              A patient-friendly clinic website that helps patients find you, understand your services, and book appointments — built to rank on Google for local health searches.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/free-consultation" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors">
                Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a href="https://wa.me/918571017947?text=Hi%2C%20I%20need%20a%20website%20for%20my%20clinic." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
            <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-fixed)] to-blue-200 opacity-30 blur-2xl rounded-full"></div>
              <img src="/images/clinic-hero.png" alt="Hero Illustration" className="relative w-full max-w-[500px] h-auto object-contain mx-auto drop-shadow-sm transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
</section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Features" title="Built for Healthcare Providers" className="mb-12" />
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
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">Help Patients Find Your Clinic</h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 w-full max-w-[512px] mx-auto">Get a free consultation and find out how a professional clinic website can bring you more patients.</p>
          <Link href="/free-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
            Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
