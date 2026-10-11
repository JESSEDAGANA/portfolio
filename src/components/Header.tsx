import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navLinks, personal } from '../config/portfolio'
import { useResume } from '../hooks/useResume'
import { goToSection, isEmbedded } from '../lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const { href, available, external } = useResume()
  const embedded = isEmbedded()

  useEffect(() => {
    if (!open) return
    firstLinkRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
    }
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => { document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize) }
  }, [open])

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    requestAnimationFrame(() => goToSection(id)) // let the menu close before measuring
  }

  const resumeLink = available !== false && (
    <a
      href={href}
      {...(embedded || external ? { target: '_blank', rel: 'noopener' } : { download: 'Jesse-Dagana-Resume.pdf' })}
      className="inline-flex min-h-[38px] items-center rounded-md border border-rule px-3.5 text-[14px] font-medium text-ink transition-colors duration-200 hover:border-ink"
    >
      Résumé
    </a>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-white/90 backdrop-blur-md" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className="px-5 sm:px-8">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-6">
        <a href="#top" onClick={go('top')} className="text-[16px] font-semibold tracking-[-0.01em] text-ink">
          {personal.name}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={'#' + l.id} onClick={go(l.id)} className="text-[14px] text-sub transition-colors duration-200 hover:text-ink">{l.label}</a>
              </li>
            ))}
          </ul>
          {resumeLink}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          id="menu-toggle"
          className="-mr-2 grid h-11 w-11 place-items-center rounded-md text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-t border-rule bg-white px-5 pb-5 pt-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)] md:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((l, i) => (
            <li key={l.id} className="border-b border-rule">
              <a ref={i === 0 ? firstLinkRef : undefined} href={'#' + l.id} onClick={go(l.id)} className="flex min-h-[48px] items-center text-[16px] text-ink">{l.label}</a>
            </li>
          ))}
        </ul>
        {available !== false && <div className="mt-4">{resumeLink}</div>}
      </nav>
    </header>
  )
}
