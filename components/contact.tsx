'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { site } from '@/lib/site'

const links = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: 'LinkedIn', value: 'bimaya-yehangi', href: site.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', value: 'BeeYehangi', href: site.github, Icon: GithubIcon },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="04." title="Contact" id="contact-title" />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <h3 className="text-xl font-semibold tracking-tight">{"Let's build something together"}</h3>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {"Whether it's a role, a collaboration, or a question about my work, my inbox is always open."}
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {links.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/50"
                >
                  <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block truncate text-sm transition-colors group-hover:text-primary">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required autoComplete="name" placeholder="Your name" className="h-10" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-10"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                className="min-h-36 resize-none"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p aria-live="polite" className="text-sm text-muted-foreground">
                {sent ? 'Your email app should open with the message ready to send.' : ''}
              </p>
              <Button type="submit" size="lg" className="h-10 px-5">
                Send message
                <Send data-icon="inline-end" />
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
