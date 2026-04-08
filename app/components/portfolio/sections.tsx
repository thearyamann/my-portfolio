"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  certifications,
  contacts,
  educationItems,
  experiences,
  githubUsername,
  projects,
  tools,
} from "./data";
import {
  ArrowRightIcon,
  CalendarIcon,
  DownloadIcon,
  LocationIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from "./icons";

const cardClassName =
  "rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-[22px] transition-colors duration-300";
const innerClassName =
  "mb-[9px] rounded-[9px] border border-[var(--border)] bg-[var(--surface-2)] p-4 transition-colors duration-300 last:mb-0";

function Card({ children }: { children: ReactNode }) {
  return <section className={cardClassName}>{children}</section>;
}

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[18px] inline-flex items-center rounded-[7px] border border-[var(--border-2)] bg-[var(--surface-2)] px-[13px] py-[5px] text-xs font-medium tracking-[0.3px] text-[var(--tag-text)] transition-colors duration-300">
      {children}
    </div>
  );
}

function ArrowChip({ className = "text-[var(--arrow)]" }: { className?: string }) {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--chip-bg)] transition-colors duration-300">
      <ArrowRightIcon className={`h-[13px] w-[13px] ${className}`} />
    </div>
  );
}

function MetaItem({ icon, value }: { icon: ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-[5px] text-xs text-[var(--muted-2)] transition-colors duration-300">
      {icon}
      <span>{value}</span>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-[var(--badge-border)] bg-[var(--badge-bg)] px-[10px] py-1 font-mono text-[11px] text-[var(--badge-text)] transition-colors duration-300">
      {label}
    </span>
  );
}

type TopBarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function TopBar({ isDark, onToggleTheme }: TopBarProps) {
  return (
    <header className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-[10px] transition-colors duration-300">
      <div className="flex items-center gap-[7px] text-[13px] text-[var(--muted)] transition-colors duration-300">
        <LocationIcon className="h-3.5 w-3.5 text-[var(--icon-muted)]" />
        <span>Bangalore, India</span>
      </div>

      <div className="flex items-center gap-[7px] text-[13px] text-[var(--muted)] transition-colors duration-300">
        <span>Full-Stack Developer</span>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border-2)] bg-[var(--surface-2)] text-[var(--icon-muted)] transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
        >
          <SunIcon
            className={`absolute h-3.5 w-3.5 transition-all duration-300 ${
              isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            }`}
          />
          <MoonIcon
            className={`absolute h-3.5 w-3.5 transition-all duration-300 ${
              isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
            }`}
          />
        </button>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <Card>
      <div className="flex items-start gap-5 max-[500px]:flex-col">
        <div className="flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-[14px] border border-[var(--avatar-border)] bg-[var(--avatar-bg)] font-sans text-[28px] font-semibold tracking-[-1px] text-[#5b8df6] transition-colors duration-300">
          YN
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-[7px] text-xs text-[var(--muted)] transition-colors duration-300">
            <span className="h-[7px] w-[7px] rounded-full bg-[var(--online)]" aria-hidden="true" />
            <span>Available for Work</span>
          </div>

          <h1 className="mb-[3px] text-[27px] font-semibold tracking-[-0.5px] text-[var(--heading)] transition-colors duration-300">
            Your Name
          </h1>
          <p className="mb-4 text-[13px] text-[var(--muted)] transition-colors duration-300">
            Full-Stack Developer &middot; React &amp; Node.js
          </p>

          <div className="flex flex-wrap gap-[9px]">
            <a
              href="#"
              className="inline-flex items-center gap-[7px] rounded-[9px] border border-[var(--border-2)] bg-[var(--surface-2)] px-[18px] py-[9px] text-[13px] text-[var(--btn-text)] transition-colors duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
            >
              <DownloadIcon className="h-[15px] w-[15px] text-[var(--icon-soft)]" />
              <span>Download CV</span>
            </a>

            <a
              href="mailto:hello@yourname.dev"
              className="inline-flex items-center gap-[7px] rounded-[9px] border border-[var(--border-2)] bg-[var(--surface-2)] px-[18px] py-[9px] text-[13px] text-[var(--btn-text)] transition-colors duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
            >
              <MailIcon className="h-[15px] w-[15px] text-[var(--icon-soft)]" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function OverviewSection() {
  return (
    <Card>
      <SectionTag>Overview</SectionTag>
      <p className="text-[13.5px] leading-[1.8] text-[var(--muted)] transition-colors duration-300">
        Full-Stack Developer with a strong foundation in building scalable web applications and clean,
        maintainable systems. Experienced in taking products from early concept through production deployment,
        combining technical rigour with a pragmatic, delivery-focused mindset.
      </p>
      <p className="mt-3 text-[13.5px] leading-[1.8] text-[var(--muted)] transition-colors duration-300">
        I enjoy working across the entire stack - designing robust REST APIs and backend services to crafting
        performant, accessible user interfaces. I thrive in collaborative environments and love solving complex
        engineering challenges with elegant, well-considered solutions.
      </p>
    </Card>
  );
}

