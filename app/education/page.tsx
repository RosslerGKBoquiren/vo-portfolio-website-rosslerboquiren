import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { EducationList } from "@/components/education/education-list"
import { CertificationsGrid } from "@/components/education/certifications-grid"
import { education, certifications } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Education & Certifications",
  description:
    "Rossler Boquiren's education and certifications, including a B.A. at University of the People, Herzing College diplomas, and in-progress DataCamp certifications.",
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
          <EducationList education={education} />
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
