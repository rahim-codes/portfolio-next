import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Hero } from "@/components/sections/hero"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { SkillMarquee } from "@/components/skill-marquee"
import { projects, stats } from "@/lib/data/site"

export default function HomePage() {
  const featured = projects.filter((project) => project.featured)

  return (
    <div className="flex flex-col">
      <Hero />

      <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <Card className="glass h-full items-center border-border/60 bg-transparent py-5 text-center">
                <CardContent className="px-2">
                  <p className="text-gradient-neon text-2xl font-semibold sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6">
        <Reveal className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Tech I work with
          </p>
        </Reveal>
        <SkillMarquee />
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            label="Portfolio"
            title="Featured projects"
            description="A selection of things I've designed and built — from trackers to storefronts."
          />
          <Reveal delay={150}>
            <Button render={<Link href="/projects" />} variant="ghost" size="sm">
              All projects <ArrowRightIcon />
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-24 sm:px-6">
        <Reveal>
          <Card className="glass relative overflow-hidden border-border/60 bg-transparent">
            <div className="bg-glow pointer-events-none absolute inset-0" />
            <CardContent className="relative flex flex-col items-center gap-4 py-10 text-center sm:py-14">
              <SectionHeading
                align="center"
                label="Let's talk"
                title="Have a project or a role in mind?"
                description="I'm currently looking for internships and junior full-stack opportunities. Let's build something great together."
              />
              <div className="mt-2 flex flex-wrap justify-center gap-3">
                <Button render={<Link href="/contact" />} size="lg" className="glow-neon">
                  Get in touch
                </Button>
                <Button
                  render={
                    <Link href="/about" />
                  }
                  size="lg"
                  variant="outline"
                >
                  More about me
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </div>
  )
}
