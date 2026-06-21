"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export function FloatingContactWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isUserToggled, setIsUserToggled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide completely in hero section
    if (latest < 400) {
      setIsVisible(false);
      setIsUserToggled(false);
      setIsOpen(false);
      return;
    }

    // Show widget when scrolling past hero
    setIsVisible(true);

    // Only auto-manage the state if the user hasn't explicitly clicked it
    if (!isUserToggled) {
      if (latest > 1200) {
        setIsOpen(false); // Auto collapse when deep scrolling
      } else {
        setIsOpen(true); // Auto expand when right below hero
      }
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="form"
                className="bg-white rounded-2xl shadow-2xl border border-[var(--color-outline-variant)] w-[90vw] max-w-[400px] overflow-hidden flex flex-col"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center p-4 border-b border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="font-bold font-[var(--font-geist)] text-[var(--color-on-surface)]">
                      Book Consultation
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      setIsUserToggled(true);
                      setIsOpen(false);
                    }}
                    className="p-1.5 hover:bg-[var(--color-surface-container-low)] rounded-full transition-colors text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]"
                    aria-label="Close form"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="p-6 max-h-[70vh] overflow-y-auto overscroll-contain">
                  <ContactForm />
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="button"
                onClick={() => {
                  setIsUserToggled(true);
                  setIsOpen(true);
                }}
                className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-4 rounded-full shadow-xl hover:bg-[var(--color-surface-tint)] transition-transform hover:scale-105 active:scale-95"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                <span className="font-semibold whitespace-nowrap">Book Consultation</span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
