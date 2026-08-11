import Link from "next/link"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/site-data"

export function FinalCta() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
      <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Let&apos;s connect
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        I&apos;m open to connecting with recruiters, hiring managers, developers,
        and professionals working in AI, software development, automation, and
        cybersecurity.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button size="lg" render={<Link href="/contact" />}>
          <Mail className="size-4" aria-hidden="true" />
          Contact Me
        </Button>
        <Button
          size="lg"
          variant="outline"
          render={
            <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" />
          }
        >
          <LinkedinIcon className="size-4" aria-hidden="true" />
          View LinkedIn
        </Button>
        <Button
          size="lg"
          variant="outline"
          render={
            <Link href={profile.github} target="_blank" rel="noopener noreferrer" />
          }
        >
          <Github className="size-4" aria-hidden="true" />
          View GitHub
        </Button>
      </div>
    </section>
  )
}
