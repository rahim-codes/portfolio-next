import Link from "next/link"
import { BriefcaseIcon, CalendarIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/lib/data/site"

export const metadata = {
  title: "Experience",
  description: "My journey as a full-stack web developer.",
}

export default function ExperiencePage() {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 pb-24 sm:px-6">
      <div className="bg-glow pointer-events-none absolute inset-x-0 top-0 h-72" />

      <section className="relative pt-6 pb-12">
        <SectionHeading
          label="Journey"
          title="Experience & growth"
          description="Where I've been, what I've built, and what I'm working toward next."
        />
      </section>

      <section className="relative">
        <div className="absolute top-2 bottom-2 left-2 w-px bg-gradient-to-b from-[var(--neon)]/60 via-border to-transparent sm:left-3" />

        <ol className="flex flex-col gap-6">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 100} as="li" className="relative pl-8 sm:pl-10">
              <span className="absolute top-5 left-0 flex size-4 items-center justify-center sm:size-6 sm:left-0">
                <span
                  className={`size-2.5 rounded-full sm:size-3 ${
                    item.current
                      ? "animate-pulse-glow bg-[var(--neon)] shadow-[0_0_12px_var(--neon)]"
                      : "border border-border bg-background"
                  }`}
                />
              </span>

              <Card className="card-hover border-border/70 bg-card/60 backdrop-blur-sm">
                <CardContent className="flex flex-col gap-3 py-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <BriefcaseIcon className="size-4 text-[var(--neon)]" />
                      <h3 className="text-lg font-semibold tracking-tight">
                        {item.role}
                      </h3>
                      {item.current ? (
                        <Badge
                          variant="secondary"
                          className="border-[var(--neon)]/30 bg-[var(--neon)]/10 text-[var(--neon)]"
                        >
                          Current
                        </Badge>
                      ) : null}
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-2.5 py-1 text-xs text-muted-foreground">
                      <CalendarIcon className="size-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-muted-foreground">
                    {item.org}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground/90">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-border/80 text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </ol>
      </section>

      <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="text-muted-foreground">
          Want the full story or my resume?
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button render={<Link href="/contact" />} className="glow-neon">
            Get in touch
          </Button>
          <Button render={<Link href="/about" />} variant="outline">
            About me
          </Button>
        </div>
      </Reveal>
    </div>
  )
}
