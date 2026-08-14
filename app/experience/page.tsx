import type { Metadata } from "next"
import Link from "next/link"
import { Check, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { experiences } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Rossler Boquiren's professional experience in airport cargo operations and financial services, and how it translates into AI engineering and software development.",
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've built my foundation"
        description="Nearly a decade of leadership, client work, and operations—experience that shaped how I analyze problems, understand user needs, and improve processes."
      />

      <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        {/* Transferable-skills framing */}
        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <p className="text-pretty leading-relaxed text-foreground">
            My previous roles developed strong skills in analyzing problems,
            understanding user needs, improving processes, communicating clearly,
            and leading teams—the same skills that support thoughtful AI
            engineering and software development.
          </p>
        </div>

        {/* Timeline */}
        <ol className="mt-12 space-y-10 border-l border-border pl-6">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.role}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.6875rem] top-1.5 size-3 rounded-full border-2 border-background bg-primary"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  {exp.role}
                </h2>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mt-1 font-medium text-primary">
                {exp.company}
                {exp.location && (
                  <span className="text-muted-foreground">
                    {" "}
                    &middot; {exp.location}
                  </span>
                )}
              </p>

              <ul className="mt-4 space-y-2.5">
                {exp.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-1 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-pretty leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Lightbulb className="size-4 text-primary" aria-hidden="true" />
                  Transferable skills
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.transferableSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button render={<Link href="/education" />}>
            Education &amp; certifications
          </Button>
          <Button variant="outline" render={<Link href="/contact" />}>
            Contact me
          </Button>
        </div>
      </div>
    </>
  )
}
