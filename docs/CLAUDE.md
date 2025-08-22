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

## Brand Design System (January 2025)

### Color Palette
The website implements a comprehensive brand color system:

```typescript
// Brand Colors (tailwind.config.ts)
colors: {
  brand: {
    primary: '#0B132B',        // Navy - main backgrounds
    secondary: '#1C2541',      // Dark blue - UI components
    accent1: '#00E5FF',        // Cyan - primary actions/links
    accent2: '#2EE6A6',        // Green - success/highlights
    accent3: '#FF7A00',        // Orange - warnings/CTAs
    'neutral-light': '#F5F7FA', // Light text
    'neutral-medium': '#9AA0A6' // Medium text
  }
}
```

### Typography
- **Primary Font**: Poppins (headings, important text)
- **Secondary Font**: Montserrat (body text, descriptions)
- **Mono Font**: Source Code Pro (code, technical elements)

### Component Design Patterns
- **Glassmorphism**: `bg-brand-secondary/80 backdrop-blur-sm`
- **Gradient Text**: `bg-gradient-accent bg-clip-text text-transparent`
- **Hover Effects**: Consistent 300ms transitions with scale/color changes
- **Border Styling**: Subtle borders with accent colors at 20-30% opacity
- **Shadow System**: Multiple shadow levels for depth hierarchy

## Recent Major Updates (January 2025)

### Complete Brand Redesign
**Scope**: Full website conversion to new brand identity
**Files Updated**: All major pages and components
**Key Changes**:
- Replaced all generic colors with brand-specific palette
- Updated logo to `logo_novo.svg` with chevron patterns
- Implemented consistent design system across all pages
- Added Poppins and Montserrat fonts to design system

### Page-Specific Updates

#### 1. Projects Page (`/projects`)
- **New Features**: Statistics dashboard, enhanced ProjectCard components
- **Design**: Gradient backgrounds, hover animations, status badges
- **Content**: Detailed project information with technologies and features
- **Typography**: Poppins headings with brand color hierarchy

#### 2. Consulting Page (`/consult`)
- **New Features**: Tabbed interface, pricing tiers, service cards
- **Design**: Interactive forms with brand styling
- **Content**: Enhanced service descriptions and contact options
- **Layout**: Improved responsive design with better CTAs

#### 3. Links Page (`/links`)
- **New Features**: Statistics dashboard, enhanced link cards
- **Design**: Category-based color coding, hover effects
- **Content**: Better organization with featured links
- **Animations**: Staggered entrance effects and smooth transitions

#### 4. Blog Pages (`/blog`)
- **Main Page**: Featured article section, statistics dashboard
- **Post Pages**: Enhanced typography, navigation between posts
- **Design**: Improved prose styling with brand colors
- **SEO**: Enhanced metadata structure and OpenGraph tags

#### 5. Resume Page (`/resume`)
- **Background**: Brand gradient background with header section
- **Navigation**: Updated with brand colors and hover effects
- **Content**: Enhanced statistics cards and social links
- **Design**: Improved visual hierarchy with icon integration

#### 6. Homepage (`/`)
- **Background**: Custom animated tech background with network patterns
- **Content**: Future-focused messaging with tech statistics
- **Animations**: Neural network and data flow visualizations
- **UI**: Futuristic scroll indicator and enhanced CTAs

### Footer Enhancement
- **Design**: Complete redesign with brand colors
- **Content**: Newsletter signup, organized link sections
- **Features**: Social media integration, back-to-top button
- **Layout**: Improved responsive design with better spacing

### Technical Achievements

#### Animated Tech Background
**File**: `src/components/ui/TechBackground.tsx`
**Features**:
- Canvas-based network animation with 3 node types (hub, neural, data)
- Dynamic connections with flowing data packets
- Neural wave patterns and pulsing effects
- Brand color integration (cyan, green, orange)
- Responsive animation that adapts to screen size
- Performance optimized with proper cleanup

#### Component Architecture
- **Consistent Patterns**: All components follow brand design system
- **Reusable Elements**: Shared design patterns across components
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized animations and rendering

#### Build Configuration
- **Successful Builds**: All pages compile without errors
- **Font Integration**: Proper font loading with `next/font/google`
- **Responsive Design**: Mobile-first approach throughout
- **Accessibility**: Maintained contrast ratios and semantic markup

## Design Philosophy

### Visual Hierarchy
1. **Primary Actions**: Accent1 (cyan) for main CTAs and links
2. **Success States**: Accent2 (green) for positive feedback
3. **Attention**: Accent3 (orange) for highlights and warnings
4. **Backgrounds**: Primary/secondary navy for depth and contrast
5. **Text**: Neutral colors for optimal readability

### Interaction Design
- **Hover States**: Consistent scale and color transitions
- **Loading States**: Smooth animations with brand colors
- **Focus States**: Accessible focus indicators
- **Error States**: Clear visual feedback with accent colors

### Mobile-First Approach
- All components designed for mobile first
- Responsive breakpoints for optimal viewing
- Touch-friendly interaction targets
- Performance optimized for mobile devices

## Future Considerations

### Dark/Light Mode Implementation
- **Plan**: Comprehensive plan documented in `docs/DARK_LIGHT_MODE_PLAN.md`
- **Approach**: CSS custom properties with next-themes
- **Status**: Ready for implementation when requested

### Performance Optimizations
- **Images**: Next.js Image optimization throughout
- **Animations**: CSS and Canvas optimizations
- **Bundle**: Code splitting and lazy loading where appropriate
- **SEO**: Enhanced metadata and structured data

This brand redesign successfully transforms the website into a modern, cohesive digital experience that properly represents expertise in DevOps, cloud architecture, and cutting-edge technology.