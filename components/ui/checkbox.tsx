"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: Omit<React.ComponentProps<"input">, "type">) {
  return (
    <span className="relative inline-grid size-4 shrink-0 place-items-center">
      <input
        type="checkbox"
        className={cn(
          "peer size-4 appearance-none rounded border border-input bg-background outline-none transition-colors checked:border-primary checked:bg-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50",
          className,
        )}
        {...props}
      />
      <Check aria-hidden="true" className="pointer-events-none absolute size-3 text-primary-foreground opacity-0 peer-checked:opacity-100" strokeWidth={3} />
    </span>
  );
}

export { Checkbox };
