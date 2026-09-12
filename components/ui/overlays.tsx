"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type OverlayProps = { open: boolean; onClose: () => void; title: string; children: React.ReactNode; className?: string };

function OverlayFrame({ open, onClose, title, children, className }: OverlayProps) {
  React.useEffect(() => { if (!open) return; const handleKey = (event: KeyboardEvent) => event.key === "Escape" && onClose(); window.addEventListener("keydown", handleKey); document.body.style.overflow = "hidden"; return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; }; }, [open, onClose]);
  if (!open) return null;
  return <div className="fixed inset-0 z-[100] grid place-items-center p-4" role="presentation"><button className="absolute inset-0 bg-black/50" aria-label="Close dialog" onClick={onClose} /><section role="dialog" aria-modal="true" aria-labelledby="overlay-title" className={cn("relative max-h-[min(42rem,90dvh)] w-full max-w-lg overflow-y-auto rounded-lg border bg-background p-6 shadow-xl motion-scale", className)}><div className="flex items-start justify-between gap-4"><h2 id="overlay-title" className="text-lg font-semibold">{title}</h2><button type="button" onClick={onClose} aria-label="Close" className="grid size-8 place-items-center rounded-md hover:bg-muted"><X className="size-4" /></button></div><div className="mt-5">{children}</div></section></div>;
}

export function Modal(props: OverlayProps) { return <OverlayFrame {...props} />; }

export function ConfirmationDialog({ open, onClose, onConfirm, title = "Are you sure?", description = "This action cannot be undone." }: { open: boolean; onClose: () => void; onConfirm: () => void; title?: string; description?: string }) {
  return <OverlayFrame open={open} onClose={onClose} title={title}><p className="text-sm leading-6 text-muted-foreground">{description}</p><div className="mt-6 flex justify-end gap-2"><Button variant="outline" onClick={onClose}>Cancel</Button><Button variant="destructive" onClick={() => { onConfirm(); onClose(); }}>Confirm</Button></div></OverlayFrame>;
}

export function PreviewModal({ open, onClose, src, alt, title }: { open: boolean; onClose: () => void; src: string; alt: string; title?: string }) {
  return <OverlayFrame open={open} onClose={onClose} title={title ?? alt} className="max-w-4xl"><img src={src} alt={alt} className="max-h-[68dvh] w-full rounded-md object-contain" /></OverlayFrame>;
}

export function Drawer({ open, onClose, title, children, side = "right" }: OverlayProps & { side?: "left" | "right" }) {
  React.useEffect(() => { if (!open) return; document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; }; }, [open]);
  if (!open) return null;
  return <div className="fixed inset-0 z-[100]" role="presentation"><button aria-label="Close drawer" className="absolute inset-0 bg-black/45" onClick={onClose} /><aside role="dialog" aria-modal="true" aria-labelledby="drawer-title" className={cn("absolute inset-y-0 flex w-[min(28rem,92vw)] flex-col bg-background p-6 shadow-xl", side === "right" ? "right-0 motion-slide-left" : "left-0 motion-slide-right")}><div className="flex items-center justify-between border-b pb-4"><h2 id="drawer-title" className="font-semibold">{title}</h2><button type="button" aria-label="Close drawer" onClick={onClose} className="grid size-8 place-items-center rounded-md hover:bg-muted"><X className="size-4" /></button></div><div className="min-h-0 flex-1 overflow-y-auto py-5">{children}</div></aside></div>;
}

type ToastMessage = { id: number; title: string; description?: string; variant?: "default" | "success" | "error" };
type ToastContextValue = { toast: (message: Omit<ToastMessage, "id">) => void };
const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = React.useState<ToastMessage[]>([]);
  const toast = React.useCallback((message: Omit<ToastMessage, "id">) => { const id = Date.now(); setMessages((current) => [...current, { ...message, id }]); window.setTimeout(() => setMessages((current) => current.filter((item) => item.id !== id)), 4000); }, []);
  return <ToastContext.Provider value={{ toast }}>{children}<div className="fixed bottom-4 right-4 z-[110] grid w-[min(24rem,calc(100vw-2rem))] gap-2" aria-live="polite">{messages.map((message) => <div key={message.id} className={cn("rounded-lg border bg-background p-4 shadow-lg motion-slide-left", message.variant === "success" && "border-success/40", message.variant === "error" && "border-destructive/40")}><div className="flex gap-3"><span className={cn("grid size-6 shrink-0 place-items-center rounded-full bg-muted", message.variant === "success" && "bg-success/15 text-success-foreground", message.variant === "error" && "bg-destructive/10 text-destructive")}>{message.variant === "success" ? <Check className="size-4" /> : message.variant === "error" ? <X className="size-4" /> : null}</span><div><p className="text-sm font-semibold">{message.title}</p>{message.description && <p className="mt-1 text-xs text-muted-foreground">{message.description}</p>}</div></div></div>)}</div></ToastContext.Provider>;
}

export function useToast() { const context = React.useContext(ToastContext); if (!context) throw new Error("useToast must be used within ToastProvider"); return context; }
