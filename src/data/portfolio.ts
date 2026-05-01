export const profile = {
  name: "Shreyas Malvadkar",
  role: "Full Stack Engineer · SDE2",
  location: "Pune, India",
  email: "me.shreyas.dev@gmail.com",
  github: "https://github.com/dev-shreyas-m",
  linkedin: "https://www.linkedin.com/in/shreyas-malvadkar/",
  tagline:
    "I’m a Full Stack Engineer building scalable, real-time, data-driven applications. Experienced in designing services with .NET Core using microservices and event-driven architectures, while creating intuitive frontend interfaces for clear data visualization. Focused on system design, performance optimization, and delivering clean, maintainable, and reliable solutions.",
  shortBio:
    "Software Engineer with 2+ years of experience building scalable APIs, MQTT-driven real-time pipelines, and async processing systems for industrial IoT. I prioritize performance, reliability, and optimizing critical paths to maintain efficiency under load.",
};

export const metrics = [
  { value: "Microservices", label: "ARCHITECTURE", hint: "modular & scalable design" },
  { value: "Event-Driven", label: "SYSTEM DESIGN", hint: "decoupled & scalable architecture" },
  { value: "MQTT + REST", label: "COMMUNICATION", hint: "real-time + API integration" },
  { value: "Async", label: "PROCESSING", hint: "non-blocking workflows" },
  { value: "Resilient", label: "FAULT TOLERANCE", hint: "retry & recovery handling" },
  { value: "Queue-based", label: "BACKGROUND JOBS", hint: "reliable task processing" },
  { value: "Optimized", label: "DATA HANDLING", hint: "efficient queries & indexing" },
  { value: "Full Stack", label: "DELIVERY", hint: "end-to-end system development" }
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Backend", items: ["C#", ".NET Core", "ASP.NET Core", "EF Core", "REST APIs", "Microservices", "Caching", "Background Services"] },
  { category: "System Design", items: ["Event-Driven Systems", "Async Processing", "Job Queues", "Retry & Backoff", "Fault Tolerance"] },
  { category: "Real-Time", items: ["MQTT", "TCP/IP", "Pub/Sub", "Stream Processing", "WebSockets", "SignalR"] },
  { category: "Databases", items: ["SQL Server", "MongoDB", "Indexing", "Query Optimization", "Redis"] },
  { category: "Frontend", items: ["Angular", "javascript", "TypeScript", "D3.js", "React"] },
  { category: "DevOps", items: ["Git", "IIS", "AWS", "Azure", "CI/CD", "Docker"] },
];

export const experience = [
  {
    company: "sfHawk Solutions",
    role: "Software Engineer",
    location: "Pune",
    period: "Mar 2024 — Present",
    summary:
      "Owning real-time industrial backend systems — design, performance, and production reliability.",
    highlights: [
      "Built real-time pipelines processing data from 50+ machines with reliable event handling.",
      "Designed ASP.NET Core microservices with async workflows for scalable ingestion.",
      "Delivered Production Planning Control (PPC) module with dynamic recalculation and dependency handling.",
      "Implemented MQTT-based validation systems for low-latency machine control.",
      "Optimized database queries, significantly improving API performance.",
      "Developed Angular dashboards for real-time operational insights.",
      "Designed systems with fault tolerance and observability for production reliability."
    ],
    stack: [".NET Core", "MQTT", "SQL Server", "Redis", "Angular", "D3", "mongoDB"],
  },
  {
    company: "The Tech Clan (TTC)",
    role: "Software Engineer",
    location: "Pune",
    period: "Sept 2023 — Mar 2024",
    summary: "Backend APIs and Angular UI for scalable internal applications.",
    highlights: [
      "Built REST APIs and Angular front-ends for production apps.",
      "Implemented JWT auth with role-based authorization.",
      "Improved DB performance through indexing and query rewrites.",
    ],
    stack: [".NET Core", "Angular", "SQL Server", "JWT"],
  },
];

