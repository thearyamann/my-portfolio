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
  "rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-[22px] transition-colors duration-300 max-sm:p-4 max-sm:rounded-[16px]";
const innerClassName =
  "mb-[9px] rounded-[20px] border border-[var(--border)] bg-[var(--surface-2)] p-4 transition-colors duration-300 last:mb-0 max-sm:p-3";

function Card({ children }: { children: ReactNode }) {
  return <section className={cardClassName}>{children}</section>;
}

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[18px] inline-flex items-center rounded-[12px] border border-[var(--border-2)] bg-[var(--surface-2)] px-[13px] py-[5px] text-xs font-medium tracking-[0.3px] text-[var(--tag-text)] transition-colors duration-300">
      {children}
    </div>
  );
}

function ArrowChip({ className = "text-[var(--arrow)]" }: { className?: string }) {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl bg-[var(--chip-bg)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--border)]">
      <ArrowRightIcon className={`h-[13px] w-[13px] transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-80 ${className}`} />
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

function Badge({ label, isDark }: { label: string; isDark?: boolean }) {
  const badgeStyle = isDark === false 
    ? "bg-[#f5f5f5] border-[#e0e0e0] text-[#666]"
    : "bg-[var(--badge-bg)] border-[var(--badge-border)] text-[var(--badge-text)]";
  return (
    <span className={`rounded-xl border px-[10px] py-1 font-mono text-[11px] transition-colors duration-300 ${badgeStyle}`}>
      {label}
    </span>
  );
}

type TopBarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function TopBar({ isDark, onToggleTheme }: TopBarProps) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-[10px] transition-colors duration-300 max-sm:gap-3">
      <div className="flex items-center gap-[7px] text-[13px] text-[var(--muted)] transition-colors duration-300">
        <LocationIcon className="h-3.5 w-3.5 text-[var(--icon-muted)]" />
        <span>Noida, India</span>
      </div>

      <div className="flex items-center gap-[7px] text-[13px] text-[var(--muted)] transition-colors duration-300">
        <span className="max-sm:text-[11px]">{currentTime}</span>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="relative inline-flex h-7 w-7 items-center justify-center rounded-xl border border-[var(--border-2)] bg-[var(--surface-2)] text-[var(--icon-muted)] transition-all duration-300 hover:border-[var(--border-hover)] active:opacity-80"
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

