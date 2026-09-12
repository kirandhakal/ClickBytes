"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
  delay?: number;
};

export function Reveal({ className, delay = 0, style, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { rootMargin: "0px 0px -48px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("motion-reveal", visible && "is-visible", className)}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    />
  );
}
