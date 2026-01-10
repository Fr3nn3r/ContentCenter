# PRD — Fred Brunner Personal Website (ContentCenter Pivot)

**Doc owner:** Fred
**Status:** Draft v0.1 (2025-12-22)
**Product:** Personal website (all content free, no login, no newsletter for now)

---

## 1) Problem statement

Fred needs a **top-notch, high-performance personal website** that (1) clearly communicates his value, (2) showcases AI projects with credible proof, and (3) compounds visibility via Google through consistent, helpful publishing.

Google visibility depends on being crawlable + providing helpful, people-first content with clear authorship and strong page experience. ([Google for Developers][1])

---

## 2) Goals

### Primary goals

1. **Positioning clarity in <10 seconds**: visitors instantly understand who Fred is, what he builds, and who it’s for.
2. **Proof over hype**: project pages read like case studies (problem → approach → results).
3. **SEO foundation**: Google can crawl, understand, and index pages reliably (sitemap, robots, structured data, metadata). ([Google for Developers][2])
4. **Premium feel**: fast, stable, accessible (Core Web Vitals targets). ([web.dev][3])

### Success metrics (first 90 days)

* Publish **6–12 posts** + **3–5 case studies**
* CWV “good” targets on key pages: **LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1** ([web.dev][3])
* Search Console shows:

  * pages indexed
  * impressions growing week-over-week
  * at least 20+ unique queries bringing impressions (early traction)

---

## 3) Non-goals (explicitly out of scope)

* Newsletter sending / email deliverability
* User accounts, memberships, paywalls, comments
* Complex CMS admin UI (content can be file-based or headless later)
* E-commerce / payments

---

## 4) Target users & personas

1. **Potential client (exec / ops lead)**
   Wants: evidence, outcomes, credibility, quick contact.

2. **Partner / collaborator (technical or product)**
   Wants: deep technical thinking, architecture clarity, “how it works”.

3. **Recruiter / hiring manager**
   Wants: concise proof of skills, projects, writing, and impact.

4. **Search engine crawler**
   Needs: crawlable structure, sitemap + robots rules, structured data. ([Google for Developers][2])

---

## 5) Core user journeys

### Journey A — “Do I trust this person?”

Landing → skim hero → scan featured projects → open one case study → see outcomes + artifacts → contact.

### Journey B — “Teach me something”

Google query → blog post → internal links to related posts → project case study → contact.

### Journey C — “I’m evaluating fit”

Home/About → Projects index → 2–3 case studies → About (story/values) → Contact.

---

## 6) Information architecture (IA) & URL structure

### Required pages

* `/` Home
* `/about`
* `/projects` (index)
* `/projects/<slug>` (case study)
* `/blog` (index)
* `/blog/<slug>` (post)
* `/tags/<tag>` (topic hub)
* `/contact`
* `/rss.xml` (or `/feed.xml`)

### SEO-required endpoints/files

* `/sitemap.xml` ([Google for Developers][2])
* `/robots.txt` (includes Sitemap directive) ([Google for Developers][4])

---

## 7) Content model (structure)

### Post (blog)

**Fields**

* `title` (required)
* `slug` (required, stable)
* `datePublished` (required)
* `dateModified` (optional)
* `summary` (required)
* `tags[]` (required)
* `canonicalUrl` (optional)
* `heroImage` (optional but recommended)
* `body` (MD/MDX)

**Rendering requirements**

* Shows byline + author link (About page) to strengthen “Who” clarity. ([Google for Developers][1])
* Shows published date, updated date (if meaningful edits)

### Project (case study)

**Fields**

* `title`, `slug`, `oneLiner`, `tags[]`
* `industry` (insurance/other)
* `stack[]` (tools)
* `problem`, `constraints`, `approach`, `results`
* `artifacts[]` (screenshots, repo links, demo links)
* `body` (long-form narrative)

**Rendering requirements**

* Must be scannable (sections, summary box)
* Must include proof artifacts (screens, diagrams, links)

---

## 8) Functional requirements (detailed)

### 8.1 Global navigation & layout

* **As a visitor**, I want consistent top navigation (Home, Projects, Writing, About, Contact), so I can orient instantly.
* **As a mobile visitor**, I want a fast, accessible menu, so navigation is effortless.
* Sticky header allowed only if it doesn’t obscure focused elements. ([W3C][5])

### 8.2 Home page

* **Hero block**: positioning statement + short proof line + primary CTA (Contact) + secondary CTA (Projects)
* **Featured projects** (3 cards): title, one-liner, outcomes
* **Featured writing** (3 cards): topic-focused, not chronological only
* **Trust block**: logos/testimonials optional (can be placeholder initially)

### 8.3 Projects index

* Filter by tags (insurance / n8n / supabase / voice / governance / etc.)
* Sort: “Featured” first, then recent

### 8.4 Project detail template

* Above-the-fold: title, one-liner, tags, outcomes
* Sections: Problem → Constraints → Approach → Results → Artifacts → Next steps
* Artifacts support: images, embedded video, external links

### 8.5 Blog index

* Search (client-side acceptable)
* Filters by tag
* Clear post summaries and reading time

### 8.6 Blog post template

* Byline + date(s) visible (supports “Who/Why/How” trust cues) ([Google for Developers][1])
* Table of contents for long posts (optional)
* “Related posts” by shared tag
* Code blocks with copy button (nice-to-have)

### 8.7 Contact

* Must offer at least:

  * email link
  * optional calendar link
* Optional simple contact form (spam-protected) — can be deferred

### 8.8 RSS

* Auto-generated RSS feed for blog posts (all public)

---

## 9) SEO & discoverability requirements

### 9.1 Crawlability

