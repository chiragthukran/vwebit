import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Portfolio — Concept Projects | Vwebit",
  description:
    "Concept projects demonstrating solutions we can build for businesses — packers & movers, transport, and clinic websites built for lead generation and local SEO.",
  alternates: { canonical: "https://www.vwebit.xyz/portfolio" },
  openGraph: {
    title: "Portfolio — Concept Projects | Vwebit",
    description: "Concept projects demonstrating solutions we can build for businesses.",
    url: "https://www.vwebit.xyz/portfolio",
  },
};

const projects = [
  {
    id: "packers-movers",
    title: "Packers & Movers Website",
    tag: "Demo",
    description:
      "A conversion-optimised website for a shifting and relocation service. Features an instant quote form, city-specific SEO pages, trust signals, and mobile-first design.",
    image: "/images/portfolio-packers-movers.png",
    tags: ["Website Development", "Local SEO", "Mobile First"],
    industry: "Packers & Movers",
    href: "/packers-movers-website-development",
  },
  {
    id: "transport",
    title: "Transport Company Website",
    tag: "Demo",
    description:
      "A professional logistics website showcasing freight routes, fleet, and services. Built with a freight enquiry form and route-specific SEO targeting.",
    image: "/images/portfolio-transport.png",
    tags: ["Website Development", "SEO", "Lead Generation"],
    industry: "Transport & Logistics",
    href: "/transport-company-website",
  },
  {
    id: "clinic",
    title: "Clinic Booking Website",
    tag: "Demo",
    description:
      "A patient-friendly clinic website with online appointment booking, doctor profiles, speciality pages, and local health search optimisation.",
    image: "/images/portfolio-clinic.png",
    tags: ["Website Development", "Healthcare SEO", "Appointment Booking"],
    industry: "Healthcare",
    href: "/clinic-website-design",
  },
];

export default function PortfolioPage() {
  const jsonLd = webPageSchema(
    "Portfolio — Concept Projects | Vwebit",
    "Concept projects demonstrating solutions we can build for businesses across key Indian industries.",
    "/portfolio"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Portfolio" }]} />
        </div>
      </div>

      <section className="bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Portfolio</p>
          <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
            Concept Projects
          </h1>
          <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl leading-relaxed">
            Concept projects demonstrating solutions we can build for businesses. These demonstrate the quality, functionality, and design approach we bring to every project.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto space-y-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <div className={`relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--color-outline-variant)] shadow-sm ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.tag}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[var(--color-primary)] text-xs font-semibold rounded-full border border-[var(--color-outline-variant)]">
                    {project.tag}
                  </span>
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[var(--color-on-surface-variant)] text-xs font-medium rounded-full border border-[var(--color-outline-variant)]">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-[var(--font-geist)] text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] mb-4">
                  {project.title} — {project.tag}
                </h2>
                <p className="text-[var(--color-on-surface-variant)] leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[var(--color-secondary-container)] text-[var(--color-primary)] text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:gap-3 transition-all"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  See this solution for your business
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[var(--color-primary)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-[var(--font-geist)] text-3xl font-bold text-white mb-4">
            Want a Website Like This for Your Business?
          </h2>
          <p className="text-[var(--color-primary-fixed-dim)] mb-8 w-full max-w-[512px] mx-auto">
            Get a free consultation and we'll show you exactly how we can build something similar — tailored to your industry and goals.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary-fixed)] transition-colors">
            Get Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
