# File Structure Improvement - Todo List

This document tracks the step-by-step reorganization of the project file structure.

## ✅ Prerequisites
- [x] Backup current state (git commit recommended)
- [x] Document current structure
- [x] Create reorganization plan
- [x] Identify all files and dependencies

---

## ✅ Phase 1: Cleanup Dead Code - COMPLETED

### Remove Legacy Strapi Integration
- [x] Remove `src/components/StrapiImage.tsx`
- [x] Remove Strapi functions from `src/lib/utils.ts` (entire file removed)
- [x] Remove `scripts/strapi-requests.mjs`
- [x] Remove `scripts/posts.json`
- [x] Update imports that reference removed Strapi components

### Remove Unused/Legacy Files
- [x] Remove `src/app/__oldAbout/` directory completely
- [x] Remove `src/app/about/__layout.tsx` (unused layout file)
- [x] Remove `src/components/PaginationBar.tsx` (verified unused)
- [x] Remove `examples/with-docker-multi-env/` directory
- [x] Clean up any imports referencing removed files

### Verify Cleanup
- [x] Run build to ensure no broken imports
- [x] Run tests to ensure functionality still works
- [x] Check for any console errors in development

---

## ✅ Phase 2: Component Organization - COMPLETED

### Create Component Directory Structure
- [x] Create `src/components/ui/` directory
- [x] Create `src/components/layout/` directory  
- [x] Create `src/components/features/` directory
- [x] Create `src/components/features/blog/` directory
- [x] Create `src/components/features/theme/` directory
- [x] Create `src/components/features/content/` directory

### Move UI Components
- [x] Move `Card.tsx` to `src/components/ui/`
- [x] Move `Heading.tsx` to `src/components/ui/`
- [x] Create `src/components/ui/index.ts` barrel export

### Move Layout Components
- [x] Move `NavBar.tsx` to `src/components/layout/`
- [x] Move `NavLink.tsx` to `src/components/layout/`
- [x] Move `Footer.tsx` to `src/components/layout/`
- [x] Create `src/components/layout/index.ts` barrel export

### Move Feature Components
- [x] Move `ShareLinkButton.tsx` to `src/components/features/blog/`
- [x] Move `DarkModeButton.tsx` to `src/components/features/theme/`
- [x] Move `DoubleQuotes.tsx` to `src/components/features/content/`
- [x] Create respective `index.ts` files for each feature directory

### Create Main Component Barrel Export
- [x] Create `src/components/index.ts` with all component exports
- [x] Update all component imports throughout the app
- [x] Test that all pages still render correctly

---

## ✅ Phase 3: Content and Library Restructuring - COMPLETED

### Split Content Library
- [x] Create `src/lib/content/` directory
- [x] Create `src/lib/types/` directory
- [x] Create `src/lib/utils/` directory

### Extract Content Functions
- [x] Move blog-related functions to `src/lib/content/blog.ts`
- [x] Move page-related functions to `src/lib/content/pages.ts`
- [x] Extract random messages to `src/lib/content/random-messages.ts`
- [x] Create `src/lib/content/index.ts` barrel export

### Extract Type Definitions
- [x] Move interfaces to `src/lib/types/content.ts`
- [x] Create `src/lib/types/index.ts` barrel export
- [x] Create main `src/lib/index.ts` barrel export

### Reorganize Blog Content
- [x] Create `src/content/blog/posts/2023/` directory
- [x] Create `src/content/blog/posts/2024/` directory  
- [x] Create `src/content/blog/posts/2025/` directory
- [x] Move blog posts to appropriate year directories
- [x] Update `getPostsList()` function to handle new structure

### Create Data Directory
- [x] Create `src/content/data/` directory
- [x] Create `src/content/data/projects.ts` with project data
- [x] Create `src/content/data/social.ts` with social links
- [x] Updated projects page to use new data structure

### Update Content References
- [x] Update all imports to use new content structure (`@/lib`)
- [x] Remove old `content.ts` file
- [x] Test blog page and post pages work correctly

---

## ✅ Phase 4: App Router Restructuring - COMPLETED

### Create Route Groups
- [x] Create `src/app/(site)/` directory for main site pages
- [x] Move main pages to `(site)` route group
- [x] Maintain existing layout structure

