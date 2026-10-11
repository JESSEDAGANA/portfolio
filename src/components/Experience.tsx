import { experience } from '../config/portfolio'
import { Section } from './ui/Section'

export function Experience() {
  const entries = experience.filter((e) => e.published)
  return (
    <Section id="experience" number="03" label="Experience" title="Experience.">
      {entries.length === 0 ? (
        <p className="text-[16px] text-sub">Experience details will be added soon.</p>
      ) : (
        <ol className="border-l border-rule">
          {entries.map((e) => (
            <li key={e.organisation} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[4.5px] top-[9px] h-2 w-2 rounded-full bg-ink" aria-hidden="true" />
              <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-sub">
                {e.dates}{e.location ? ` · ${e.location}` : ''}
              </p>
              <h3 className="mt-2 text-[20px] font-semibold leading-[1.35] tracking-[-0.01em] text-ink [text-wrap:balance]">{e.organisation}</h3>
              <p className="mt-1 text-[15px] font-medium text-ink">{e.role}</p>
              <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.7] text-sub">{e.description}</p>
              <ul className="mt-4 flex max-w-[62ch] flex-col gap-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-[1.65] text-sub">
                    <span className="mt-[11px] h-px w-3 shrink-0 bg-sub" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      )}
    </Section>
  )
}
