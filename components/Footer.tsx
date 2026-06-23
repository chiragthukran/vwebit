import Link from "next/link";
import { Globe, Phone, Mail, MapPin } from "lucide-react";

const services = [
  { label: "Website Development", href: "/website-development" },
  { label: "Local SEO", href: "/local-seo" },
  { label: "Google Business Profile", href: "/google-business-profile" },
  { label: "Business Automation", href: "/business-automation" },
];

const quickLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Packers & Movers Sites", href: "/packers-movers-website-development" },
  { label: "Transport Websites", href: "/transport-company-website" },
  { label: "Contractor Websites", href: "/contractor-website-development" },
  { label: "Clinic Websites", href: "/clinic-website-design" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface-container-low)] border-t border-[var(--color-outline-variant)]" aria-label="Site footer">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-[var(--font-geist)] font-bold text-[var(--color-primary)] text-lg hover:opacity-90 transition-opacity"
              aria-label="Vwebit home"
            >
              <img src="/logo.png" alt="Vwebit Logo" className="w-6 h-6 object-contain" />
              Vwebit
            </Link>
            <div className="space-y-2 text-sm text-[var(--color-on-surface-variant)]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
                <span>Based in Jalandhar, Punjab<br />Serving businesses across India</span>
              </div>
              <a
                href="tel:+918571017947"
                className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
                +91 85710 17947
              </a>
              <a
                href="mailto:vwebit12@gmail.com"
                className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
                vwebit12@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="font-[var(--font-geist)] font-semibold text-sm text-[var(--color-on-surface)] mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3 className="font-[var(--font-geist)] font-semibold text-sm text-[var(--color-on-surface)] mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-outline-variant)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-on-surface-variant)]">
          <p>© {new Date().getFullYear()} Vwebit. All rights reserved.</p>
          <p>Professional Websites & SEO for Indian SMEs</p>
        </div>
      </div>
    </footer>
  );
}
