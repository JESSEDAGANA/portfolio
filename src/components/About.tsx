import { about } from '../config/portfolio'
import { Section } from './ui/Section'

export function About() {
  const [lead, ...rest] = about
  return (
    <Section id="about" number="01" label="About" title="A little about me.">
      <div className="flex max-w-[66ch] flex-col gap-5">
        <p className="text-[19px] leading-[1.65] text-ink">{lead}</p>
        {rest.map((p) => <p key={p} className="text-[17px] leading-[1.75] text-sub">{p}</p>)}
      </div>
    </Section>
  )
}
