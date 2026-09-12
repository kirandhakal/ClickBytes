"use client";

import * as React from "react";
import { Bell, Check, Command, Trash2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Accordion, Avatar, Carousel, ProgressCircle, Rating, Stat, Table, Timeline } from "@/components/ui/data-display";
import { DateTimeInput, FileDropzone, MultiSelect, OtpInput, RadioGroup, RangeSlider, SearchBar } from "@/components/ui/form-controls";
import { BackToTop, CalendarView, ChatWidget, CommandPalette, CookieConsent, FilterPanel, InfiniteList, KanbanBoard, LanguageSwitcher } from "@/components/ui/advanced";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, ConfirmationDialog, Modal, PreviewModal, useToast } from "@/components/ui/overlays";
import { DropdownMenu, MegaMenu, Pagination, Popover, SidebarNav, Stepper, Tooltip } from "@/components/ui/navigation";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { EmptyState } from "@/components/ui/empty-state";

const rows = [{ name: "Design system", status: "Active", owner: "Maya" }, { name: "Marketing site", status: "Draft", owner: "Arun" }, { name: "Mobile app", status: "Review", owner: "Lina" }];
const previewImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%232875bd'/%3E%3Ccircle cx='480' cy='270' r='130' fill='%23f1b43f'/%3E%3C/svg%3E";

