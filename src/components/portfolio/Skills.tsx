import { Section } from "./Section";
import { skills } from "@/data/portfolio";

export const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title={<>Tools I reach for, organized by where they live in the stack.</>}
  >
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group) => (
        <div key={group.category} className="card-surface card-hover p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">{group.category}</h3>
            <span className="font-mono text-[11px] text-muted-foreground">
              {group.items.length} items
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span key={item} className="chip">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
