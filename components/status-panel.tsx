import { cn } from '@/lib/utils'

type Item = { state: 'pass' | 'run'; title: string; detail: string }

const items: Item[] = [
  { state: 'pass', title: 'Full-stack apps', detail: 'React · Spring Boot · Node.js · MySQL' },
  { state: 'pass', title: 'API & role-based testing', detail: 'Postman · manual test cases' },
  { state: 'pass', title: 'Data analysis', detail: 'SPSS regression · pandas EDA' },
  { state: 'run', title: 'Machine learning', detail: 'CAME programme · in progress' },
  { state: 'run', title: 'PyTorch & LLMs', detail: 'learning · projects coming' },
]

export function StatusPanel() {
  const passed = items.filter((i) => i.state === 'pass').length
  const running = items.length - passed

  return (
    <aside
      aria-label="Current status"
      className="min-w-0 overflow-hidden rounded-xl border border-border bg-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3 font-mono text-xs text-muted-foreground">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-border" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-border" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-border" />
        <span className="ml-2">bee.status</span>
      </div>

      <ul className="py-1">
        {items.map((item) => (
          <li
            key={item.title}
            className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-2 gap-y-0.5 border-t border-dashed border-border px-4 py-3 first:border-t-0"
          >
            <span
              aria-hidden="true"
              className={cn('font-mono', item.state === 'pass' ? 'text-primary' : 'text-warn')}
            >
              {item.state === 'pass' ? '✓' : '…'}
            </span>
            <span className="text-sm font-medium">
              {item.title}
              <span className="sr-only">{item.state === 'pass' ? ' (done)' : ' (in progress)'}</span>
            </span>
            <span className="col-start-2 font-mono text-xs text-muted-foreground">{item.detail}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-border px-4 py-3 font-mono text-xs text-muted-foreground">
        {passed} passed · {running} running
      </div>
    </aside>
  )
}
