import Link from "next/link"
import { FolderGit2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsEmptyState({
  showCta = true,
  message = "New projects are currently in development. This space will soon showcase practical work in AI, automation, software development, and data.",
}: {
  showCta?: boolean
  message?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-16 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <FolderGit2 className="size-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
        Projects in development
      </h3>
      <p className="mt-2 max-w-md text-pretty text-muted-foreground">{message}</p>
      {showCta && (
        <Button className="mt-6" render={<Link href="/projects" />}>
          Explore the Projects Page
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      )}
    </div>
  )
}
