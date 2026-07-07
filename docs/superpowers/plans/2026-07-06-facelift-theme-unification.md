# Facelift kauecode.com Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade all dependencies (majors included) and unify the site's visual theme around navy + green semantic tokens, then commit and push to main.

**Architecture:** Upgrade order matters: Tailwind 4 moves theme definition from `tailwind.config.ts` to CSS-first `@theme` in `globals.css`, so all dependency majors land first (Task 1–4, each gated by build/test), then the semantic token system (Task 5–6), then page-by-page alignment of off-brand "System B" pages to the canonical Links-page look (Task 7–11), then verification and delivery (Task 12).

**Tech Stack:** Next.js 16 (App Router, next-intl), React 19.2, Tailwind CSS 4, next-themes (class strategy), Jest 30 + ts-jest, TypeScript, marked.

**Reference for canonical look:** `src/app/[locale]/links/page.tsx` — `bg-gradient-brand`, glassy `bg-brand-secondary/80 backdrop-blur` cards, `font-poppins` headings, `bg-gradient-accent bg-clip-text` gradient text.

**Class mapping rule used throughout Phase 3 (System B → tokens):**

| Off-brand class | Replacement |
|---|---|
| `bg-white`, `bg-stone-50`, `dark:bg-gray-800/900`, `bg-slate-*` | `bg-surface` (page) / `bg-surface-raised` (card) |
| `text-gray-900/800`, `text-slate-*`, `dark:text-white` | `text-ink` |
| `text-gray-500/600/400`, `text-slate-400/500` | `text-ink-muted` |
| `text-rose-*`, `text-red-*`, `text-blue-*`, `text-indigo-*`, `bg-blue-700`, `hover:*-amber/lime/yellow-*` | `text-accent` / `bg-accent` / `hover:text-accent` |
| generic `cyan-*` (consult featured card) | `accent-cyan` token equivalents |
| `border-gray-200`, `dark:border-gray-700`, `border-slate-*` | `border-edge` |

---

### Task 1: Safe minor/patch updates + baseline

**Files:**
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Baseline check** — Run: `npm test && npm run build`. Expected: both green. If baseline is already broken, stop and report before upgrading anything.
- [ ] **Step 2: Update within ranges** — Run: `npm update`. Brings Next 15.5.20, React 19.2.7, next-intl 4.13.1, framer-motion 12.42, date-fns 4.4, etc.
- [ ] **Step 3: Verify** — Run: `npm test && npm run build`. Expected: green.
- [ ] **Step 4: Commit** — `git add -A && git commit -m "Update dependencies within semver ranges"`

### Task 2: Next.js 16 + React 19.2 + eslint-config-next 16 + ESLint flat config

**Files:**
- Modify: `package.json`, `next.config.js`
- Delete: `.eslintrc.json`
- Create: `eslint.config.mjs`

- [ ] **Step 1: Upgrade** — Run: `npm install next@16 eslint-config-next@16 @next/third-parties@16 eslint@latest`
- [ ] **Step 2: Migrate ESLint to flat config.** Delete `.eslintrc.json`, create `eslint.config.mjs`:

```js
import nextVitals from 'eslint-config-next/core-web-vitals'

const config = [
  ...nextVitals,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default config
```

(If `eslint-config-next/core-web-vitals` has no flat export in the installed version, use its documented flat-config entry — check `node_modules/eslint-config-next/package.json` exports.)
- [ ] **Step 3: Handle Next 16 breaking changes.** Run `npx @next/codemod@latest upgrade` if the build reveals API changes (async `params`/`searchParams` are already handled in Next 15 code; verify `next lint` removal — Next 16 removed `next lint`, so change the `lint` script in package.json to `eslint .`).
- [ ] **Step 4: Verify** — Run: `npm run build && npm test && npx eslint . --max-warnings=100`. Expected: build/test green; lint runs without crashing.
- [ ] **Step 5: Commit** — `git commit -am "Upgrade to Next 16 with ESLint flat config"`

### Task 3: Tailwind CSS 4 migration

**Files:**
- Modify: `package.json`, `postcss.config.js`, `src/styles/globals.css`, possibly all `*.tsx` (class rewrites by the tool)
- Delete (eventually): `tailwind.config.ts` (the upgrade tool may keep it via `@config`; Task 5 finishes the CSS-first move)

