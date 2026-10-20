import Link from "next/link"

import { cn } from "@/lib/utils"

function LogoMark({ className }) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl",
        "bg-gradient-to-br from-[oklch(0.85_0.24_150)] via-[oklch(0.78_0.15_200)] to-[oklch(0.72_0.17_300)]",
        "p-px shadow-[0_0_18px_oklch(0.85_0.24_150/25%)] transition-shadow duration-300 group-hover:shadow-[0_0_26px_oklch(0.85_0.24_150/45%)]",
        className
      )}
    >
      <span className="flex size-full items-center justify-center rounded-[calc(0.75rem-1px)] bg-[oklch(0.13_0.014_275)]">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className="size-[68%]"
        >
          <defs>
            <linearGradient
              id="logo-r-gradient"
              x1="8"
              y1="6"
              x2="26"
              y2="26"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="oklch(0.85 0.24 150)" />
              <stop offset="0.55" stopColor="oklch(0.78 0.15 200)" />
              <stop offset="1" stopColor="oklch(0.72 0.17 300)" />
            </linearGradient>
          </defs>
          <path
            d="M9.8 26.2V5.8h10.6c4.4 0 7.6 3 7.6 7.2 0 3.3-1.9 6-4.9 7l5.6 6.2h-5.9l-4.9-5.6h-4.1v5.6H9.8Zm4.6-9.6h5.6c2 0 3.4-1.3 3.4-3.1 0-1.8-1.4-3.1-3.4-3.1h-5.6v6.2Z"
            fill="url(#logo-r-gradient)"
          />
        </svg>
      </span>
    </span>
  )
}

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
  href = "/",
}) {
  return (
    <Link
      href={href}
      aria-label="Home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <LogoMark className={cn("size-8", markClassName)} />
      {showWordmark ? (
        <span
          className={cn(
            "text-lg font-semibold tracking-tight",
            wordmarkClassName
          )}
        >
          rahim
          <span className="text-gradient-neon">.</span>
        </span>
      ) : null}
    </Link>
  )
}
