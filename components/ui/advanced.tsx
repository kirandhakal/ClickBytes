"use client";

import * as React from "react";
import { CalendarDays, MessageCircle, Search, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CommandPalette({ open, onClose, onOpen, items }: { open: boolean; onClose: () => void; onOpen?: () => void; items: { label: string; shortcut?: string; onSelect?: () => void }[] }) {
  const [query, setQuery] = React.useState("");
  React.useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); onOpen?.(); } if (event.key === "Escape") onClose(); }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, [onClose, onOpen]);
  if (!open) return null;
  const matches = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  return <div className="fixed inset-0 z-[120] grid place-items-start bg-black/40 p-4 pt-[15vh]" role="presentation"><button className="absolute inset-0" aria-label="Close command palette" onClick={onClose} /><div role="dialog" aria-modal="true" aria-label="Command palette" className="relative mx-auto w-full max-w-lg overflow-hidden rounded-lg border bg-background shadow-xl"><div className="flex items-center gap-2 border-b px-4"><Search className="size-4 text-muted-foreground" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search commands..." className="h-12 flex-1 bg-transparent text-sm outline-none" /></div><div className="max-h-72 overflow-y-auto p-2">{matches.length ? matches.map((item) => <button type="button" key={item.label} onClick={() => { item.onSelect?.(); onClose(); }} className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm hover:bg-muted"><span>{item.label}</span>{item.shortcut && <kbd className="text-xs text-muted-foreground">{item.shortcut}</kbd>}</button>) : <p className="p-4 text-sm text-muted-foreground">No commands found.</p>}</div></div></div>;
}

export function CookieConsent({ onAccept }: { onAccept?: () => void }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => { const timer = window.setTimeout(() => setVisible(localStorage.getItem("cookie-consent") !== "accepted"), 0); return () => window.clearTimeout(timer); }, []);
  if (!visible) return null;
  return <div role="dialog" aria-label="Cookie consent" className="fixed bottom-4 left-4 z-[90] max-w-sm rounded-lg border bg-background p-4 shadow-xl"><p className="text-sm font-semibold">Cookies and privacy</p><p className="mt-1 text-xs leading-5 text-muted-foreground">This starter leaves consent choices to your product policy. Add your analytics details here.</p><div className="mt-4 flex gap-2"><Button size="sm" onClick={() => { localStorage.setItem("cookie-consent", "accepted"); setVisible(false); onAccept?.(); }}>Accept</Button><Button size="sm" variant="outline" onClick={() => setVisible(false)}>Dismiss</Button></div></div>;
}

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => { const handler = () => setVisible(window.scrollY > 500); window.addEventListener("scroll", handler, { passive: true }); return () => window.removeEventListener("scroll", handler); }, []);
  if (!visible) return null;
  return <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 z-40 grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">↑</button>;
}

export function LanguageSwitcher({ languages = ["English", "Nepali", "Spanish"] }: { languages?: string[] }) { return <label className="flex items-center gap-2 text-sm">Language<select aria-label="Language" className="h-9 rounded-md border bg-background px-2 text-sm" defaultValue={languages[0]}>{languages.map((language) => <option key={language}>{language}</option>)}</select></label>; }

export function FilterPanel({ options, selected, onChange }: { options: string[]; selected: string[]; onChange: (selected: string[]) => void }) { return <fieldset className="grid gap-3"><legend className="text-sm font-semibold">Filter by</legend>{options.map((option) => <label key={option} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={selected.includes(option)} onChange={() => onChange(selected.includes(option) ? selected.filter((item) => item !== option) : [...selected, option])} />{option}</label>)}</fieldset>; }

export function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  return <div className="fixed bottom-5 right-5 z-40">{open && <div className="mb-3 w-72 rounded-lg border bg-background p-4 shadow-xl"><div className="flex items-center justify-between"><p className="text-sm font-semibold">Chat with the team</p><button type="button" onClick={() => setOpen(false)} aria-label="Close chat"><X className="size-4" /></button></div><p className="mt-2 text-xs leading-5 text-muted-foreground">This is a frontend shell. Connect it to your support provider or API.</p><div className="mt-3 flex gap-2"><input aria-label="Chat message" placeholder="Write a message..." className="h-9 min-w-0 flex-1 rounded border px-2 text-xs" /><Button size="icon" aria-label="Send chat message"><Send className="size-4" /></Button></div></div>}<button type="button" aria-label={open ? "Close chat" : "Open chat"} onClick={() => setOpen((current) => !current)} className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">{open ? <X /> : <MessageCircle />}</button></div>;
}

export function CalendarView({ selected, onSelect }: { selected?: Date; onSelect?: (date: Date) => void }) {
  const month = selected ?? new Date();
  const first = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  return <div className="w-full max-w-sm rounded-lg border p-4"><div className="mb-4 flex items-center gap-2 text-sm font-semibold"><CalendarDays className="size-4" />{month.toLocaleDateString("en", { month: "long", year: "numeric" })}</div><div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => <span key={day} className="py-1">{day}</span>)}{Array.from({ length: first }, (_, index) => <span key={`blank-${index}`} />)}{Array.from({ length: days }, (_, index) => { const day = index + 1; return <button key={day} type="button" onClick={() => onSelect?.(new Date(month.getFullYear(), month.getMonth(), day))} className="grid aspect-square place-items-center rounded hover:bg-muted">{day}</button>; })}</div></div>;
}

export function KanbanBoard({ columns }: { columns: { title: string; items: string[] }[] }) {
  const [board, setBoard] = React.useState(columns);
  const [dragged, setDragged] = React.useState<{ column: number; item: string } | null>(null);
  const move = (target: number) => { if (!dragged || dragged.column === target) return; setBoard((current) => current.map((column, index) => index === dragged.column ? { ...column, items: column.items.filter((item) => item !== dragged.item) } : index === target ? { ...column, items: [...column.items, dragged.item] } : column)); setDragged(null); };
  return <div className="grid gap-4 md:grid-cols-3">{board.map((column, columnIndex) => <div key={column.title} onDragOver={(event) => event.preventDefault()} onDrop={() => move(columnIndex)} className="min-h-40 rounded-lg bg-muted/50 p-3"><h3 className="text-sm font-semibold">{column.title}</h3><div className="mt-3 grid gap-2">{column.items.map((item) => <div draggable key={item} onDragStart={() => setDragged({ column: columnIndex, item })} className="cursor-grab rounded-md border bg-background p-3 text-sm shadow-sm active:cursor-grabbing">{item}</div>)}</div></div>)}</div>;
}

export function InfiniteList({ items, loadMore }: { items: string[]; loadMore?: () => void }) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => { const node = ref.current; if (!node || !loadMore) return; const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && loadMore()); observer.observe(node); return () => observer.disconnect(); }, [loadMore]);
  return <div className="grid gap-2">{items.map((item) => <div key={item} className="rounded-md border p-3 text-sm">{item}</div>)}<div ref={ref} className="h-1" aria-hidden="true" /></div>;
}