- [ ] **Step 1: Run official upgrade tool** — Run: `npx @tailwindcss/upgrade --force`. It installs tailwindcss@4 + `@tailwindcss/postcss`, rewrites `@tailwind base/components/utilities` to `@import "tailwindcss"`, updates postcss config, and rewrites renamed utilities.
- [ ] **Step 2: Review the diff** — Run: `git diff --stat` and inspect `globals.css`, `postcss.config.*`, and a sample of rewritten pages. Ensure `@tailwindcss/typography` still loads (Tailwind 4 uses `@plugin "@tailwindcss/typography";` in CSS).
- [ ] **Step 3: Ensure dark mode variant matches next-themes.** Tailwind 4 defaults `dark:` to `prefers-color-scheme`; next-themes uses a class. Add to `globals.css`: `@custom-variant dark (&:where(.dark, .dark *));`
- [ ] **Step 4: Verify** — Run: `npm run build && npm test`. Then `npm run dev` and load `/` — confirm styles render (navy hero, styled navbar).
- [ ] **Step 5: Commit** — `git commit -am "Migrate to Tailwind CSS 4"`

### Task 4: Jest 30, TypeScript 6, marked 18

**Files:**
- Modify: `package.json`, `jest.config.ts` (if needed), `src/lib/**` (only if marked API changed at call sites)

- [ ] **Step 1: Upgrade test stack** — Run: `npm install -D jest@30 @jest/globals@30 @types/jest@30 babel-jest@30 ts-jest@latest`
- [ ] **Step 2: Run tests** — `npm test`. Fix config incompatibilities if any (Jest 30 removed some defaults; ts-jest 29.4+ supports Jest 30).
- [ ] **Step 3: Upgrade TypeScript** — Run: `npm install -D typescript@6 @types/node@latest`. Run `npx tsc --noEmit`. **Fallback:** if TS 6 breaks Next/ts-jest tooling non-trivially, pin `typescript@~5.9` and note it in the final report.
- [ ] **Step 4: Upgrade marked** — Run: `npm install marked@18`. Find call sites: `grep -rn "marked" src/lib src/app --include='*.ts*'`. `marked.parse()` returns `string | Promise<string>` in newer versions — ensure call sites handle it (use `marked.parse(md, { async: false })` or cast, matching existing usage).
- [ ] **Step 5: Verify blog rendering** — `npm run build` (blog posts are statically generated, so a bad marked upgrade fails here) + `npm test`.
- [ ] **Step 6: Commit** — `git commit -am "Upgrade Jest 30, TypeScript, marked"`

### Task 5: Semantic theme tokens (Tailwind 4 `@theme`) + fonts fix

**Files:**
- Modify: `src/styles/globals.css`, `src/styles/fonts.ts`, `src/app/[locale]/layout.tsx`
- Delete: `tailwind.config.ts` (fold remaining config into CSS; keep `content` detection automatic in v4)

- [ ] **Step 1: Define tokens in `globals.css`.** Add (adjusting to whatever structure the upgrade tool produced):

```css
@theme {
  /* Brand (kept for existing System A classes) */
  --color-brand-primary: #0B132B;
  --color-brand-secondary: #1C2541;
  --color-brand-accent1: #00E5FF;
  --color-brand-accent2: #2EE6A6;
  --color-brand-accent3: #FF7A00;
  --color-brand-neutral-light: #F5F7FA;
  --color-brand-neutral-medium: #9AA0A6;

  /* Semantic tokens (mode-aware via CSS variables below) */
  --color-surface: var(--surface);
  --color-surface-raised: var(--surface-raised);
  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --color-accent: #2EE6A6;
  --color-accent-strong: #19C98C;
  --color-accent-cyan: #00E5FF;
  --color-edge: var(--edge);

  --font-poppins: var(--font-poppins-var), sans-serif;
  --font-roboto: var(--font-roboto), sans-serif;
  --font-sourceCodePro: var(--font-source-code-pro), monospace;

  --background-image-gradient-brand: linear-gradient(135deg, var(--surface) 0%, var(--surface-raised) 100%);
  --background-image-gradient-accent: linear-gradient(135deg, #00E5FF 0%, #2EE6A6 100%);
}

:root {
  --surface: #F5F7FA;
  --surface-raised: #FFFFFF;
  --ink: #0B132B;
  --ink-muted: #4A5568;
  --edge: rgba(11, 19, 43, 0.12);
}

.dark {
  --surface: #0B132B;
  --surface-raised: #1C2541;
  --ink: #F5F7FA;
  --ink-muted: #9AA0A6;
  --edge: rgba(245, 247, 250, 0.12);
}
```

