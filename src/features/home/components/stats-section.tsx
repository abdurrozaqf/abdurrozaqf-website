import { Container, ContainerContent } from "@/components/elements/container";
import type { TContributions, TRepositories } from "@/features/github";
import ContributionCalendar from "@/features/github/components/contributions-calendar";
import PinnedRepositories from "@/features/github/components/pinned-repositories";
import { formatDate } from "@/utils/formatter";
import { cn } from "@/libs/utils";

interface TStats {
  repositories: number;
  stars: number;
  forks: number;
  latestRepo: TRepositories;
  lastUpdated?: string;
}

interface Props {
  contributions: TContributions | null;
  pinned_repositories: TRepositories[] | undefined;
  stats: TStats;
}

export default function StatsSection({
  contributions,
  pinned_repositories,
  stats,
}: Props) {
  const stats_list = [
    {
      label: "Repositories",
      value: stats.repositories?.toLocaleString(),
    },
    {
      label: "Contributions",
      value: contributions?.totalContributions?.toLocaleString(),
    },
    {
      label: "Stars",
      value: stats.stars?.toLocaleString(),
    },
    {
      label: "Forks",
      value: stats.forks?.toLocaleString(),
    },
    {
      label: "Last Updated",
      value: formatDate(stats.lastUpdated as string),
    },
    {
      label: "Latest Repo",
      value: stats.latestRepo?.name,
    },
  ];

  return (
    <Container className="cv-auto">
      <ContainerContent className="grid grid-cols-1 col-span-4 divide-y md:divide-x md:divide-y-0 md:grid-cols-4 border-x">
        <div className="col-span-1 p-6 md:p-12">
          <span className="block mb-8 modular-label">[ 08 // STATS ]</span>
          <h3 className="mb-12 text-3xl leading-none uppercase font-heading">
            System Activity
          </h3>

          <div className="space-y-8">
            {stats_list.map((stat) => (
              <div
                key={stat.label}
                className="flex justify-between mb-2 font-mono text-xs uppercase"
              >
                <span>{stat.label}</span>
                <span
                  className={cn(
                    stat.label === "Last Updated" ||
                      stat.label === "Latest Repo"
                      ? "tracking-tighter text-muted-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full col-span-1 gap-8 py-6 md:col-span-3 md:py-12">
          <div className="flex items-start justify-between px-6 md:px-12">
            <span className="modular-label">[ 09 // CONTRIBUTIONS ]</span>
          </div>

          <h3 className="px-6 text-3xl leading-none uppercase font-heading md:px-12">
            Contributions Calendar
          </h3>

          <div className="px-6 md:px-12">
            <ContributionCalendar data={contributions as TContributions} />
          </div>

          <hr />
          <h3 className="px-6 text-3xl leading-none uppercase font-heading md:px-12">
            Pinned Repositories
          </h3>

          <div className="px-6 md:px-12">
            <PinnedRepositories
              repositories={pinned_repositories as TRepositories[]}
            />
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
}
