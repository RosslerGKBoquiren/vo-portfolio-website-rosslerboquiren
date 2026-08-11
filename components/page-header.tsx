export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-4 pt-12 text-center sm:px-6 sm:pt-16">
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-2 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
