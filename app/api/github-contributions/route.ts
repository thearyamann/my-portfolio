import { NextRequest, NextResponse } from "next/server";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type GitHubContributionsPayload = {
  totalContributions: number;
  totalText: string;
  months: string[];
  days: ContributionDay[];
  from: string;
  to: string;
};

const USERNAME_REGEX = /^[a-z\d](?:[a-z\d-]{0,38})$/i;

function getLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
}

const CONTRIBUTIONS_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          months {
            name
            firstDay
          }
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

async function fetchContributionsFromGitHub(username: string, token: string) {
  const to = new Date();
  const from = new Date();
  from.setFullYear(from.getFullYear() - 1);

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "User-Agent": "my-portfolio-github-contributions",
    },
    body: JSON.stringify({
      query: CONTRIBUTIONS_QUERY,
      variables: {
        username,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API failed with status ${response.status}`);
  }

  return response.json();
}

function parseGitHubResponse(data: { data?: { user?: { contributionsCollection?: { contributionCalendar?: { totalContributions: number; months: { name: string; firstDay: string }[]; weeks: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }[] } } } }; errors?: { message: string }[] }): GitHubContributionsPayload {
  if (data.errors && data.errors.length > 0) {
    throw new Error(data.errors[0].message);
  }

  const calendar = data.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    throw new Error("Could not parse contributions from GitHub response");
  }

  const days: ContributionDay[] = [];
  const monthSet = new Set<string>();

  for (const week of calendar.weeks) {
    for (const day of week.contributionDays) {
      days.push({
        date: day.date,
        count: day.contributionCount,
        level: getLevel(day.contributionCount),
      });

      const monthName = day.date.substring(0, 7);
      monthSet.add(monthName);
    }
  }

  const months = Array.from(monthSet)
    .sort()
    .map((monthStr) => {
      const [year, month] = monthStr.split("-");
      const date = new Date(parseInt(year), parseInt(month) - 1);
      return date.toLocaleDateString("en-US", { month: "short" });
    });

  const from = days.length > 0 ? days[0].date : "";
  const to = days.length > 0 ? days[days.length - 1].date : "";

  return {
    totalContributions: calendar.totalContributions,
    totalText: `${calendar.totalContributions.toLocaleString()} contributions in the last year`,
    months,
    days: days.sort((a, b) => a.date.localeCompare(b.date)),
    from,
    to,
  };
}

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username")?.trim() ?? "";

  if (!USERNAME_REGEX.test(username)) {
    return NextResponse.json(
      { error: "Invalid GitHub username. Pass ?username=<github-handle>." },
      { status: 400 }
    );
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "GitHub token not configured. Set GITHUB_TOKEN environment variable." },
      { status: 500 }
    );
  }

  try {
    const data = await fetchContributionsFromGitHub(username, token);
    const payload = parseGitHubResponse(data);

    return NextResponse.json(payload);
  } catch (err) {
    console.error("GitHub contributions error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch GitHub contributions" },
      { status: 502 }
    );
  }
}
