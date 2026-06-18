"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-3", className)} role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            role="listitem"
            className="border border-[var(--color-outline-variant)] rounded-lg overflow-hidden"
          >
            <button
              id={`faq-question-${index}`}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[var(--color-surface-container-low)] transition-colors"
            >
              <span className="font-[var(--font-geist)] font-semibold text-[var(--color-on-surface)] text-sm md:text-base pr-4">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "w-5 h-5 shrink-0 text-[var(--color-primary)] transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96" : "max-h-0"
              )}
            >
              <div className="px-5 pb-4 pt-2 bg-white">
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
