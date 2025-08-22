# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.0 personal portfolio and blog website for Kaue Mendes. The site features:
- Static markdown blog posts with gray-matter frontmatter
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