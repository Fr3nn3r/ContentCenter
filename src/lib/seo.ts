// SEO utility functions for structured data (JSON-LD)

const SITE_URL = 'https://fredbrunner.com';

export interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  email: string;
  sameAs: string[];
  address: {
    '@type': string;
    addressLocality: string;
    addressCountry: string;
  };
}

export interface WebsiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  author: { '@type': string; name: string };
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  author: { '@type': string; name: string; url: string };
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  keywords?: string[];
}

export interface TechArticleSchema extends ArticleSchema {
  '@type': 'TechArticle';
  proficiencyLevel?: string;
}

// Fred Brunner's identity - reused across all pages
export function buildPersonSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fred Brunner',
    jobTitle: 'AI Solutions Architect',
    description: 'Building reliable AI systems for insurance and enterprise operations',
    url: SITE_URL,
    image: `${SITE_URL}/fred_brunner_portrait.jpg`,
    email: 'frederic.brunner@aiswissknife.com',
    sameAs: [
      'https://www.linkedin.com/in/frdbrunner/',
      'https://x.com/fredbrunner',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dübendorf',
      addressCountry: 'Switzerland',
    },
  };
}

// Website schema - site-level identity
export function buildWebsiteSchema(): WebsiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fred Brunner',
    url: SITE_URL,
    description: 'AI Solutions Architect specializing in insurance and enterprise operations',
    author: {
      '@type': 'Person',
      name: 'Fred Brunner',
    },
  };
}

// Breadcrumb navigation schema
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

// Blog post schema
export function buildBlogPostSchema(post: {
  title: string;
  summary: string;
  datePublished: Date;
  dateModified?: Date;
  slug: string;
  tags?: string[];
  heroImage?: string;
}): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    author: {
      '@type': 'Person',
      name: 'Fred Brunner',
      url: SITE_URL,
    },
    datePublished: post.datePublished.toISOString(),
    ...(post.dateModified && { dateModified: post.dateModified.toISOString() }),
    ...(post.heroImage && { image: `${SITE_URL}${post.heroImage}` }),
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.tags && { keywords: post.tags }),
  };
}

// Project case study schema
export function buildProjectSchema(project: {
  title: string;
  oneLiner: string;
  slug: string;
  tags?: string[];
  stack?: string[];
}): TechArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title,
    description: project.oneLiner,
    author: {
      '@type': 'Person',
      name: 'Fred Brunner',
      url: SITE_URL,
    },
    datePublished: new Date().toISOString(),
    url: `${SITE_URL}/projects/${project.slug}`,
    ...(project.tags && { keywords: [...project.tags, ...(project.stack || [])] }),
    proficiencyLevel: 'Expert',
  };
}