* Provide **sitemap.xml** and keep it accurate; keep URL count within protocol limits (split if needed). ([Google for Developers][2])
* Provide **robots.txt** at site root; include `Sitemap:` directive. ([Google for Developers][4])

### 9.2 Structured data

* Blog posts must include **Article / BlogPosting structured data** with recommended properties (author, headline, datePublished, images). ([Google for Developers][6])
* Projects should include structured data where appropriate (at minimum: Organization/Person for author identity; Article-like markup if the page reads as an article).

### 9.3 “Helpful content” alignment

* Every post should aim for original experience + substance, not rephrasing what already exists. ([Google for Developers][1])
* Make authorship obvious (byline + About). ([Google for Developers][1])

### 9.4 Keyword discovery workflow (requirements, not tooling)

* **As the site owner**, I want a repeatable way to pick topics with demand:

  * Use Google Trends to discover related topics/queries and seasonality. ([Google for Developers][7])
  * Use Keyword Planner for keyword ideas and directional volumes/forecasts. ([Google Business][8])
  * After launch, use Search Console data (queries/clicks/impressions/position) as primary truth. ([Google for Developers][9])
  * When available, use Search Console Insights **Query groups** to cluster intents. ([Google for Developers][10])

---

## 10) Non-functional requirements

### 10.1 Performance

* Meet Core Web Vitals “good” thresholds on key pages:

  * LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 ([web.dev][3])
* Optimize images (responsive, modern formats), defer non-critical scripts, avoid layout shift.

### 10.2 Accessibility

* Keyboard navigation works everywhere; focus is visible and not obscured. ([W3C][5])
* Semantic headings, alt text, labels for form fields.

### 10.3 Security

* HTTPS only
* Security headers (baseline)
* If forms exist: rate limit + spam protection

### 10.4 Maintainability & control

* Content must be easy to edit and version (file-based preferred)
* Reusable templates for Posts and Projects
* Automated build & deploy

---

## 11) Design requirements (top-notch bar)

### Visual system

* Typography-first layout (strong hierarchy)
* Spacing scale consistency
* Minimal color palette; high contrast
* Microinteractions: subtle, purposeful (hover/focus states)

### Components (minimum set)

* Header / Footer
* Card (project/post)
* Tag pill
* CTA button variants
* Callout block (for “Lesson learned”, “Checklist”, “Pitfall”)
* Code block styling

---

## 12) Analytics & measurement (privacy-friendly)

* Track:

  * page views
  * top pages
  * referrers
* Primary SEO measurement via Search Console (and API later if desired). ([Google for Developers][9])
* Optional: URL Inspection for debugging indexing issues. ([Google for Developers][11])

---

## 13) Acceptance criteria (testable)

### Content & UX

* Home has: hero + 3 featured projects + 3 featured posts + CTA
* Projects index supports tag filtering
* Each project page follows the case study template and includes ≥ 2 artifacts/links
* Blog index supports tag filtering + search (basic)
* RSS feed validates and contains latest posts

### SEO

* `/robots.txt` reachable at root and includes sitemap reference ([Google for Developers][4])
* `/sitemap.xml` reachable and includes all canonical URLs ([Google for Developers][2])
* Blog posts include Article/BlogPosting structured data ([Google for Developers][6])

### Performance & a11y

* CWV targets met on Home, a Project page, a Blog post ([web.dev][3])
* Keyboard focus visible + not obscured ([W3C][5])

---

## 14) MVP scope (recommended)

**MVP = 2 weeks of focused build**

* Pages: Home, About, Projects index, Project template, Blog index, Blog template, Contact
* Tags, RSS, sitemap, robots, metadata
* Publish: 2–3 projects + 3 posts

---

## 15) Roadmap (post-MVP)

* “Start here” page (best posts + best projects)
* On-site full-text search (better than basic)
* Multi-language (EN/FR) if desired
* Newsletter integration (later)
* Interactive demos on select project pages

---

[1]: https://developers.google.com/search/docs/fundamentals/creating-helpful-content?utm_source=chatgpt.com "Creating Helpful, Reliable, People-First Content | Google Search Central  |  Documentation  |  Google for Developers"
[2]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?utm_source=chatgpt.com "Build and Submit a Sitemap | Google Search Central  |  Documentation  |  Google for Developers"
[3]: https://web.dev/articles/vitals?utm_source=chatgpt.com "Web Vitals  |  Articles  |  web.dev"
[4]: https://developers.google.com/search/reference/robots_txt?utm_source=chatgpt.com "How Google Interprets the robots.txt Specification | Google Search Central  |  Documentation  |  Google for Developers"
[5]: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/?utm_source=chatgpt.com "What's New in WCAG 2.2 | Web Accessibility Initiative (WAI) | W3C"
[6]: https://developers.google.com/search/docs/appearance/structured-data/article?utm_source=chatgpt.com "Learn About Article Schema Markup | Google Search Central  |  Documentation  |  Google for Developers"
[7]: https://developers.google.com/search/docs/monitor-debug/trends-start?utm_source=chatgpt.com "Get started with Google Trends | Google Search Central  |  Documentation  |  Google for Developers"
[8]: https://ads.google.com/intl/en//home/resources/articles/using-google-ads-keyword-planner/?utm_source=chatgpt.com "How to Find Keywords with Keyword Planner - Google Ads"
[9]: https://developers.google.com/webmaster-tools/v1/searchanalytics/query?utm_source=chatgpt.com "Search Analytics: query  |  Search Console API  |  Google for Developers"
[10]: https://developers.google.com/search/blog/2025/10/search-console-query-groups?utm_source=chatgpt.com "Introducing Query groups in Search Console Insights  |  Google Search Central Blog  |  Google for Developers"
[11]: https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect?utm_source=chatgpt.com "Method: index.inspect  |  Search Console API  |  Google for Developers"
