"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Switch({ className, ...props }: Omit<React.ComponentProps<"input">, "type">) {
  return (
    <input
      type="checkbox"
      role="switch"
      className={cn(
        "h-5 w-9 shrink-0 cursor-pointer appearance-none rounded-full bg-input p-0.5 outline-none transition-colors before:block before:size-4 before:rounded-full before:bg-white before:shadow-sm before:transition-transform checked:bg-primary checked:before:translate-x-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Switch };
