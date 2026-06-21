import type { Metadata } from "next";
import { AuditForm } from "@/components/AuditForm";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Get a Free Website Audit | Vwebit",
  description:
    "Get a free website audit from Vwebit. We'll review your website, SEO, Google Business Profile, and lead generation and send you a personalised report.",
  alternates: { canonical: "https://www.vwebit.xyz/website-audit" },
  openGraph: {
    title: "Get a Free Website Audit | Vwebit",
    description: "Discover exactly what's stopping your website from generating more leads.",
    url: "https://www.vwebit.xyz/website-audit",
  },
};

export default function WebsiteAuditPage() {
  const jsonLd = webPageSchema(
    "Get a Free Website Audit | Vwebit",
    "Get a personalised free website audit covering website speed, SEO, Google Business Profile, and lead generation.",
    "/website-audit",
    "ContactPage"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <BreadcrumbNav items={[{ label: "Website Audit" }]} />
        </div>
      </div>

      <section className="bg-[var(--color-surface-container-lowest)] min-h-[80vh] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Copy */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Free. No obligation.
              </p>
              <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
                Get Your Free<br />Website Audit
              </h1>
              <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed max-w-lg">
                Fill in the form and we'll send you a personalised audit of your website,
                SEO, and online presence — along with specific recommendations to get more
                leads.
              </p>

              <div className="bg-[var(--color-secondary-container)] rounded-xl p-6 space-y-3">
                <p className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] text-sm mb-2">
                  What you'll receive:
                </p>
                {[
                  "Website speed and performance analysis",
                  "On-page SEO gaps and opportunities",
                  "Google Business Profile review",
                  "Mobile experience assessment",
                  "Lead generation improvement suggestions",
                  "Priority recommendations for quick wins",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-[var(--color-on-surface-variant)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold font-[var(--font-geist)]">V</span>
                </div>
                <span>
                  <strong className="text-[var(--color-on-surface)]">Vwebit</strong> — Based in Jalandhar, Punjab.
                  Serving businesses across India.
                </span>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white border border-[var(--color-outline-variant)] rounded-2xl p-8 shadow-sm">
              <AuditForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