export function HeroSection({ isDark }: { isDark: boolean }) {
  const btnHover = isDark ? "hover:bg-[#1B1B1B]" : "hover:bg-[#FAFAFA]";
  
  return (
    <Card>
      <div className="flex items-start gap-5 max-sm:flex-col max-sm:items-center max-sm:text-center">
        <div className="flex h-[150px] w-[150px] shrink-0 items-center justify-center rounded-[20px] border-0 overflow-hidden bg-[var(--avatar-bg)] transition-colors duration-300 max-sm:h-[120px] max-sm:w-[120px] max-sm:mx-auto">
          <img src="/my-image.jpg" alt="Profile" className="h-full w-full object-cover" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-[7px] text-xs text-[var(--muted)] transition-colors duration-300">
            <span className="h-[7px] w-[7px] rounded-full bg-[var(--online)]" aria-hidden="true" />
            <span>Available for Work</span>
          </div>

          <h1 className="mb-[3px] text-[27px] font-semibold tracking-[-0.5px] text-[var(--heading)] transition-colors duration-300">
            Aryamann Chaudhary
          </h1>
          <p className="mb-4 text-[13px] text-[var(--muted)] transition-colors duration-300">
            Full-Stack Developer &middot; React &amp; Node.js
          </p>

          <div className="flex flex-wrap gap-[9px]">
            <a
              href="#"
              className={`inline-flex items-center gap-[7px] rounded-[20px] border border-[var(--border-2)] bg-[var(--surface-2)] px-[18px] py-[9px] text-[13px] text-[var(--btn-text)] transition-all duration-300 hover:border-[var(--border-hover)] ${btnHover} active:opacity-80`}
            >
              <DownloadIcon className="h-[15px] w-[15px] text-[var(--icon-soft)]" />
              <span>Download CV</span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thearyamann15151@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-[7px] rounded-[20px] border border-[var(--border-2)] bg-[var(--surface-2)] px-[18px] py-[9px] text-[13px] text-[var(--btn-text)] transition-all duration-300 hover:border-[var(--border-hover)] ${btnHover} active:opacity-80`}
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
      <SectionTag>Things about me</SectionTag>
      <p className="text-[13.5px] leading-[1.8] text-[var(--muted)] transition-colors duration-300">
        Beyond the code and the commits, I find balance in the tactile and the thoughtful. Whether it&apos;s dissecting why a product feels right or spending time away from the screen at the gym, in a game, or just being present, my approach to everything is driven by curiosity and a desire to understand things at their core.
      </p>
      <p className="mt-3 text-[13.5px] leading-[1.8] text-[var(--muted)] transition-colors duration-300">
        I believe the best software is built by people who bring more than technical skill to the table. It&apos;s the intersection of depth and perspective, knowing when to go deep into a system and when to step back and see the whole picture that shapes products people actually want to use.
      </p>
      <p className="mt-3 text-[13.5px] leading-[1.8] text-[var(--muted)] transition-colors duration-300">
        I care about design as much as architecture. About the experience as much as the logic behind it.
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
  totalContributions?: number;
  totalText?: string;
  months?: string[];
  days?: ContributionDay[];
};

const defaultMonthLabels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
const darkScale = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
const lightScale = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

export function GitHubActivitySection({ isDark }: GitHubActivitySectionProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const [days, setDays] = useState<ContributionDay[]>([]);
  const [months, setMonths] = useState<string[]>(defaultMonthLabels);
  const [totalContributions, setTotalContributions] = useState(0);
  const [totalText, setTotalText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/github-contributions?username=${encodeURIComponent(githubUsername)}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load GitHub contributions");
        }

        const data = (await response.json()) as ContributionsApiResponse;
        const nextDays = data.days ?? [];
        setDays(nextDays);
        setMonths(data.months && data.months.length > 0 ? data.months : defaultMonthLabels);
        setTotalContributions(Number(data.totalContributions ?? 0));
        setTotalText(data.totalText ?? "");
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
  }, []);

  const weeks = useMemo(() => {
    if (days.length === 0) return [] as ContributionDay[][];

    const orderedDays = [...days]
      .filter((day) => day.date >= "2025-08-01")
      .sort((a, b) => a.date.localeCompare(b.date));

    const lastContributingIndex = [...orderedDays].reverse().findIndex((day) => day.count > 0);
    const trimmedDays = lastContributingIndex === -1 
      ? orderedDays 
      : orderedDays.slice(0, orderedDays.length - lastContributingIndex);

    const groupedWeeks: ContributionDay[][] = [];
    for (let i = 0; i < trimmedDays.length; i += 7) {
      groupedWeeks.push(trimmedDays.slice(i, i + 7));
    }

    return groupedWeeks;
  }, [days]);

  const filteredMonths = useMemo(() => {
    if (weeks.length === 0) return [];
    const monthSet = new Set<string>();
    weeks.forEach((week) => {
      week.forEach((day) => {
        if (day.date) {
          const [year, month] = day.date.split("-");
          const date = new Date(parseInt(year), parseInt(month) - 1);
          monthSet.add(date.toLocaleDateString("en-US", { month: "short" }));
        }
      });
    });
    return Array.from(monthSet);
  }, [weeks]);

  const palette = isDark ? darkScale : lightScale;

  return (
    <Card>
      <SectionTag>GitHub Activity</SectionTag>

        <div
        className={`rounded-[16px] p-4 transition-all duration-300 max-sm:p-3 ${
          isDark
            ? "bg-[#000000]"
            : "bg-[var(--surface-2)]"
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
        {!hydrated || loading ? (
          <div className="h-[120px] animate-pulse rounded-xl bg-[var(--surface-2)]" />
        ) : error ? (
          <p className="text-sm text-[#ef4444]">Could not load contributions right now.</p>
        ) : (
          <div
            suppressHydrationWarning
            className={`overflow-x-auto rounded-xl p-3 transition-colors duration-300 ${
              isDark ? "bg-[#000000]" : "bg-white"
            }`}
          >
            <div className="min-w-[760px]">
              <div className={`mb-3 flex justify-between text-xs ${isDark ? "text-[#8b949e]" : "text-[var(--muted-2)]"}`}>
                {filteredMonths.map((month, idx) => (
                  <span key={`${month}-${idx}`}>{month}</span>
                ))}
              </div>

              <div className="flex gap-[2px]">
                {weeks.map((week, weekIndex) => (
                  <div key={`week-${weekIndex}`} className="flex flex-col gap-[2px]">
                    {week.map((day) => (
                      <span
                        key={day.date}
                        className="h-3.5 w-3.5 rounded-[2px]"
                        style={{
                          backgroundColor: palette[Math.min(Math.max(day.level, 0), palette.length - 1)],
                        }}
                        title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className={`text-sm ${isDark ? "text-[#c9d1d9]" : "text-[var(--heading-2)]"}`}>
                  {totalText ||
                    `${totalContributions} contribution${totalContributions === 1 ? "" : "s"} in the last year`}
                </p>

                <div className="flex items-center gap-2">
                  <span className={`text-sm ${isDark ? "text-[#c9d1d9]" : "text-[var(--heading-2)]"}`}>Less</span>
                  <div className="flex gap-1">
                    {palette.map((color, index) => (
                      <span
                        key={`legend-${index}`}
                        className="h-3 w-3 rounded-[2px]"
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

export function ProjectsSection({ isDark }: { isDark: boolean }) {
  const iconBg = isDark ? "bg-[#101c36]" : "bg-[#e8f0ff]";
  const iconBg2 = isDark ? "bg-[#1a1000]" : "bg-[#fff3df]";
  const iconBg3 = isDark ? "bg-[#0d2018]" : "bg-[#e8f9ee]";
  const iconBg4 = isDark ? "bg-[#160c28]" : "bg-[#f1e9ff]";
  const badgeBg = isDark ? "bg-[#1e2030] border-[#2a2e48] text-[#6b82c4]" : "bg-[#e8f0ff] border-[#c7d5f5] text-[#4a6db8]";
  const badgeBg2 = isDark ? "bg-[#1a2818] border-[#2a4028] text-[#5ba06e]" : "bg-[#e8f9ee] border-[#b8e0c8] text-[#3d9460]";
  const badgeBg3 = isDark ? "bg-[#241e08] border-[#3a3010] text-[#c49a30]" : "bg-[#fff3df] border-[#e8d4a0] text-[#a67c20]";
  const techBg = isDark ? "bg-[#1a1a1e] border-[#2a2a30] text-[#666]" : "bg-[#f5f5f5] border-[#e0e0e0] text-[#666]";
  const liveBtn = isDark ? "bg-[#0e1a30] border-[#1a2e50] hover:bg-[#122040] hover:border-[#2a4068]" : "bg-[#e8f0ff] border-[#c7d5f5] hover:bg-[#d8e8ff] hover:border-[#a8c0f0]";
  const bulletLi = isDark ? "text-[var(--muted)]" : "text-[#666]";
  const bulletDot = isDark ? "before:bg-[#888]" : "before:bg-[#333]";

  return (
    <Card>
      <SectionTag>Projects</SectionTag>

      {/* Project 1 */}
      <div className="mb-[10px] rounded-[10px] border border-[var(--border)] bg-[var(--surface-2)] p-4 last:mb-0 max-sm:p-3">
        <div className="mb-[10px] flex flex-col gap-3 max-sm:items-start">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="mb-[6px] flex flex-wrap items-center gap-2">
                <div className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] ${iconBg}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5b8df6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[var(--heading-2)] max-sm:text-[13px]">Advance Control System — Industrial B2B Web Platform</span>
                <span className={`rounded-[5px] border px-[9px] py-1 font-mono text-[11px] ${badgeBg}`}>Freelance</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-[6px]">
                {["Next.js", "Supabase", "PostgreSQL", "Node.js", "Nodemailer", "Vercel"].map((tech) => (
                  <span key={tech} className={`rounded-[5px] border px-[9px] py-1 font-mono text-[11px] ${techBg}`}>{tech}</span>
                ))}
              </div>
            </div>
            <a href="#" className={`flex shrink-0 items-center gap-[5px] rounded-[7px] border px-[11px] py-[5px] text-[12px] font-medium text-[#5b8df6] transition-colors duration-200 ${liveBtn}`}>
              LIVE
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5b8df6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {[
            "Architected and deployed a production full-stack B2B platform for an industrial automation client — comprising a public-facing site, a password-protected admin dashboard, and a product catalogue with full CRUD, image upload, and live/draft status toggling powered by Supabase PostgreSQL.",
            "Engineered a dual lead-capture pipeline — Nodemailer SMTP for structured quote and enquiry emails + WhatsApp deep-link routing delivering inbound sales leads in real time and measurably increasing client conversions post-launch.",
            "Secured admin panel with cookie-based session auth, server-side password validation, and environment-scoped Supabase service-role keys isolating public and admin data access with zero-trust configuration deployed on Vercel."
          ].map((text, i) => (
            <li key={i} className={`relative pl-4 text-[13px] leading-[1.7] ${bulletLi} before:absolute before:left-0 before:top-[9px] before:h-[5px] before:w-[5px] before:rounded-full ${bulletDot}`}><span className="text-[var(--heading-2)] font-medium">{text.split("—")[0].trim()}</span>{text.includes("—") ? "—" + text.split("—")[1] : ""}</li>
          ))}
        </ul>
      </div>

      {/* Project 2 */}
      <div className="mb-[10px] rounded-[10px] border border-[var(--border)] bg-[var(--surface-2)] p-4 last:mb-0 max-sm:p-3">
        <div className="mb-[10px] flex flex-col gap-3 max-sm:items-start">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="mb-[6px] flex flex-wrap items-center gap-2">
                <div className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] ${iconBg2}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8a23a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[var(--heading-2)] max-sm:text-[13px]">UVGuard — UV Index &amp; Skincare Tracking Mobile App</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-[6px]">
                {["Flutter", "Dart", "iOS & Android", "Workmanager", "home_widget", "Geolocator", "Weather API"].map((tech) => (
                  <span key={tech} className={`rounded-[5px] border px-[9px] py-1 font-mono text-[11px] ${techBg}`}>{tech}</span>
                ))}
              </div>
            </div>
            <a href="#" className={`flex shrink-0 items-center gap-[5px] rounded-[7px] border px-[11px] py-[5px] text-[12px] font-medium text-[#5b8df6] transition-colors duration-200 ${liveBtn}`}>
              LIVE
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5b8df6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {[
            "Designed and built a cross-platform iOS & Android Flutter app delivering real-time UV index monitoring, Fitzpatrick skin-type profiling across 6 phototypes, SPF recommendations, and personalised sunscreen reapplication timers calibrated to AAD clinical guidelines.",
            "Engineered a UVRiskEngine and SunscreenEngine to classify UV exposure levels and dynamically calculate burn time and sunscreen reapplication intervals based on skin type and environmental conditions.",
            "Implemented background UV refresh with Workmanager, native iOS Home Screen Widget via home_widget, GPS geolocation, reverse geocoding, Weather API integration, and scheduled local push notifications."
          ].map((text, i) => (
            <li key={i} className={`relative pl-4 text-[13px] leading-[1.7] ${bulletLi} before:absolute before:left-0 before:top-[9px] before:h-[5px] before:w-[5px] before:rounded-full ${bulletDot}`}><span className="text-[var(--heading-2)] font-medium">{text.split("—")[0].trim()}</span>{text.includes("—") ? "—" + text.split("—")[1] : ""}</li>
          ))}
        </ul>
      </div>

      {/* Project 3 */}
      <div className="mb-[10px] rounded-[10px] border border-[var(--border)] bg-[var(--surface-2)] p-4 last:mb-0 max-sm:p-3">
        <div className="mb-[10px] flex flex-col gap-3 max-sm:items-start">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="mb-[6px] flex flex-wrap items-center gap-2">
                <div className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] ${iconBg3}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3bba75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[var(--heading-2)] max-sm:text-[13px]">GUIDO — Travel Platform</span>
                <span className={`rounded-[5px] border px-[9px] py-1 font-mono text-[11px] ${badgeBg2}`}>UP Government Granted</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-[6px]">
                {["React.js", "Node.js", "Express.js", "REST APIs", "JWT Auth"].map((tech) => (
                  <span key={tech} className={`rounded-[5px] border px-[9px] py-1 font-mono text-[11px] ${techBg}`}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {[
            "Engineered the backend authentication system (JWT + role-based access control) and built frontend UI components for a travel platform serving 1,000+ daily active users; the project secured competitive funding from the Uttar Pradesh Government.",
            "Integrated RESTful API endpoints for itinerary generation and user management, implementing session handling and secure auth flows across user-facing and admin surfaces."
          ].map((text, i) => (
            <li key={i} className={`relative pl-4 text-[13px] leading-[1.7] ${bulletLi} before:absolute before:left-0 before:top-[9px] before:h-[5px] before:w-[5px] before:rounded-full ${bulletDot}`}><span className="text-[var(--heading-2)] font-medium">{text.split("—")[0].trim()}</span>{text.includes("—") ? "—" + text.split("—")[1] : ""}</li>
          ))}
        </ul>
      </div>

      {/* Project 4 */}
      <div className="mb-[10px] rounded-[10px] border border-[var(--border)] bg-[var(--surface-2)] p-4 last:mb-0 max-sm:p-3">
        <div className="mb-[10px] flex flex-col gap-3 max-sm:items-start">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="mb-[6px] flex flex-wrap items-center gap-2">
                <div className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] ${iconBg4}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b72f8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[var(--heading-2)] max-sm:text-[13px]">Vesly — Smart Hydration System</span>
                <span className={`rounded-[5px] border px-[9px] py-1 font-mono text-[11px] ${badgeBg3}`}>SIH 2023 National Finalist</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-[6px]">
                {["Flutter", "IoT", "UV-C Purification", "Sensor Integration", "Mobile Analytics"].map((tech) => (
                  <span key={tech} className={`rounded-[5px] border px-[9px] py-1 font-mono text-[11px] ${techBg}`}>{tech}</span>
                ))}
              </div>
            </div>
            <a href="#" className={`flex shrink-0 items-center gap-[5px] rounded-[7px] border px-[11px] py-[5px] text-[12px] font-medium text-[#5b8df6] transition-colors duration-200 ${liveBtn}`}>
              LIVE
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5b8df6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {[
            "Developed an IoT-based smart water bottle with UV-C purification and real-time hydration tracking sensors, transmitting usage telemetry to a mobile application via a hardware-software interface layer.",
            "Built the companion Flutter mobile app featuring a hydration analytics dashboard, personalised reminder scheduling, and user health insights.",
            "Selected as a national finalist at Smart India Hackathon 2023 — ranked among the top teams from over 50,000+ submissions across 44,000 teams nationwide."
          ].map((text, i) => (
            <li key={i} className={`relative pl-4 text-[13px] leading-[1.7] ${bulletLi} before:absolute before:left-0 before:top-[9px] before:h-[5px] before:w-[5px] before:rounded-full ${bulletDot}`}><span className="text-[var(--heading-2)] font-medium">{text.split("—")[0].trim()}</span>{text.includes("—") ? "—" + text.split("—")[1] : ""}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export function ExperienceSection({ isDark }: { isDark: boolean }) {
  return (
    <Card>
      <SectionTag>Experience</SectionTag>

      {experiences.map((experience) => (
        <div key={experience.title} className={`${innerClassName} max-sm:p-3`}>
          <div className="flex gap-[14px] max-sm:gap-3">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] overflow-hidden ${experience.iconWrapClassName} transition-colors duration-300 max-sm:h-10 max-sm:w-10`}
            >
              {"iconSrc" in experience ? (
                <img src={experience.iconSrc} alt="" className="h-full w-full object-contain scale-125" />
              ) : (
                <experience.Icon className={`h-5 w-5 ${experience.iconClassName}`} aria-hidden="true" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-[2px] text-xs tracking-[0.2px] text-[var(--muted-2)] transition-colors duration-300 max-sm:text-[11px]">
                {experience.organization}
              </p>
              <h3 className="mb-[7px] text-[15px] font-medium text-[var(--heading-2)] transition-colors duration-300 max-sm:text-[13px]">
                {experience.title}
              </h3>

              <ul className="mb-[11px] flex flex-col gap-2">
                {experience.description.split(".").filter(s => s.trim()).map((point, i) => (
                  <li key={i} className="relative pl-4 text-[13px] leading-[1.65] text-[var(--body)] transition-colors duration-300 before:absolute before:left-0 before:top-[8px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#333] max-sm:text-[12px] max-sm:leading-5">
                    {point.trim()}.
                  </li>
                ))}
              </ul>

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
                  <Badge key={badge} label={badge} isDark={isDark} />
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
        <div key={item.degree} className={`${innerClassName} max-sm:p-3`}>
          <p className="mb-[3px] text-xs text-[var(--muted-2)] transition-colors duration-300 max-sm:text-[11px]">{item.organization}</p>
          <h3 className="mb-[7px] text-[15px] font-medium text-[var(--heading-2)] transition-colors duration-300 max-sm:text-[13px]">
            {item.degree}
          </h3>
          <p className="mb-[11px] text-[13px] leading-[1.65] text-[var(--body)] transition-colors duration-300 max-sm:text-[12px] max-sm:leading-5">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <MetaItem
              icon={<CalendarIcon className="h-3 w-3 text-[var(--muted-2)]" aria-hidden="true" />}
              value={item.period}
            />
            {item.location && (
              <MetaItem
                icon={<LocationIcon className="h-3 w-3 text-[var(--muted-2)]" aria-hidden="true" />}
                value={item.location}
              />
            )}
          </div>
        </div>
      ))}
    </Card>
  );
}

export function CertificationsSection() {
  return (
    <Card>
      <SectionTag>My Fav Quote</SectionTag>
      <blockquote className="text-[13.5px] leading-[1.8] text-[var(--muted)] transition-colors duration-300 italic">
        "The world is full of people suffering from the effects of their own unlived life. They become bitter, critical, or rigid, not because the world is cruel to them, but because they have betrayed their own inner possibilities. The artist who never makes art becomes cynical about those who do. The lover who never risks loving mocks romance. The thinker who never commits to a philosophy sneers at belief itself. And yet, all of them suffer, because deep down they know: the life they mock is the life they were meant to live."
      </blockquote>
    </Card>
  );
}

export function SkillsSection({ isDark }: { isDark: boolean }) {
  const techBadge = isDark ? "bg-[#1a1a1e] border-[#2a2a30] text-[#888]" : "bg-[#f5f5f5] border-[#e0e0e0] text-[#666]";
  
  const skills = [
    {
      category: "Language",
      items: ["JavaScript (ES6+)", "Dart", "Java", "Python", "SQL"],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#5b8df6" : "#3b6fd4"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      bgColor: isDark ? "bg-[#0e1a30]" : "bg-[#e8f0ff]",
    },
    {
      category: "Frontend",
      items: ["Next.js", "React.js", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "HTML5", "CSS3"],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#4ecdc4" : "#2a9d94"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      bgColor: isDark ? "bg-[#0f1e20]" : "bg-[#e0f5f4]",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST API Design", "JWT Auth", "Cookie-based Auth", "Nodemailer (SMTP)", "Server Actions"],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#b07ef8" : "#8b5cc4"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      bgColor: isDark ? "bg-[#1a1020]" : "bg-[#f0e8ff]",
    },
    {
      category: "Mobile",
      items: ["Flutter", "Dart", "iOS & Android", "Workmanager", "Push Notifications", "Home Screen Widgets"],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#e8a23a" : "#c48a20"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      bgColor: isDark ? "bg-[#1e1500]" : "bg-[#fff3df]",
    },
    {
      category: "Databases",
      items: ["Supabase (PostgreSQL)", "MongoDB", "Redis", "Real-time CRUD", "Row Level Security", "Admin SDK"],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#3bba75" : "#2a9048"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <line x1="12" y1="8" x2="12" y2="22"/>
        </svg>
      ),
      bgColor: isDark ? "bg-[#0d2018]" : "bg-[#e8f9ee]",
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "Vercel", "Railway", "DSA", "OOP", "Agile/Scrum", "Figma"],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#888" : "#555"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      bgColor: isDark ? "bg-[#1a1a1e]" : "bg-[#f5f5f5]",
    },
  ];

  return (
    <Card>
      <SectionTag>Skills</SectionTag>
      <div className="grid grid-cols-1 gap-[9px]">
        {skills.map((skill) => (
          <div key={skill.category} className="rounded-[10px] border border-[var(--border)] bg-[var(--surface-2)] p-[15px] transition-colors duration-200 hover:border-[var(--border-2)]">
            <div className="flex gap-3 items-start">
              <div className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] mt-[1px] ${skill.bgColor}`}>
                {skill.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="mb-2 text-[12px] font-medium tracking-wide text-[var(--muted-2)]">{skill.category}</div>
                <div className="flex flex-wrap gap-[6px]">
                  {skill.items.map((item) => (
                    <span key={item} className={`rounded-[6px] border px-[10px] py-1 font-mono text-[11px] ${techBadge}`}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ContactSection({ isDark }: { isDark: boolean }) {
  const contactHover = isDark ? "hover:bg-[#1B1B1B]" : "hover:bg-[#FAFAFA]";
  
  return (
    <Card>
      <SectionTag>Contact</SectionTag>

      {contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          className={`mb-[9px] flex items-center justify-between rounded-[20px] border border-[var(--border)] bg-[var(--surface-2)] px-4 py-[14px] text-inherit no-underline transition-all duration-300 hover:border-[var(--border-2)] ${contactHover} active:opacity-80 group last:mb-0 max-sm:py-3 max-sm:px-3`}
          target={contact.external ? "_blank" : undefined}
          rel={contact.external ? "noreferrer" : undefined}
        >
          <div className="flex items-center gap-[9px] text-[13px] text-[var(--muted)] transition-colors duration-300">
            <contact.Icon className="h-[15px] w-[15px] text-[var(--contact-icon)]" aria-hidden="true" />
            <span className="max-sm:text-[12px]">{contact.label}</span>
          </div>

          <span className="text-[13px] text-[var(--contact-value)] transition-colors duration-300 max-sm:text-[11px] max-sm:truncate max-sm:max-w-[120px]">{contact.value}</span>

          <ArrowChip className="text-[var(--contact-icon)]" />
        </a>
      ))}

      <footer className="mt-4 text-center text-xs text-[var(--footer)] transition-colors duration-300">
        2026 &copy; Aryamann Chaudhary &middot; Crafted with care
      </footer>
    </Card>
  );
}
