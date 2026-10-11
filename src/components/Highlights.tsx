import { highlights } from '../config/portfolio'

export function Highlights() {
  return (
    <section aria-label="Professional highlights" className="border-y border-rule bg-alt px-5 sm:px-8">
      <dl className="mx-auto grid max-w-page sm:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col-reverse justify-end gap-1 border-rule py-8 [&:not(:last-child)]:border-b sm:px-8 sm:py-10 sm:first:pl-0 sm:[&:not(:last-child)]:border-b-0 sm:[&:not(:last-child)]:border-r">
            <dt className="text-[13px] font-medium uppercase tracking-[0.08em] text-sub">{h.label}</dt>
            <dd className="text-[clamp(20px,2vw,24px)] font-semibold tracking-[-0.02em] text-ink">{h.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
