"use client";

import * as React from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProgressCircle({ value, size = 64, stroke = 6 }: { value: number; size?: number; stroke?: number }) {
  const safe = Math.min(100, Math.max(0, value));
  const radius = (size - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  return <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}><svg width={size} height={size} className="-rotate-90"><circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-muted" /><circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" className="text-primary transition-[stroke-dashoffset]" style={{ strokeDasharray: circumference, strokeDashoffset: circumference - safe / 100 * circumference }} /></svg><span className="absolute text-xs font-semibold">{safe}%</span></div>;
}

export function Avatar({ src, alt, fallback, size = "default" }: { src?: string; alt?: string; fallback: string; size?: "sm" | "default" | "lg" }) {
  return <span className={cn("inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-muted font-semibold text-muted-foreground", size === "sm" ? "size-7 text-[10px]" : size === "lg" ? "size-14 text-lg" : "size-10 text-sm")}>{src ? <img src={src} alt={alt ?? fallback} className="size-full object-cover" onError={(event) => { event.currentTarget.style.display = "none"; }} /> : fallback.slice(0, 2).toUpperCase()}</span>;
}

export function Stat({ label, value, trend, icon }: { label: string; value: string; trend?: string; icon?: React.ReactNode }) {
  return <div className="grid gap-2 rounded-lg border p-5"><div className="flex items-center justify-between gap-3 text-sm text-muted-foreground"><span>{label}</span>{icon}</div><p className="text-3xl font-bold">{value}</p>{trend && <p className="text-xs font-medium text-success-foreground">{trend}</p>}</div>;
}

export function Timeline({ items }: { items: { title: string; description: string; date: string }[] }) {
  return <ol className="grid gap-6">{items.map((item, index) => <li key={`${item.title}-${index}`} className="relative flex gap-4"><span className="relative mt-1 grid size-3 shrink-0 place-items-center rounded-full bg-primary ring-4 ring-primary/15">{index < items.length - 1 && <span className="absolute top-3 h-16 w-px bg-border" />}</span><div className="-mt-1"><p className="text-xs text-muted-foreground">{item.date}</p><h3 className="mt-1 text-sm font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p></div></li>)}</ol>;
}

export function Accordion({ items }: { items: { title: string; content: React.ReactNode }[] }) {
  return <div className="divide-y rounded-lg border">{items.map((item) => <details key={item.title} className="group p-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">{item.title}<ChevronDown className="size-4 transition-transform group-open:rotate-180" /></summary><div className="pt-3 text-sm leading-6 text-muted-foreground">{item.content}</div></details>)}</div>;
}

export function Carousel({ items }: { items: React.ReactNode[] }) {
  const [index, setIndex] = React.useState(0);
  return <div className="grid gap-3"><div className="min-h-24 rounded-lg border p-5">{items[index]}</div><div className="flex items-center justify-between"><button type="button" aria-label="Previous slide" disabled={index === 0} onClick={() => setIndex((current) => current - 1)} className="grid size-8 place-items-center rounded-md border disabled:opacity-40"><ChevronLeft className="size-4" /></button><span className="text-xs text-muted-foreground">{index + 1} / {items.length}</span><button type="button" aria-label="Next slide" disabled={index === items.length - 1} onClick={() => setIndex((current) => current + 1)} className="grid size-8 place-items-center rounded-md border disabled:opacity-40"><ChevronRight className="size-4" /></button></div></div>;
}

export function Rating({ value, onChange, label = "Rating" }: { value: number; onChange?: (value: number) => void; label?: string }) {
  return <div role="group" aria-label={label} className="flex items-center gap-1">{Array.from({ length: 5 }, (_, index) => { const rating = index + 1; return <button key={rating} type="button" disabled={!onChange} aria-label={`${rating} stars`} onClick={() => onChange?.(rating)} className="disabled:cursor-default"><Star className={cn("size-5", rating <= value ? "fill-warning text-warning" : "text-muted-foreground/40")} /></button>; })}</div>;
}

export function Table<T extends Record<string, unknown>>({ rows, columns }: { rows: T[]; columns: { key: keyof T; label: string }[] }) {
  const [sort, setSort] = React.useState<keyof T | null>(null);
  const [ascending, setAscending] = React.useState(true);
  const [filter, setFilter] = React.useState("");
  const filtered = rows.filter((row) => Object.values(row).some((value) => String(value).toLowerCase().includes(filter.toLowerCase())));
  const sorted = [...filtered].sort((a, b) => sort ? String(a[sort]).localeCompare(String(b[sort])) * (ascending ? 1 : -1) : 0);
  return <div className="overflow-hidden rounded-lg border"><div className="border-b p-3"><input aria-label="Filter table" value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Filter rows..." className="h-9 w-full max-w-xs rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/25" /></div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-muted/50 text-xs uppercase text-muted-foreground"><tr>{columns.map((column) => <th key={String(column.key)} className="px-4 py-3"><button type="button" onClick={() => { setSort(column.key); setAscending((current) => sort === column.key ? !current : true); }} className="font-semibold hover:text-foreground">{column.label}</button></th>)}</tr></thead><tbody className="divide-y">{sorted.map((row, index) => <tr key={index} className="hover:bg-muted/30">{columns.map((column) => <td key={String(column.key)} className="whitespace-nowrap px-4 py-3">{String(row[column.key])}</td>)}</tr>)}</tbody></table></div></div>;
}
