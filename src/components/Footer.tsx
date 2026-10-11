import { personal } from '../config/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-rule px-5 py-8 sm:px-8" style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}>
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[14px] text-sub">
        <p>© {new Date().getFullYear()} {personal.name} · {personal.location}</p>
        <p>Built with care.</p>
      </div>
    </footer>
  )
}
