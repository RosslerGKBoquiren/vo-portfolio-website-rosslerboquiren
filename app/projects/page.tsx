import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ProjectsExplorer } from "@/components/projects/projects-explorer"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Rossler Boquiren combining AI, software development, automation, and data. This page grows as new work is published.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Practical work, in progress"
        description="I'm currently developing projects that combine AI, software development, automation, and data. This page will grow as I complete and publish new work."
      />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6">
        <ProjectsExplorer />
      </div>
    </>
  )
}
