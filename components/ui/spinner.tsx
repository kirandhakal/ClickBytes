import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Spinner({ className, label = "Loading" }: { className?: string; label?: string }) {
  return <span role="status" className="inline-flex items-center gap-2 text-sm text-muted-foreground"><LoaderCircle aria-hidden="true" className={cn("size-4 animate-spin", className)} /><span>{label}</span></span>;
}
