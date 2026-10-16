import { ArrowRight, Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { StatusPanel } from '@/components/status-panel'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-xl rounded-full bg-primary/15 blur-3xl"
      />

      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to opportunities
          </p>

          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            {"Hi, I'm "}
            <span className="text-primary">{site.nickname}.</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">{site.name}</p>

          <p className="mt-6 font-mono text-sm sm:text-base">{site.title}</p>

          <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I build full-stack apps, test them until they hold up, and I&apos;m training my way into
            machine learning, one dataset at a time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5')}>
              View Projects
              <ArrowRight data-icon="inline-end" />
            </a>
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-5')}
            >
              <Mail data-icon="inline-start" />
              Contact Me
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'size-11')}
              >
                <GithubIcon className="size-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'size-11')}
              >
                <LinkedinIcon className="size-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <StatusPanel />
      </div>
    </section>
  )
}
