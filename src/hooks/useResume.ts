import { useEffect, useState } from 'react'
import { resumePath } from '../config/portfolio'

/**
 * Checks that the résumé PDF really exists, so the button never points at a missing file.
 * `available` is null while checking, then true or false.
 */
export function useResume() {
  const [available, setAvailable] = useState<boolean | null>(resumePath ? null : false)
  useEffect(() => {
    if (!resumePath) return
    if (/^https?:\/\//.test(resumePath)) { setAvailable(true); return } // external link (e.g. Google Drive): cannot be checked from the browser
    let cancelled = false
    fetch(resumePath, { method: 'HEAD' })
      .then((r) => {
        const type = r.headers.get('content-type') || ''
        const ok = r.ok && !type.includes('text/html') // dev servers answer missing files with index.html
        if (!cancelled) setAvailable(ok)
        if (!ok && import.meta.env.DEV) console.warn(`Résumé not found at /public/${resumePath}. Add the PDF to enable the download button.`)
      })
      .catch(() => { if (!cancelled) setAvailable(true) }) // some hosts refuse HEAD requests; assume the file exists
    return () => { cancelled = true }
  }, [])
  const external = /^https?:\/\//.test(resumePath)
  return { href: resumePath, available, external }
}
