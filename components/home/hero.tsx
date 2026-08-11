import Link from "next/link"
import { ArrowRight, FileText, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/site-data"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft warm wash behind the hero. Kept subtle and non-decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.62_0.14_45/0.10),transparent_70%)]"
      />
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
          <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
          Currently learning: {profile.currentlyLearning}
        </span>

        <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Exploring AI, automation, and software development to create technology
          that helps people.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I&apos;m {profile.name}, an AI Engineering student and aspiring AI
          developer based in {profile.location.replace(", Canada", "")}. I&apos;m
          building my technical skills in artificial intelligence, software
          development, automation, and data while preparing to transition into a
          career in technology.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" render={<Link href="/projects" />}>
            View My Projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/contact" />}>
            <Mail className="size-4" aria-hidden="true" />
            Contact Me
          </Button>
          {/*
            RÉSUMÉ BUTTON:
            Disabled until a résumé is available. When ready, set `resumeUrl`
            in lib/site-data.ts and this becomes an active download link.
          */}
          {profile.resumeUrl ? (
            <Button
              size="lg"
              variant="secondary"
              render={
                <Link href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" />
              }
            >
              <FileText className="size-4" aria-hidden="true" />
              Download Résumé
            </Button>
          ) : (
            <Button size="lg" variant="secondary" disabled>
              <FileText className="size-4" aria-hidden="true" />
              Résumé Coming Soon
            </Button>
          )}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          I&apos;m an active learner who explores AI and incorporates it into my
          daily routine to improve productivity and solve problems—turning
          curiosity into practical, human-centered technology.
        </p>
      </div>
    </section>
  )
}
