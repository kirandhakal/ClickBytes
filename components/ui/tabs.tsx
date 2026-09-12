"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Tab = { value: string; label: string; content: React.ReactNode };

export function Tabs({ tabs, defaultValue, className }: { tabs: Tab[]; defaultValue?: string; className?: string }) {
  const [active, setActive] = React.useState(defaultValue ?? tabs[0]?.value);
  const activeTab = tabs.find((tab) => tab.value === active);

  return (
    <div className={cn("w-full", className)}>
      <div role="tablist" aria-label="Example tabs" className="inline-flex h-10 items-center rounded-md bg-muted p-1">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={active === tab.value}
            onClick={() => setActive(tab.value)}
            className="h-8 rounded px-3 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring aria-selected:bg-background aria-selected:text-foreground aria-selected:shadow-sm"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="pt-4 text-sm text-muted-foreground">
        {activeTab?.content}
      </div>
    </div>
  );
}
