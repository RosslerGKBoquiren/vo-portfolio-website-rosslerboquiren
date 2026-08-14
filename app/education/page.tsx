import type { Metadata } from "next"
import Link from "next/link"
import { GraduationCap, BadgeCheck, Loader } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CertificationsGrid } from "@/components/education/certifications-grid"
import { education, certifications } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Education & Certifications",
  description:
    "Rossler Boquiren's education and certifications, including a B.A. at University of the People, Herzing College diplomas, and in-progress DataCamp certifications.",
}

function StatusBadge({ status }: { status?: "In progress" | "Completed" }) {
  if (!status) return null
  const inProgress = status === "In progress"
  return (
    <Badge
      variant={inProgress ? "secondary" : "outline"}
      className="gap-1 rounded-full px-2.5"
    >
      {inProgress ? (
        <Loader className="size-3" aria-hidden="true" />
      ) : (
        <BadgeCheck className="size-3" aria-hidden="true" />
      )}
      {status}
    </Badge>
  )
}

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Education & certifications"
        description="A record of my formal studies and the certifications I'm actively working toward."
      />

      <div className="mx-auto max-w-4xl px-4 pb-20 pt-6 sm:px-6">
        {/* Education */}
        <section aria-labelledby="education-heading">
          <h2
            id="education-heading"
            className="font-serif text-2xl font-semibold text-foreground"
          >
            Education
          </h2>
          <div className="mt-6 space-y-4">
            {education.map((entry) => (
              <Card key={`${entry.program}-${entry.institution}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <GraduationCap className="size-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <CardTitle className="font-serif text-lg">
                          {entry.program}
                        </CardTitle>
                        <StatusBadge status={entry.status} />
                      </div>
                      {entry.detail && (
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {entry.detail}
                        </p>
                      )}
                      <p className="mt-1 font-medium text-primary">
                        {entry.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {entry.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Current learning / certifications */}
        <section aria-labelledby="certs-heading" className="mt-12">
          <h2
            id="certs-heading"
            className="font-serif text-2xl font-semibold text-foreground"
          >
            Certifications
          </h2>
          <p className="mt-2 text-muted-foreground">
            AI and data engineering certifications I&apos;ve completed, plus the
            career tracks I&apos;m actively working toward through DataCamp.
            Select a certificate to view it full size.
          </p>
          <CertificationsGrid certifications={certifications} />
        </section>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <p className="text-pretty leading-relaxed text-foreground">
            I&apos;m committed to continuous learning and currently building
            practical skills across AI engineering, data engineering, software
            development, and automation.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button render={<Link href="/projects" />}>See my projects</Button>
          <Button variant="outline" render={<Link href="/contact" />}>
            Contact me
          </Button>
        </div>
      </div>
    </>
  )
}
