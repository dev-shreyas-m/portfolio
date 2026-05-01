import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title={<>Where I’ve delivered results — and the impact that followed.</>}
  >
    <ol className="relative space-y-6 border-l border-border pl-6 md:pl-8">
      {experience.map((job) => (
        <li key={job.company} className="relative">
          <span className="absolute -left-[33px] md:-left-[37px] top-2 grid h-3 w-3 place-items-center rounded-full bg-background ring-2 ring-primary">
            <span className="h-1 w-1 rounded-full bg-primary" />
          </span>

          <div className="card-surface card-hover p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{job.role} · <span className="text-primary">{job.company}</span></h3>
                <p className="text-sm text-muted-foreground">{job.location}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
            </div>

            <p className="mt-3 text-sm text-foreground/90">{job.summary}</p>

            <ul className="mt-4 space-y-2">
              {job.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);
