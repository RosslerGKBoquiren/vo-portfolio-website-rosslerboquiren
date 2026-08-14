"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { BadgeCheck, ChevronLeft, ChevronRight, Loader, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Certification } from "@/lib/site-data"
import { cn } from "@/lib/utils"

function StatusBadge({ status }: { status: Certification["status"] }) {
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

export function CertificationsGrid({
  certifications,
}: {
  certifications: Certification[]
}) {
  // Only certs that have an image participate in the lightbox.
  const withImages = useMemo(
    () => certifications.filter((c) => c.image),
    [certifications],
  )
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isOpen = openIndex !== null

  const close = useCallback(() => setOpenIndex(null), [])
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % withImages.length)),
    [withImages.length],
  )
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + withImages.length) % withImages.length,
      ),
    [withImages.length],
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, close, next, prev])

  const active = openIndex !== null ? withImages[openIndex] : null

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => {
          const imageIndex = cert.image
            ? withImages.findIndex((c) => c.name === cert.name)
            : -1

          return (
            <Card key={cert.name} className="overflow-hidden">
              {cert.image && (
                <button
                  type="button"
                  onClick={() => setOpenIndex(imageIndex)}
                  className="group relative block aspect-[1.9/1] w-full overflow-hidden border-b border-border bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                  aria-label={`View ${cert.name} certificate`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.name} certificate from ${cert.provider}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              )}
              <CardContent className="flex items-start justify-between gap-3 p-5">
                <div>
                  <p className="font-medium text-foreground">{cert.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {cert.provider}
                    {cert.completed && ` · ${cert.completed}`}
                  </p>
                </div>
                <StatusBadge status={cert.status} />
              </CardContent>
            </Card>
          )
        })}
      </div>

      {isOpen && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close"
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          <figure
            className="flex max-h-full w-full max-w-4xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex w-full items-center justify-center">
              {withImages.length > 1 && (
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-0 z-10 inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:-left-14"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
              )}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.image || "/placeholder.svg"}
                alt={`${active.name} certificate from ${active.provider}`}
                className="max-h-[75vh] w-auto max-w-full rounded-lg border border-border object-contain shadow-lg"
              />

              {withImages.length > 1 && (
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-0 z-10 inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:-right-14"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              )}
            </div>

            <figcaption className="max-w-2xl text-balance text-center text-sm text-muted-foreground">
              {active.name}
              {active.completed && (
                <span className="text-muted-foreground/70">
                  {" "}
                  · {active.provider} · {active.completed}
                </span>
              )}
            </figcaption>

            {withImages.length > 1 && (
              <div
                className="flex flex-wrap items-center justify-center gap-1.5"
                aria-hidden="true"
              >
                {withImages.map((img, i) => (
                  <button
                    key={img.name}
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === openIndex
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground",
                    )}
                  />
                ))}
              </div>
            )}
          </figure>
        </div>
      )}
    </>
  )
}
