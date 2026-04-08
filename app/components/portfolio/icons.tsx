import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function LocationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function DesktopIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export function CodeArrowsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

export function DevflowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" fill="#5b8df6" fillOpacity="0.9" />
      <rect x="24" y="4" width="16" height="16" rx="4" fill="#5b8df6" fillOpacity="0.45" />
      <rect x="4" y="24" width="16" height="16" rx="4" fill="#5b8df6" fillOpacity="0.45" />
      <rect x="24" y="24" width="16" height="16" rx="4" fill="#5b8df6" fillOpacity="0.2" />
    </svg>
  );
}

export function EcotrackIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...props}>
      <path d="M22 5L38 14.5V29.5L22 39L6 29.5V14.5Z" stroke="#3bba75" strokeWidth="1.4" />
      <path d="M22 13L30 18V26L22 31L14 26V18Z" fill="#3bba75" fillOpacity="0.25" />
      <circle cx="22" cy="22" r="4" fill="#3bba75" />
    </svg>
  );
}

export function AuraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...props}>
      <circle cx="22" cy="22" r="16" stroke="#9b72f8" strokeWidth="1.4" />
      <circle cx="22" cy="22" r="9" fill="#9b72f8" fillOpacity="0.2" />
      <circle cx="22" cy="22" r="4" fill="#9b72f8" />
      <circle cx="22" cy="6" r="2.2" fill="#9b72f8" fillOpacity="0.55" />
      <circle cx="22" cy="38" r="2.2" fill="#9b72f8" fillOpacity="0.55" />
      <circle cx="6" cy="22" r="2.2" fill="#9b72f8" fillOpacity="0.55" />
      <circle cx="38" cy="22" r="2.2" fill="#9b72f8" fillOpacity="0.55" />
    </svg>
  );
}

export function BlazrIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...props}>
      <rect x="9" y="18" width="26" height="17" rx="3.5" stroke="#e8a23a" strokeWidth="1.4" />
      <path d="M15 18V14C15 10.7 18.1 8 22 8C25.9 8 29 10.7 29 14V18" stroke="#e8a23a" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="22" cy="26.5" r="3" fill="#e8a23a" fillOpacity="0.8" />
    </svg>
  );
}

export function ReactOrbIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...props}>
      <ellipse cx="22" cy="22" rx="20" ry="8" stroke="#5b8df6" strokeWidth="1.5" />
      <ellipse cx="22" cy="22" rx="20" ry="8" stroke="#5b8df6" strokeWidth="1.5" transform="rotate(60 22 22)" />
      <ellipse cx="22" cy="22" rx="20" ry="8" stroke="#5b8df6" strokeWidth="1.5" transform="rotate(120 22 22)" />
      <circle cx="22" cy="22" r="3.5" fill="#5b8df6" />
    </svg>
  );
}

export function NodeHexIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...props}>
      <path d="M22 4L40 14V30L22 40L4 30V14Z" stroke="#3bba75" strokeWidth="1.5" />
      <text x="13" y="27" fontSize="13" fontWeight="700" fill="#3bba75" fontFamily="monospace">
        JS
      </text>
    </svg>
  );
}

export function PostgresIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...props}>
      <ellipse cx="22" cy="13" rx="14" ry="6" stroke="#5b8df6" strokeWidth="1.5" />
      <path d="M8 13L8 31C8 34.3 14.3 37 22 37C29.7 37 36 34.3 36 31L36 13" stroke="#5b8df6" strokeWidth="1.5" />
      <path d="M8 22C8 25.3 14.3 28 22 28C29.7 28 36 25.3 36 22" stroke="#5b8df6" strokeWidth="1.5" />
    </svg>
  );
}

export function AwsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...props}>
      <path d="M10 30 Q15 36 22 36 Q29 36 34 30" stroke="#e8a23a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 30L38 27M34 30L37 34" stroke="#e8a23a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 22C13 15.4 17 11 22 11C27 11 30.5 14.4 31 19C34.5 19.6 37 22.2 37 25.5C37 28.8 34.5 31 31 31L13 31C9.5 31 7 28.5 7 25.5C7 22 9.5 20 13 22Z" stroke="#e8a23a" strokeWidth="1.5" />
    </svg>
  );
}

export function TypeScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...props}>
      <rect x="6" y="6" width="32" height="32" rx="5" stroke="#4ecdc4" strokeWidth="1.5" />
      <text x="10" y="27" fontSize="13" fontWeight="700" fill="#4ecdc4" fontFamily="monospace">
        TS
      </text>
    </svg>
  );
}

export function DockerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...props}>
      <rect x="6" y="6" width="32" height="32" rx="7" stroke="#b07ef8" strokeWidth="1.5" />
      <rect x="14" y="14" width="16" height="16" rx="3" fill="#b07ef8" fillOpacity="0.25" />
      <rect x="18" y="18" width="8" height="8" rx="1.5" fill="#b07ef8" />
    </svg>
  );
}
