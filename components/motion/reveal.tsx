import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
  delay?: number;
};

export function Reveal({ className, delay = 0, style, ...props }: RevealProps) {
  return (
    <div
      className={cn("motion-reveal", className)}
      style={{ ...style, animationDelay: `${delay}ms` }}
      {...props}
    />
  );
}
