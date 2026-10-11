import { ArrowDown, Download } from 'lucide-react'
import { facts, personal } from '../config/portfolio'
import { useResume } from '../hooks/useResume'
import { goToSection, isEmbedded } from '../lib/utils'
import { Button, LinkButton } from './ui/Button'

export function Hero() {
  const { href, available, external } = useResume()
  const embedded = isEmbedded()

  return (
    <section id="top" aria-labelledby="hero-title" className="px-5 pb-20 pt-12 sm:px-8 md:pb-24 md:pt-24">
      <div className="hero-in mx-auto grid max-w-page gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,340px)] md:items-start md:gap-16">
        <div className="min-w-0">
          <p className="flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.12em] text-sub">
            <span className="h-2 w-2 rounded-full bg-ink" aria-hidden="true" />
            {personal.location} · {personal.status}
          </p>

          <h1 id="hero-title" className="mt-8 text-[clamp(40px,6.4vw,76px)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink [text-wrap:balance]">
            {personal.fullName}
          </h1>

          <p className="mt-7 max-w-[60ch] text-[17px] leading-[1.7] text-sub md:text-[18px]">{personal.intro}</p>

          <p className="mt-6 flex flex-wrap gap-y-1 text-[14px] text-ink">
            {personal.focus.map((f, i) => (
              <span key={f} className="whitespace-nowrap">
                {f}
                {i < personal.focus.length - 1 && <span className="mx-2 text-[#B5B5B5]" aria-hidden="true">·</span>}
              </span>
            ))}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button id="explore-work" onClick={() => goToSection('projects')}>
              Explore My Work <ArrowDown size={16} aria-hidden="true" />
            </Button>
            {available === false ? (
              <span className="inline-flex min-h-[46px] items-center rounded-md border border-dashed border-rule px-5 text-[15px] text-sub">
                Résumé available on request
              </span>
            ) : (
              <LinkButton
                variant="secondary"
                href={href}
                {...(embedded || external ? { target: '_blank', rel: 'noopener' } : { download: 'Jesse-Dagana-Resume.pdf' })}
              >
                Download Résumé <Download size={16} aria-hidden="true" />
              </LinkButton>
            )}
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-rule pt-6 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="min-w-0">
                <dt className="text-[12px] font-medium uppercase tracking-[0.08em] text-sub">{f.label}</dt>
                <dd className="mt-1 text-[14px] leading-[1.5] text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {personal.photo && (
          <figure className="order-first w-[160px] md:order-none md:w-full md:max-w-[300px] md:justify-self-end">
            <img
              src={personal.photo}
              alt={`Portrait of ${personal.fullName}`}
              width={720}
              height={720}
              className="aspect-square w-full rounded-full object-cover ring-1 ring-rule ring-offset-4"
            />
          </figure>
        )}
      </div>
    </section>
  )
}
