import { Brain, Code2, Server, Wrench } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/site'
import { cn } from '@/lib/utils'

const icons = [Code2, Server, Brain, Wrench]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="02." title="Skills" id="skills-title" />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-medium">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className={cn(
                        'rounded-md border px-2.5 py-1 font-mono text-xs',
                        skill.learning
                          ? 'border-dashed border-muted-foreground/50 text-muted-foreground'
                          : 'border-border bg-secondary text-secondary-foreground',
                      )}
                    >
                      {skill.name}
                      {skill.learning && <span className="sr-only"> (learning)</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>

      <p className="mt-5 flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <span aria-hidden="true" className="inline-block w-6 border-t border-dashed border-muted-foreground" />
        dashed = still learning
      </p>
    </section>
  )
}
