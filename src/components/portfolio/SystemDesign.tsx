import { Section } from "./Section";

const nodes = [
  { id: "machine", label: "Machine", sub: "PLC / sensor", x: 0 },
  { id: "mqtt", label: "MQTT Broker", sub: "pub/sub", x: 1 },
  { id: "ingest", label: "Ingest Service", sub: ".NET Core · async", x: 2 },
  { id: "validator", label: "Validator", sub: "Redis-cached rules", x: 3 },
  { id: "store", label: "Store", sub: "SQL Server", x: 4 },
];

export const SystemDesign = () => (
  <Section
    id="system-design"
    eyebrow="System Design"
    title={<>How an event flows from a machine to durable storage.</>}
    description="Same shape powers the Validation, Traceability, and PPC pipelines — different rules, same backbone."
  >
    <div className="card-surface p-6 md:p-8">
      {/* Diagram */}
      <div className="overflow-x-auto">
        <div className="flex min-w-[760px] items-stretch gap-3">
          {nodes.map((n, i) => (
            <div key={n.id} className="flex flex-1 items-center gap-3">
              <div className="flex-1 rounded-lg border border-border bg-surface-elevated p-4 text-center">
                <p className="font-mono text-[11px] uppercase tracking-wider text-primary">step {i + 1}</p>
                <p className="mt-1 text-sm font-semibold">{n.label}</p>
                <p className="text-xs text-muted-foreground">{n.sub}</p>
              </div>
              {i < nodes.length - 1 && (
                <div className="flex flex-col items-center text-primary">
                  <div className="h-px w-6 bg-primary/60" />
                  <span className="font-mono text-[10px] text-muted-foreground">event</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decisions */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Decision
          title="MQTT over HTTP"
          body="Pub/sub fits machine fleets — back-pressure, late joiners, and topic-based filtering for free."
        />
        <Decision
          title="Async ingestion"
          body="Channels<T> + worker loops keep request threads free; bursts queue instead of dropping."
        />
        <Decision
          title="Cache hot rules"
          body="Validation lookups hit Redis first. Misses fall through to SQL, with TTL and explicit invalidation."
        />
        <Decision
          title="Existence over .Count"
          body="Replaced `.Count > 0` scans with EXISTS-style queries — single biggest latency win (10s → 1s)."
        />
        <Decision
          title="Idempotent handlers"
          body="Every event carries a key. Re-delivery is safe, so retries and replays don't corrupt state."
        />
        <Decision
          title="Observable by default"
          body="p50/p95/p99 per stage, queue depth, retry counts — you can't tune what you can't see."
        />
      </div>
    </div>
  </Section>
);

const Decision = ({ title, body }: { title: string; body: string }) => (
  <div className="rounded-lg border border-border bg-card p-5">
    <h4 className="text-sm font-semibold">
      <span className="text-primary">▸ </span>
      {title}
    </h4>
    <p className="mt-2 text-sm text-muted-foreground">{body}</p>
  </div>
);
