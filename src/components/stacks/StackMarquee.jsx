import { stack } from "./stack"; // array [{name, Icon, color}]
import clsx from "clsx";

export default function StackMarquee() {
  const items = [...stack, ...stack];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-black/60 to-transparent" />

      <div className="py-4 md:py-6">
        <div className={clsx("flex w-max gap-6 md:gap-10 px-4 md:px-6", "animate-marquee")}>
          {items.map(({ name, Icon, color }, idx) => (
            <div
              key={`${name}-${idx}`}
              className="flex items-center gap-2 md:gap-3 rounded-xl border bg-white/5 px-3 py-2 md:px-4 md:py-3"
              style={{ borderColor: color }}
            >
              <Icon className="h-6 w-6 md:h-8 md:w-8" style={{ color }} />
              <span className="text-xs md:text-sm text-white/80">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
