'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const el = document.documentElement
    if (el.classList.contains('dark')) setDark(true)
    else if (el.classList.contains('light')) setDark(false)
    else setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  function toggle() {
    const next = dark ? 'light' : 'dark'
    const el = document.documentElement
    el.classList.remove('light', 'dark')
    el.classList.add(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage can be blocked; the choice just won't be remembered
    }
    setDark(!dark)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
    >
      {dark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
      <span className="sr-only">{dark ? 'Switch to light theme' : 'Switch to dark theme'}</span>
    </button>
  )
}