Note: `gradient-brand` becomes mode-aware (light: soft light gradient; dark: current navy). System A pages keep their classes and gain a coherent light mode automatically. Where a page must stay navy in both modes (e.g. hero), use explicit brand tokens.
- [ ] **Step 2: Remove the generic base-layer overrides in `globals.css`** (`body { dark:bg-gray-800 bg-white }`, `h1–p { dark:text-white text-gray-800 }` blocks) and replace with `body { background: var(--surface); color: var(--ink); }`. Keep all `.print-page` print CSS untouched.
- [ ] **Step 3: Fix fonts.** In `src/styles/fonts.ts`: add `Poppins` via `next/font/google` with `variable: '--font-poppins-var'`, weights 400/500/600/700; delete `ebGaramond` and `montserrat` exports. In `src/app/[locale]/layout.tsx`: apply `poppins.variable` to `<html>`, remove `ebgaramond` variable. Grep for leftover usages: `grep -rn "ebGaramond\|font-ebGaramond\|montserrat\|font-montserrat" src/ --include='*.ts*'` and replace with `font-poppins` (headings) or `font-roboto` (body).
- [ ] **Step 4: Delete `tailwind.config.ts`** once everything it declared (screens are v4 defaults; keyframes/animations move to CSS `@theme` as `--animate-*` entries) lives in `globals.css`:

```css
@theme {
  --animate-blink: blink 0.5s infinite;
  --animate-fadeIn: fadeIn 0.6s ease-out;
  --animate-slideIn: slideIn 0.5s ease-out;
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
  @keyframes slideIn { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }
}
```
- [ ] **Step 5: Verify** — `npm run build && npm test`; dev-server check `/` and `/links` in both modes.
- [ ] **Step 6: Commit** — `git commit -am "Add semantic theme tokens and fix font loading"`

### Task 6: Render the dark/light toggle

**Files:**
- Modify: `src/components/layout/NavBar.tsx`, `src/components/features/theme/DarkModeButton.tsx` (restyle to tokens if off-brand)

