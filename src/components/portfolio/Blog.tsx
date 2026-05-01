import { useMemo, useState } from "react";
import { Section } from "./Section";
import { blogCategories, blogPosts } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Blog = () => {
  const [active, setActive] = useState<string>("All");
  const categories = ["All", ...blogCategories.map((c) => c.name)];
  const filtered = useMemo(
    () => (active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active)),
    [active],
  );

  return (
    <Section
      id="blog"
      eyebrow="Learning Hub"
      title={<>Notes, patterns, and real-world insights. </>}
      description="A small library of what I learned the hard way — categorized so you can dive into one track."
    >     
     <div className="mt-4 rounded-md border border-border/50 bg-muted/5 px-4 py-3 text-sm text-muted-foreground">
        🚧 Work in progress — this section will include categorized learnings, real-world patterns, and engineering insights as it evolves.
      </div>
      <br/>
      {/* Categories */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {blogCategories.map((c) => (
          <button
            key={c.name}
            onClick={() => setActive(c.name)}
            className={cn(
              "card-surface card-hover text-left p-4",
              active === c.name && "border-primary/60 shadow-glow",
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{c.name}</h3>
              <span className="font-mono text-[11px] text-muted-foreground">{c.count}</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{c.blurb}</p>
          </button>
        ))}
      </div>

      {/* Filter chips */}
      <div className="mt-8 mb-4 flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-md border px-3 py-1.5 font-mono text-xs transition-colors",
              active === c
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((p) => (
          <a
            key={p.title}
            href="#"
            className="card-surface card-hover group block p-5"
          >
            <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground">
              <span className="text-primary">{p.category}</span>
              <span>{p.date} · {p.read}</span>
            </div>
            <h3 className="mt-2 text-base font-semibold transition-colors group-hover:text-primary">
              {p.title}
            </h3>
          </a>
        ))}
      </div>
    </Section>
  );
};
