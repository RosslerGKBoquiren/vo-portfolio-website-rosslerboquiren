"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Loader,
  Maximize2,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import type { EducationEntry } from "@/lib/site-data"
import { cn } from "@/lib/utils"

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

export function EducationList({ education }: { education: EducationEntry[] }) {
  // Only entries with a diploma image participate in the lightbox.
  const withDiplomas = useMemo(
    () => education.filter((e) => e.diploma),
    [education],
  )
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isOpen = openIndex !== null

  const close = useCallback(() => setOpenIndex(null), [])
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % withDiplomas.length)),
    [withDiplomas.length],
  )
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + withDiplomas.length) % withDiplomas.length,
      ),
    [withDiplomas.length],
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

  const active = openIndex !== null ? withDiplomas[openIndex] : null

  return (
    <>
      <div className="mt-6 space-y-4">
        {education.map((entry) => {
          const diplomaIndex = entry.diploma
            ? withDiplomas.findIndex((e) => e.program === entry.program)
            : -1

          return (
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

                    {entry.diploma && (
                      <button
                        type="button"
                        onClick={() => setOpenIndex(diplomaIndex)}
                        className="group mt-4 block w-40 overflow-hidden rounded-lg border border-border bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label={`View ${entry.program} diploma`}
                      >
                        <span className="relative block aspect-[1.3/1] w-full overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={entry.diploma || "/placeholder.svg"}
                            alt={`${entry.program} diploma from ${entry.institution}`}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          />
                          <span className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/40 group-hover:opacity-100">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-2.5 py-1 text-xs font-medium text-foreground">
                              <Maximize2 className="size-3.5" aria-hidden="true" />
                              View
                            </span>
                          </span>
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      {isOpen && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Diploma viewer"
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
              {withDiplomas.length > 1 && (
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-0 z-10 inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:-left-14"
                  aria-label="Previous diploma"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
              )}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.diploma || "/placeholder.svg"}
                alt={`${active.program} diploma from ${active.institution}`}
                className="max-h-[75vh] w-auto max-w-full rounded-lg border border-border object-contain shadow-lg"
              />

              {withDiplomas.length > 1 && (
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-0 z-10 inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:-right-14"
                  aria-label="Next diploma"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              )}
            </div>

            <figcaption className="max-w-2xl text-balance text-center text-sm text-muted-foreground">
              {active.program}
              <span className="text-muted-foreground/70">
                {" "}
                · {active.institution} · {active.period}
              </span>
            </figcaption>

            {withDiplomas.length > 1 && (
              <div
                className="flex flex-wrap items-center justify-center gap-1.5"
                aria-hidden="true"
              >
                {withDiplomas.map((entry, i) => (
                  <button
                    key={entry.program}
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
