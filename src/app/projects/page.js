import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { projects, site } from "@/lib/data/site"

export const metadata = {
  title: "Projects",
  description: "Selected full-stack projects built with React, Next.js, Node.js and MongoDB.",
}

export default function ProjectsPage() {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 pb-24 sm:px-6">
      <div className="bg-glow pointer-events-none absolute inset-x-0 top-0 h-72" />

      <section className="relative pt-6 pb-10">
        <SectionHeading
          label="Work"
          title="Projects I've built"
          description={`${projects.length} projects from my GitHub (@${site.username}) — each one taught me something new about shipping real interfaces.`}
        />
      </section>

      <section className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 90}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </section>
    </div>
  )
}
