export type ExperienceItem = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featuredRank?: number;
};

export const experiences: ExperienceItem[] = [
  {
    slug: "/experiences/teepee-parties",
    category: "Teepee Tent Parties",
    date: "February 10, 2025",
    title: "Teepee Sleepovers, Reimagined",
    excerpt: "Intimate tented suites styled with layered linens, twinkle lighting, and cinematic calm for overnight magic.",
    image: "/images/teepee-parties-hero.webp",
    featuredRank: 1,
  },
  {
    slug: "/experiences/little-ones-parties",
    category: "Little Ones Parties",
    date: "February 28, 2025",
    title: "Little Ones, Beautifully Celebrated",
    excerpt: "Gentle palettes, tactile props, and storybook moments crafted for early years gatherings.",
    image: "/images/hero/little-ones-parties-hero.webp",
  },
  {
    slug: "/experiences/birthday-parties",
    category: "Birthday Parties",
    date: "January 30, 2025",
    title: "Editorial Birthday Moments",
    excerpt: "Elevated backdrops, layered textiles, and statement lighting designed for unforgettable birthdays.",
    image: "/images/heroes/birthday-parties-hero-v2.webp",
  },
  {
    slug: "/experiences/picnic-parties",
    category: "Picnic Parties",
    date: "March 18, 2025",
    title: "Luxury Picnics by the Shore",
    excerpt: "Low-set tables, crystal glassware, and sunlit palettes curated for effortless seaside gatherings.",
    image: "/images/hero/picnic-parties-hero.webp",
    featuredRank: 2,
  },
  {
    slug: "/experiences/baby-showers",
    category: "Baby Showers & Reveals",
    date: "January 22, 2025",
    title: "Baby Showers & Reveals in Bloom",
    excerpt: "Soft blooms, sculptural balloons, and calm hues that frame the celebration without overwhelming the moment.",
    image: "/images/baby_shower_elegant.webp",
    featuredRank: 3,
  },
  {
    slug: "/experiences/weddings",
    category: "Weddings",
    date: "May 12, 2025",
    title: "Cyprus Weddings, Tailored",
    excerpt: "Editorial ceremony scenes with architectural florals and refined tablescapes across the island.",
    image: "/images/heroes/weddings-hero.webp",
  },
  {
    slug: "/experiences/proposals",
    category: "Proposals",
    date: "December 15, 2025",
    title: "Signature Proposal Styling",
    excerpt: "Sunset terraces and secret coves staged with blooms, candlelight, and modern romance for that cinematic yes.",
    image: "/images/heroes/proposals-hero.webp",
  },
  {
    slug: "/experiences/milestone-parties",
    category: "Milestone Parties",
    date: "April 8, 2025",
    title: "Milestone Parties with Edge",
    excerpt: "Layered textures, statement lighting, and refined palettes to honor every decade with intention.",
    image: "/images/heroes/milestone-parties-hero.webp",
  },
  {
    slug: "/experiences/themed-parties",
    category: "Themed Parties",
    date: "June 2, 2025",
    title: "Immersive Themed Celebrations",
    excerpt: "From cinematic superheroes to couture princess suites, themes translated into elevated, photogenic worlds.",
    image: "/images/hero/themed-parties-superhero-hero.webp",
  },
  {
    slug: "/experiences/lights-balloons-event-decor",
    category: "Lights, Balloons & Event Decor",
    date: "July 14, 2025",
    title: "Event Decor & Lighting",
    excerpt: "Architectural balloon installs, light-up letters, and curated props that frame the scene with modern polish.",
    image: "/images/hero/lights-balloons-decor-hero.webp",
  },
  {
    slug: "/experiences/christmas",
    category: "Christmas",
    date: "November 18, 2025",
    title: "Christmas Scenes with Glow",
    excerpt: "Candlelit textures, winter metallics, and sculptural greenery for immersive festive gatherings.",
    image: "/images/hero/christmas-parties-hero-v2.webp",
  },
  {
    slug: "/experiences/new-years-eve",
    category: "New Year’s Eve",
    date: "December 28, 2025",
    title: "New Year’s Eve in Gold & Glass",
    excerpt: "Luminous tablescapes and dramatic lighting to count down with polished, midnight energy.",
    image: "/images/heroes/new-years-eve-hero.webp",
  },
  {
    slug: "/experiences/commercial-events",
    category: "Commercial Events",
    date: "September 6, 2025",
    title: "Commercial Events with Poise",
    excerpt: "Brand-forward installations, clean lines, and intentional styling tailored for launches and venues.",
    image: "/images/heroes/commercial-events-hero.webp",
  },
];
