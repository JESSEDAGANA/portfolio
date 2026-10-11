import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { cx } from '../../lib/utils'

/**
 * Editorial section layout: a narrow label column on the left (number + name),
 * the heading and content on the right. Stacks on small screens.
 */
export function Section({ id, number, label, title, alt, children }: { id: string; number: string; label: string; title: string; alt?: boolean; children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id={id} aria-labelledby={id + '-title'} className={cx('border-t border-rule px-5 py-20 sm:px-8 md:py-28', alt ? 'bg-alt' : 'bg-paper')}>
      <div ref={ref} className="mx-auto grid max-w-page gap-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12">
        <p className="flex gap-3 text-[13px] font-medium uppercase tracking-[0.08em] text-sub md:pt-3">
          <span className="tabular-nums">{number}</span>
          <span>{label}</span>
        </p>
        <div className="min-w-0">
          <h2 id={id + '-title'} className="text-[clamp(30px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">{title}</h2>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  )
}
