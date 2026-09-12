import * as React from "react";
import { cn } from "@/lib/utils";

export function HoverLift({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("motion-hover-lift", className)} {...props} />;
}
