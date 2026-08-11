import { ProjectCard } from "@/components/projects/project-card"
import { ProjectsEmptyState } from "@/components/projects/projects-empty-state"
import { projects } from "@/lib/site-data"

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex flex-col gap-2">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">
          Featured work
        </p>
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Featured projects
        </h2>
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          A place for practical work in AI, automation, software development, and
          data. This section grows as new projects are published.
        </p>
      </div>

      {featured.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <ProjectsEmptyState />
      )}
    </section>
  )
}
