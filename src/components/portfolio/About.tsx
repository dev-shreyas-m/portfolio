import { Section } from "./Section";
import { profile } from "@/data/portfolio";

export const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title={<>Full Stack Engineer | <span className="text-primary">Performance, Scalability & Reliability</span>.</>}
  >
    <div className="grid gap-6 md:grid-cols-3">
      <div className="card-surface md:col-span-2 p-6 md:p-8">
        <p className="text-base leading-relaxed text-foreground/90">
          {profile.shortBio}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          My work primarily focuses on real-time industrial systems, bridging physical processes with 
          software through MQTT-based communication, async processing, and queue-driven workflows. 
          I design event-driven services, optimize performance-critical paths, and ensure systems remain stable under load. 
          I prioritize fault tolerance, efficient data access, and building systems that are observable and debuggable in production.
        </p>
      </div>
      <div className="card-surface p-6">
        <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Currently</h3>
        <ul className="mt-3 space-y-3 text-sm">
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" /> Software Engineer <a href="https://sfhawk.com/">@sfHawk</a></li>
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" /> Open to full stack development opportunities</li>
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" /> Sharing my learnings on system design, software development, and modern frontend, backend, and database technologies  </li>
        </ul>
        <hr className="my-5 border-border" />
        <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Education</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li><span className="text-foreground">PG-DAC</span> · <a href="https://www.cdac.in/index.aspx?id=PN" target="_blank" rel="noopener noreferrer">CDAC Pune · 2023</a></li>
          <li><span className="text-foreground">B.E. Mechanical</span> · <a href="https://www.sus.ac.in/" target="_blank" rel="noopener noreferrer">Solapur University · 2019</a></li>
        </ul>
      </div>
    </div>
  </Section>
);