- [ ] **Step 1: Import and render `DarkModeButton` in NavBar** (desktop right side, next to LanguageSwitcher; also in mobile menu). Style with tokens: `text-ink-muted hover:text-accent`.
- [ ] **Step 2: Verify hydration** — dev server: toggle switches `.dark` class without hydration warnings (next-themes needs `suppressHydrationWarning` on `<html>` — confirm it's set in root layout).
- [ ] **Step 3: Commit** — `git commit -am "Render theme toggle in navbar"`

### Task 7: Shared Card + Heading rebrand

**Files:**
- Modify: `src/components/ui/Card.tsx`, `src/components/ui/Heading.tsx`, `messages/en.json`, `messages/pt.json`

- [ ] **Step 1: Rewrite `Card.tsx`** to the glass style: container `bg-surface-raised/80 backdrop-blur border border-edge rounded-xl hover:border-accent/50 transition-colors`; title `font-poppins font-semibold text-ink`; body `text-ink-muted`; button `bg-accent text-brand-primary font-medium hover:bg-accent-strong` with label from i18n key `common.readMore` (add `"readMore": "Read more"` / `"readMore": "Leia mais"` to messages). Card is a client or server component — check how it's used on home; pass the label as a prop from the page if the component can't call `useTranslations`.
- [ ] **Step 2: Rewrite `Heading.tsx`**: `font-poppins text-ink`, hover `hover:text-accent`; remove the local Source_Code_Pro instantiation and indigo hover.
- [ ] **Step 3: Verify** — dev check `/` (featured projects cards) and `/about` (headings).
- [ ] **Step 4: Commit** — `git commit -am "Rebrand shared Card and Heading components"`

### Task 8: Home page alignment (sidebar + recent posts)

**Files:**
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Apply the class mapping table** to the "Recent Blog Posts" block and sidebar (profile, contact, skills): all `rose-*` → `accent`, `bg-white dark:bg-gray-800` → `bg-surface-raised/80 backdrop-blur border border-edge`, `gray-*` text → `ink`/`ink-muted`. Headings get `font-poppins`.
- [ ] **Step 2: Verify** — dev check `/` in both modes: sidebar visually consistent with hero.
- [ ] **Step 3: Commit** — `git commit -am "Align home sidebar and recent posts with brand theme"`

### Task 9: About pages + 404 rebrand

**Files:**
- Modify: `src/app/[locale]/about/page.tsx`, `src/app/[locale]/about/[slug]/page.tsx`, `src/app/not-found.tsx`

- [ ] **Step 1: `about/page.tsx`** — wrap in the canonical page shell (`bg-gradient-brand min-h-screen` matching links page structure); replace the red/indigo/amber/lime/yellow/stone classes per the mapping table (all interactive hovers → `hover:text-accent`); headings `font-poppins text-ink` with the `bg-gradient-accent bg-clip-text text-transparent` treatment on the main title.
- [ ] **Step 2: `about/[slug]/page.tsx`** — same shell; prose: reuse the brand `prose-*` override set from `blog/[post]/page.tsx` (copy those classes verbatim, using tokens where they exist).
- [ ] **Step 3: `not-found.tsx`** — brand shell, `font-sourceCodePro` terminal-style 404 message, `text-accent` link home.
- [ ] **Step 4: Verify** — dev check `/about`, one slug page, and a bogus URL, both modes.
- [ ] **Step 5: Commit** — `git commit -am "Rebrand about pages and 404 to unified theme"`

### Task 10: Resume detail sections rebrand

**Files:**
- Modify: `src/app/[locale]/resume/components/ContactSection.tsx`, `ProjectsSection.tsx`, `EducationSection.tsx`, `SkillsSection.tsx`

- [ ] **Step 1: Apply mapping table to each section**: slate/gray cards → `bg-surface-raised/80 backdrop-blur border border-edge rounded-xl`; `blue-400/600` accents → `text-accent`; status pills keep semantic colors but via tokens (`accent` for positive, `brand-accent3` for warning). Remove now-redundant `dark:` pairs where a token covers both modes.
- [ ] **Step 2: DO NOT touch** `resume/print/**` or `PrintResume.tsx` (out of scope).
- [ ] **Step 3: Verify** — dev check `/resume` both modes: sections match the navy shell. Also open `/resume/print` to confirm untouched print page still renders.
- [ ] **Step 4: Commit** — `git commit -am "Align resume sections with unified theme"`

### Task 11: Consult featured card token cleanup

**Files:**
- Modify: `src/app/[locale]/consult/page.tsx`

- [ ] **Step 1: Replace generic `cyan-900/40`, `cyan-500`, `cyan-400`, `cyan-300/200`** in the featured Enterprise AI card with `accent-cyan`-based tokens (`border-accent-cyan/50`, `text-accent-cyan`, etc.), or switch the featured treatment to green `accent` if it reads better next to the rest of the refreshed page — decide visually.
- [ ] **Step 2: Verify** — dev check `/consult` both modes.
- [ ] **Step 3: Commit** — `git commit -am "Use theme tokens in consult featured card"`

### Task 12: Final verification + push

- [ ] **Step 1: Full gates** — Run: `npm run build && npm test && npx tsc --noEmit`. Expected: all green.
- [ ] **Step 2: Visual sweep** — dev server, both modes: `/`, `/about`, `/blog`, one blog post, `/projects`, `/resume`, `/consult`, `/links`, 404. Screenshot or curl-check for errors in server log.
- [ ] **Step 3: Push** — `git push origin main`.

---

## Self-review notes

- Spec coverage: Phase 1 → Tasks 1–4; Phase 2 → Tasks 5–6; Phase 3 → Tasks 7–11; Phase 4 → Task 12. Print CV exclusion honored in Task 10.
- Orange (`brand-accent3`) kept only as status color (Task 10), per spec "laranja some ou vira só status".
- TDD note: this work is CSS/config-heavy with no new logic units; the test strategy is the existing Jest suite as a regression gate plus build-time static generation as an integration check, per spec.
