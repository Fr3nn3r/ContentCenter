# BACKLOG - Fred Brunner Personal Website

**Tech Stack:** Astro + Tailwind CSS + MDX (Content Collections) + Vercel
**Status:** Draft v0.1 (2025-12-22)

---

## MVP Work Packages

### WP1: Project Scaffolding & Infrastructure
**Goal:** Deployable "Hello World" with CI/CD pipeline

- [ ] Initialize Astro project with TypeScript
- [ ] Configure Tailwind CSS + Typography plugin
- [ ] Set up Content Collections schema (posts, projects)
- [ ] Configure Vercel deployment (preview + production)
- [ ] Set up Git branch strategy (main = production)
- [ ] Add base `robots.txt` and `sitemap.xml` (Astro integration)

**Acceptance:** Site deploys to Vercel on push to main.

---

### WP2: Design System & Global Layout
**Goal:** Consistent visual foundation across all pages

- [ ] Define design tokens (colors, spacing scale, typography scale)
- [ ] Create base layout component (Header, Footer, main content area)
- [ ] Build Header with navigation (Home, Projects, Blog, About, Contact)
- [ ] Build Footer (links, copyright)
- [ ] Build reusable components:
  - [ ] Button (primary, secondary variants)
  - [ ] Tag pill
  - [ ] Card (for projects/posts)
  - [ ] Callout block (lesson, pitfall, checklist)
- [ ] Mobile-responsive navigation (hamburger menu)
- [ ] Ensure visible focus states for keyboard navigation

**Acceptance:** All components render correctly on mobile/desktop; keyboard focus visible.

---

### WP3: Home Page
**Goal:** Visitor understands Fred's value in <10 seconds

- [ ] Hero block: positioning statement + proof line + CTAs (Contact, Projects)
- [ ] Featured Projects section (3 cards, manually curated)
- [ ] Featured Writing section (3 cards, manually curated)
- [ ] Trust block placeholder (logos/testimonials - can be empty initially)
- [ ] SEO metadata (title, description, OG tags)

**Acceptance:** Home page matches PRD section 8.2; CTA buttons link correctly.

---

### WP4: About Page
**Goal:** Build credibility and human connection

