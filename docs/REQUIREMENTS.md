### Audience-facing

* **As a first-time visitor**, I want to understand who Fred is and what he builds within 10 seconds, so I can decide whether to keep reading.
* **As a potential client**, I want to see clear “problems solved” and outcomes, so I can trust you’ll deliver.
* **As a recruiter / hiring manager**, I want a one-page “proof of capability” (projects, tech, impact, writing), so I can evaluate fit quickly.
* **As a technical peer**, I want to browse deep technical writeups with code and diagrams, so I can judge your engineering thinking.
* **As a busy reader on mobile**, I want the site to load fast and stay stable, so it feels premium (target CWV: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1). ([Google for Developers][1])
* **As an accessibility user (keyboard/screen reader)**, I want all interactions to work via keyboard with visible focus, so the site is usable for everyone. ([w3c.github.io][2])

### Content and credibility

* **As a reader**, I want every article to show who wrote it (byline) and why they’re credible, so I can trust the content. ([Google for Developers][3])
* **As a reader**, I want case studies to follow a consistent template (Problem → Constraints → Approach → Results → Artifacts), so I can compare projects quickly.
* **As a visitor**, I want to easily find your best work (“Start here” + featured posts/projects), so I don’t have to hunt.

### SEO and discoverability (Google can actually find you)

* **As a search engine crawler**, I want an accurate sitemap, so I can discover and crawl your important URLs efficiently. ([Google for Developers][4])
* **As a search engine crawler**, I want a valid robots.txt (and sitemap reference), so crawling rules are clear and consistent. ([Google for Developers][5])
* **As Google**, I want structured data (JSON-LD) for articles, so I can better understand author/date/headline and interpret content correctly. ([Google for Developers][6])
* **As a social-sharing visitor**, I want pages to have correct OpenGraph/Twitter metadata, so links look good when shared.

### Site owner / operations (full control, no logins)

* **As the site owner**, I want content stored in version control (Markdown/MDX), so I can edit, review, and roll back safely.
* **As the site owner**, I want a reusable “post” and “project” content model (front-matter fields like title/slug/date/tags/summary), so publishing stays consistent.
* **As the site owner**, I want an automated build + deploy pipeline, so updates go live reliably without manual steps.
* **As the site owner**, I want image optimization (responsive sizes + modern formats), so media looks sharp without slowing the site.

### Analytics and keyword discovery (your “free traffic” lever)

* **As the site owner**, I want Search Console connected, so I can see real queries, clicks, impressions, CTR, and position for each page/query. ([Google for Developers][7])
* **As the site owner**, I want Search Console Insights, so I can quickly see what content is resonating and how people discover it. ([Google][8])
* **As the site owner**, I want query clustering (query groups) when available, so I can plan content around topics rather than noisy keyword variants. ([Google for Developers][9])
* **As the site owner**, I want a keyword research workflow using Google Trends + Keyword Planner, so I can choose topics with real demand before writing. ([Google for Developers][10])

### Security and resilience

* **As the site owner**, I want HTTPS everywhere and security headers, so visitors are protected and browsers trust the site.
* **As the site owner**, I want automated backups (or at least repo + content backup), so I can recover fast from mistakes.

[1]: https://developers.google.com/search/docs/appearance/core-web-vitals?utm_source=chatgpt.com "Understanding Core Web Vitals and Google search results | Google Search Central  |  Documentation  |  Google for Developers"
[2]: https://w3c.github.io/wcag/guidelines/22/?utm_source=chatgpt.com "Web Content Accessibility Guidelines (WCAG) 2.2"
[3]: https://developers.google.com/search/docs/fundamentals/creating-helpful-content?utm_source=chatgpt.com "Creating Helpful, Reliable, People-First Content | Google Search Central  |  Documentation  |  Google for Developers"
[4]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?utm_source=chatgpt.com "Build and Submit a Sitemap | Google Search Central  |  Documentation  |  Google for Developers"
[5]: https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?utm_source=chatgpt.com "Create and Submit a robots.txt File | Google Crawling Infrastructure  |  Crawling infrastructure  |  Google for Developers"
[6]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?utm_source=chatgpt.com "Intro to How Structured Data Markup Works | Google Search Central  |  Documentation  |  Google for Developers"
[7]: https://developers.google.com/webmaster-tools/v1/searchanalytics/query?utm_source=chatgpt.com "Search Analytics: query  |  Search Console API  |  Google for Developers"
[8]: https://search.google.com/search-console/insights/about?utm_source=chatgpt.com "Search Console Insights"
[9]: https://developers.google.com/search/blog/2025/10/search-console-query-groups?utm_source=chatgpt.com "Introducing Query groups in Search Console Insights  |  Google Search Central Blog  |  Google for Developers"
[10]: https://developers.google.com/search/docs/monitor-debug/trends-start?utm_source=chatgpt.com "Get started with Google Trends | Google Search Central  |  Documentation  |  Google for Developers"
