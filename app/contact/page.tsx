import type { Metadata } from "next"
import Link from "next/link"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact/contact-form"
import { profile } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rossler Boquiren about opportunities in AI engineering, software development, automation, and data.",
}

export default function ContactPage() {
  const links = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "in/rgkboquiren",
      href: profile.linkedin,
      external: true,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "RosslerGKBoquiren",
      href: profile.github,
      external: true,
    },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's connect"
        description="I'm interested in connecting with people working in AI engineering, software development, automation, data, and technology. If you are a recruiter, hiring manager, developer, or potential collaborator, I would be happy to hear from you."
      />

      <div className="mx-auto grid max-w-5xl gap-8 px-4 pb-20 pt-6 sm:px-6 lg:grid-cols-5">
        {/* Contact form */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6 sm:p-8">
              <h2 className="sr-only">Contact form</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Direct links */}
        <aside className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-secondary/40 p-6">
            <h2 className="font-serif text-lg font-semibold text-foreground">
              Reach me directly
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Prefer another channel? Here&apos;s where to find me.
            </p>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <link.icon className="size-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {link.label}
                      </p>
                      <p className="truncate text-sm text-muted-foreground">
                        {link.value}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}
