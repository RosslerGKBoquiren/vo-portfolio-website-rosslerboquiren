import type { Metadata } from "next"
import Link from "next/link"
import {
  BookOpen,
  Camera,
  GraduationCap,
  Heart,
  MapPin,
  Sparkles,
  Train,
  Users,
  Video,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { profile, personalInterests } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About",
  description:
    "Rossler Boquiren's story: transitioning from sales, financial services, and airport operations into AI engineering and software development in Montréal.",
}

// Maps interest labels to icons. Add new interests in lib/site-data.ts.
const interestIcons: Record<string, typeof Heart> = {
  "Autism awareness": Heart,
  "Train videos and train spotting": Train,
  "Family life": Users,
  "Photography and videography": Camera,
  "Video production": Video,
  "Learning and professional development": BookOpen,
}

const quickFacts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Briefcase, label: "Current role", value: profile.currentRole },
  {
    icon: GraduationCap,
    label: "Studying",
    value: "B.A. General Studies (Project Management), University of the People",
  },
  { icon: Sparkles, label: "Learning", value: `${profile.currentlyLearning} (DataCamp)` },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A personal story into technology"
        description="Getting to know the person behind the portfolio—my background, my approach to AI, and what drives me."
      />

      <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        {/* Profile summary card — designed to read well without a photo.
            To add a photo later, place an <img> or <Avatar> in the left column. */}
        <Card className="mt-6 overflow-hidden">
          <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div
              aria-hidden="true"
              className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10 font-serif text-2xl font-semibold text-primary"
            >
              RB
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {profile.name}
              </h2>
              <p className="mt-1 text-muted-foreground">{profile.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Career goal: transition into a career in AI engineering or
                software development.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <fact.icon className="size-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {fact.label}
                </p>
                <p className="text-sm text-foreground">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main narrative */}
        <div className="mt-12 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>
            I&apos;m actively exploring the world of artificial intelligence and
            incorporating it into my daily routine to improve productivity, learn
            more effectively, and understand how intelligent systems can solve
            practical problems.
          </p>
          <p>
            My background combines airport cargo operations, team leadership,
            financial services, sales, client communication, process improvement,
            and technical studies. These experiences have helped me develop a
            strong interest in building technology that is useful, understandable,
            and centered on real human needs.
          </p>
          <p>
            My goal is to transition into a career in technology, preferably in
            AI. Over time, I want to design models and tools that help people make
            better decisions without being driven primarily by money, greed, or
            opportunism. My experience in sales taught me how important it is to
            question advice, understand people&apos;s real needs, and create
            solutions that are genuinely helpful.
          </p>
        </div>

        {/* Approach to AI */}
        <div className="mt-12 rounded-3xl border border-border bg-secondary/40 p-8">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Approach to AI
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            I&apos;m interested in responsible and human-centered AI. I want to
            continue developing the technical skills required to build useful
            systems while also thinking critically about how those systems
            influence people, organizations, and decision-making.
          </p>
        </div>

        {/* Personal interests */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Beyond the code
          </h2>
          <p className="mt-2 text-muted-foreground">
            A few things I care about outside of work and study.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {personalInterests.map((interest) => {
              const Icon = interestIcons[interest] ?? Sparkles
              return (
                <li
                  key={interest}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <span className="text-foreground">{interest}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button render={<Link href="/experience" />}>View my experience</Button>
          <Button variant="outline" render={<Link href="/contact" />}>
            Get in touch
          </Button>
        </div>
      </div>
    </>
  )
}
