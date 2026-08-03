import { cn } from "@/libs/utils";

interface ProjectVisualProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

function formatProjectLabel(raw: string): string[] {
  const cleaned = (raw || "project").trim().replace(/\.+$/, "").toUpperCase();
  const parts = cleaned.split(/[-_\s]+/).filter(Boolean);

  if (parts.length <= 1) {
    return [`${cleaned}.`];
  }

  if (parts.length === 2) {
    return [`${parts[0]} ${parts[1]}.`];
  }

  const mid = Math.ceil(parts.length / 2);
  return [parts.slice(0, mid).join(" "), `${parts.slice(mid).join(" ")}.`];
}

export default function ProjectVisual({
  name,
  className,
  ...props
}: ProjectVisualProps) {
  const lines = formatProjectLabel(name);

  return (
    <div className={cn("relative overflow-clip", className)} {...props}>
      <div className="absolute inset-0 flex flex-row bg-black text-white">
        <div className="w-4 shrink-0 bg-white" />

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between px-2 py-1 font-mono md:px-4 md:py-2">
            <span className="text-[8px] uppercase tracking-[0.2em] text-white/80 md:text-[10px] lg:text-xs">
              [ REPOSITORY ]
            </span>
            <span className="text-[8px] tracking-[0.15em] text-neutral-500 md:text-[10px] lg:text-xs">
              @abdurrozaqf
            </span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col justify-center px-2 md:px-4">
            <div className="mb-1 h-0.5 w-12 bg-white md:mb-3 md:h-1 md:w-20" />

            {lines.map((line) => (
              <div
                key={line}
                className="font-heading text-2xl uppercase leading-[0.88] tracking-tight text-white md:text-3xl lg:text-4xl xl:text-5xl"
              >
                {line}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between bg-white px-2 py-2 font-mono text-black md:px-4 md:py-2.5">
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] md:text-[10px] lg:text-xs">
              CODUR.DEV
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] md:text-[10px] lg:text-xs">
              PORTFOLIO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
