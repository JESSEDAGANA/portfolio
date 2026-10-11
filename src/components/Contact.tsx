import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { contact } from '../config/portfolio'
import { Section } from './ui/Section'

export function Contact() {
  const [state, setState] = useState<'idle' | 'copied' | 'select'>('idle')

  const copy = () => {
    const selectIt = () => {
      const el = document.getElementById('contact-email')
      if (el) { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s?.removeAllRanges(); s?.addRange(r) }
      setState('select')
    }
    try {
      navigator.clipboard.writeText(contact.email).then(() => { setState('copied'); setTimeout(() => setState('idle'), 2000) }, selectIt)
    } catch { selectIt() }
  }

  const profiles = [
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'GitHub', href: contact.github },
    { label: 'X', href: contact.x },
  ].filter((p) => p.href)

  return (
    <Section id="contact" number="06" label="Contact" title="Let’s connect." alt>
      <p className="max-w-[54ch] text-[18px] leading-[1.7] text-sub">
        I’m open to IT support opportunities and conversations about systems, networking, and practical technology projects.
      </p>

      {contact.email && (
        <div className="mt-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-sub">Email</p>
          <a id="contact-email" href={'mailto:' + contact.email} className="mt-2 inline-block break-all text-[clamp(22px,3vw,32px)] font-semibold tracking-[-0.02em] text-ink underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink">
            {contact.email}
          </a>
          <div className="mt-4">
            <button type="button" id="copy-email" onClick={copy} className="inline-flex min-h-[40px] items-center gap-2 rounded-md border border-rule bg-white px-3.5 text-[14px] text-ink transition-colors hover:border-ink">
              {state === 'copied' ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
              {state === 'copied' ? 'Copied' : state === 'select' ? 'Selected — press Ctrl+C to copy' : 'Copy email address'}
            </button>
            <span className="sr-only" aria-live="polite">{state === 'copied' ? 'Email address copied' : ''}</span>
          </div>
        </div>
      )}

      {contact.phones.length > 0 && (
        <div className="mt-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-sub">Phone</p>
          <ul className="mt-2 flex flex-wrap gap-x-8 gap-y-2">
            {contact.phones.map((n) => (
              <li key={n}>
                <a href={'tel:+234' + n.replace(/\D/g, '').replace(/^0/, '')} className="select-all text-[clamp(20px,2.4vw,26px)] font-semibold tabular-nums tracking-[-0.01em] text-ink underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink">
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {profiles.length > 0 && (
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {profiles.map((p) => (
            <li key={p.label}>
              <a href={p.href} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center gap-1 text-[16px] font-medium text-ink transition-colors hover:text-sub">
                {p.label} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
