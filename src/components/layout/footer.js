import Link from "next/link"
import { MailIcon } from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Logo } from "@/components/logo"

import { Separator } from "@/components/ui/separator"
import { navLinks, site } from "@/lib/data/site"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {site.role} based in {site.location}.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-[var(--neon)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[var(--neon)]/40 hover:text-[var(--neon)]"
            >
              <GithubIcon className="size-4" />
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[var(--neon)]/40 hover:text-[var(--neon)]"
            >
              <LinkedinIcon className="size-4" />
            </Link>
            <Link
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[var(--neon)]/40 hover:text-[var(--neon)]"
            >
              <MailIcon className="size-4" />
            </Link>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col items-start justify-between gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © 2026 {site.name}. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <span className="text-foreground">Next.js</span> +{" "}
            <span className="text-foreground">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
