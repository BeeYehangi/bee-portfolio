import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const education = [
  {
    years: '2025 – 2026',
    title: 'Certified AI & ML Engineer (CAME)',
    detail: 'In progress',
    place: 'IJSE',
    current: true,
  },
  {
    years: '2024 – 2025',
    title: 'BSc (Hons) Computer Science',
    detail: 'Software Engineering · Upper Second Class Honours',
    place: 'Kingston University',
  },
  {
    years: '2024 – 2025',
    title: 'CMJD Diploma',
    detail: 'Comprehensive Master Java Developer',
    place: 'IJSE',
  },
  {
    years: '2023 – 2024',
    title: 'HND in Computing',
    detail: 'Pearson BTEC',
    place: 'ESOFT Metro Campus',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="01." title="About" id="about-title" />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              {"I'm a "}
              <span className="text-foreground">Computer Science graduate</span>
              {' from Kingston University, specialising in Software Engineering and graduating with Upper Second Class Honours.'}
            </p>
            <p>
              I like the whole life of a product: designing it, building it, and checking that it
              works for every kind of user.
            </p>
            <p>
              {"I'm completing the "}
              <span className="text-foreground">Certified AI & ML Engineer</span>
              {' programme at IJSE, working through model training, evaluation, exploratory data analysis, neural networks and LLMs. I’m looking for a first role where I can build, test and keep learning.'}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-3">
          <ol className="relative flex flex-col gap-6 border-l border-border pl-6">
            {education.map((item) => (
              <li key={item.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-1 flex size-3.5 items-center justify-center rounded-full border border-primary bg-background"
                >
                  {item.current && <span className="size-1.5 rounded-full bg-primary" />}
                </span>
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className={`font-mono text-xs ${item.current ? 'text-primary' : 'text-muted-foreground'}`}>
                      {item.years}
                    </p>
                    <h3 className="mt-0.5 font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.place} · {item.detail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
