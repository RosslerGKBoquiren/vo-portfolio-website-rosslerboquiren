import Link from "next/link"
import { ExternalLink, ImageIcon, Target } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project, ProjectStatus } from "@/lib/site-data"
import { cn } from "@/lib/utils"
import { ProjectGallery } from "@/components/projects/project-gallery"

const statusStyles: Record<ProjectStatus, string> = {
  "In progress":
    "bg-primary/10 text-primary border border-primary/20",
  Completed:
    "bg-[oklch(0.55_0.06_145)]/12 text-[oklch(0.42_0.07_145)] dark:text-[oklch(0.75_0.09_145)] border border-[oklch(0.55_0.06_145)]/25",
  Planned:
    "bg-muted text-muted-foreground border border-border",
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      {/* Image / screenshot area. Replace with a real screenshot via `image` in site-data. */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-secondary">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image || "/placeholder.svg"}
            alt={`Screenshot of ${project.title}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageIcon className="size-8" aria-hidden="true" />
            <span className="text-xs">Screenshot coming soon</span>
          </div>
        )}
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
            Featured
          </span>
        )}
      </div>

      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
              statusStyles[project.status],
            )}
          >
            {project.status}
          </span>
          {project.categories.map((c) => (
            <Badge key={c} variant="secondary" className="rounded-full">
              {c}
            </Badge>
          ))}
        </div>
        <CardTitle className="mt-2 font-serif text-xl">{project.title}</CardTitle>
        <CardDescription className="leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex items-start gap-2 rounded-lg bg-secondary/60 p-3">
          <Target
            className="mt-0.5 size-4 shrink-0 text-primary"
            aria-hidden="true"
          />
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Problem: </span>
            {project.problem}
          </p>
        </div>

        {project.learningOutcomes.length > 0 && (
          <div>
            <p className="text-sm font-medium text-foreground">
              Key learning outcomes
            </p>
            <ul className="mt-1.5 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {project.learningOutcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <ProjectGallery images={project.gallery} title={project.title} />
        )}

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>

      {(project.githubUrl || project.demoUrl) && (
        <CardFooter className="gap-2">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              render={
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <GithubIcon className="size-4" aria-hidden="true" />
              Code
            </Button>
          )}
          {project.demoUrl && (
            <Button
              size="sm"
              render={
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Live demo
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
