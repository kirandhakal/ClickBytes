import * as React from "react";
import { cn } from "@/lib/utils";

export type MotionVariant =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "blur";

type MotionProps = React.ComponentProps<"div"> & {
  variant?: MotionVariant;
  delay?: number;
  duration?: number;
};

export function Motion({ variant = "fade", delay = 0, duration = 500, className, style, ...props }: MotionProps) {
  return (
    <div
      className={cn("motion-enter", `motion-${variant}`, className)}
      style={{ ...style, animationDelay: `${delay}ms`, animationDuration: `${duration}ms` }}
      {...props}
    />
  );
}

export function FadeIn(props: Omit<MotionProps, "variant">) {
  return <Motion variant="fade" {...props} />;
}

export function ScaleIn(props: Omit<MotionProps, "variant">) {
  return <Motion variant="scale" {...props} />;
}

export function BlurIn(props: Omit<MotionProps, "variant">) {
  return <Motion variant="blur" {...props} />;
}

export function SlideIn({ direction = "up", ...props }: Omit<MotionProps, "variant"> & { direction?: "up" | "down" | "left" | "right" }) {
  return <Motion variant={`slide-${direction}`} {...props} />;
}
