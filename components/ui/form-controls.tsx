"use client";

import * as React from "react";
import { Search, Upload, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function RadioGroup({ options, value, onChange, name }: { options: { label: string; value: string }[]; value: string; onChange: (value: string) => void; name: string }) {
  return <div role="radiogroup" className="grid gap-3">{options.map((option) => <label key={option.value} className="flex items-center gap-3 text-sm"><input type="radio" name={name} value={option.value} checked={value === option.value} onChange={() => onChange(option.value)} className="size-4 accent-primary" />{option.label}</label>)}</div>;
}

export function RangeSlider({ value, onChange, min = 0, max = 100, step = 1 }: { value: number; onChange: (value: number) => void; min?: number; max?: number; step?: number }) {
  return <input type="range" value={value} min={min} max={max} step={step} onChange={(event) => onChange(Number(event.target.value))} className="h-2 w-full accent-primary" aria-label="Range" />;
}

export function MultiSelect({ options, value, onChange, placeholder = "Select options" }: { options: string[]; value: string[]; onChange: (value: string[]) => void; placeholder?: string }) {
  return <details className="group relative"><summary className="flex min-h-10 cursor-pointer list-none flex-wrap items-center gap-1 rounded-md border bg-background px-3 py-2 text-sm [&::-webkit-details-marker]:hidden">{value.length ? value.map((item) => <Badge key={item} variant="secondary">{item}</Badge>) : <span className="text-muted-foreground">{placeholder}</span>}</summary><div className="absolute left-0 top-11 z-20 grid w-full min-w-48 gap-1 rounded-lg border bg-background p-2 shadow-lg">{options.map((option) => <label key={option} className="flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-muted"><input type="checkbox" checked={value.includes(option)} onChange={() => onChange(value.includes(option) ? value.filter((item) => item !== option) : [...value, option])} />{option}</label>)}</div></details>;
}

export function SearchBar({ suggestions, onSearch }: { suggestions: string[]; onSearch?: (query: string) => void }) {
  const [query, setQuery] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => { const timer = window.setTimeout(() => onSearch?.(query), 250); return () => window.clearTimeout(timer); }, [query, onSearch]);
  const matches = suggestions.filter((item) => item.toLowerCase().includes(query.toLowerCase())).slice(0, 4);
  return <div className="relative"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setVisible(true); }} onFocus={() => setVisible(true)} onBlur={() => window.setTimeout(() => setVisible(false), 120)} placeholder="Search..." className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring/25" />{visible && query && matches.length > 0 && <div className="absolute left-0 right-0 top-11 z-30 rounded-lg border bg-background p-1 shadow-lg">{matches.map((match) => <button type="button" key={match} onMouseDown={() => setQuery(match)} className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-muted">{match}</button>)}</div>}</div>;
}

export function OtpInput({ length = 6, value, onChange }: { length?: number; value: string; onChange: (value: string) => void }) {
  const refs = React.useRef<Array<HTMLInputElement | null>>([]);
  return <div className="flex gap-2">{Array.from({ length }, (_, index) => <input key={index} ref={(element) => { refs.current[index] = element; }} value={value[index] ?? ""} inputMode="numeric" maxLength={1} aria-label={`Code digit ${index + 1}`} onChange={(event) => { const digit = event.target.value.replace(/\D/g, ""); const next = value.slice(0, index) + digit + value.slice(index + 1); onChange(next); if (digit) refs.current[index + 1]?.focus(); }} onKeyDown={(event) => { if (event.key === "Backspace" && !value[index]) refs.current[index - 1]?.focus(); }} className="size-10 rounded-md border bg-background text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-ring/25" />)}</div>;
}

export function FileDropzone({ accept, onChange }: { accept?: string; onChange?: (file: File | null) => void }) {
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const choose = (next: File | null) => { setFile(next); onChange?.(next); setPreview(next?.type.startsWith("image/") ? URL.createObjectURL(next) : null); };
  return <div className="grid gap-3"><label onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); choose(event.dataTransfer.files[0] ?? null); }} className="grid cursor-pointer justify-items-center gap-2 rounded-lg border border-dashed p-8 text-center hover:bg-muted/40"><Upload className="size-6 text-muted-foreground" /><span className="text-sm font-medium">Drop a file here or browse</span><span className="text-xs text-muted-foreground">Images and documents up to your app’s configured limit</span><input type="file" accept={accept} className="sr-only" onChange={(event) => choose(event.target.files?.[0] ?? null)} /></label>{file && <div className="flex items-center gap-3 rounded-md border p-3">{preview ? <img src={preview} alt="Selected file preview" className="size-12 rounded object-cover" /> : <span className="grid size-12 place-items-center rounded bg-muted text-xs font-semibold">FILE</span>}<div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{file.name}</p><p className="text-xs text-muted-foreground">{Math.ceil(file.size / 1024)} KB</p></div><button type="button" onClick={() => choose(null)} aria-label="Cancel upload" className="grid size-8 place-items-center rounded-md hover:bg-muted"><X className="size-4" /></button></div>}</div>;
}

export function DateTimeInput({ type = "date" }: { type?: "date" | "datetime-local" | "time" }) { return <input type={type} className={cn("h-10 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/25")} />; }
