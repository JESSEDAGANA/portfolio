import { ArrowUpRight } from 'lucide-react'
import { projects } from '../config/portfolio'
import type { Project } from '../types'
import { Section } from './ui/Section'

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article aria-labelledby={'p-' + project.title.replace(/\W+/g, '-')} className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
      <div className="min-w-0">
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-sub">{project.context}</p>
        <h3 id={'p-' + project.title.replace(/\W+/g, '-')} className="mt-2 text-[clamp(24px,2.6vw,30px)] font-semibold leading-[1.2] tracking-[-0.02em] text-ink [text-wrap:balance]">
          {project.title}
        </h3>
        <p className="mt-4 text-[17px] leading-[1.7] text-ink">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => <li key={t} className="rounded bg-soft px-2.5 py-1 text-[13px] text-ink">{t}</li>)}
        </ul>

        <h4 className="mt-10 text-[15px] font-semibold text-ink">The problem</h4>
        <p className="mt-2 max-w-[62ch] text-[16px] leading-[1.7] text-sub">{project.problem}</p>

        <h4 className="mt-8 text-[15px] font-semibold text-ink">How it works</h4>
        <ul className="mt-2 flex max-w-[62ch] flex-col gap-2">
          {project.implementation.map((p) => (
            <li key={p} className="flex gap-3 text-[16px] leading-[1.7] text-sub">
              <span className="mt-[13px] h-px w-3 shrink-0 bg-sub" aria-hidden="true" />{p}
            </li>
          ))}
        </ul>

        {(project.repoUrl || project.demoUrl) && (
          <div className="mt-8 flex flex-wrap gap-6">
            {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 border-b border-ink pb-0.5 text-[15px] font-medium text-ink">View repository <ArrowUpRight size={15} aria-hidden="true" /></a>}
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 border-b border-ink pb-0.5 text-[15px] font-medium text-ink">View demo <ArrowUpRight size={15} aria-hidden="true" /></a>}
          </div>
        )}
      </div>

      <div className="min-w-0">
        {project.screenshot ? (
          <img src={project.screenshot} alt={project.screenshotAlt || `${project.title} screenshot`} loading="lazy" className="w-full max-w-full rounded-md border border-rule" />
        ) : (
          /* Typographic summary of the workflow, used until a real screenshot is provided. */
          <figure className="rounded-md border border-rule bg-white p-6 sm:p-8">
            <figcaption className="text-[13px] font-medium uppercase tracking-[0.08em] text-sub">Simplified workflow</figcaption>
            <ol className="mt-6 flex flex-col">
              {project.workflow.map((step, i) => (
                <li key={step} className="flex items-baseline gap-4 border-t border-rule py-3.5 first:border-t-0 first:pt-0 last:pb-0">
                  <span className="w-6 shrink-0 text-[13px] tabular-nums text-sub">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[15px] text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </figure>
        )}
      </div>
    </article>
  )
}

export function FeaturedProject() {
  return (
    <Section id="projects" number="04" label="Projects" title="Selected work." alt>
      <div className="flex flex-col gap-20">
        {projects.map((p) => <ProjectEntry key={p.title} project={p} />)}
      </div>
    </Section>
  )
}
