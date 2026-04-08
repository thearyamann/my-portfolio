"use client";

import { type CSSProperties, useMemo, useState } from "react";
import {
  CertificationsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  GitHubActivitySection,
  HeroSection,
  OverviewSection,
  ProjectsSection,
  ToolsSection,
  TopBar,
} from "./sections";

const lightTheme: Record<string, string> = {
  "--bg": "#F0F0F0",
  "--text": "#111827",
  "--surface": "#ffffff",
  "--surface-2": "#FFFFFF",
  "--surface-hover": "#edf2fb",
  "--border": "#e3e8f0",
  "--border-2": "#d4dde8",
  "--border-hover": "#b8c5d6",
  "--tag-text": "#64748b",
  "--arrow": "#64748b",
  "--chip-bg": "#e3e8f0",
  "--muted": "#5f6b7b",
  "--muted-2": "#7b8599",
  "--heading": "#0f172a",
  "--heading-2": "#1f2937",
  "--body": "#64748b",
  "--btn-text": "#2d3648",
  "--icon-muted": "#64748b",
  "--icon-soft": "#667085",
  "--badge-bg": "#eef3fa",
  "--badge-border": "#dbe2ec",
  "--badge-text": "#667085",
  "--contact-icon": "#6b7280",
  "--contact-value": "#6b7280",
  "--footer": "#7b8599",
  "--avatar-bg": "#e9f0ff",
  "--avatar-border": "#c7d5f5",
  "--online": "#16a34a",
  "--thumb-blue": "#e8f0ff",
  "--thumb-green": "#e8f9ee",
  "--thumb-purple": "#f1e9ff",
  "--thumb-amber": "#fff3df",
  "--exp-icon-blue": "#e8efff",
  "--exp-icon-blue-fg": "#5b8df6",
  "--exp-icon-slate": "#eef0f5",
  "--exp-icon-slate-fg": "#6b7280",
  "--exp-icon-yellow": "#fff3de",
  "--exp-icon-yellow-fg": "#d2932d",
  "--tool-react": "#e8efff",
  "--tool-node": "#e8f9ee",
  "--tool-postgres": "#e7f1ff",
  "--tool-aws": "#fff4df",
  "--tool-ts": "#e8fbfb",
  "--tool-docker": "#f1ecff",
};

const darkTheme: Record<string, string> = {
  "--bg": "#0c0c0d",
  "--text": "#f0f0f0",
  "--surface": "#141415",
  "--surface-2": "#1a1a1c",
  "--surface-hover": "#222226",
  "--border": "#242426",
  "--border-2": "#2e2e32",
  "--border-hover": "#3e3e44",
  "--tag-text": "#999999",
  "--arrow": "#666666",
  "--chip-bg": "#242426",
  "--muted": "#888890",
  "--muted-2": "#46464e",
  "--heading": "#ffffff",
  "--heading-2": "#e0e0e0",
  "--body": "#666666",
  "--btn-text": "#cccccc",
  "--icon-muted": "#666666",
  "--icon-soft": "#888888",
  "--badge-bg": "#1a1a1e",
  "--badge-border": "#2a2a30",
  "--badge-text": "#777777",
  "--contact-icon": "#555555",
  "--contact-value": "#aaaaaa",
  "--footer": "#46464e",
  "--avatar-bg": "#101c36",
  "--avatar-border": "#1e3260",
  "--online": "#22c55e",
  "--thumb-blue": "#0b1b38",
  "--thumb-green": "#0b2015",
  "--thumb-purple": "#160c2c",
  "--thumb-amber": "#241500",
  "--exp-icon-blue": "#0f1e3c",
  "--exp-icon-blue-fg": "#5b8df6",
  "--exp-icon-slate": "#1a1a22",
  "--exp-icon-slate-fg": "#888888",
  "--exp-icon-yellow": "#1e1500",
  "--exp-icon-yellow-fg": "#e8b04b",
  "--tool-react": "#0e1d38",
  "--tool-node": "#0c2014",
  "--tool-postgres": "#0c1c34",
  "--tool-aws": "#201400",
  "--tool-ts": "#0d1e20",
  "--tool-docker": "#121022",
};

export function PortfolioPage() {
  const [isDark, setIsDark] = useState(false);

  const themeVars = useMemo(() => {
    return (isDark ? darkTheme : lightTheme) as CSSProperties;
  }, [isDark]);

  return (
    <main
      style={themeVars}
      className="min-h-screen bg-[var(--bg)] px-4 py-5 text-[var(--text)] transition-colors duration-500 sm:px-6 sm:pb-12"
    >
      <div className="mx-auto flex w-full max-w-[680px] flex-col gap-[10px]">
        <TopBar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
        <HeroSection />
        <OverviewSection />
        <ProjectsSection />
        <GitHubActivitySection isDark={isDark} />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ToolsSection />
        <ContactSection />
      </div>
    </main>
  );
}
