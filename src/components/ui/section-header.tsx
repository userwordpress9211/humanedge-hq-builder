import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-wider mb-3",
            light ? "text-accent" : "text-accent"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          light ? "text-primary-foreground" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg",
            light ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
