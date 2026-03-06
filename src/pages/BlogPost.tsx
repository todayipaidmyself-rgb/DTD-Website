import { useEffect } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import PageHeading from '@/components/PageHeading';
import NotFound from '@/pages/NotFound';
import { blogPosts } from '@/data/blog/blogPosts';

type BlogPostProps = {
  params: { slug: string };
};

export default function BlogPost({ params }: BlogPostProps) {
  const slugParam = params?.slug || '';
  const post =
    blogPosts.find((p) => p.slug === slugParam) ||
    blogPosts.find((p) => p.slug.replace(/^\/blog\//, '') === slugParam);

  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slugParam]);

  if (!post) return <NotFound />;

  const fallbackDescription = (post as any).excerpt ?? post.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 180);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.meta?.title ?? post.title,
    "description": post.meta?.description ?? fallbackDescription,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Dress That Day"
    },
    "image": post.heroImage,
    "articleSection": post.category,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `/blog/${post.slug}`
    }
  };

  return (
    <Layout>
      <SEO
        title={post.meta?.title ?? post.title}
        description={post.meta?.description ?? fallbackDescription}
        canonical={`/blog/${post.slug}`}
        schema={schema}
      />

      <section className="relative h-[82vh] md:h-[88vh] lg:h-[92vh] overflow-hidden" data-scroll-section>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <PageHeading
          text={post.title}
          subtextBelow={`${post.category} • ${post.date}`}
          textColor="text-white"
          subtextColor="text-white/85"
          className="pt-32 md:pt-36"
        />
      </section>

      <section className="py-16 bg-white" data-scroll-section>
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <article
            className="blog-article"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </Layout>
  );
}
