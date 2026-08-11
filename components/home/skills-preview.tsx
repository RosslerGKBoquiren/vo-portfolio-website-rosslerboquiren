import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"
import { skillCategories } from "@/lib/site-data"

export function SkillsPreview() {
  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Skills
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A growing, well-rounded toolkit
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            From programming and AI to automation, data, and media production.
            Items marked &ldquo;Learning&rdquo; are skills I&apos;m actively developing.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {category.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    status={skill.status}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button variant="outline" render={<Link href="/about" />}>
            More about my background
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
