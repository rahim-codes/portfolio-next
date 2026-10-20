import { Reveal } from "@/components/reveal"

export function SectionHeading({ label, title, description, align = "left" }) {
  return (
    <Reveal
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--neon)]/25 bg-[var(--neon)]/5 px-3 py-1 text-xs font-medium tracking-widest text-[var(--neon)] uppercase">
        {label}
      </span>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
