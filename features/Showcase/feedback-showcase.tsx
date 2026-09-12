import { Plus, RotateCcw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";

export function FeedbackShowcase() {
  return (
    <section id="states" className="border-b py-16 sm:py-20">
      <div className="container">
        <div className="mb-8 max-w-2xl"><p className="mb-2 text-xs font-semibold uppercase text-primary">Feedback states</p><h2 className="text-balance text-2xl font-bold sm:text-3xl">Every outcome has a clear next step</h2><p className="mt-3 text-pretty text-muted-foreground">Reusable status patterns cover asynchronous work, completed actions, warnings, failures, and zero-data screens.</p></div>
        <div className="grid gap-4 md:grid-cols-2">
          <Alert><AlertTitle>Information available</AlertTitle><AlertDescription>A newer version of this record is ready to review.</AlertDescription></Alert>
          <Alert variant="success"><AlertTitle>Changes saved</AlertTitle><AlertDescription>Your settings were updated successfully.</AlertDescription></Alert>
          <Alert variant="warning"><AlertTitle>Action needed</AlertTitle><AlertDescription>Add a billing method before the trial ends.</AlertDescription></Alert>
          <Alert variant="destructive"><AlertTitle>Upload failed</AlertTitle><AlertDescription>The connection was interrupted. Your local file is unchanged.</AlertDescription><Button variant="outline" size="sm" className="mt-3"><RotateCcw />Retry</Button></Alert>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="grid content-start gap-6">
            <div><h3 className="text-sm font-semibold">Indeterminate loading</h3><div className="mt-3"><Spinner label="Syncing project data..." /></div></div>
            <Progress value={68} label="Uploading assets" />
            <div><h3 className="mb-3 text-sm font-semibold">Content placeholder</h3><div className="flex items-center gap-4"><Skeleton className="size-11 shrink-0 rounded-full" /><div className="grid flex-1 gap-2"><Skeleton className="h-4 w-1/3" /><Skeleton className="h-3 w-4/5" /></div></div></div>
          </div>
          <EmptyState title="No projects yet" description="Create your first project to see activity, collaborators, and progress here." action={<Button size="sm"><Plus />New project</Button>} />
        </div>
      </div>
    </section>
  );
}