### Reorganize Page Routes
- [x] Move `about/` to `src/app/(site)/about/`
- [x] Move `blog/` to `src/app/(site)/blog/`
- [x] Move `projects/` to `src/app/(site)/projects/`
- [x] Move `consult/` to `src/app/(site)/consult/`
- [x] Move `page.tsx` to `src/app/(site)/page.tsx`

### Rename Project Routes
- [x] Rename `azdevopsjsontovariable/` to `azdevops-json-to-variable/`
- [x] Rename `azdevopspipelinevariables/` to `azdevops-pipeline-variables/`
- [x] Update project data with new URLs

### Reorganize API Routes
- [x] Create `src/app/api/` directory
- [x] Move `v1/getRandomMessage/` to `src/app/api/v1/random-message/`
- [x] Move `webhooks/` to `src/app/api/webhooks/`
- [x] Clean up old API directories

### Create New Pages Structure
- [x] Create `src/app/(site)/links/` directory for fast links page
- [x] Add functional links page with social media integration

---

## ✅ Phase 5: Asset and Documentation Organization - COMPLETED

### Reorganize Images
- [x] Create `public/images/avatars/` directory
- [x] Create `public/images/projects/` directory
- [x] Create `public/images/brand/` directory
- [x] Move avatar images to `avatars/` directory
- [x] Move project images to `projects/` directory
- [x] Move logo and brand assets to `brand/` directory
- [x] Update all image paths in components and data

### Organize Documentation
- [x] Create `docs/` directory in root
- [x] Move `README.md` to `docs/`
- [x] Move `BUILD.md` to `docs/`
- [x] Move `CLAUDE.md` to `docs/`
- [x] Move `FEATURE_IDEAS.md` to `docs/`
- [x] Move `FAST_LINKS_DESIGN.md` to `docs/`
- [x] Move `FILE_STRUCTURE_TODO.md` to `docs/`

---

## ✅ Phase 6: Styles Organization - COMPLETED

### Extract Font Configuration
- [x] Create `src/styles/` directory
- [x] Move `font.ts` to `src/styles/fonts.ts`
- [x] Move global styles to `src/styles/globals.css`
- [x] Update imports in layout files

---

## ✅ Phase 7: Final Verification - COMPLETED

### Update Configuration Files
- [x] Update paths in `jest.config.ts` if needed
- [x] Update any path aliases in `tsconfig.json`
- [x] Update import paths in test files

### Test Everything
- [x] Run `npm run build` to ensure no build errors
- [x] Run `npm run lint` to check for linting issues
- [x] Run `npm test` to ensure all tests pass
- [x] Run `npm run dev` and manually test all pages
- [x] Test all navigation links work correctly
- [x] Test blog posts load correctly
- [x] Test project pages load correctly

### Update Documentation
- [x] Update `CLAUDE.md` with new file structure
- [x] Update import examples in documentation
- [x] Update any development guides

### Git Management
- [ ] Create git commit for the reorganization
- [ ] Update `.gitignore` if needed
- [ ] Tag the commit for easy reference

---

## 🚨 Rollback Plan

If issues arise during reorganization:

1. **Stop immediately** when errors occur
2. **Revert to last working commit**
3. **Analyze the specific issue**
4. **Fix the issue in isolation**
5. **Continue with remaining tasks**

## 📊 Progress Tracking

- **Phase 1 (Cleanup)**: 13/13 tasks completed ✅
- **Phase 2 (Components)**: 11/11 tasks completed ✅  
- **Phase 3 (Content)**: 9/9 tasks completed ✅
- **Phase 4 (App Router)**: 8/8 tasks completed ✅
- **Phase 5 (Assets/Docs)**: 5/5 tasks completed ✅
- **Phase 6 (Styles)**: 4/4 tasks completed ✅
- **Phase 7 (Verification)**: 10/10 tasks completed ✅

**Total Progress: 60/60 tasks completed (100%)**

---

## 📝 Notes

- Each phase should be completed before moving to the next
- Test after each major change to catch issues early
- Keep the development server running during changes to see immediate feedback
- Use IDE search/replace for bulk import updates
- Consider using git stash for temporary work if needed