"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ArrowRight, Globe, Search, TrendingUp, Users } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  websiteUrl: z.string().optional(),
  businessType: z.string().optional(),
  message: z.string().optional(),
  botField: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const promises = [
  { icon: Globe, label: "Website Improvements", desc: "Speed, mobile experience, and conversion optimisation opportunities." },
  { icon: Search, label: "SEO Opportunities", desc: "Keyword gaps, missing meta tags, and ranking improvements." },
  { icon: TrendingUp, label: "Google Business Profile", desc: "How well your GBP is set up and what to improve." },
  { icon: Users, label: "Lead Generation Improvements", desc: "What's stopping visitors from contacting you." },
];

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        setError(json.error ?? "Something went wrong. Please try WhatsApp.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again or contact us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 px-6">
        <div className="w-16 h-16 bg-[var(--color-secondary-container)] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-[var(--color-primary)]" />
        </div>
        <h3 className="font-[var(--font-geist)] text-xl font-bold text-[var(--color-on-surface)] mb-2">
          Request Received!
        </h3>
        <p className="text-[var(--color-on-surface-variant)] text-sm">
          We'll review your details and send your free website audit within 24 hours. You can also reach us directly on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-[var(--font-geist)] text-lg font-bold text-[var(--color-on-surface)] mb-6">
        Get Your Free Website Audit
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div aria-hidden="true" className="hidden">
          <input type="text" tabIndex={-1} autoComplete="off" {...register("botField")} />
        </div>
        <div>
          <label htmlFor="audit-name" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
            Your Name <span className="text-[var(--color-error)]">*</span>
          </label>
          <input
            id="audit-name"
            type="text"
            autoComplete="name"
            placeholder="Rajesh Kumar"
            {...register("name")}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
          />
          {errors.name && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="audit-phone" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
            Phone Number <span className="text-[var(--color-error)]">*</span>
          </label>
          <input
            id="audit-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
          />
          {errors.phone && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="audit-url" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
            Your Website URL <span className="text-xs font-normal text-[var(--color-on-surface-variant)]">(optional)</span>
          </label>
          <input
            id="audit-url"
            type="url"
            autoComplete="url"
            placeholder="https://yourbusiness.com"
            {...register("websiteUrl")}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="audit-business-type" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
            Business Type
          </label>
          <select
            id="audit-business-type"
            {...register("businessType")}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
          >
            <option value="">Select your business type</option>
            <option value="packers-movers">Packers & Movers</option>
            <option value="transport">Transport / Logistics</option>
            <option value="clinic">Clinic / Healthcare</option>
            <option value="contractor">Contractor / Builder</option>
            <option value="retail">Retail / Shop</option>
            <option value="restaurant">Restaurant / Food</option>
            <option value="education">Education / Tutor</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="audit-message" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
            Message <span className="text-xs font-normal text-[var(--color-on-surface-variant)]">(optional)</span>
          </label>
          <textarea
            id="audit-message"
            rows={3}
            placeholder="Tell us about your business goals..."
            {...register("message")}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition resize-none"
          />
        </div>

        {error && (
          <div className="px-4 py-3 bg-[var(--color-error-container)] border border-[var(--color-error)]/20 rounded-lg">
            <p className="text-xs text-[var(--color-on-error-container)]">{error}</p>
          </div>
        )}

        <button
          type="submit"
          id="audit-form-submit"
          data-tracking="audit_request"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Get My Free Website Audit"}
          {!loading && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
        </button>

        <p className="text-xs text-[var(--color-on-surface-variant)] text-center">
          We respond within 24 hours. No spam, ever.
        </p>
      </form>

      {/* Promise bullets */}
      <div className="mt-8 pt-6 border-t border-[var(--color-outline-variant)]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-on-surface-variant)] mb-4">
          Your audit will cover:
        </p>
        <div className="space-y-3">
          {promises.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="p-1.5 bg-[var(--color-secondary-container)] rounded-md shrink-0">
                <Icon className="w-3.5 h-3.5 text-[var(--color-primary)]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-on-surface)]">{label}</p>
                <p className="text-xs text-[var(--color-on-surface-variant)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
