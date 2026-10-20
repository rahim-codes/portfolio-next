import { Badge } from "@/components/ui/badge"
import { marqueeSkills } from "@/lib/data/site"

export function SkillMarquee() {
  return (
    <div className="marquee-mask relative overflow-hidden py-2">
      <div className="marquee-track gap-3">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-3 pr-3" aria-hidden={copy === 1}>
            {marqueeSkills.map((skill) => (
              <Badge
                key={`${copy}-${skill}`}
                variant="secondary"
                className="h-9 gap-2 border border-border/70 bg-card/60 px-4 text-sm text-muted-foreground"
              >
                <span className="size-1.5 rounded-full bg-[var(--neon)]" />
                {skill}
              </Badge>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
