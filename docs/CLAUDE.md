# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 personal portfolio and blog website for Kaue Mendes. The site features:
- Static markdown blog posts with gray-matter frontmatter
- Bilingual (pt/en) via next-intl; every route lives under `src/app/[locale]/`
- React 19 with latest stable types  
- Dark mode support via next-themes
- Docker multi-environment setup
- Fully static content system (Strapi CMS integration removed)

## Development Commands

### Local Development
```bash
npm run dev           # Start development server with turbopack
npm run build         # Production build
npm run start         # Start production server
npm run lint          # Run ESLint
npm run test          # Run Jest tests
```

### Docker Development
```bash
# Development environment (port 3001)
make build-development
make start-development
make stop-development

# Production environment (port 3003)
make build-production  
make start-production
make stop-production
```

### Testing
- Jest configuration: `jest.config.ts`
- Test files: `src/lib/__tests__/`
- Run single test: `npm test -- content.test.ts`
- TypeScript support: ts-jest preset with path aliases

## Project Structure

### Organized File Structure
```
src/
├── app/
│   ├── (site)/              # Main route group
│   │   ├── about/
│   │   ├── blog/
│   │   ├── consult/
│   │   ├── links/
│   │   ├── projects/
│   │   └── page.tsx
│   ├── api/                 # API routes
│   │   ├── v1/random-message/
│   │   └── webhooks/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/                  # Basic UI components
│   │   ├── Card.tsx
│   │   ├── Heading.tsx
│   │   └── index.ts
│   ├── layout/              # Layout components
│   │   ├── NavBar.tsx
│   │   ├── NavLink.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── features/            # Feature-specific components
│   │   ├── blog/            # ShareLinkButton.tsx
│   │   ├── theme/           # DarkModeButton.tsx
│   │   ├── content/         # DoubleQuotes.tsx
│   │   └── index.ts files
│   └── index.ts             # Main barrel export
├── content/
│   ├── blog/posts/          # Blog posts organized by year
│   │   ├── 2023/
│   │   ├── 2024/
│   │   └── 2025/
│   └── data/                # Static data
│       ├── projects.ts
│       └── social.ts
├── lib/
│   ├── content/             # Content processing
│   │   ├── blog.ts
│   │   ├── pages.ts
│   │   ├── random-messages.ts
│   │   └── index.ts
│   ├── types/               # Type definitions
│   │   ├── content.ts
│   │   └── index.ts
│   └── index.ts
├── styles/
│   ├── fonts.ts
│   └── globals.css
└── __tests__/               # Test files
```

### Assets Organization
```
public/
├── images/
│   ├── avatars/             # Profile pictures
│   ├── projects/            # Project screenshots
│   └── brand/               # Logo and brand assets
└── ...
```

### Documentation
```
docs/
├── CLAUDE.md                # This file
├── README.md                # Project documentation
├── BUILD.md                 # Build instructions
├── FEATURE_IDEAS.md         # Future features
├── FAST_LINKS_DESIGN.md     # Links page design
└── FILE_STRUCTURE_TODO.md   # Reorganization history
```

## Architecture

### Content System
The site uses a fully static content approach:
- **Local markdown**: Blog posts in `src/content/blog/posts/` organized by year
- **Content processing**: Modular libraries in `src/lib/content/` with gray-matter and marked
- **Static data**: Projects and social links in `src/content/data/`

### Component Architecture
- **UI Components**: Basic reusable components in `src/components/ui/`
- **Layout Components**: Navigation and layout in `src/components/layout/`
- **Feature Components**: Feature-specific components in `src/components/features/`
- **Barrel Exports**: Clean imports via index.ts files throughout

### Content Management
- Blog posts: organized by year in `src/content/blog/posts/`
- Content functions: `getBlogPosts()`, `getPostContent()` in `src/lib/content/blog.ts`
- Static data: projects and social links as TypeScript modules
- Images: organized by category in `public/images/`

### Environment Configuration
- Google Analytics: integrated via `@next/third-parties/google` (GA ID: G-5D50WB6BVV)
- Standalone output: configured for Docker deployment
- Path aliases: `@/*` maps to `src/*` in tsconfig.json
- Next.js redirects: `/linkedin`, `/whatsapp`, `/github` to social profiles
- Remote image patterns: configured for CMS integration

### Styling
- Tailwind CSS with typography plugin
- Custom fonts: managed in `src/styles/fonts.ts`
- Dark mode: class-based theme switching
- Global styles: `src/styles/globals.css`

## Design System — Paper & Ink (August 2026)

The site was redesigned from the 2025 navy/glassmorphism brand into a
neo-brutalist editorial system. Proposal and shipped record:
`docs/superpowers/specs/2026-08-29-paper-and-ink.html`.

**The old `brand-*` palette, gradients, glassmorphism and Poppins/Montserrat are
gone. Do not reintroduce them.**

### Tokens (`src/styles/globals.css`)

