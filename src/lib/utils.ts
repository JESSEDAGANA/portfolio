export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}

/** Smoothly scrolls to a section (instantly with reduced motion) and moves keyboard focus there. */
export function goToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1')
  el.focus({ preventScroll: true })
  try { history.replaceState(null, '', '#' + id) } catch { /* some embedded previews block this */ }
}

/** True inside an iframe (e.g. an embedded preview), where file downloads are often blocked. */
export function isEmbedded(): boolean {
  try { return window.self !== window.top } catch { return true }
}
