import Image from "next/image"
import Link from "next/link"
import {
  ArrowDownRightIcon,
  MapPinIcon,
  SparklesIcon,
} from "lucide-react"

import { GithubIcon } from "@/components/brand-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/data/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-glow pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:pt-16">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <Badge
              variant="secondary"
              className="gap-2 border border-[var(--neon)]/25 bg-[var(--neon)]/5 px-3 py-1.5 text-xs text-[var(--neon)]"
            >
              <SparklesIcon className="size-3.5" />
              {site.availableFor}
            </Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-gradient">{site.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              {site.role} building complete web apps — from polished React and
              Next.js interfaces to Node.js, Express and MongoDB APIs.
            </p>
          </Reveal>

          <Reveal delay={240} className="flex flex-wrap items-center gap-3">
            <Button render={<Link href="/projects" />} size="lg" className="glow-neon">
              View Projects
              <ArrowDownRightIcon />
            </Button>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              variant="outline"
            >
              Contact Me
            </Button>
          </Reveal>

          <Reveal delay={320} className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="size-4 text-[var(--neon)]" />
              {site.location}
            </span>
            <span className="size-1 rounded-full bg-border" />
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--neon)]"
            >
              <GithubIcon className="size-4" />
              @{site.username}
            </Link>
          </Reveal>
        </div>

        <Reveal delay={200} className="justify-self-center lg:justify-self-end">
          <div className="animate-float relative">
            <div className="glow-ring absolute -inset-3 rounded-[2rem]" />
            <div className="relative aspect-[7/10] w-64 overflow-hidden rounded-[1.75rem] border border-border/60 sm:w-72">
              <Image
                src={site.photo}
                alt={`${site.name} — ${site.role}`}
                fill
                priority
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
            </div>
            <div className="glass absolute -right-3 -bottom-3 flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium">
              <span className="size-2 animate-pulse-glow rounded-full bg-[var(--neon)]" />
              Open to work
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
