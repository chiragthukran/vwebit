"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  businessType: z.string().optional(),
  message: z.string().min(5, "Please enter a message"),
  botField: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div aria-hidden="true" className="hidden">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("botField")} />
      </div>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
          Your Name <span className="text-[var(--color-error)]">*</span>
        </label>
        <input id="contact-name" type="text" autoComplete="name" placeholder="Amit Sharma" {...register("name")} className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition" />
        {errors.name && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
          Phone Number <span className="text-[var(--color-error)]">*</span>
        </label>
        <input id="contact-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" {...register("phone")} className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition" />
        {errors.phone && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-business-type" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
          Business Type
        </label>
        <select id="contact-business-type" {...register("businessType")} className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition">
          <option value="">Select your business type</option>
          <option value="packers-movers">Packers & Movers</option>
          <option value="transport">Transport / Logistics</option>
          <option value="clinic">Clinic / Healthcare</option>
          <option value="contractor">Contractor / Builder</option>
          <option value="retail">Retail / Shop</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5">
          Message <span className="text-[var(--color-error)]">*</span>
        </label>
        <textarea id="contact-message" rows={4} placeholder="Tell us about your business and what you need..." {...register("message")} className="w-full px-4 py-3 rounded-lg border border-[var(--color-outline-variant)] bg-white text-[var(--color-on-surface)] text-sm placeholder:text-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition resize-none" />
        {errors.message && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.message.message}</p>}
      </div>

      {error && (
        <div className="px-4 py-3 bg-[var(--color-error-container)] border border-[var(--color-error)]/20 rounded-lg">
          <p className="text-xs text-[var(--color-on-error-container)]">{error}</p>
        </div>
      )}

      <button type="submit" id="contact-form-submit" data-tracking="contact_submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? "Sending..." : "Send Message"}
        {!loading && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
      </button>
    </form>
  );
}
