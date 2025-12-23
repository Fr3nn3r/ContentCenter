import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  // Sort by date descending
  const sortedPosts = posts.sort(
    (a, b) => b.data.datePublished.valueOf() - a.data.datePublished.valueOf()
  );

  return rss({
    title: 'Fred Brunner - AI Solutions Architect',
    description:
      'Practical insights on enterprise AI implementation, prompt engineering, and building reliable LLM systems.',
    site: context.site ?? 'https://fredbrunner.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.datePublished,
      description: post.data.summary,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
