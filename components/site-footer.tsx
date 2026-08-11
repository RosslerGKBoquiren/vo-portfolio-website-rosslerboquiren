import Link from "next/link"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/brand-icons"
import { profile } from "@/lib/site-data"

export function SiteFooter() {
  const year = new Date().getFullYear()

  const socials = [
    { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon, external: true },
    { label: "GitHub", href: profile.github, icon: GithubIcon, external: true },
    { label: "YouTube", href: profile.youtube, icon: YoutubeIcon, external: true },
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail, external: false },
  ]

  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-lg font-semibold text-foreground">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
        </div>

        <nav aria-label="Social and contact links">
          <ul className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  {...(s.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <s.icon className="size-4" aria-hidden="true" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
