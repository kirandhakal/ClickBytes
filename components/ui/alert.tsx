import * as React from "react";
import { CircleAlert, CircleCheck, CircleX, Info, TriangleAlert } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva("grid grid-cols-[auto_1fr] gap-x-3 rounded-lg border p-4 text-sm", {
  variants: {
    variant: {
      info: "border-primary/25 bg-primary/8 text-foreground",
      success: "border-success/30 bg-success/10 text-foreground",
      warning: "border-warning/40 bg-warning/12 text-foreground",
      destructive: "border-destructive/30 bg-destructive/8 text-foreground",
    },
  },
  defaultVariants: { variant: "info" },
});

const icons = { info: Info, success: CircleCheck, warning: TriangleAlert, destructive: CircleX };

type AlertProps = React.ComponentProps<"div"> & VariantProps<typeof alertVariants>;

function Alert({ variant = "info", className, children, ...props }: AlertProps) {
  const Icon = icons[variant ?? "info"] ?? CircleAlert;
  return <div role={variant === "destructive" ? "alert" : "status"} className={cn(alertVariants({ variant }), className)} {...props}><Icon aria-hidden="true" className="mt-0.5 size-4" /><div className="min-w-0">{children}</div></div>;
}

function AlertTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("font-semibold leading-5", className)} {...props} />;
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mt-1 leading-5 text-muted-foreground", className)} {...props} />;
}

export { Alert, AlertTitle, AlertDescription, alertVariants };
