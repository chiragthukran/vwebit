import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol
        className="flex flex-wrap items-center gap-1 text-xs text-[var(--color-on-surface-variant)]"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            itemProp="item"
            className="flex items-center hover:text-[var(--color-primary)] transition-colors"
          >
            <Home className="w-3 h-3" aria-hidden="true" />
            <span itemProp="name" className="sr-only">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-1"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            {item.href ? (
              <Link
                href={item.href}
                itemProp="item"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span
                itemProp="name"
                className="text-[var(--color-on-surface)] font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
