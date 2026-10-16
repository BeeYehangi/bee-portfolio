# Bee's portfolio

Next.js + Tailwind CSS + shadcn/ui. Dark and light themes (follows the visitor's system, with a toggle).

## Run it locally

```bash
pnpm install    # or: npm install
pnpm dev        # or: npm run dev
```

Open http://localhost:3000.

## Edit your content

Almost everything lives in `lib/site.ts`: name, email, links, skills and projects.

- **Project GitHub links:** each project's `github` currently points to your GitHub profile. Replace it with the exact repository URL.
- **Project screenshots:** save an image in `public/projects/` (for example `smart-finance.png`), then set `image: '/projects/smart-finance.png'` on that project in `lib/site.ts`. Until you do, the card shows a "Screenshot coming soon" placeholder. Use sample data only, with no real names or personal finances.
- **The "Next up" card:** when your ML notebook is ready, remove `planned: true`, add `github` and `image`, and rewrite the description.
- **Status panel in the hero:** `components/status-panel.tsx`.
- **Accent colour:** change the `--primary` values in `app/globals.css` (hue `180` is teal; try `265` for indigo).

## Deploy for free

Push the project to a GitHub repository, then import it at vercel.com. Vercel builds and hosts it, and updates it every time you push.
