import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="Projects"
    title={<>Real systems running in production.</>}
    description="Each one solves a specific operational problem — not a tutorial app."
  >
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  </Section>
);

const ProjectCard = ({ project }: { project: typeof projects[number] }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="card-surface card-hover p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-primary">{project.tag}</p>
          <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm">
        <Row label="Problem" value={project.problem} />
        <Row label="Solution" value={project.solution} />
      </div>

      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="rounded-md border border-border bg-surface-elevated p-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Impact</p>
            <ul className="mt-2 grid gap-1.5 text-sm">
              {project.impact.map((i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/90">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <br/>
          <div className="rounded-md border border-border bg-surface-elevated p-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Technical Details</p>
            <ul className="mt-2 grid gap-1.5 text-sm">
              {project?.technicalDetails?.map((i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/90">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        {open ? "Hide details" : "View details"}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>
    </article>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
    <p className="mt-1 text-foreground/90">{value}</p>
  </div>
);
