import { useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  function move(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(3, Math.min(97, p)));
  }

  return (
    <div className="group overflow-hidden rounded-3xl shadow-elegant">
      <div
        ref={ref}
        onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        onClick={(e) => move(e.clientX)}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none bg-black"
      >
        <img src={after} alt="After" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
          />
        </div>
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white/90 shadow-elegant"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-elegant">
            ⇋
          </div>
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">Before</span>
        <span className="absolute top-3 right-3 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-foreground">After</span>
      </div>
      {label && (
        <div className="bg-card px-4 py-3 text-sm font-medium text-ink">{label}</div>
      )}
    </div>
  );
}