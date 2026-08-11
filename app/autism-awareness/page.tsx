import type { Metadata } from "next"
import Link from "next/link"
import { Train, Heart, PlaySquare, Video } from "lucide-react"
import { YoutubeIcon } from "@/components/brand-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { profile } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Autism Awareness",
  description:
    "ImJasonBruce is a family-created YouTube channel focused on autism awareness and calming train videos, sharing a personal perspective on autism and family life.",
}

const channelUrl = profile.youtube

export default function AutismAwarenessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Autism Awareness"
        title="ImJasonBruce"
        description="A family-created YouTube channel focused on autism awareness, calming content, and sharing a personal perspective on family life."
      />

      <div className="mx-auto max-w-4xl px-4 pb-20 pt-6 sm:px-6">
        {/* Intro + primary CTA */}
        <Card className="overflow-hidden">
          <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <YoutubeIcon className="size-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-foreground">
                  ImJasonBruce
                </p>
                <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                  ImJasonBruce is a family-created YouTube channel focused on
                  autism awareness and calming content. The channel includes train
                  videos with calming music that can help Jason Bruce when he feels
                  stressed, while also sharing a personal perspective on autism,
                  family life, and the comfort that familiar interests can provide.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <Button
                size="lg"
                render={
                  <Link href={channelUrl} target="_blank" rel="noopener noreferrer" />
                }
              >
                <YoutubeIcon className="size-4" aria-hidden="true" />
                Visit the YouTube Channel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Content sections */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Heart,
              title: "Autism awareness",
              body: "Sharing a personal, family-centered perspective on autism and the everyday moments that matter.",
            },
            {
              icon: Train,
              title: "Calming train videos",
              body: "Train videos paired with calming music that can help Jason Bruce feel more at ease when things feel stressful.",
            },
            {
              icon: Video,
              title: "Family stories",
              body: "A space to share family life and the comfort that familiar interests can bring.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Featured / embedded videos section.
            To feature a specific video later, replace a placeholder tile with an
            <iframe> embed, e.g.:
              <iframe src="https://www.youtube.com/embed/VIDEO_ID" ... />
        */}
        <section aria-labelledby="videos-heading" className="mt-12">
          <h2
            id="videos-heading"
            className="font-serif text-2xl font-semibold text-foreground"
          >
            Featured videos
          </h2>
          <p className="mt-2 text-muted-foreground">
            This space will feature videos from the channel. It can be updated with
            new videos and stories over time.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-secondary/40 text-muted-foreground"
              >
                <PlaySquare className="size-8" aria-hidden="true" />
                <span className="text-sm">Video coming soon</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button
              variant="outline"
              render={
                <Link href={channelUrl} target="_blank" rel="noopener noreferrer" />
              }
            >
              <YoutubeIcon className="size-4" aria-hidden="true" />
              Watch on YouTube
            </Button>
          </div>
        </section>

        <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
          This page shares awareness, family support, calming content, and personal
          experience. It is not medical advice and the videos are not described as
          treatment.
        </p>
      </div>
    </>
  )
}
