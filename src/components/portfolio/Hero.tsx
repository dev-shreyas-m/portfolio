import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { metrics, profile } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />

      <div className="container-page">
        {/* <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]"> */}
          {/* Left */}
        <div className="grid items-start gap-12">
          <div>
            <span className="eyebrow">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Available · {profile.location}
            </span>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {profile.name.split(" ")[0]}{" "}
              <span className="text-muted-foreground">{profile.name.split(" ").slice(1).join(" ")}</span>
            </h1>

            <p className="mt-3 font-mono text-sm text-primary md:text-base">
              <span className="text-muted-foreground">{">"} </span>
              {profile.role}
            </p>

            <p className="mt-6 max-w text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#blog"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-4 py-2.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                Read the Blog
              </a>
              <div className="ml-1 flex items-center gap-1">
                <a aria-label="GitHub" href={profile.github} className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"><Github className="h-4 w-4" /></a>
                <a aria-label="LinkedIn" href={profile.linkedin} className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
                <a aria-label="Email" href={`mailto:${profile.email}`} className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"><Mail className="h-4 w-4" /></a>
              </div>
            </div>

            {/* Metrics */}
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="card-surface px-4 py-3">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-foreground">{m.value}</dd>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{m.hint}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — system snapshot panel */}
          {/* <SystemSnapshot /> */}
        </div>
      </div>
    </section>
  );
};

const SystemSnapshot = () => (
  <div className="card-surface overflow-hidden">
    <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2.5">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
      </div>
      <span className="font-mono text-[11px] text-muted-foreground">~/system/snapshot.log</span>
      <span className="font-mono text-[11px] text-primary">● live</span>
    </div>
    <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-6 text-muted-foreground">
{`$ system status --realtime
`}<span className="text-primary">▸ ingest    </span>{`MQTT broker          `}<span className="text-foreground">connected</span>{`
`}<span className="text-primary">▸ throughput</span>{` events/sec          `}<span className="text-foreground">128</span>{`
`}<span className="text-primary">▸ machines  </span>{` online              `}<span className="text-foreground">52 / 54</span>{`
`}<span className="text-primary">▸ p50       </span>{` validation latency  `}<span className="text-foreground">7.3 ms</span>{`
`}<span className="text-primary">▸ p99       </span>{` validation latency  `}<span className="text-foreground">14.1 ms</span>{`
`}<span className="text-primary">▸ api p95   </span>{` /jobs/list          `}<span className="text-foreground">980 ms</span>{`
`}<span className="text-primary">▸ queue     </span>{` depth                `}<span className="text-foreground">3 jobs</span>{`
`}<span className="text-primary">▸ retries   </span>{` last 1h              `}<span className="text-foreground">0</span>{`

`}<span className="text-foreground">$ uptime</span>{`
`}<span className="text-muted-foreground"># 99.97% over last 30 days</span>
    </pre>
  </div>
);
