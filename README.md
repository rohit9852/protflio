# Rohit Prasad Kushwaha — Portfolio (Next.js)

An exact recreation of the Emergent-built portfolio
(`fullstack-rohit-1.preview.emergentagent.com`) rebuilt on **Next.js 14 (App Router)
+ TypeScript + Tailwind CSS**.

## Stack
- Next.js 14 App Router
- TypeScript (strict)
- Tailwind CSS (shadcn-style HSL design tokens, dark theme default)
- framer-motion (scroll-reveal animations)
- lucide-react (icons)

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Structure
```
app/
  layout.tsx        # fonts, metadata, ThemeProvider, <html class="dark">
  page.tsx          # home — composes all sections
  blog/page.tsx     # "system initializing" blog placeholder
  globals.css       # theme tokens, fonts, grain/marquee/blink animations
components/
  Header.tsx Hero.tsx Metrics.tsx Experience.tsx
  Skills.tsx Projects.tsx MoreInfo.tsx Footer.tsx
data/resume.ts      # all profile / experience / skills / projects content
constants/testIds.ts
lib/theme.tsx        # dark/light theme context (persisted to localStorage)
public/resume.html   # placeholder linked by the "Resume" buttons
```

## Notes
- Sections fade/slide in on scroll via framer-motion `whileInView` — identical to
  the original (content is server-rendered, then revealed on view).
- Light/dark theme toggle lives in the header; dark is the default.
- Replace `public/resume.html` (or drop a `resume.pdf` in `public/` and update the
  links in `components/Header.tsx` / `components/Hero.tsx`) with the real résumé.