type GitHubActivitySectionProps = {
  isDark: boolean;
};

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionsApiResponse = {
  total?: Record<string, number>;
  contributions?: ContributionDay[];
};

type GridDay = {
  date: string;
  level: number;
  count: number;
  inYear: boolean;
};

const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const darkScale = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
const lightScale = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

function toISODateUTC(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function GitHubActivitySection({ isDark }: GitHubActivitySectionProps) {
  const year = 2026;
  const [days, setDays] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=${year}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Failed to load GitHub contributions");
        }

        const data = (await response.json()) as ContributionsApiResponse;
        const yearKey = String(year);
        setDays(data.contributions ?? []);
        setTotalContributions(Number(data.total?.[yearKey] ?? 0));
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadContributions();

    return () => controller.abort();
  }, [year]);

  const weeks = useMemo(() => {
    if (days.length === 0) return [] as GridDay[][];

    const levelMap = new Map(days.map((day) => [day.date, day.level]));
    const countMap = new Map(days.map((day) => [day.date, day.count]));

    const startOfYear = new Date(Date.UTC(year, 0, 1));
    const endOfYear = new Date(Date.UTC(year, 11, 31));
    const gridStart = new Date(startOfYear);
    const gridEnd = new Date(endOfYear);

    gridStart.setUTCDate(gridStart.getUTCDate() - gridStart.getUTCDay());
    gridEnd.setUTCDate(gridEnd.getUTCDate() + (6 - gridEnd.getUTCDay()));

    const allDays: GridDay[] = [];
    for (let cursor = new Date(gridStart); cursor <= gridEnd; cursor.setUTCDate(cursor.getUTCDate() + 1)) {
      const date = toISODateUTC(cursor);
      const inYear = cursor >= startOfYear && cursor <= endOfYear;
      allDays.push({
        date,
        level: inYear ? (levelMap.get(date) ?? 0) : 0,
        count: inYear ? (countMap.get(date) ?? 0) : 0,
        inYear,
      });
    }

    const groupedWeeks: GridDay[][] = [];
    for (let i = 0; i < allDays.length; i += 7) {
      groupedWeeks.push(allDays.slice(i, i + 7));
    }

    return groupedWeeks;
  }, [days, year]);

  const palette = isDark ? darkScale : lightScale;

  return (
    <Card>
      <SectionTag>GitHub Activity</SectionTag>

      <div
        className={`rounded-[10px] border p-4 transition-all duration-300 sm:p-6 ${
          isDark
            ? "border-[#1f2937] bg-[#000000]"
            : "border-[var(--border)] bg-[var(--surface-2)]"
        }`}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <p
            className={`text-xs font-semibold tracking-[0.16em] ${
              isDark ? "text-[#7d8590]" : "text-[var(--muted-2)]"
            }`}
          >
            GITHUB CONTRIBUTIONS
          </p>
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className={`text-xs underline underline-offset-4 ${
              isDark ? "text-[#7d8590] hover:text-[#c9d1d9]" : "text-[var(--muted)] hover:text-[var(--heading-2)]"
            }`}
          >
            @{githubUsername}
          </a>
        </div>
        {loading ? (
          <p className={`text-sm ${isDark ? "text-[#8b949e]" : "text-[var(--muted)]"}`}>
            Loading 2026 contributions...
          </p>
        ) : error ? (
          <p className="text-sm text-[#ef4444]">Could not load contributions right now.</p>
        ) : (
          <div
            className={`overflow-x-auto rounded-md border p-3 transition-colors duration-300 ${
              isDark ? "border-[#21262d] bg-[#000000]" : "border-[var(--border)] bg-white"
            }`}
          >
            <div className="min-w-[760px]">
              <div className={`mb-3 flex justify-between text-xs ${isDark ? "text-[#8b949e]" : "text-[var(--muted-2)]"}`}>
                {monthLabels.map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>

              <div className="flex gap-[3px]">
                {weeks.map((week, weekIndex) => (
                  <div key={`week-${weekIndex}`} className="flex flex-col gap-[3px]">
                    {week.map((day) => (
                      <span
                        key={day.date}
                        className="h-4 w-4 rounded-[3px]"
                        style={{
                          backgroundColor: day.inYear ? palette[day.level] : "transparent",
                        }}
                        title={
                          day.inYear
                            ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                            : ""
                        }
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className={`text-sm ${isDark ? "text-[#c9d1d9]" : "text-[var(--heading-2)]"}`}>
                  {totalContributions} contribution{totalContributions === 1 ? "" : "s"} in {year}
                </p>

                <div className="flex items-center gap-2">
                  <span className={`text-sm ${isDark ? "text-[#c9d1d9]" : "text-[var(--heading-2)]"}`}>Less</span>
                  <div className="flex gap-1">
                    {palette.map((color, index) => (
                      <span
                        key={`legend-${index}`}
                        className="h-4 w-4 rounded-[3px]"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className={`text-sm ${isDark ? "text-[#c9d1d9]" : "text-[var(--heading-2)]"}`}>More</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <Card>
      <SectionTag>Projects</SectionTag>
      <div className="grid grid-cols-1 gap-[10px] min-[500px]:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-[9px] border border-[var(--border)] bg-[var(--surface-2)] transition-colors duration-300 hover:border-[var(--border-2)]"
          >
            <div className={`flex h-[108px] items-center justify-center ${project.thumbClassName} transition-colors duration-300`}>
              <project.Icon className="h-11 w-11" aria-hidden="true" />
            </div>
            <div className="flex items-center justify-between px-[14px] py-[13px]">
              <div>
                <h3 className="mb-[2px] text-sm font-medium text-[var(--heading-2)] transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-xs text-[var(--muted-2)] transition-colors duration-300">{project.category}</p>
              </div>
              <ArrowChip />
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}

export function ExperienceSection() {
  return (
    <Card>
      <SectionTag>Experience</SectionTag>

      {experiences.map((experience) => (
        <div key={experience.title} className={innerClassName}>
          <div className="flex gap-[14px]">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] ${experience.iconWrapClassName} transition-colors duration-300`}
            >
              <experience.Icon className={`h-5 w-5 ${experience.iconClassName}`} aria-hidden="true" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-[2px] text-xs tracking-[0.2px] text-[var(--muted-2)] transition-colors duration-300">
                {experience.organization}
              </p>
              <h3 className="mb-[7px] text-[15px] font-medium text-[var(--heading-2)] transition-colors duration-300">
                {experience.title}
              </h3>
              <p className="mb-[11px] text-[13px] leading-[1.65] text-[var(--body)] transition-colors duration-300">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <MetaItem
                  icon={<CalendarIcon className="h-3 w-3 text-[var(--muted-2)]" aria-hidden="true" />}
                  value={experience.period}
                />
                <MetaItem
                  icon={<LocationIcon className="h-3 w-3 text-[var(--muted-2)]" aria-hidden="true" />}
                  value={experience.location}
                />
              </div>

              <div className="mt-[10px] flex flex-wrap gap-[7px]">
                {experience.badges.map((badge) => (
                  <Badge key={badge} label={badge} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
}

export function EducationSection() {
  return (
    <Card>
      <SectionTag>Education</SectionTag>

      {educationItems.map((item) => (
        <div key={item.degree} className={innerClassName}>
          <p className="mb-[3px] text-xs text-[var(--muted-2)] transition-colors duration-300">{item.organization}</p>
          <h3 className="mb-[7px] text-[15px] font-medium text-[var(--heading-2)] transition-colors duration-300">
            {item.degree}
          </h3>
          <p className="mb-[11px] text-[13px] leading-[1.65] text-[var(--body)] transition-colors duration-300">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <MetaItem
              icon={<CalendarIcon className="h-3 w-3 text-[var(--muted-2)]" aria-hidden="true" />}
              value={item.period}
            />
            <MetaItem
              icon={<LocationIcon className="h-3 w-3 text-[var(--muted-2)]" aria-hidden="true" />}
              value={item.location}
            />
          </div>
        </div>
      ))}
    </Card>
  );
}

export function CertificationsSection() {
  return (
    <Card>
      <SectionTag>Certifications</SectionTag>

      {certifications.map((certification) => (
        <article
          key={certification.name}
          className="mb-[9px] flex items-center justify-between rounded-[9px] border border-[var(--border)] bg-[var(--surface-2)] px-4 py-[14px] transition-colors duration-300 last:mb-0"
        >
          <div>
            <h3 className="mb-1 text-sm font-medium text-[var(--heading-2)] transition-colors duration-300">
              {certification.name}
            </h3>
            <div className="flex items-center gap-[5px] text-xs text-[var(--muted-2)] transition-colors duration-300">
              <CalendarIcon className="h-3 w-3" aria-hidden="true" />
              <span>{certification.date}</span>
            </div>
          </div>
          <ArrowChip />
        </article>
      ))}
    </Card>
  );
}

export function ToolsSection() {
  return (
    <Card>
      <SectionTag>Tools</SectionTag>

      <div className="grid grid-cols-1 gap-[9px] min-[500px]:grid-cols-2">
        {tools.map((tool) => (
          <article
            key={tool.name}
            className="flex items-center gap-3 rounded-[9px] border border-[var(--border)] bg-[var(--surface-2)] px-[14px] py-[13px] transition-colors duration-300 hover:border-[var(--border-2)]"
          >
            <div className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] ${tool.iconWrapClassName} transition-colors duration-300`}>
              <tool.Icon className="h-[22px] w-[22px]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="mb-[2px] text-sm font-medium text-[var(--heading-2)] transition-colors duration-300">
                {tool.name}
              </h3>
              <p className="text-xs text-[var(--muted-2)] transition-colors duration-300">{tool.type}</p>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}

export function ContactSection() {
  return (
    <Card>
      <SectionTag>Contact</SectionTag>

      {contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          className="mb-[9px] flex items-center justify-between rounded-[9px] border border-[var(--border)] bg-[var(--surface-2)] px-4 py-[14px] text-inherit no-underline transition-colors duration-300 hover:border-[var(--border-2)] last:mb-0"
          target={contact.external ? "_blank" : undefined}
          rel={contact.external ? "noreferrer" : undefined}
        >
          <div className="flex items-center gap-[9px] text-[13px] text-[var(--muted)] transition-colors duration-300">
            <contact.Icon className="h-[15px] w-[15px] text-[var(--contact-icon)]" aria-hidden="true" />
            <span>{contact.label}</span>
          </div>

          <span className="text-[13px] text-[var(--contact-value)] transition-colors duration-300">{contact.value}</span>

          <ArrowChip className="text-[var(--contact-icon)]" />
        </a>
      ))}

      <footer className="mt-4 text-center text-xs text-[var(--footer)] transition-colors duration-300">
        2026 &copy; Your Name &middot; Crafted with care
      </footer>
    </Card>
  );
}
