"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 characters")
    .regex(/^\+?[0-9\s\-()]{10,}$/, "Please enter a valid phone number"),
  plan: z.string().optional(),
  businessType: z.string().min(1, "Please select a business type"),
  otherBusiness: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(5, "Please enter a message"),
  botField: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.businessType === "other" && (!data.otherBusiness || data.otherBusiness.length < 2)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please specify your business type",
      path: ["otherBusiness"],
    });
  }
});

type FormData = z.infer<typeof schema>;

export function ContactForm({ autoFocus = false }: { autoFocus?: boolean } = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched", // Validates live when user leaves the field
  });

  const businessType = watch("businessType");

  useEffect(() => {
    if (autoFocus) {
      // Small timeout to ensure DOM is fully painted
      const timer = setTimeout(() => {
        const formEl = document.getElementById("contact-form-container");
        if (formEl) {
          // Scroll with a 150px offset to prevent the form from going too far up (e.g. under a navbar)
          const y = formEl.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        // Focus the name input after a short delay for smooth scrolling
        setTimeout(() => {
          document.getElementById("contact-name")?.focus({ preventScroll: true });
        }, 300);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [autoFocus]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const planParam = params.get("plan");
      if (planParam) {
        setValue("plan", planParam);
      }
    }
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
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
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[var(--color-secondary-container)] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-[var(--color-primary)]" />
        </div>
        <h3 className="font-[var(--font-geist)] text-xl font-bold text-[var(--color-on-surface)] mb-2">Message Sent!</h3>
        <p className="text-[var(--color-on-surface-variant)] text-sm">We'll get back to you within 24 hours. Or reach us directly on WhatsApp for a faster response.</p>
      </div>
    );
  }

  return (
    <form id="contact-form-container" onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div aria-hidden="true" className="hidden">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("botField")} />
      </div>
      
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
          Your Name <span className="text-[var(--color-error)]">*</span>
        </label>
        <input id="contact-name" type="text" autoComplete="name" placeholder="Save Earth" {...register("name")} className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition" />
        {errors.name && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.name.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
          Phone Number <span className="text-[var(--color-error)]">*</span>
        </label>
        <input id="contact-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" {...register("phone")} className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition" />
        {errors.phone && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.phone.message}</p>}
      </div>

      {/* Pricing Plan */}
      <div>
        <label htmlFor="contact-plan" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
          Interested In
        </label>
        <div className="relative">
          <select id="contact-plan" {...register("plan")} className="appearance-none w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition pr-10 cursor-pointer">
            <option value="" className="bg-white text-[var(--color-on-surface)] py-2">Select a plan or service</option>
            <option value="Starter Plan (₹7,999)" className="bg-white text-[var(--color-on-surface)] py-2">Starter Plan (₹7,999)</option>
            <option value="Custom Quote" className="bg-white text-[var(--color-on-surface)] py-2">Custom Quote</option>
            <option value="Growth+ Plan (₹24,999)" className="bg-white text-[var(--color-on-surface)] py-2">Growth+ Plan (₹24,999)</option>
            <option value="Free Consultation" className="bg-white text-[var(--color-on-surface)] py-2">Free Consultation</option>
            <option value="Not Sure Yet" className="bg-white text-[var(--color-on-surface)] py-2">Not Sure Yet</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-on-surface-variant)] pointer-events-none" aria-hidden="true" />
        </div>
      </div>

      {/* Business Type */}
      <div>
        <label htmlFor="contact-business-type" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
          Business Type <span className="text-[var(--color-error)]">*</span>
        </label>
        <div className="relative">
          <select id="contact-business-type" {...register("businessType")} className="appearance-none w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition pr-10 cursor-pointer">
            <option value="" className="bg-white text-[var(--color-on-surface)] py-2">Select your business type</option>
            <option value="Packers & Movers" className="bg-white text-[var(--color-on-surface)] py-2">Packers & Movers</option>
            <option value="Transport / Logistics" className="bg-white text-[var(--color-on-surface)] py-2">Transport / Logistics</option>
            <option value="Clinic / Healthcare" className="bg-white text-[var(--color-on-surface)] py-2">Clinic / Healthcare</option>
            <option value="Contractor / Builder" className="bg-white text-[var(--color-on-surface)] py-2">Contractor / Builder</option>
            <option value="Retail / Shop" className="bg-white text-[var(--color-on-surface)] py-2">Retail / Shop</option>
            <option value="other" className="bg-white text-[var(--color-on-surface)] py-2">Other</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-on-surface-variant)] pointer-events-none" aria-hidden="true" />
        </div>
        {errors.businessType && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.businessType.message}</p>}
      </div>

      {/* Other Business Type (Conditional) */}
      {businessType === "other" && (
        <div className="animate-fade-in-up">
          <label htmlFor="contact-other-business" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
            Please Specify <span className="text-[var(--color-error)]">*</span>
          </label>
          <input id="contact-other-business" type="text" placeholder="E.g. Real Estate, Restaurant..." {...register("otherBusiness")} className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition" />
          {errors.otherBusiness && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.otherBusiness.message}</p>}
        </div>
      )}

      {/* Timeline */}
      <div>
        <label htmlFor="contact-timeline" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
          Project Timeline
        </label>
        <div className="relative">
          <select id="contact-timeline" {...register("timeline")} className="appearance-none w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition pr-10 cursor-pointer">
            <option value="" className="bg-white text-[var(--color-on-surface)] py-2">Select an expected timeline</option>
            <option value="ASAP" className="bg-white text-[var(--color-on-surface)] py-2">ASAP</option>
            <option value="1-2 Weeks" className="bg-white text-[var(--color-on-surface)] py-2">1-2 Weeks</option>
            <option value="1 Month" className="bg-white text-[var(--color-on-surface)] py-2">1 Month</option>
            <option value="More than a month" className="bg-white text-[var(--color-on-surface)] py-2">More than a month</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-on-surface-variant)] pointer-events-none" aria-hidden="true" />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
          Message <span className="text-[var(--color-error)]">*</span>
        </label>
        <textarea id="contact-message" rows={4} placeholder="Tell us about your project requirements..." {...register("message")} className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition resize-none" />
        {errors.message && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.message.message}</p>}
      </div>

      {error && (
        <div className="px-4 py-3 bg-[var(--color-error-container)] border border-[var(--color-error)]/20 rounded-lg">
          <p className="text-xs text-[var(--color-on-error-container)]">{error}</p>
        </div>
      )}

      <button type="submit" id="contact-form-submit" data-tracking="contact_submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? "Sending..." : "Submit Request"}
        {!loading && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
      </button>
    </form>
  );
}