export const projects = [
  {
    title: "Production Planning System (PPC)",
    tag: "Real-Time · Planning",
    problem:
      "Frequent shop-floor disruptions make static production schedules unreliable, requiring immediate recalculation of dependent jobs to avoid delays and inefficiencies.",
    solution:
      "Dynamic rollover engine that continuously adjusts production plans, cascades dependent updates, and delivers real-time notifications.",
    impact: [
      "Sub-second replan for 50+ machines",
      "Zero manual re-entry on shift changes",
      "Dependency-aware rollover",
    ],
    technicalDetails:[
      "Centralized end-date calculation with shift, holiday, and week-off logic",
      "Batch processing logic for periodic schedule recomputation",
      "Automated stakeholder notifications via email microservice integration",
      "Optimized data pipeline for D3.js-based shift-wise production visualization",
      "In-memory plan processing with periodic DB sync and re-evaluation"
    ],
    stack: [".NET Core", "SQL Server", "MQTT", "Angular"],
  },
  {
    title: "Machine Validation System",
    tag: "MQTT · Control Loop",
    problem:
      "Machines must not start operations on invalid jobs / unauthorized operators — a wrong start corrupts traceability and risks safety.",
    solution:
      "MQTT request/response control with backend validator. Machine publishes intent → backend validates against live state → ACK/NACK in <10ms.",
    impact: ["<10ms validation RTT", "100% audited starts", "Zero invalid runs in prod"],
    stack: ["MQTT", ".NET Core", "Redis"],
  },
  {
    title: "Traceability System",
    tag: "Stream + Batch",
    problem:
      "Need full part-level traceability across mixed equipment — some streaming via MQTT, some over legacy TCP/IP.",
    solution:
      "Unified ingestion layer normalizing MQTT and TCP/IP events into a single trace store, with batch reconciliation for late/missed packets.",
    impact: ["End-to-end part lineage", "Late-event reconciliation", "100+ events/sec sustained"],
    stack: ["MQTT", "TCP/IP", ".NET Core", "SQL Server"],
  },
  {
    title: "Job Queue System",
    tag: "Async · Reliability",
    problem: "Long-running and flaky tasks were blocking request threads and silently failing.",
    solution:
      "In-process async job queue with retry, exponential backoff, dead-letter, and idempotent handlers.",
    impact: ["No blocked request threads", "Auto-recovery on transient failure", "Observable retries"],
    stack: [".NET Core", "Channels", "SQL Server"],
  },
  {
    title: "Notification Service",
    tag: "Event-Driven",
    problem: "Multiple subsystems needed to alert humans via email and WhatsApp without coupling.",
    solution:
      "Event bus with pluggable channels. Producers emit domain events; the service fans out to email/WhatsApp with templating and rate limits.",
    impact: ["Decoupled producers", "Channel-agnostic", "Templated, rate-limited"],
    stack: [".NET Core", "MQTT", "SMTP", "WhatsApp API"],
  },
  {
    title: "CSV Processing Service",
    tag: "Ingestion · Batch",
    problem: "Partner systems drop large CSVs into a watched folder; ingestion must be reliable and idempotent.",
    solution:
      "FileSystemWatcher with batched, transactional inserts, per-file retry log, and quarantine for malformed rows.",
    impact: ["Resumable ingestion", "Quarantine for bad rows", "Throughput tuned per file size"],
    stack: [".NET Core", "SQL Server"],
  },
];

export const blogCategories = [
  { name: "OOP", count: 4, blurb: "Design principles I actually use in production." },
  { name: "Backend", count: 6, blurb: "ASP.NET Core, EF Core, async patterns." },
  { name: "System Design", count: 5, blurb: "Event-driven, queues, and trade-offs." },
  { name: "Performance", count: 3, blurb: "Profiling, query rewrites, hot-path wins." },
  { name: "Dev Tips", count: 7, blurb: "Small things that compound over time." },
];

export const blogPosts = [
  { title: "How I cut API latency from 10s to 1s", category: "Performance", read: "6 min", date: "Apr 2026" },
  { title: "Designing an MQTT control loop under 10ms", category: "System Design", read: "8 min", date: "Mar 2026" },
  { title: ".Count > 0 is a footgun — use Any() / Exists()", category: "Backend", read: "4 min", date: "Feb 2026" },
  { title: "Idempotent event handlers, the boring way", category: "System Design", read: "5 min", date: "Jan 2026" },
  { title: "Composition over inheritance — a real example", category: "OOP", read: "5 min", date: "Dec 2025" },
  { title: "Channels<T> as a tiny job queue in .NET", category: "Backend", read: "7 min", date: "Nov 2025" },
];
