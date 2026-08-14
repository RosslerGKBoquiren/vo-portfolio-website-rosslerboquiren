"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

type GalleryImage = { src: string; alt: string; caption?: string }

export function ProjectGallery({
  images,
  title,
}: {
  images: GalleryImage[]
  title: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isOpen = openIndex !== null

  const close = useCallback(() => setOpenIndex(null), [])
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  )
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + images.length) % images.length,
      ),
    [images.length],
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

  if (images.length === 0) return null

  const active = openIndex !== null ? images[openIndex] : null

  return (
    <div>
      <p className="text-sm font-medium text-foreground">
        Screenshots{" "}
        <span className="font-normal text-muted-foreground">
          ({images.length})
        </span>
      </p>
      <ul className="mt-1.5 grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`View screenshot ${i + 1}: ${img.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {isOpen && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshots`}
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
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-0 z-10 inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:-left-14"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
              )}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src || "/placeholder.svg"}
                alt={active.alt}
                className="max-h-[70vh] w-auto max-w-full rounded-lg border border-border object-contain shadow-lg"
              />

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-0 z-10 inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:-right-14"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              )}
            </div>

            {active.caption && (
              <figcaption className="max-w-2xl text-balance text-center text-sm text-muted-foreground">
                {active.caption}
              </figcaption>
            )}

            {images.length > 1 && (
              <div
                className="flex flex-wrap items-center justify-center gap-1.5"
                aria-hidden="true"
              >
                {images.map((img, i) => (
                  <button
                    key={img.src}
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
    </div>
  )
}
