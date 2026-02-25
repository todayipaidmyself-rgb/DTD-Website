import { useEffect } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import PageHeading from '@/components/PageHeading';
import NotFound from '@/pages/NotFound';
import { posts } from '@/pages/Blog';

type BlogPostProps = {
  params: { slug: string };
};

export default function BlogPost({ params }: BlogPostProps) {
  const slugParam = params?.slug || '';
  const post =
    posts.find((p) => p.slug === `/blog/${slugParam}`) ||
    posts.find((p) => p.slug.replace(/^\/blog\//, '') === slugParam);

  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slugParam]);

  if (!post) return <NotFound />;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Dress That Day"
    },
    "image": post.image,
    "articleSection": post.category,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.slug
    }
  };

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={post.slug}
        schema={schema}
      />

      <section className="relative h-[82vh] md:h-[88vh] lg:h-[92vh] overflow-hidden" data-scroll-section>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
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
          <p className="font-body text-gray-700 leading-relaxed text-lg font-light">
            Coming soon — full story in progress. In the meantime, explore more inspiration in our Journal.
          </p>
        </div>
      </section>
    </Layout>
  );
}
