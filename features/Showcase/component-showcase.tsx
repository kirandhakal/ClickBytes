"use client";

import * as React from "react";
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  LoaderCircle,
  Mail,
  Plus,
  Sparkles,
} from "lucide-react";
import foundations from "@/data/showcase/foundations.json";
import type { ShowcaseData } from "@/types/showcase";
import { BlurIn, FadeIn, HoverLift, Reveal, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import { FeedbackShowcase } from "@/features/Showcase/feedback-showcase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Tabs } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const content = foundations as ShowcaseData;

const colors = [
  { name: "Primary", className: "bg-primary" },
  { name: "Accent", className: "bg-accent" },
  { name: "Success", className: "bg-success" },
  { name: "Warning", className: "bg-warning" },
  { name: "Danger", className: "bg-destructive" },
  { name: "Muted", className: "bg-muted" },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 text-xs font-semibold uppercase text-primary">{eyebrow}</p>
      <h2 className="text-balance text-2xl font-bold sm:text-3xl">{title}</h2>
      <p className="mt-3 text-pretty text-muted-foreground">{description}</p>
    </div>
  );
}

export function ComponentShowcase() {
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  function showLoading() {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 1400);
  }

  async function copyInstallCommand() {
    await navigator.clipboard.writeText("npm install");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <>
      <section id="foundation" className="border-b py-16 sm:py-20">
        <div className="container grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <Reveal className="max-w-3xl">
            <Badge variant="secondary" className="mb-5 gap-1.5"><Sparkles className="size-3" />{content.eyebrow}</Badge>
            <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{content.title}</h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">{content.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="#components">Explore components<ArrowRight /></a></Button>
              <Button size="lg" variant="outline" onClick={copyInstallCommand}>
                {copied ? <Check /> : <Copy />}{copied ? "Copied" : "npm install"}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-3 gap-6 border-l-0 lg:border-l lg:pl-10">
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <SectionHeading eyebrow="Design tokens" title="A flexible visual foundation" description="Semantic tokens keep every primitive consistent and make brand changes quick. Replace values once; the system follows." />
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {colors.map((color, index) => (
              <Reveal key={color.name} delay={index * 50}>
                <div className={`aspect-[4/3] rounded-md border ${color.className}`} />
                <p className="mt-2 text-sm font-medium">{color.name}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="components" className="border-y bg-muted/35 py-16 sm:py-20">
        <div className="container">
          <SectionHeading eyebrow="Components" title="Useful states, already considered" description="The primitives follow the shadcn composition model, so they are local, editable, and compatible with its CLI." />
          <div className="grid gap-5 lg:grid-cols-2">
            <Card>
              <CardHeader><CardTitle>Buttons</CardTitle><CardDescription>Actions, hierarchy, loading, and icon treatments.</CardDescription></CardHeader>
              <CardContent className="flex flex-wrap items-center gap-3">
                <Button>Primary<ArrowRight /></Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline"><Download />Download</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Delete</Button>
                <Button variant="link">Learn more</Button>
                <Button size="icon" aria-label="Add item"><Plus /></Button>
                <Button disabled>Disabled</Button>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={showLoading} disabled={loading}>
                  {loading && <LoaderCircle className="animate-spin" />}{loading ? "Working..." : "Try loading state"}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader><CardTitle>Status and selection</CardTitle><CardDescription>Compact feedback for filters, tables, and settings.</CardDescription></CardHeader>
              <CardContent className="grid gap-6">
                <div className="flex flex-wrap gap-2">
                  <Badge>New</Badge><Badge variant="secondary">Draft</Badge><Badge variant="outline">Neutral</Badge>
                  <Badge variant="success">Active</Badge><Badge variant="warning">Pending</Badge><Badge variant="destructive">Failed</Badge>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex items-center gap-3 text-sm"><Checkbox defaultChecked /><span>Send notifications</span></label>
                  <label className="flex items-center justify-between gap-3 text-sm"><span>Public profile</span><Switch defaultChecked aria-label="Public profile" /></label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Tabs</CardTitle><CardDescription>A small controlled component for switching local views.</CardDescription></CardHeader>
              <CardContent>
                <Tabs tabs={[
                  { value: "overview", label: "Overview", content: "Use tabs for related views at the same level of hierarchy." },
                  { value: "activity", label: "Activity", content: "Client state is isolated inside the primitive." },
                  { value: "settings", label: "Settings", content: "Keyboard-visible focus styles are included." },
                ]} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Loading skeleton</CardTitle><CardDescription>Stable placeholders prevent layout shifts while data arrives.</CardDescription></CardHeader>
              <CardContent className="flex items-center gap-4">
                <Skeleton className="size-12 shrink-0 rounded-full" />
                <div className="grid flex-1 gap-2"><Skeleton className="h-4 w-2/5" /><Skeleton className="h-3 w-4/5" /><Skeleton className="h-3 w-3/5" /></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FeedbackShowcase />

      <section id="forms" className="py-16 sm:py-20">
        <div className="container">
          <SectionHeading eyebrow="Forms" title="Form controls with complete states" description="Labels, descriptions, error messaging, focus rings, and disabled behavior are visible from day one." />
          <form className="grid max-w-3xl gap-6" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="grid gap-2"><Label htmlFor="name">Full name</Label><Input id="name" placeholder="Ada Lovelace" autoComplete="name" /></div>
              <div className="grid gap-2"><Label htmlFor="email">Email address</Label><div className="relative"><Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input id="email" type="email" placeholder="ada@example.com" className="pl-9" autoComplete="email" /></div></div>
            </div>
            <div className="grid gap-2"><Label htmlFor="role">Project type</Label><Select id="role" defaultValue=""><option value="" disabled>Select a project type</option><option>Marketing website</option><option>Product application</option><option>Commerce</option></Select></div>
            <div className="grid gap-2"><Label htmlFor="message">Project note</Label><Textarea id="message" placeholder="A short description of what you are building..." /><p className="text-xs text-muted-foreground">Keep it concise. You can add rich validation with React Hook Form and Zod.</p></div>
            <div className="grid gap-2"><Label htmlFor="invalid-email">Error example</Label><Input id="invalid-email" defaultValue="not-an-email" aria-invalid="true" aria-describedby="email-error" /><p id="email-error" className="text-xs text-destructive">Enter a valid email address.</p></div>
            <div><Button type="submit">Submit example<ArrowRight /></Button></div>
          </form>
        </div>
      </section>

      <section id="motion" className="border-t bg-foreground py-16 text-background sm:py-20">
        <div className="container">
          <SectionHeading eyebrow="Motion" title="Quiet animation with a purpose" description="Motion is CSS-first, opt-in, and automatically disabled when a visitor prefers reduced motion." />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StaggerItem><HoverLift className="motion-demo rounded-lg border border-background/20 p-5"><FadeIn><span className="mb-8 block size-8 rounded-md bg-accent" /><p className="font-semibold">Fade in</p><p className="mt-1 text-sm text-background/65">A subtle opacity transition.</p></FadeIn></HoverLift></StaggerItem>
            <StaggerItem><HoverLift className="motion-demo rounded-lg border border-background/20 p-5"><SlideIn direction="up"><span className="mb-8 block size-8 rounded-md bg-accent" /><p className="font-semibold">Slide in</p><p className="mt-1 text-sm text-background/65">Choose up, down, left, or right.</p></SlideIn></HoverLift></StaggerItem>
            <StaggerItem><HoverLift className="motion-demo rounded-lg border border-background/20 p-5"><ScaleIn><span className="mb-8 block size-8 rounded-md bg-accent" /><p className="font-semibold">Scale in</p><p className="mt-1 text-sm text-background/65">Useful for dialogs and confirmations.</p></ScaleIn></HoverLift></StaggerItem>
            <StaggerItem><HoverLift className="motion-demo rounded-lg border border-background/20 p-5"><BlurIn><span className="mb-8 block size-8 rounded-md bg-accent" /><p className="font-semibold">Blur in</p><p className="mt-1 text-sm text-background/65">A soft entrance for supporting content.</p></BlurIn></HoverLift></StaggerItem>
            <StaggerItem><HoverLift className="motion-demo rounded-lg border border-background/20 p-5"><SlideIn direction="left"><span className="mb-8 block size-8 rounded-md bg-accent" /><p className="font-semibold">Directional</p><p className="mt-1 text-sm text-background/65">Match movement to spatial context.</p></SlideIn></HoverLift></StaggerItem>
            <StaggerItem><HoverLift className="motion-demo rounded-lg border border-background/20 p-5"><Reveal><span className="mb-8 block size-8 rounded-md bg-accent" /><p className="font-semibold">Hover lift</p><p className="mt-1 text-sm text-background/65">Quiet feedback for interactive surfaces.</p></Reveal></HoverLift></StaggerItem>
          </Stagger>
        </div>
      </section>
    </>
  );
}
