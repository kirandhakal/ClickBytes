import * as React from "react";
import { cn } from "@/lib/utils";

export function Stagger({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("motion-stagger", className)} {...props} />;
}

export function StaggerItem({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("motion-stagger-item", className)} {...props} />;
}
