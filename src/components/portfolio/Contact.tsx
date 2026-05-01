import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

export const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title={<>Let’s connect and explore opportunities.</>}
    description="Best for: scalable backend systems, full stack development, performance optimization, and practical system design discussions."
  >
    <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
      <div className="card-surface p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Direct</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-2 block text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary md:text-3xl"
        >
          {profile.email}
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          Your message will be read, and I’ll get back to you as soon as possible.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border  bg-primary/80 px-4 py-2.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
          >  <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-4 py-2.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Mail className="h-4 w-4" /> Send an email
          </a>
          <a
            href={profile.linkedin}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-4 py-2.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={profile.github}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-4 py-2.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>

      <div className="card-surface p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Status</p>
        <ul className="mt-3 space-y-3 text-sm">
          <li className="flex items-center justify-between"><span>Open to roles</span><span className="text-primary">● Yes</span></li>
          <li className="flex items-center justify-between"><span>Location</span><span className="text-foreground/90">{profile.location}</span></li>
          <li className="flex items-center justify-between"><span>Mode</span><span className="text-foreground/90">Hybrid / Remote</span></li>
          <li className="flex items-center justify-between"><span>Notice</span><span className="text-foreground/90">Standard</span></li>
        </ul>
      </div>
    </div>

    <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
      <p className="font-mono">© {new Date().getFullYear()} {profile.name} · built with care</p>
      <p className="font-mono">designed like a system, not a résumé</p>
    </footer>
  </Section>
);
