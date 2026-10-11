import { skills } from '../config/portfolio'
import { Section } from './ui/Section'

export function Skills() {
  return (
    <Section id="skills" number="02" label="Skills" title="Tools I work with." alt>
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.title} className="border-t border-rule pt-5">
            <h3 className="text-[16px] font-semibold text-ink">{g.title}</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {g.items.map((s) => <li key={s} className="text-[15px] leading-[1.6] text-sub">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
