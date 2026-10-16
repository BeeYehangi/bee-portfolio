export function SectionHeading({
  index,
  title,
  id,
}: {
  index: string
  title: string
  id: string
}) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 id={id} className="flex items-baseline gap-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        <span className="font-mono text-sm font-normal text-primary">{index}</span>
        {title}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
    </div>
  )
}