Seven semantic tokens, defined on `:root` and redefined under `.dark`
(next-themes, `attribute="class"`):

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` | `#F0EEE6` | `#14140F` | page ground |
| `--paper-2` | `#E7E3D4` | `#1D1D16` | raised fills, table heads |
| `--paper-3` | `#DED9C6` | `#26251C` | rare third step |
| `--ink` | `#1A1A19` | `#EDEAE0` | text, all borders |
| `--ink-soft` | `#4A4A47` | `#B6B2A4` | body prose, descriptions |
| `--ink-muted` | `#8A8778` | `#86836F` | mono metadata |
| `--rule` | `#D9D4C2` | `#34332A` | dashed hairlines |
| `--accent` | `#0F7A57` | `#2EE6A6` | see discipline below |

Utilities: `bg-paper`, `text-ink-soft`, `border-rule`, `shadow-hard`,
`shadow-hard-sm`, `shadow-hard-lg`, `press`, `rule-dash`, `rule-solid`,
`drop-cap`.

### Accent discipline

The green is the only chroma in the system. It appears in exactly four places:
link underlines, the entry number in the index, the "live" status on project
cards, and the active nav marker. Nothing else is coloured. The light value is
darkened from the old `#2EE6A6` so it clears 4.5:1 on paper.

### Typography (`src/styles/fonts.ts`)

- **Instrument Serif** (`font-display`) — headlines, entry titles, drop caps.
  Single weight; never apply `font-bold` to it, and never use it below 20px or
  for running text.
- **Newsreader** (`font-text`) — article prose and ledes at 16.5px/1.78.
- **JetBrains Mono** (`font-mono`) — every label, date, tag, button, nav item
  and byline. Uppercase, `tracking-[0.1em]`–`[0.16em]`, 9.5–11.5px.
- **Roboto** — retained *solely* for `/resume/print`. Not used on screen.

### Primitives (`src/components/ui/`)

Use these rather than hand-rolling classes:

- `Frame` — the box: 2px ink border, square, offset shadow. Replaced a card
  recipe repeated ~20 times.
- `Meta` / `Eyebrow` / `Tag` — mono metadata rails and the three tag species
  (`kind` filled, `tech` outline, `status` accent).
- `Button` / `ButtonLink` / `ButtonExternal` — replaced a CTA string repeated
  7 times.
- `Prose` — article body styling; replaced a `prose-*` block duplicated in the
  post page and the about-slug page.
- `Entry` — one index row (marker, stamp, meta, title, description).
- `ProjectDetail` (`components/features/projects/`) — shared detail view; the
  four project pages went from ~200 lines each to ~40.

### Rules

- `border-radius: 0`. The radius scale is reset in `@theme`, so a stray
  `rounded-xl` is a silent no-op rather than a regression.
- One interaction gesture: `press` — the control shifts 2px into its own shadow.
  No lift, no scale, no `hover:-translate-y-*`.
- Dashed hairlines separate siblings; solid 2px ink separates page regions.
- No emoji in UI chrome. Use `@heroicons/react/24/outline`.
- No invented metrics. Numbers on the site must be real.
- Blog post titles carry a `"N. "` sequence prefix. `parseEntryTitle()` in
  `src/lib/utils` splits it into a margin entry number — do not strip it in
  content.

### Excluded from the redesign

`src/app/[locale]/resume/print/` keeps its own locked print styles and the
`.print-page` block at the bottom of `globals.css`. Leave both alone.

### Tailwind v4 gotcha

Plain CSS using `:is()` at the top level is dropped by the v4 parser. The prose
radius override in `globals.css` uses an explicit descendant selector list for
this reason — do not "simplify" it back to `:is()`.

## Design Philosophy

### Visual hierarchy

Weight, size and rules carry hierarchy — not colour. A page reads: display
serif headline, mono metadata rail, serif body, dashed rules between items,
solid rules between regions. The accent marks state, never decoration.

### Interaction design

One gesture (`press`). Focus is a 2px accent outline at 3px offset, set
globally. Motion is limited to a 0.4s `fadeIn` on tab and section swaps, and
`prefers-reduced-motion` disables the press transform.

### Mobile-First Approach
- All components designed for mobile first
- Responsive breakpoints for optimal viewing
- Touch-friendly interaction targets
- Performance optimized for mobile devices

## Future Considerations

### Dark mode
- **Status**: Shipped. Both themes are designed, including the site chrome,
  which was on the static `brand-*` palette and never responded to the toggle
  before the August 2026 redesign.

### Performance Optimizations
- **Images**: Next.js Image optimization throughout
- **Animations**: CSS and Canvas optimizations
- **Bundle**: Code splitting and lazy loading where appropriate
- **SEO**: Enhanced metadata and structured data

The January 2025 sections above are kept for history. The live design system
is **Paper & Ink** — see that section, not the brand-colour one, when working
on any screen route.