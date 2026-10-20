export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} animate-fade-up`}
    >
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}