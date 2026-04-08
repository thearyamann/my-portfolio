import type { ComponentType, SVGProps } from "react";
import {
  AuraIcon,
  AwsIcon,
  BlazrIcon,
  BoltIcon,
  CodeArrowsIcon,
  DesktopIcon,
  DevflowIcon,
  DockerIcon,
  EcotrackIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  MailIcon,
  NodeHexIcon,
  PostgresIcon,
  ReactOrbIcon,
  TwitterIcon,
  TypeScriptIcon,
} from "./icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type Project = {
  name: string;
  category: string;
  thumbClassName: string;
  Icon: IconComponent;
};

export type Experience = {
  organization: string;
  title: string;
  description: string;
  period: string;
  location: string;
  badges: string[];
  iconWrapClassName: string;
  iconClassName: string;
  Icon: IconComponent;
  iconSrc?: string;
};

export type Education = {
  organization: string;
  degree: string;
  description: string;
  period: string;
  location?: string;
};

export type Certification = {
  name: string;
  date: string;
};

export type Tool = {
  name: string;
  type: string;
  iconWrapClassName: string;
  Icon: IconComponent;
};

export type Contact = {
  label: string;
  value: string;
  href: string;
  Icon: IconComponent;
  external?: boolean;
};

export const githubUsername = "thearyamann";

export const projects: Project[] = [
  {
    name: "DevFlow",
    category: "Productivity SaaS",
    thumbClassName: "bg-[var(--thumb-blue)]",
    Icon: DevflowIcon,
  },
  {
    name: "EcoTrack",
    category: "Data Dashboard",
    thumbClassName: "bg-[var(--thumb-green)]",
    Icon: EcotrackIcon,
  },
  {
    name: "AuraUI",
    category: "Component Library",
    thumbClassName: "bg-[var(--thumb-purple)]",
    Icon: AuraIcon,
  },
  {
    name: "Blazr API",
    category: "Backend Service",
    thumbClassName: "bg-[var(--thumb-amber)]",
    Icon: BlazrIcon,
  },
];

export const experiences: Experience[] = [
  {
    organization: "NFURA PRIVATE LIMITED",
    title: "Full Stack Developer Intern",
    description: "Engineered scalable frontend architectures and backend integrations - REST APIs, secure authentication, shared component systems across 3+ client projects within a 12-member agile team delivering solutions for 5+ startups and businesses. Refactored component libraries and shared utility layers, achieving a 40% increase in code reusability and reducing cross-project feature delivery timelines significantly. Contributed to product delivery that drove ₹20 lakh in team revenue within 3 months of operations.",
    period: "Jan 2025 - Aug 2025",
    location: "Remote",
    badges: ["React", "Node.js", "REST APIs", "TypeScript"],
    iconWrapClassName: "bg-white",
    iconClassName: "text-[var(--exp-icon-blue-fg)]",
    Icon: DesktopIcon,
    iconSrc: "/nfura_logo.jpeg",
  },
];

export const educationItems: Education[] = [
  {
    organization: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    degree: "B.Tech / Computer Science & Engineering (AIML)",
    description:
      "Developed strong foundations in algorithms, data structures, systems design, and software engineering principles through rigorous coursework and real-world projects.",
    period: "Nov 2021 - Jun 2025",
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    date: "March 2024",
  },
  {
    name: "Google Professional Cloud Developer",
    date: "November 2023",
  },
];

export const tools: Tool[] = [
  {
    name: "React",
    type: "Frontend Framework",
    iconWrapClassName: "bg-[var(--tool-react)]",
    Icon: ReactOrbIcon,
  },
  {
    name: "Node.js",
    type: "Backend Runtime",
    iconWrapClassName: "bg-[var(--tool-node)]",
    Icon: NodeHexIcon,
  },
  {
    name: "PostgreSQL",
    type: "Database",
    iconWrapClassName: "bg-[var(--tool-postgres)]",
    Icon: PostgresIcon,
  },
  {
    name: "AWS",
    type: "Cloud Platform",
    iconWrapClassName: "bg-[var(--tool-aws)]",
    Icon: AwsIcon,
  },
  {
    name: "TypeScript",
    type: "Language",
    iconWrapClassName: "bg-[var(--tool-ts)]",
    Icon: TypeScriptIcon,
  },
  {
    name: "Docker",
    type: "Containerisation",
    iconWrapClassName: "bg-[var(--tool-docker)]",
    Icon: DockerIcon,
  },
];

export const contacts: Contact[] = [
  {
    label: "E-mail",
    value: "thearyamann15151@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=thearyamann15151@gmail.com",
    Icon: MailIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "@thearyamann",
    href: "https://github.com/thearyamann",
    Icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "/in/aryamannchaudhary",
    href: "https://www.linkedin.com/in/aryamannchaudhary/",
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: "X / Twitter",
    value: "@Aryamann_",
    href: "https://x.com/Aryamann_",
    Icon: TwitterIcon,
    external: true,
  },
];
