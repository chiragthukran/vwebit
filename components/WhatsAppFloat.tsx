"use client";

import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/917734857983?text=Hi%2C%20I%27m%20interested%20in%20Vwebit%27s%20services.";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 left-6 z-50" aria-label="Chat on WhatsApp">
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-float-btn"
        data-tracking="whatsapp_click"
        aria-label="Chat with Vwebit on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        {/* Pulse ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"
        />
        <MessageCircle className="w-7 h-7 relative z-10" fill="white" />
      </a>
    </div>
  );
}
