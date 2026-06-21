import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[var(--font-geist)] text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-[var(--color-on-surface-variant)] w-full max-w-2xl leading-relaxed",
          centered && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
