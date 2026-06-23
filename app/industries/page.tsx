import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Truck, Building2, HardHat, Stethoscope } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { itemListSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Industries We Serve — Website Development & SEO | Vwebit",
  description:
    "Vwebit builds specialised websites and SEO strategies for Indian businesses across key industries — packers & movers, transport, clinics, and contractors.",
  alternates: { canonical: "https://www.vwebit.xyz/industries" },
  openGraph: {
    title: "Industries We Serve | Vwebit",
    description: "Specialised websites and SEO for packers & movers, transport companies, clinics, and contractors across India.",
    url: "https://www.vwebit.xyz/industries",
  },
};

const industries = [
  {
    icon: Truck,
    label: "Packers & Movers",
    description:
      "Websites that generate shifting enquiries with instant quote forms, trust signals, and local SEO for every city you serve.",
    href: "/packers-movers-website-development",
    keyword: "website for packers and movers",
  },
  {
    icon: Building2,
    label: "Transport Companies",
    description:
      "Professional logistics websites with route showcases, freight enquiry forms, and Google ranking for freight-related keywords.",
    href: "/transport-company-website",
    keyword: "website for transport company",
  },
  {
    icon: HardHat,
    label: "Contractors & Builders",
    description:
      "Portfolio-driven contractor websites that showcase your projects, build trust, and generate local enquiries.",
    href: "/contractor-website-development",
    keyword: "website for contractors",
  },
  {
    icon: Stethoscope,
    label: "Clinics & Healthcare",
    description:
      "Patient-friendly clinic websites with appointment features, doctor profiles, and local health search rankings.",
    href: "/clinic-website-design",
    keyword: "clinic website design",
  },
];

export default function IndustriesPage() {
  const listJsonLd = itemListSchema(
    "Industries Served by Vwebit",
    industries.map((i) => ({
      name: i.label,
      description: i.description,
      url: `https://www.vwebit.xyz${i.href}`,
    }))
  );
  const pageJsonLd = webPageSchema(
    "Industries We Serve | Vwebit",
    "Specialised websites and SEO strategies for Indian businesses across key industries.",
    "/industries"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Industries" }]} />
        </div>
      </div>

      <section className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Industries</p>
          <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
            Built for Your Industry
          </h1>
          <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl leading-relaxed">
            We don't build generic websites. We build industry-specific solutions that understand your customers, your keywords, and your market.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Specialisations" title="Industries We Serve" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map(({ icon: Icon, label, description, href, keyword }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white border border-[var(--color-outline-variant)] rounded-xl p-7 hover:shadow-md hover:border-[var(--color-primary-fixed-dim)] transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--color-secondary-container)] rounded-xl shrink-0 group-hover:bg-[var(--color-primary-fixed)] transition-colors">
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-[var(--font-geist)] font-bold text-[var(--color-on-surface)] text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {label}
                    </h2>
                    <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mb-3">
                      {description}
                    </p>
                    <p className="text-xs text-[var(--color-outline)] mb-4">
                      Targeting: <em>{keyword}</em>
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] group-hover:gap-2.5 transition-all">
                      View solutions <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 w-full max-w-[512px] mx-auto">
            We work with businesses across all industries. Get in touch and we'll discuss your specific needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
            Talk to Us <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
