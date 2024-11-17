import { DiscordIcon, GitHubIcon, XIcon } from "@/components/icons";
import {
  PaladiumProfileTrackerLogo,
  PalaGuideBotLogo
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Riveur",
  initials: "Le R",
  location: "Reunion Island, France",
  locationLink: "https://www.google.com/maps/place/Reunion",
  about:
    "Web developer with a passion for creating beautiful and functional user interfaces.",
  summary:
    "I work mostly with TypeScript, React, AdonisJS, and PostgreSQL. I have over 4 years of experience working on personal projects and contributing to open-source projects.",
  avatarUrl: "https://avatars.githubusercontent.com/u/89652886?v=4",
  personalWebsiteUrl: "https://riveur.com",
  contact: {
    email: "riveur.cpy@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/riveur",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/Riveur_",
        icon: XIcon,
      },
      {
        name: "Discord",
        url: "https://discord.com/users/339809990527156224",
        icon: DiscordIcon,
      }
    ],
  },
  skills: [
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "AdonisJS",
    "PostgreSQL"
  ],
  projects: [
    {
      title: "PalaGuideBot",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "AdonisJS",
        "MongoDB",
      ],
      description:
        "PalaGuideBot provides statistics of players and factions around Paladium, a Minecraft server",
      logo: PalaGuideBotLogo,
      link: {
        label: "palaguidebot.fr",
        href: "https://palaguidebot.fr/",
      },
    },
    {
      title: "Paladium Profile Tracker",
      techStack: [
        "Contributor",
        "TypeScript",
        "React",
        "Vite.js",
      ],
      description:
        "This website provides several useful tools about Paladium",
      logo: PaladiumProfileTrackerLogo,
      link: {
        label: "github.com",
        href: "https://palatracker.bromine.fr",
      },
    },
  ],
} as const;
