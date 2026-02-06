export type ExperienceGroup = {
  title: string;
  items: { name: string; href: string; subtext?: string }[];
};

export const experienceGroups: ExperienceGroup[] = [
  {
    title: "For Children",
    items: [
      { name: "Teepee Tent Parties", href: "/experiences/teepee-parties", subtext: "Luxury sleepover experiences for little dreamers" },
      { name: "Little Ones Parties", href: "/experiences/little-ones-parties", subtext: "Thoughtfully styled celebrations for early years" },
      { name: "Birthday Parties", href: "/experiences/birthday-parties", subtext: "Beautifully curated birthday moments" },
      { name: "Themed Parties", href: "/experiences/themed-parties", subtext: "Immersive themes brought to life" },
    ],
  },
  {
    title: "For Celebrations",
    items: [
      { name: "Picnic Parties", href: "/experiences/picnic-parties", subtext: "Relaxed luxury dining experiences" },
      { name: "Milestone Parties", href: "/experiences/milestone-parties", subtext: "Celebrate life’s defining moments" },
      { name: "Lights, Balloons & Event Decor", href: "/experiences/lights-balloons-event-decor", subtext: "Statement styling for unforgettable moments" },
    ],
  },
  {
    title: "Weddings & Proposals",
    items: [
      { name: "Proposals", href: "/experiences/proposals", subtext: "Iconic moments designed to be remembered forever" },
      { name: "Weddings", href: "/experiences/weddings", subtext: "Luxury wedding styling across Cyprus" },
    ],
  },
  {
    title: "Seasonal & Commercial",
    items: [
      { name: "Christmas", href: "/experiences/christmas", subtext: "Festive styling with a refined touch" },
      { name: "New Year’s Eve", href: "/experiences/new-years-eve", subtext: "Celebrate the countdown in style" },
      { name: "Commercial Events", href: "/experiences/commercial-events", subtext: "Professional event styling for brands and venues" },
    ],
  },
];
