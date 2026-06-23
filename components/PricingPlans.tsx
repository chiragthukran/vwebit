import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    badge: "For New Businesses",
    price: "Starting from ₹7,999",
    description: "Perfect for startups, local businesses, and professionals looking to establish a professional online presence.",
    features: [
      "5 Page Professional Website",
      "Mobile Responsive Design",
      "Contact Form Integration",
      "WhatsApp Integration",
      "Basic SEO Setup",
      "Google Maps Integration",
      "SSL Security",
      "1 Month Support",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact?plan=Starter+Plan+(₹7,999)",
    popular: false,
  },
  {
    name: "Custom",
    badge: "Most Popular",
    price: "Custom Quote",
    description: "Tailored website solutions for growing businesses that require custom functionality and branding.",
    features: [
      "Everything in Starter",
      "Custom Design & Branding",
      "Unlimited Pages",
      "Advanced SEO Optimization",
      "Blog Setup",
      "Speed Optimization",
      "Lead Generation Forms",
      "Google Business Profile Setup",
      "Business Email Setup",
      "3 Months Support",
    ],
    buttonText: "Request Quote",
    buttonLink: "/contact?plan=Custom+Quote",
    popular: true,
  },
  {
    name: "Growth+",
    badge: "Best for Growth",
    price: "Starting from ₹24,999",
    description: "Complete growth-focused solution combining website development, local SEO, and business automation.",
    features: [
      "Everything in Custom",
      "Local SEO Optimization",
      "Google Business Profile Optimization",
      "Business Automation Setup",
      "CRM Integration",
      "WhatsApp Automation",
      "Conversion Tracking",
      "Monthly Performance Reports",
      "Priority Support",
      "Growth Strategy Consultation",
    ],
    buttonText: "Book Free Consultation",
    buttonLink: "/contact?plan=Growth%2B+Plan+(₹24,999)",
    popular: false,
  },
];

export function PricingPlans() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          eyebrow="Pricing"
          title="Choose the Right Plan for Your Business"
          subtitle="Professional websites and digital growth solutions designed for local businesses."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 items-start max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col h-full bg-white rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-[var(--color-primary)] shadow-lg lg:-mt-4 lg:mb-[-1rem] z-10 p-8"
                  : "border border-[var(--color-outline-variant)] shadow-sm p-8"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                {!plan.popular && (
                  <span className="inline-block text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-secondary-container)] px-3 py-1 rounded-full mb-4">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold font-[var(--font-geist)] text-[var(--color-on-surface)] mb-2">
                  {plan.name}
                </h3>
                <div className="text-xl font-bold text-[var(--color-on-surface)] mb-3">
                  {plan.price}
                </div>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed h-16">
                  {plan.description}
                </p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-[var(--color-on-surface-variant)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full"
              >
                <Link href={plan.buttonLink}>{plan.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Below Pricing */}
        <div className="mt-20 max-w-3xl mx-auto text-center bg-[var(--color-surface-container-low)] rounded-2xl p-8 md:p-12 border border-[var(--color-outline-variant)]">
          <h3 className="text-2xl font-bold font-[var(--font-geist)] text-[var(--color-on-surface)] mb-4">
            Not Sure Which Plan Fits Your Business?
          </h3>
          <p className="text-[var(--color-on-surface-variant)] mb-8">
            Get a free consultation and free consultation. We'll recommend the best solution based on your goals and budget.
          </p>
          <Button asChild variant="primary" size="lg">
            <Link href="/contact" className="inline-flex items-center gap-2">
              Get free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