export function PatternsShowcase() {
  const [drawer, setDrawer] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [preview, setPreview] = React.useState(false);
  const [commands, setCommands] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [rating, setRating] = React.useState(4);
  const [otp, setOtp] = React.useState("");
  const [range, setRange] = React.useState(60);
  const [tags, setTags] = React.useState<string[]>(["Product"]);
  const [filters, setFilters] = React.useState<string[]>([]);
  const { toast } = useToast();
  const search = React.useCallback((query: string) => { if (query) toast({ title: `Searching for “${query}”`, variant: "success" }); }, [toast]);

  return (
    <>
      <section className="border-b py-12 sm:py-16"><div className="container"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Patterns" }]} /><div className="mt-8 max-w-3xl"><Badge variant="secondary">Component lab</Badge><h1 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">Frontend patterns ready to copy</h1><p className="mt-4 text-lg leading-8 text-muted-foreground">A working index of navigation, overlays, data display, forms, and advanced UI utilities included in this starter.</p></div></div></section>

      <section className="container py-12"><div className="grid gap-12">
        <div><h2 className="mb-5 text-2xl font-bold">Navigation</h2><div className="grid gap-5 lg:grid-cols-3"><Card><CardHeader><CardTitle>Mega menu</CardTitle><CardDescription>Desktop-friendly grouped navigation.</CardDescription></CardHeader><CardContent><MegaMenu label="Explore" items={[{ label: "Components", href: "/#components", description: "Reusable UI primitives" }, { label: "Blog", href: "/blogs", description: "Typed dynamic content" }]} /></CardContent></Card><Card><CardHeader><CardTitle>Sidebar / drawer</CardTitle><CardDescription>Use a sidebar on wide layouts and a drawer on small screens.</CardDescription></CardHeader><CardContent className="flex gap-2"><Button onClick={() => setDrawer(true)}>Open drawer</Button><Drawer open={drawer} onClose={() => setDrawer(false)} title="Project navigation"><SidebarNav active="/patterns" items={[{ label: "Overview", href: "/" }, { label: "Patterns", href: "/patterns" }, { label: "Settings", href: "#" }]} /></Drawer><DropdownMenu label="Actions" items={[{ label: "Duplicate" }, { label: "Delete", destructive: true }]} /></CardContent></Card><Card><CardHeader><CardTitle>Step and page navigation</CardTitle></CardHeader><CardContent className="grid gap-6"><Stepper current={1} steps={["Details", "Review", "Publish"]} /><Pagination page={page} pageCount={3} onPageChange={setPage} /></CardContent></Card></div></div>

        <div><h2 className="mb-5 text-2xl font-bold">Overlays and feedback</h2><div className="grid gap-5 lg:grid-cols-2"><Card><CardHeader><CardTitle>Modal, confirmation, preview</CardTitle><CardDescription>Dialogs close on Escape and clicking the backdrop.</CardDescription></CardHeader><CardContent className="flex flex-wrap gap-2"><Button onClick={() => setModal(true)}>Open modal</Button><Button variant="outline" onClick={() => setConfirm(true)}><Trash2 />Confirm delete</Button><Button variant="outline" onClick={() => setPreview(true)}>Preview image</Button><Modal open={modal} onClose={() => setModal(false)} title="Example modal"><p className="text-sm leading-6 text-muted-foreground">Use this surface for focused tasks, forms, or short explanations.</p><Button className="mt-5" onClick={() => setModal(false)}>Done</Button></Modal><ConfirmationDialog open={confirm} onClose={() => setConfirm(false)} onConfirm={() => toast({ title: "Item deleted", variant: "success" })} /><PreviewModal open={preview} onClose={() => setPreview(false)} src={previewImage} alt="Abstract blue and yellow preview" title="Image preview" /></CardContent></Card><Card><CardHeader><CardTitle>Toast, tooltip, popover</CardTitle></CardHeader><CardContent className="flex flex-wrap items-center gap-3"><Button onClick={() => toast({ title: "Notification sent", description: "The team will receive an update.", variant: "success" })}><Bell />Show toast</Button><Tooltip label="Helpful context"><Button size="icon" variant="outline" aria-label="Show tooltip"><Command /></Button></Tooltip><Popover label="More"><p className="text-sm text-muted-foreground">A small contextual surface anchored to an action.</p></Popover></CardContent></Card></div></div>

        <div><h2 className="mb-5 text-2xl font-bold">Status and data display</h2><div className="grid gap-5 lg:grid-cols-2"><Card><CardHeader><CardTitle>Progress and metrics</CardTitle></CardHeader><CardContent className="grid gap-6"><div className="flex items-center gap-6"><ProgressCircle value={72} /><Progress value={42} label="Data import" className="flex-1" /></div><div className="grid gap-3 sm:grid-cols-3"><Stat label="Revenue" value="$48k" trend="+12.4%" /><Stat label="Users" value="12.8k" trend="+8.1%" /><Stat label="Uptime" value="99.9%" /></div><div className="flex items-center gap-3"><Avatar fallback="ML" size="lg" /><Avatar fallback="RK" /><Avatar fallback="JS" size="sm" /><span className="text-sm text-muted-foreground">Avatar fallback initials</span></div></CardContent></Card><Card><CardHeader><CardTitle>Table with filtering and sorting</CardTitle></CardHeader><CardContent><Table rows={rows} columns={[{ key: "name", label: "Project" }, { key: "status", label: "Status" }, { key: "owner", label: "Owner" }]} /></CardContent></Card><Card><CardHeader><CardTitle>Accordion and carousel</CardTitle></CardHeader><CardContent className="grid gap-5"><Accordion items={[{ title: "What is this starter?", content: "A local, editable foundation for Next.js projects." }, { title: "Can I replace the data layer?", content: "Yes. Keep the route contracts and replace the fetcher implementation." }]} /><Carousel items={["First slide content", "Second slide content", "Third slide content"]} /></CardContent></Card><Card><CardHeader><CardTitle>Timeline and rating</CardTitle></CardHeader><CardContent className="grid gap-6"><Timeline items={[{ date: "Today", title: "Design approved", description: "The team approved the latest direction." }, { date: "Yesterday", title: "Prototype shared", description: "A working prototype went to review." }]} /><div className="flex items-center gap-3"><Rating value={rating} onChange={setRating} /><span className="text-sm text-muted-foreground">{rating}/5</span></div></CardContent></Card></div></div>

        <div><h2 className="mb-5 text-2xl font-bold">Forms and input patterns</h2><div className="grid gap-5 lg:grid-cols-2"><Card><CardHeader><CardTitle>Selection and search</CardTitle></CardHeader><CardContent className="grid gap-5"><SearchBar suggestions={["Design system", "Marketing site", "Mobile app"]} onSearch={search} /><MultiSelect options={["Product", "Design", "Engineering", "Marketing"]} value={tags} onChange={setTags} /><RadioGroup name="plan" value="pro" onChange={() => {}} options={[{ label: "Starter", value: "starter" }, { label: "Pro", value: "pro" }]} /><div className="grid gap-2"><label className="text-sm font-medium">Range: {range}</label><RangeSlider value={range} onChange={setRange} /></div></CardContent></Card><Card><CardHeader><CardTitle>Date, OTP, and upload</CardTitle></CardHeader><CardContent className="grid gap-5"><div className="flex flex-wrap gap-2"><DateTimeInput type="date" /><DateTimeInput type="time" /></div><OtpInput value={otp} onChange={setOtp} /><FileDropzone accept="image/*,.pdf" /></CardContent></Card></div></div>

        <div><h2 className="mb-5 text-2xl font-bold">Advanced utilities</h2><div className="grid gap-5 lg:grid-cols-2"><Card><CardHeader><CardTitle>Command, filters, language</CardTitle></CardHeader><CardContent className="grid gap-5"><Button variant="outline" onClick={() => setCommands(true)}><Command />Open command palette <kbd className="ml-auto text-xs text-muted-foreground">⌘K</kbd></Button><CommandPalette open={commands} onClose={() => setCommands(false)} items={[{ label: "Go to dashboard", shortcut: "G D" }, { label: "Create project", shortcut: "C" }, { label: "Open settings" }]} /><FilterPanel options={["Active", "Draft", "Review"]} selected={filters} onChange={setFilters} /><LanguageSwitcher /></CardContent></Card><Card><CardHeader><CardTitle>Calendar, Kanban, infinite list</CardTitle></CardHeader><CardContent className="grid gap-6"><CalendarView /><KanbanBoard columns={[{ title: "Todo", items: ["Write brief"] }, { title: "Doing", items: ["Build UI"] }, { title: "Done", items: ["Set up repo"] }]} /><InfiniteList items={["First item", "Second item", "Third item"]} /></CardContent></Card></div></div>

        <div className="grid gap-4 md:grid-cols-2"><Alert variant="success"><AlertTitle>Success state</AlertTitle><AlertDescription>Everything is synced and ready to continue.</AlertDescription></Alert><Alert variant="destructive"><AlertTitle>Failed state</AlertTitle><AlertDescription>Something went wrong. Retry or contact support.</AlertDescription></Alert><EmptyState title="Nothing here yet" description="This empty state is ready for a first-action CTA." action={<Button size="sm"><Check />Create one</Button>} /><div className="grid place-items-center rounded-lg border p-8"><Spinner label="Loading next page..." /></div></div>
      </div></section>
      <CookieConsent /><BackToTop /><ChatWidget />
    </>
  );
}
