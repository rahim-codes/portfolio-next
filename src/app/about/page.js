import Image from "next/image"
import Link from "next/link"
import {
  DownloadIcon,
  MapPinIcon,
  MailIcon,
} from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { quickFacts, site, skillGroups } from "@/lib/data/site"

export const metadata = {
  title: "About",
  description: "About Abdur Rahim — full-stack web developer and tech stack.",
}

export default function AboutPage() {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 pb-24 sm:px-6">
      <div className="bg-glow pointer-events-none absolute inset-x-0 top-0 h-72" />

      <section className="relative pt-6 pb-12">
        <SectionHeading
          label="About me"
          title="Developer by passion, builder by habit"
          description="A quick introduction to who I am, what I work with, and how I got here."
        />
      </section>

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex flex-col gap-4">
          <Card className="overflow-hidden border-border/70 bg-card/60 backdrop-blur-sm">
            <div className="relative aspect-[7/10]">
              <Image
                src={site.photo}
                alt={`${site.name} — ${site.role}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </Card>

          <Card className="glass border-border/60 bg-transparent">
            <CardContent className="flex flex-col gap-3 py-1 text-sm">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">{fact.label}</span>
                  <span className="font-medium">{fact.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Button
              render={
                <a href={site.github} target="_blank" rel="noopener noreferrer" />
              }
              variant="outline"
              size="sm"
            >
              <GithubIcon /> GitHub
            </Button>
            <Button
              render={
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" />
              }
              variant="outline"
              size="sm"
            >
              <LinkedinIcon /> LinkedIn
            </Button>
            <Button
              render={<Link href="/resume" />}
              variant="outline"
              size="sm"
            >
              <DownloadIcon /> Resume
            </Button>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal delay={100} className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold tracking-tight">
              Hey, I&apos;m {site.name.split(" ")[0]}.
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {site.bio}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m currently sharpening my full-stack skills across the
              React, Next.js and Node.js ecosystem while building real projects
              end to end — from UI design and responsive layouts to Express and
              MongoDB APIs, then deployment on Vercel. I care about clean code,
              accessible interfaces and the small details that make a product
              feel fast.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              When I&apos;m not coding, I&apos;m usually exploring new tools,
              contributing to my GitHub, or rebuilding UIs I admire to learn how
              they work.
            </p>
          </Reveal>

          <Reveal delay={180} className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold tracking-tight">Tech stack</h3>
            <Tabs defaultValue={skillGroups[0].name}>
              <TabsList
                variant="line"
                className="flex-wrap border-b border-border/60 pb-0"
              >
                {skillGroups.map((group) => (
                  <TabsTrigger key={group.name} value={group.name}>
                    {group.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {skillGroups.map((group) => (
                <TabsContent key={group.name} value={group.name} className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="h-8 gap-2 border border-border/70 bg-card/60 px-3 text-sm text-muted-foreground transition-colors hover:border-[var(--neon)]/40 hover:text-foreground"
                      >
                        <span className="size-1.5 rounded-full bg-[var(--neon)]" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>

          <Reveal delay={260}>
            <Card className="glass border-border/60 bg-transparent">
              <CardContent className="flex flex-col gap-3 py-1">
                <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                  Reach me
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="size-4 text-[var(--neon)]" />
                    {site.location}
                  </span>
                  <Link
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-[var(--neon)]"
                  >
                    <MailIcon className="size-4 text-[var(--neon)]" />
                    {site.email}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
