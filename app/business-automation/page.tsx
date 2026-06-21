import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Bell, MessageSquare, Calendar, BarChart3, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Business Automation for Small Business India | Vwebit",
  description:
    "Business automation services for Indian small businesses. Automate WhatsApp follow-ups, lead notifications, appointment reminders, and more. Save time and grow faster.",
  keywords: ["business automation for small business", "WhatsApp automation India", "business automation India"],
  alternates: { canonical: "https://www.vwebit.xyz/business-automation" },
  openGraph: {
    title: "Business Automation for Small Business India | Vwebit",
    description: "Automate repetitive tasks and follow-ups so you focus on running your business.",
    url: "https://www.vwebit.xyz/business-automation",
  },
};

const features = [
  { icon: MessageSquare, label: "WhatsApp Follow-Ups", desc: "Automatically send follow-up messages to enquiries so you never miss a lead." },
  { icon: Bell, label: "Lead Notifications", desc: "Get instant alerts when someone fills a form or makes an enquiry on your website." },
  { icon: Calendar, label: "Appointment Reminders", desc: "Send automatic reminders to customers before their appointments to reduce no-shows." },
  { icon: Zap, label: "Enquiry Auto-Responses", desc: "Instantly reply to new enquiries with your details and next steps." },
  { icon: BarChart3, label: "Lead Tracking", desc: "Know exactly where your leads come from and which channels work best." },
  { icon: Clock, label: "Save Time Daily", desc: "Automate hours of repetitive communication tasks every week." },
];

const faqs = [
  { question: "What kind of businesses can benefit from automation?", answer: "Any business that receives customer enquiries — clinics, transport companies, packers & movers, contractors, tutors, salons — can benefit from automating their follow-up and communication." },
  { question: "Do I need technical knowledge to use automation?", answer: "No. We set everything up for you. Once it's running, it works automatically in the background. We provide a simple guide for any manual steps." },
  { question: "What tools do you use for automation?", answer: "We use a combination of WhatsApp Business API, Google Sheets integrations, and workflow automation tools suited to your business size and budget." },
  { question: "How long does it take to set up automation?", answer: "Basic automation (lead notifications, auto-responses) can be set up in 3–5 days. More complex workflows take 1–2 weeks." },
];

export default function BusinessAutomationPage() {
  const jsonLd = serviceSchema(
    "Business Automation for Small Business",
    "Automate WhatsApp follow-ups, lead notifications, and appointment reminders for Indian small businesses.",
    "/business-automation"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Business Automation" }]} />
        </div>
      </div>

      <section className="relative overflow-hidden bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Business Automation</p>
            <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
              Business Automation for<br />Indian Small Businesses
            </h1>
            <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed max-w-2xl">
              Stop losing leads to slow follow-ups. We automate your WhatsApp messages, lead alerts, and customer communication so you can focus on running your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/free-consultation" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors">
                Get Started <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a href="https://wa.me/918571017947?text=Hi%2C%20I%27m%20interested%20in%20business%20automation." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-surface-container-low)] transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
            <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-fixed)] to-blue-200 opacity-30 blur-2xl rounded-full"></div>
              <img src="/images/automation-hero.png" alt="Hero Illustration" className="relative w-full max-w-[500px] h-auto object-contain mx-auto drop-shadow-sm transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
</section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="What We Automate" title="Stop Doing It Manually" className="mb-12" />
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
          <SectionHeader eyebrow="FAQ" title="Automation Questions" centered className="mb-10" />
          <div className="max-w-3xl mx-auto"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">Automate Your Business Today</h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 w-full max-w-lg mx-auto">Get a free consultation and we'll identify exactly which parts of your business can be automated.</p>
          <Link href="/free-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
            Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
