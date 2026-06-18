import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Vwebit — Get in Touch | Vwebit",
  description:
    "Contact Vwebit for website development, local SEO, and Google Business Profile services. Based in Jalandhar, Punjab. Call or WhatsApp +91 85710 17947.",
  alternates: { canonical: "https://vwebit.xyz/contact" },
  openGraph: {
    title: "Contact Vwebit | Website & SEO for Indian SMEs",
    description: "Reach us on WhatsApp or through our contact form. Based in Jalandhar, serving all India.",
    url: "https://vwebit.xyz/contact",
  },
};

export default function ContactPage() {
  const jsonLd = webPageSchema(
    "Contact Vwebit | Website & SEO for Indian SMEs",
    "Contact Vwebit for website development and SEO services. Based in Jalandhar, Punjab.",
    "/contact",
    "ContactPage"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-[var(--color-surface-container-lowest)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <nav aria-label="Breadcrumb" className="py-3">
            <ol className="flex items-center gap-1 text-xs text-[var(--color-on-surface-variant)]">
              <li><a href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</a></li>
              <li className="flex items-center gap-1"><span aria-hidden="true">›</span><span className="text-[var(--color-on-surface)] font-medium">Contact</span></li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">Contact Us</p>
              <h1 className="font-[var(--font-geist)] text-4xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight mb-5">
                Get in Touch
              </h1>
              <p className="text-lg text-[var(--color-on-surface-variant)] mb-10 leading-relaxed max-w-lg">
                Have a question or ready to start your project? Send us a message or reach us directly on WhatsApp for a faster response.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[var(--color-secondary-container)] rounded-lg shrink-0">
                    <Phone className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] text-sm mb-0.5">Phone & WhatsApp</p>
                    <a href="tel:+918571017947" className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">
                      +91 85710 17947
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[var(--color-secondary-container)] rounded-lg shrink-0">
                    <Mail className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] text-sm mb-0.5">Email</p>
                    <a href="mailto:vwebit12@gmail.com" className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">
                      vwebit12@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[var(--color-secondary-container)] rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] text-sm mb-0.5">Location</p>
                    <p className="text-sm text-[var(--color-on-surface-variant)]">
                      Based in Jalandhar, Punjab<br />
                      Serving businesses across India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://wa.me/918571017947?text=Hi%2C%20I%27m%20interested%20in%20Vwebit%27s%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#22c55e] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white border border-[var(--color-outline-variant)] rounded-2xl p-8 shadow-sm">
              <h2 className="font-[var(--font-geist)] text-lg font-bold text-[var(--color-on-surface)] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
