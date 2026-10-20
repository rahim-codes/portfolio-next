import Link from "next/link"
import { ArrowUpRightIcon, MailIcon, MapPinIcon } from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { site } from "@/lib/data/site"

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — ${site.role}.`,
}

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: MailIcon,
  },
  {
    label: "GitHub",
    value: `@${site.username}`,
    href: site.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: site.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "Location",
    value: site.location,
    href: null,
    icon: MapPinIcon,
  },
]

export default function ContactPage() {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 pb-24 sm:px-6">
      <div className="bg-glow pointer-events-none absolute inset-x-0 top-0 h-72" />

      <section className="relative pt-6 pb-12">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a role, a project or just a question? Fill in the form or reach out through any of the channels below — I usually reply within a day."
        />
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Card className="glass border-border/60 bg-transparent">
            <CardContent className="py-1">
              <ContactForm />
            </CardContent>
          </Card>
        </Reveal>

        <div className="flex flex-col gap-3">
          {channels.map((channel, index) => {
            const Icon = channel.icon
            const content = (
              <Card className="card-hover h-full border-border/70 bg-card/60 backdrop-blur-sm">
                <CardContent className="flex items-center gap-3 py-1">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[var(--neon)]/25 bg-[var(--neon)]/5 text-[var(--neon)]">
                    <Icon className="size-4.5" />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <span className="text-xs tracking-widest text-muted-foreground uppercase">
                      {channel.label}
                    </span>
                    <span className="truncate text-sm font-medium">
                      {channel.value}
                    </span>
                  </div>
                  {channel.href ? (
                    <ArrowUpRightIcon className="ml-auto size-4 shrink-0 text-muted-foreground" />
                  ) : null}
                </CardContent>
              </Card>
            )

            return (
              <Reveal key={channel.label} delay={index * 80}>
                {channel.href ? (
                  <Link
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block"
                  >
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </Reveal>
            )
          })}

          <Reveal delay={320}>
            <Card className="border-[var(--neon)]/25 bg-[var(--neon)]/5">
              <CardContent className="flex flex-col gap-1 py-1">
                <p className="text-sm font-medium text-[var(--neon)]">
                  Currently available
                </p>
                <p className="text-sm text-muted-foreground">
                  {site.availableFor}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
