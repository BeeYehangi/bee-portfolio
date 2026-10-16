import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GithubIcon } from '@/components/brand-icons'
import { projects, type Project } from '@/lib/site'
import { cn } from '@/lib/utils'

function Preview({ project }: { project: Project }) {
  return (
    <div className="aspect-[16/10] w-full overflow-hidden border-b border-border bg-secondary">
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`${project.name} interface preview`}
          loading="lazy"
          className="size-full object-cover object-top"
        />
      ) : (
        <div className="flex size-full flex-col" aria-hidden="true">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
          </div>
          <div className="flex flex-1 items-center justify-center font-mono text-xs text-muted-foreground">
            {project.planned ? 'Notebook coming soon' : 'Screenshot coming soon'}
          </div>
        </div>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="03." title="Projects" id="projects-title" />
      </Reveal>

      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.name}>
            <Reveal delay={(i % 2) * 100} className="h-full">
              <article
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 motion-reduce:hover:translate-y-0',
                  project.planned
                    ? 'border-dashed border-border bg-transparent'
                    : 'border-border hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5',
                )}
              >
                <Preview project={project} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p
                      className={cn(
                        'font-mono text-xs',
                        project.planned ? 'text-warn' : 'text-primary',
                      )}
                    >
                      {project.label}
                    </p>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex shrink-0 items-center gap-1.5 rounded-md text-sm text-muted-foreground transition-colors after:absolute after:inset-0 hover:text-primary"
                      >
                        <GithubIcon className="size-4" />
                        <span className="sr-only">{`View ${project.name} on GitHub`}</span>
                        <ArrowUpRight
                          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <FolderGit2 className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    )}
                  </div>

                  <h3
                    className={cn(
                      'text-xl font-semibold tracking-tight transition-colors',
                      !project.planned && 'group-hover:text-primary',
                    )}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5" aria-label="Tech stack">
                    {project.tags.map((tag) => (
                      <li key={tag} className="font-mono text-xs text-muted-foreground">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
