"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { navLinks, site } from "@/lib/data/site"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass-strong mx-auto mt-3 flex h-14 max-w-5xl items-center justify-between rounded-2xl px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "text-[var(--neon)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Button render={<Link href="/contact" />} size="sm" className="glow-neon">
            Hire me
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted md:hidden"
          >
            <MenuIcon className="size-4.5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle render={<Logo />} />
              <SheetDescription className="sr-only">
                Navigation menu
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[var(--neon)]/10 text-[var(--neon)]"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-auto flex flex-col gap-2 px-4 pb-6">
              <Button
                render={<Link href="/contact" onClick={() => setOpen(false)} />}
                className="w-full"
              >
                Hire me
              </Button>
              <Button
                render={<a href={site.github} target="_blank" rel="noopener noreferrer" />}
                variant="outline"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                GitHub
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
