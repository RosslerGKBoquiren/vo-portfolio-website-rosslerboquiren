"use client"

import { useMemo, useState } from "react"
import { ProjectCard } from "@/components/projects/project-card"
import { ProjectsEmptyState } from "@/components/projects/projects-empty-state"
import { cn } from "@/lib/utils"
import { projects, projectCategories, type ProjectCategory } from "@/lib/site-data"

type Filter = ProjectCategory | "All"

export function ProjectsExplorer() {
  const [active, setActive] = useState<Filter>("All")

  const filters: Filter[] = ["All", ...projectCategories]

  const visible = useMemo(() => {
    if (active === "All") return projects
    return projects.filter((p) => p.categories.includes(active))
  }, [active])

  const hasProjects = projects.length > 0

  return (
    <div>
      {/* Filter bar. Wired up and ready — activates automatically once projects
          are added to `projects` in lib/site-data.ts. */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => {
          const isActive = active === filter
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
              disabled={!hasProjects}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {filter}
            </button>
          )
        })}
      </div>

      <div className="mt-8">
        {!hasProjects ? (
          <ProjectsEmptyState showCta={false} />
        ) : visible.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <ProjectsEmptyState
            showCta={false}
            message={`No projects in the "${active}" category yet. Check back soon.`}
          />
        )}
      </div>
    </div>
  )
}