- [ ] Story section (who Fred is, background)
- [ ] Current focus section (what he's working on now)
- [ ] Skills/expertise summary
- [ ] Professional photo placeholder
- [ ] SEO metadata

**Acceptance:** Page answers "Who is this person and why should I trust them?"

---

### WP5: Projects Section (Index + Detail)
**Goal:** Showcase work as proof, not just portfolio

**Index (`/projects`):**
- [ ] Grid/list of project cards
- [ ] Tag filtering (client-side)
- [ ] Sort: featured first, then by date

**Detail (`/projects/[slug]`):**
- [ ] Case study template:
  - [ ] Above-fold: title, one-liner, tags, outcomes
  - [ ] Sections: Problem, Constraints, Approach, Results, Artifacts
- [ ] Artifacts support: images, video embeds, external links
- [ ] Related projects (by shared tags)
- [ ] SEO metadata + structured data (Article/Person)

**Content Collections schema:**
```
title, slug, oneLiner, tags[], industry, stack[],
problem, constraints, approach, results,
artifacts[], body (MDX), featured (boolean)
```

**Acceptance:** 3 projects published (ClaimEval, Prompt Playbook, Context Builder); filtering works.

---

### WP6: Blog Section (Index + Detail)
**Goal:** Publish helpful content that compounds via Google

**Index (`/blog`):**
- [ ] Post list with summaries
- [ ] Tag filtering
- [ ] Reading time display
- [ ] Client-side search (basic)

**Detail (`/blog/[slug]`):**
- [ ] Byline + author link (to About)
- [ ] Published date, updated date (if applicable)
- [ ] Table of contents (for long posts, optional)
- [ ] Related posts (by shared tags)
- [ ] Code blocks with syntax highlighting
- [ ] SEO metadata + Article structured data (JSON-LD)

**Content Collections schema:**
```
title, slug, datePublished, dateModified (optional),
summary, tags[], canonicalUrl (optional),
heroImage (optional), body (MDX)
```

**Acceptance:** Blog index renders; at least 1 placeholder post published; structured data validates.

---

### WP7: Contact Page
**Goal:** Single clear path to reach Fred

- [ ] Email link (mailto)
- [ ] Calendar link (Calendly or similar) - optional
- [ ] Simple contact form (spam-protected) - optional, can defer
- [ ] SEO metadata

**Acceptance:** Visitor can contact Fred in one click.

---

### WP8: SEO & Discoverability
**Goal:** Google can crawl, understand, and index reliably

- [ ] `/sitemap.xml` - auto-generated, includes all canonical URLs
- [ ] `/robots.txt` - includes Sitemap directive
- [ ] RSS feed (`/rss.xml` or `/feed.xml`)
- [ ] Structured data:
  - [ ] BlogPosting for blog posts
  - [ ] Article for projects
  - [ ] Person/Organization for author identity
- [ ] OpenGraph + Twitter card metadata on all pages
- [ ] Canonical URLs on all pages

**Acceptance:** Validate with Google Rich Results Test; RSS validates.

---

### WP9: Content Creation
**Goal:** Ship with real, valuable content

- [ ] Write/finalize 3 project case studies:
  - [ ] ClaimEval
  - [ ] Prompt Management Playbook
  - [ ] Agentic Context Builder
- [ ] Write 1-3 initial blog posts (topics TBD)
- [ ] Write About page copy
- [ ] Write Home page copy (hero, positioning)

**Acceptance:** All content follows templates; no placeholder text on live pages.

---

### WP10: Analytics Setup
**Goal:** Measure what matters without compromising privacy

- [ ] Connect Google Search Console
- [ ] Add Plausible Analytics script (or defer)
- [ ] Verify site in Search Console
- [ ] Submit sitemap to Search Console

**Acceptance:** Search Console shows site as verified; pages indexable.

---

### WP11: Performance & Accessibility Audit
**Goal:** Meet CWV targets and a11y requirements

- [ ] Run Lighthouse on key pages (Home, Project detail, Blog post)
- [ ] Fix any CWV issues (LCP <= 2.5s, INP <= 200ms, CLS <= 0.1)
- [ ] Image optimization (responsive, WebP/AVIF)
- [ ] Keyboard navigation audit (all interactive elements reachable)
- [ ] Screen reader basic check (headings, alt text, labels)

**Acceptance:** Lighthouse performance >= 90; no critical a11y issues.

---

### WP12: Launch Prep
**Goal:** Production-ready site on custom domain

- [ ] Connect custom domain to Vercel
- [ ] HTTPS verified
- [ ] Security headers configured
- [ ] Final content review
- [ ] Announce / go live

**Acceptance:** Site live on domain; no broken links; all pages render.

---

## Post-MVP Backlog

| ID | Feature | Notes |
|----|---------|-------|
| PM1 | "Start Here" page | Best posts + projects curated entry point |
| PM2 | Full-text search | Pagefind or Algolia |
| PM3 | Multi-language (EN/FR) | Astro i18n routing |
| PM4 | Newsletter integration | ConvertKit/Buttondown + signup form |
| PM5 | Interactive demos | Embedded on select project pages |
| PM6 | Code block copy button | Nice-to-have UX |
| PM7 | Dark mode toggle | Theme switcher |
| PM8 | Reading progress bar | For long blog posts |

---

## Dependencies & Risks

| Risk | Mitigation |
|------|------------|
| Content not ready | WP9 can run in parallel; placeholder content for dev |
| CWV failures | Astro ships zero JS by default; optimize images early |
| SEO not indexing | Submit sitemap early; use Search Console URL Inspection |

---

## Suggested Order of Execution

1. **WP1** (Scaffolding) - foundation
2. **WP2** (Design System) - needed by all pages
3. **WP3** (Home) + **WP4** (About) - can parallelize
4. **WP5** (Projects) + **WP6** (Blog) - core content, can parallelize
5. **WP7** (Contact) - quick win
6. **WP8** (SEO) - integrate as pages are built
7. **WP9** (Content) - ongoing, parallel to dev
8. **WP10** (Analytics) - after pages exist
9. **WP11** (Audit) - before launch
10. **WP12** (Launch) - final step
