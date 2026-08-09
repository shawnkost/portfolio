export const site = {
  name: "Shawn Kost",
  wordmark: "S/K",
  role: "Front-end engineer",
  url: "https://shawnkost.dev",
  email: "shawnmkost@gmail.com",
  resume: "https://drive.google.com/file/d/1nxPEIsTcV2Qs-R6IYqn7blexT0mgehXW/view?usp=sharing",
  title: "Shawn Kost — Front-end engineer",
  description:
    "Shawn Kost is a front-end engineer who builds web applications in React and TypeScript, with enough Node to ship a whole feature.",
  umamiId: "fcefbfa2-de35-4c1c-8247-d8cd31747fd6",
} as const;

export type SocialName = "email" | "github" | "linkedin" | "instagram";

export const socials: { name: SocialName; label: string; href: string }[] = [
  { name: "email", label: "Email", href: `mailto:${site.email}` },
  { name: "github", label: "GitHub", href: "https://github.com/shawnkost" },
  {
    name: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shawnkost/",
  },
  {
    name: "instagram",
    label: "Instagram",
    href: "https://instagram.com/shawnmkost",
  },
];

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];
