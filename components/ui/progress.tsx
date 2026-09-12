import { cn } from "@/lib/utils";

export function Progress({ value, className, label = "Progress" }: { value: number; className?: string; label?: string }) {
  const safeValue = Math.min(100, Math.max(0, value));
  return (
    <div className={cn("grid gap-2", className)}>
      <div className="flex items-center justify-between gap-3 text-xs"><span>{label}</span><span className="text-muted-foreground">{safeValue}%</span></div>
      <div role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={safeValue} className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${safeValue}%` }} /></div>
    </div>
  );
}
