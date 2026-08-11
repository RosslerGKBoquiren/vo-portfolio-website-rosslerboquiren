import Link from "next/link"
import { ArrowRight, Briefcase, Plane, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: Briefcase,
    label: "Sales & financial services",
    detail: "Nearly a decade understanding people and their real needs.",
  },
  {
    icon: Plane,
    label: "Airport cargo operations",
    detail: "Leading teams, improving processes, and keeping people safe.",
  },
  {
    icon: Cpu,
    label: "AI & software development",
    detail: "Building practical, human-centered technology.",
  },
]

export function TransitionSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">
          A career transition
        </p>
        <h2 className="mt-2 max-w-3xl text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          From operations and financial services into technology
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          After nearly a decade in sales and financial services, along with
          experience in airport cargo operations, I became interested in how
          technology and artificial intelligence could support more thoughtful,
          practical, and human-centered decision-making.
        </p>

        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.label}
              className="rounded-2xl border border-border bg-secondary/40 p-5"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <step.icon className="size-5" aria-hidden="true" />
              </div>
              <p className="mt-4 font-medium text-foreground">{step.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <Button render={<Link href="/about" />}>
            Read my story
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
