import { ArrowUpRight } from 'lucide-react'
import { certifications, inProgress } from '../config/portfolio'
import { Section } from './ui/Section'

export function Certifications() {
  const certs = certifications.filter((c) => c.published)
  return (
    <Section id="certifications" number="05" label="Training" title="Training and certifications.">
      <ul className="border-t border-rule">
        {certs.map((c) => (
          <li key={c.name} className="grid gap-2 border-b border-rule py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6">
            <div className="min-w-0">
              <h3 className="text-[17px] font-semibold text-ink">{c.name}</h3>
              <p className="mt-1 text-[14px] text-sub">
                {c.issuer}
                {c.date && <> · {c.date}</>}
                {c.credentialId && <> · ID {c.credentialId}</>}
              </p>
            </div>
            {(c.url || c.file) && (
              <div className="flex flex-wrap gap-x-6 justify-self-start sm:justify-self-end">
                {c.file && (
                  <a href={c.file} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center gap-1 text-[14px] font-medium text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-ink">
                    View certificate <ArrowUpRight size={15} aria-hidden="true" />
                    <span className="sr-only"> for {c.name} (opens the certificate image)</span>
                  </a>
                )}
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center gap-1 text-[14px] font-medium text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-ink">
                    Verify credential <ArrowUpRight size={15} aria-hidden="true" />
                    <span className="sr-only"> for {c.name} (opens NITDA verification page)</span>
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
      {inProgress.length > 0 && (
        <p className="mt-6 text-[15px] text-sub">Currently: {inProgress.join(', ')}</p>
      )}
    </Section>
  )
}
