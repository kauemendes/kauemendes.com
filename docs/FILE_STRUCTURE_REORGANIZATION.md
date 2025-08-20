# File Structure Reorganization Plan

## Current State Analysis

### Issues Identified:
1. **Legacy/Dead Code**: Unused Strapi-related files and components
2. **Inconsistent Organization**: Mixed file purposes in same directories
3. **Unclear Naming**: Some files have unclear purposes (`__oldAbout`, `__layout.tsx`)
4. **Root Directory Clutter**: Too many documentation files in root
5. **API Structure**: Inconsistent API route organization
6. **Component Organization**: All components in flat structure
7. **Content Structure**: Could be better organized by type
8. **Asset Organization**: Images could be better categorized

### Files to Clean Up:
- `src/app/__oldAbout/` - Legacy about page
- `src/app/about/__layout.tsx` - Unused layout file
- `src/components/StrapiImage.tsx` - Strapi-related component
- `src/components/PaginationBar.tsx` - Unused component
- `src/lib/utils.ts` - Contains only Strapi functions
- `scripts/strapi-requests.mjs` - Strapi script
- `scripts/posts.json` - Strapi data file
- `examples/with-docker-multi-env/` - Unused example

## Proposed New Structure

```
src/
├── app/                                 # Next.js App Router
│   ├── (site)/                         # Site pages group
│   │   ├── layout.tsx                  # Site layout
│   │   ├── page.tsx                    # Home page
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [post]/page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   ├── azdevops-json-to-variable/page.tsx
│   │   │   ├── azdevops-pipeline-variables/page.tsx
│   │   │   └── pinguimcast/page.tsx
│   │   ├── links/                      # New fast links page
│   │   │   └── page.tsx
│   │   └── consult/page.tsx
│   ├── api/                           # API routes group
│   │   ├── v1/
│   │   │   └── random-message/route.ts
│   │   └── webhooks/
│   │       └── cms-event/route.ts
│   ├── globals.css                    # Global styles
│   ├── layout.tsx                     # Root layout
│   ├── not-found.tsx                  # 404 page
│   └── icon.png                       # App icon
├── components/                        # UI Components
│   ├── ui/                           # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Heading.tsx
│   │   └── index.ts                  # Barrel exports
│   ├── layout/                       # Layout components
│   │   ├── NavBar.tsx
│   │   ├── NavLink.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── features/                     # Feature-specific components
│   │   ├── blog/
│   │   │   ├── ShareLinkButton.tsx
│   │   │   └── index.ts
│   │   ├── theme/
│   │   │   ├── DarkModeButton.tsx
│   │   │   └── index.ts
│   │   └── content/
│   │       ├── DoubleQuotes.tsx
│   │       └── index.ts
│   └── index.ts                      # Main barrel export
├── lib/                              # Utilities and business logic
│   ├── content/                      # Content management
│   │   ├── blog.ts                   # Blog-specific functions
│   │   ├── pages.ts                  # Static page functions  
│   │   ├── random-messages.ts        # Random message data
│   │   └── index.ts
│   ├── utils/                        # Utility functions
│   │   ├── formatting.ts
│   │   ├── validation.ts
│   │   └── index.ts
│   ├── types/                        # TypeScript definitions
│   │   ├── content.ts
│   │   ├── components.ts
│   │   └── index.ts
│   ├── hooks/                        # Custom React hooks
│   │   ├── useTheme.ts
│   │   └── index.ts
│   └── __tests__/                    # Test files
│       ├── content/
│       │   └── blog.test.ts
│       └── utils/
│           └── formatting.test.ts
├── content/                          # Static content
│   ├── blog/
│   │   └── posts/                    # Blog posts
│   │       ├── 2023/
│   │       ├── 2024/
│   │       └── 2025/
│   ├── pages/                        # Static page content
│   │   ├── about/
│   │   │   ├── personal.md
│   │   │   └── professional.md
│   │   └── projects/
│   └── data/                         # Static data files
│       ├── links.ts                  # Fast links data
│       ├── projects.ts               # Project data
│       └── social.ts                 # Social links
├── styles/                           # Style-related files
│   ├── globals.css
│   ├── components.css
│   └── fonts.ts
└── assets/                           # Static assets (if needed)
    └── fonts/
```

## Root Directory Organization

```
root/
├── docs/                             # All documentation
│   ├── README.md
│   ├── BUILD.md
│   ├── CLAUDE.md
│   ├── FEATURE_IDEAS.md
│   ├── FAST_LINKS_DESIGN.md
│   └── FILE_STRUCTURE_REORGANIZATION.md
├── docker/                           # Docker configurations
├── public/                          # Public assets
│   ├── images/
│   │   ├── avatars/
│   │   ├── blog/
│   │   ├── projects/
│   │   └── brand/
│   └── icons/
├── scripts/                         # Build and utility scripts
│   └── build-tools/
├── src/                            # Source code
├── tests/                          # Integration tests
│   ├── e2e/
│   └── integration/
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── jest.config.ts
└── .env.example
```

## Migration Priority

### Phase 1: Cleanup (Remove Dead Code)
1. Remove legacy Strapi components and utilities
2. Remove unused directories and files
3. Clean up imports and references

### Phase 2: Component Organization
1. Create component category directories
2. Move components to appropriate categories
3. Create barrel exports (index.ts files)
4. Update all imports

### Phase 3: Content Restructuring  
1. Reorganize blog posts by year
2. Create data directory for static data
3. Split content.ts into focused modules

### Phase 4: API and App Restructuring
1. Move API routes to proper structure
2. Create route groups for better organization
3. Rename inconsistent directories

### Phase 5: Documentation Organization
1. Move all docs to docs/ directory
2. Update references in CI/CD if any

### Phase 6: Asset Organization
1. Categorize images by purpose
2. Optimize image structure for better management