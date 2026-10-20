import Image from "next/image"
import {
  MailIcon,
  MapPinIcon,
} from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PrintResumeButton } from "@/components/print-resume-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { experience, projects, site, skillGroups } from "@/lib/data/site"

export const metadata = {
  title: "Resume",
  description: `Resume of ${site.name} — ${site.role}. Skills, experience and featured projects.`,
}

function ResumeSection({ title, children }) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold tracking-widest text-[var(--neon)] uppercase">
        {title}
      </h3>
      {children}
    </section>
  )
}

export default function ResumePage() {
  const featured = projects.filter((project) => project.featured)

  return (
    <div className="relative mx-auto w-full max-w-4xl px-4 pb-24 sm:px-6">
      <div className="bg-glow pointer-events-none absolute inset-x-0 top-0 h-72" />

      <section className="relative pt-6 pb-10">
        <SectionHeading
          label="Resume"
          title={`${site.name} — ${site.role}`}
          description={site.tagline}
        />
      </section>

      <Reveal>
        <Card className="overflow-hidden border-border/70 bg-card/60 backdrop-blur-sm">
          <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="relative aspect-[7/10] w-40 shrink-0 overflow-hidden rounded-2xl border border-border/60 sm:w-36">
              <Image
                src={site.photo}
                alt={site.name}
                fill
                priority
                sizes="144px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {site.name}
                </h2>
                <p className="text-[var(--neon)]">{site.role}</p>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {site.bio}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPinIcon className="size-3.5 text-[var(--neon)]" />
                  {site.location}
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--neon)]"
                >
                  <MailIcon className="size-3.5 text-[var(--neon)]" />
                  {site.email}
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--neon)]"
                >
                  <GithubIcon className="size-3.5 text-[var(--neon)]" />
                  {site.username}
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--neon)]"
                >
                  <LinkedinIcon className="size-3.5 text-[var(--neon)]" />
                  LinkedIn
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button render={<a href={site.github} target="_blank" rel="noopener noreferrer" />} size="sm" variant="outline">
                  <GithubIcon /> GitHub
                </Button>
                <Button render={<a href={site.linkedin} target="_blank" rel="noopener noreferrer" />} size="sm" variant="outline">
                  <LinkedinIcon /> LinkedIn
                </Button>
                <PrintResumeButton className="h-8 gap-1.5 px-3 text-sm" />
              </div>
            </div>
          </div>
        </Card>
      </Reveal>

      <div className="mt-10 flex flex-col gap-10">
        <Reveal delay={80}>
          <ResumeSection title="Skills">
            <div className="flex flex-col gap-4">
              {skillGroups.map((group) => (
                <div key={group.name} className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                  <span className="w-24 shrink-0 pt-0.5 text-sm font-medium text-foreground/80">
                    {group.name}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="border border-border/70 bg-card/60 text-muted-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>
        </Reveal>

        <Reveal delay={140}>
          <ResumeSection title="Experience">
            <div className="flex flex-col gap-6 border-l border-border/60 pl-6">
              {experience.map((item) => (
                <div key={`${item.role}-${item.org}`} className="relative">
                  <span
                    className={`absolute top-1.5 -left-[29px] size-2.5 rounded-full ${
                      item.current
                        ? "bg-[var(--neon)] shadow-[0_0_10px_var(--neon)]"
                        : "bg-border"
                    }`}
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold tracking-tight">{item.role}</h4>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-sm text-[var(--neon)]">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-border/80 text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>
        </Reveal>

        <Reveal delay={200}>
          <ResumeSection title="Featured projects">
            <div className="flex flex-col gap-5">
              {featured.map((project) => (
                <div key={project.title} className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold tracking-tight">{project.title}</h4>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-[var(--neon)]"
                    >
                      {project.repo.replace("https://github.com/", "")}
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-border/80 text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>
        </Reveal>

        <Reveal delay={260}>
          <Card className="glass border-border/60 bg-transparent">
            <CardContent className="flex flex-col items-start gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold tracking-tight">Want the full picture?</p>
                <p className="text-sm text-muted-foreground">
                  {site.availableFor} — let&apos;s talk.
                </p>
              </div>
              <div className="flex gap-2">
                <Button render={<a href={`mailto:${site.email}`} />}>
                  <MailIcon /> Contact me
                </Button>
                <PrintResumeButton />
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}
