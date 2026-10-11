import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cx } from '../../lib/utils'

type Variant = 'primary' | 'secondary'

const base =
  'inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md px-5 text-[15px] font-medium transition-colors duration-200'
const variants: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-[#333333]',
  secondary: 'border border-rule bg-white text-ink hover:border-ink',
}

export function Button({ variant = 'primary', className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return <button type="button" className={cx(base, variants[variant], className)} {...rest}>{children}</button>
}

export function LinkButton({ variant = 'primary', className, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return <a className={cx(base, variants[variant], className)} {...rest}>{children}</a>
}
