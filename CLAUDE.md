# CLAUDE.md

## Project: Fred Brunner Personal Website
Astro 5 + Tailwind 4 + TypeScript static site. SEO-first portfolio with blog posts and project case studies.

## Action Protocol
- **Complex tasks:** Plan -> Questions -> Consent -> Execute
- **Trivial tasks:** Execute immediately

## Tech Stack
- **Framework:** Astro (file-based routing in `src/pages/`)
- **Content:** Markdown collections in `src/content/` (posts, projects)
- **Styling:** Tailwind CSS with `@tailwindcss/typography`
- **Schema:** Zod validation in `src/content.config.ts`
- **SEO:** JSON-LD builders in `src/lib/seo.ts`

## Architecture Rules
1. **Components:** Small, props-lean. One concern per component.
2. **Content Schema:** All fields defined in `content.config.ts`. No ad-hoc frontmatter.
3. **SEO utilities:** Centralized in `src/lib/seo.ts`. No inline schema markup.
4. **Layouts:** Extend `BaseLayout.astro`. No duplicate head/meta logic.

## Naming
- `camelCase` for variables/functions
- `PascalCase` for components and types
- `SCREAMING_SNAKE` for constants
- Semantic names: `featuredProjects` not `data`, `shouldShowDraft` not `flag`

## Content Model
**Posts:** title, datePublished, summary, tags[], heroImage?, draft?
**Projects:** title, oneLiner, tags[], industry, stack[], problem, approach, results, artifacts[], featured?, draft?

## SEO Priorities (per PRD)
- Core Web Vitals: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1
- Structured data on all posts (Article/BlogPosting)
- sitemap.xml, robots.txt, RSS feed
- Visible authorship (byline + dates)

## Comments
- **No:** Syntax explanations, restating code
- **Yes:** Business rationale, edge cases, non-obvious workarounds

## Output
- ASCII only (use `[OK]` not checkmarks)
- YAGNI: Do exactly what's asked, no speculative features
