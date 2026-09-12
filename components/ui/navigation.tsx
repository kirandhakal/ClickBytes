"use client";

import * as React from "react";
import { ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type NavItem = { label: string; href: string; description?: string };

export function MegaMenu({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground [&::-webkit-details-marker]:hidden">
        {label}<ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
      </summary>
      <div className="absolute left-0 top-11 z-50 grid w-80 gap-1 rounded-lg border bg-background p-2 shadow-lg">
        {items.map((item) => <a key={item.href} href={item.href} className="rounded-md p-3 hover:bg-muted"><span className="block text-sm font-medium">{item.label}</span>{item.description && <span className="mt-1 block text-xs text-muted-foreground">{item.description}</span>}</a>)}
      </div>
    </details>
  );
}

export function SidebarNav({ items, active }: { items: NavItem[]; active?: string }) {
  return <nav aria-label="Sidebar navigation" className="grid gap-1">{items.map((item) => <a key={item.href} href={item.href} aria-current={active === item.href ? "page" : undefined} className={cn("rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground", active === item.href && "bg-muted font-semibold text-foreground")}>{item.label}</a>)}</nav>;
}

export function DrawerPanel({ open, onClose, title = "Menu", side = "right", children }: { open: boolean; onClose: () => void; title?: string; side?: "left" | "right"; children: React.ReactNode }) {
  React.useEffect(() => { if (!open) return; const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose(); document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); }; }, [open, onClose]);
  if (!open) return null;
  return <div className="fixed inset-0 z-[100]" role="presentation"><button aria-label="Close drawer" className="absolute inset-0 bg-black/45" onClick={onClose} /><aside role="dialog" aria-modal="true" aria-label={title} className={cn("absolute inset-y-0 flex w-[min(22rem,90vw)] flex-col bg-background p-5 shadow-xl motion-slide-right", side === "right" ? "right-0" : "left-0")}>{<div className="flex items-center justify-between gap-3 border-b pb-4"><h2 className="font-semibold">{title}</h2><button type="button" onClick={onClose} aria-label="Close drawer" className="grid size-9 place-items-center rounded-md hover:bg-muted"><X className="size-4" /></button></div>}<div className="min-h-0 flex-1 overflow-y-auto py-5">{children}</div></aside></div>;
}

export function Pagination({ page, pageCount, onPageChange }: { page: number; pageCount: number; onPageChange: (page: number) => void }) {
  return <nav aria-label="Pagination" className="flex items-center gap-1"><button type="button" disabled={page <= 1} onClick={() => onPageChange(page - 1)} className="grid size-9 place-items-center rounded-md border disabled:opacity-40" aria-label="Previous page"><ChevronLeft className="size-4" /></button>{Array.from({ length: pageCount }, (_, index) => index + 1).map((item) => <button type="button" key={item} aria-current={page === item ? "page" : undefined} onClick={() => onPageChange(item)} className={cn("grid size-9 place-items-center rounded-md text-sm hover:bg-muted", page === item && "bg-primary text-primary-foreground")}>{item}</button>)}<button type="button" disabled={page >= pageCount} onClick={() => onPageChange(page + 1)} className="grid size-9 place-items-center rounded-md border disabled:opacity-40" aria-label="Next page"><ChevronRight className="size-4" /></button></nav>;
}

export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return <ol className="flex items-start">{steps.map((step, index) => <li key={step} className={cn("flex min-w-0 flex-1 items-start", index < steps.length - 1 && "after:mt-4 after:h-px after:flex-1 after:bg-border") }><div className="grid shrink-0 justify-items-center gap-2"><span className={cn("grid size-8 place-items-center rounded-full border text-xs font-semibold", index < current && "border-primary bg-primary text-primary-foreground", index === current && "ring-2 ring-ring/30", index > current && "text-muted-foreground")}>{index < current ? "✓" : index + 1}</span><span className="max-w-24 text-center text-xs text-muted-foreground">{step}</span></div></li>)}</ol>;
}

export function DropdownMenu({ label, items }: { label: string; items: { label: string; onSelect?: () => void; destructive?: boolean }[] }) {
  return <details className="group relative"><summary className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-md border bg-background px-3 text-sm font-medium hover:bg-muted [&::-webkit-details-marker]:hidden">{label}<ChevronDown className="size-4" /></summary><div className="absolute right-0 top-11 z-50 grid min-w-40 gap-1 rounded-lg border bg-background p-1 shadow-lg">{items.map((item) => <button type="button" key={item.label} onClick={item.onSelect} className={cn("rounded px-3 py-2 text-left text-sm hover:bg-muted", item.destructive && "text-destructive")}>{item.label}</button>)}</div></details>;
}

export function ContextMenu({ items, children }: { items: { label: string; onSelect?: () => void }[]; children: React.ReactNode }) {
  const [position, setPosition] = React.useState<{ x: number; y: number } | null>(null);
  return <div className="relative" onContextMenu={(event) => { event.preventDefault(); setPosition({ x: event.clientX, y: event.clientY }); }} onClick={() => setPosition(null)}><div>{children}</div>{position && <div className="fixed z-[120] grid min-w-40 gap-1 rounded-lg border bg-background p-1 shadow-lg" style={{ left: position.x, top: position.y }} onClick={(event) => event.stopPropagation()}>{items.map((item) => <button type="button" key={item.label} onClick={() => { item.onSelect?.(); setPosition(null); }} className="rounded px-3 py-2 text-left text-sm hover:bg-muted">{item.label}</button>)}</div>}</div>;
}

export function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
  return <span className="group/tooltip relative inline-flex">{children}<span role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100">{label}</span></span>;
}

export function Popover({ label, children }: { label: string; children: React.ReactNode }) {
  return <details className="group/popover relative"><summary className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-md border bg-background px-3 text-sm font-medium hover:bg-muted [&::-webkit-details-marker]:hidden">{label}<MoreHorizontal className="size-4" /></summary><div className="absolute right-0 top-11 z-50 w-64 rounded-lg border bg-background p-4 shadow-lg">{children}</div></details>;
}
