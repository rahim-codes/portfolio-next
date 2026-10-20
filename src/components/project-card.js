import Image from "next/image"
import {
  ArrowUpRightIcon,
  GlobeIcon,
  CodeXmlIcon,
} from "lucide-react"

import { GithubIcon } from "@/components/brand-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const covers = [
  "from-[oklch(0.85_0.24_150/35%)] via-[oklch(0.78_0.15_200/20%)] to-transparent",
  "from-[oklch(0.72_0.17_300/35%)] via-[oklch(0.85_0.24_150/15%)] to-transparent",
  "from-[oklch(0.78_0.15_200/35%)] via-[oklch(0.72_0.17_300/15%)] to-transparent",
]

export function ProjectCard({ project, index = 0 }) {
  const gradient = covers[index % covers.length]

  return (
    <Card className="card-hover group relative flex h-full flex-col overflow-hidden border-border/70 bg-card/60 backdrop-blur-sm">
      <div
        className={`relative h-36 overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="bg-grid absolute inset-0 opacity-60" />
            <CodeXmlIcon className="absolute top-4 right-4 size-8 text-foreground/40 transition-transform duration-300 group-hover:scale-110" />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between gap-2 text-lg font-semibold tracking-tight">
          <span>{project.title}</span>
          {project.featured ? (
            <Badge
              variant="secondary"
              className="border-[var(--neon)]/30 bg-[var(--neon)]/10 text-[var(--neon)]"
            >
              Featured
            </Badge>
          ) : null}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline" className="border-border/80 text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2 border-t border-border/60 bg-muted/20 pt-4">
        {project.live ? (
          <Button
            size="sm"
            render={
              <a href={project.live} target="_blank" rel="noopener noreferrer" />
            }
          >
            <GlobeIcon /> Live
            <ArrowUpRightIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        ) : null}
        <Button
          size="sm"
          variant="outline"
          render={
            <a href={project.repo} target="_blank" rel="noopener noreferrer" />
          }
        >
          <GithubIcon /> Source
        </Button>
      </CardFooter>
    </Card>
  )
}
