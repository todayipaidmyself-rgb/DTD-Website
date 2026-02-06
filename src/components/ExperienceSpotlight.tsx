import { useMemo, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { experiences, ExperienceItem } from '@/data/experiences';
import { experienceGroups } from '@/content/experienceCategories';

export default function ExperienceSpotlight() {
  const groupFilters = useMemo(
    () => [
      { label: 'All', categories: [] as string[] },
      ...experienceGroups.map((group) => ({
        label: group.title,
        categories: group.items.map((item) => item.name),
      })),
    ],
    []
  );

  const categoryOrder = useMemo(() => {
    const allNames: string[] = [];
    experienceGroups.forEach((group) =>
      group.items.forEach((item) => allNames.push(item.name))
    );
    return allNames;
  }, []);

  const [activeGroup, setActiveGroup] = useState<string>('All');

  const orderIndex = useMemo(() => {
    const map = new Map<string, number>();
    categoryOrder.forEach((name, idx) => map.set(name, idx));
    return map;
  }, [categoryOrder]);

  const activeCategories =
    activeGroup === 'All'
      ? null
      : groupFilters.find((g) => g.label === activeGroup)?.categories ?? null;

  const filtered = experiences.filter((item) => {
    if (!activeCategories) return true;
    return activeCategories.includes(item.category);
  });

  const sorted = [...filtered].sort((a, b) => {
    const aOrder = orderIndex.get(a.category) ?? Number.MAX_SAFE_INTEGER;
    const bOrder = orderIndex.get(b.category) ?? Number.MAX_SAFE_INTEGER;
    if (aOrder !== bOrder) return aOrder - bOrder;
    const aRank = a.featuredRank ?? Number.POSITIVE_INFINITY;
    const bRank = b.featuredRank ?? Number.POSITIVE_INFINITY;
    if (aRank !== bRank) return aRank - bRank;
    return 0;
  });

  return (
    <>
      <section className="pt-24 pb-12 bg-[#f7f7f7] border-b border-black/10" data-scroll-section>
        <div className="container mx-auto px-6 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-black/60">Experiences</p>
          <h2 className="font-serif text-4xl md:text-5xl text-black tracking-tight">
            Featured Experiences
          </h2>
          <p className="font-body text-base md:text-lg text-black/70 max-w-3xl mx-auto font-light">
            A curated edit of our signature occasions — styled with the same editorial eye you’ll find
            across our journal, but grounded in live experiences ready to book.
          </p>
        </div>
      </section>

      <section className="py-10 bg-[#fdfdfd] border-b border-black/10" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            {groupFilters.map((group) => (
              <button
                key={group.label}
                onClick={() => setActiveGroup(group.label)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeGroup === group.label
                    ? 'bg-black text-white border-black shadow-sm'
                    : 'bg-transparent text-black/70 border-black/20 hover:border-black/50 hover:text-black'
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sorted.map((item) => (
              <ExperienceCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="group cursor-pointer flex flex-col h-full">
      <Link href={item.slug}>
        <div className="relative h-64 overflow-hidden mb-6 rounded-sm bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 text-xs uppercase tracking-widest text-luxury-text">
            {item.category}
          </div>
        </div>
      </Link>

      <div className="flex items-center text-xs text-gray-400 mb-3 uppercase tracking-wider space-x-4">
        <span className="flex items-center">
          <Calendar size={12} className="mr-1" /> {item.date}
        </span>
        <span className="flex items-center">
          <Tag size={12} className="mr-1" /> {item.category}
        </span>
      </div>

      <h3 className="font-serif text-2xl text-black mb-4 group-hover:text-[#d8c07f] transition-colors duration-300 leading-tight">
        {item.title}
      </h3>

      <p className="font-body text-black/70 font-light mb-6 flex-grow line-clamp-3">
        {item.excerpt}
      </p>

      <div className="mt-auto">
        <Link href={item.slug}>
          <span className="inline-flex items-center text-sm uppercase tracking-widest text-black group-hover:text-[#d8c07f] transition-colors duration-300 border-b border-transparent group-hover:border-[#d8c07f] pb-1">
            Explore Experience <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Link>
      </div>
    </article>
  );
}
