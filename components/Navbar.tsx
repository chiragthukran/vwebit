"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Website Development", href: "/website-development" },
  { label: "Local SEO", href: "/local-seo" },
  { label: "Google Business Profile", href: "/google-business-profile" },
  { label: "Business Automation", href: "/business-automation" },
];

const navLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-[var(--color-outline-variant)] shadow-sm"
          : "bg-[var(--color-surface-container-lowest)] border-[var(--color-outline-variant)]"
      )}
    >
      <nav className="max-w-[1280px] mx-auto px-6 md:px-12 h-18 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-[var(--font-geist)] font-bold text-[var(--color-primary)] text-xl hover:opacity-90 transition-opacity"
          aria-label="Vwebit home"
        >
          <img src="/logo.png" alt="Vwebit Logo" className="w-8 h-8 object-contain" />
          Vwebit
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onKeyDown={(e) => e.key === "Enter" && setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              className={cn(
                "flex items-center gap-1 text-sm font-semibold transition-colors",
                "text-[var(--color-secondary)] hover:text-[var(--color-primary)]",
                services.some((s) => pathname === s.href) &&
                  "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
              )}
            >
              Services
              <ChevronDown
                className={cn("w-4 h-4 transition-transform duration-200", servicesOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            {servicesOpen && (
              <div
                role="menu"
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg border border-[var(--color-outline-variant)] shadow-lg animate-slide-down py-1"
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    role="menuitem"
                    className={cn(
                      "block px-4 py-2.5 text-sm transition-colors",
                      "text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)] hover:text-[var(--color-primary)]",
                      pathname === service.href && "text-[var(--color-primary)] bg-[var(--color-secondary-container)]"
                    )}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors pb-0.5",
                "text-[var(--color-secondary)] hover:text-[var(--color-primary)]",
                pathname === link.href &&
                  "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            id="nav-consultation-cta"
            data-tracking="consultation_request"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
          >
            Get free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="lg:hidden p-2 text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-[var(--color-outline-variant)] bg-white animate-slide-down"
        >
          <div className="px-6 py-4 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-outline)] py-2">
              Services
            </p>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={cn(
                  "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  "text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)] hover:text-[var(--color-primary)]",
                  pathname === service.href && "bg-[var(--color-secondary-container)] text-[var(--color-primary)]"
                )}
              >
                {service.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[var(--color-outline-variant)]" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  "text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)] hover:text-[var(--color-primary)]",
                  pathname === link.href && "bg-[var(--color-secondary-container)] text-[var(--color-primary)]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-surface-tint)] transition-colors"
              >
                Get free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
