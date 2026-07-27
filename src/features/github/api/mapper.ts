import type {
  TContributions,
  TRepositories,
  TResponseGithubOverview,
} from "../types/github";

const EXCLUDED_REPOS = [
  "frontend-technical-test",
  "abdurrozaqf",
  "no-ones",
  "BE-no-ones",
];

export type TMappedGithubOverview = {
  stats: {
    repositories: number;
    stars: number;
    forks: number;
    latestRepo: TRepositories;
    lastUpdated: string;
  };
  repositories: TRepositories[];
  pinnedRepositories: TRepositories[];
};

export function mapGithubOverview({
  user,
}: TResponseGithubOverview): TMappedGithubOverview {
  const overview = user;
  const pinnedRepos = overview.pinnedItems.nodes;
  const repos = overview.repositories.nodes.filter(
    (repo) => !EXCLUDED_REPOS.includes(repo.name)
  );

  const latestRepo = repos.toSorted(
    (a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime()
  )[0];

  return {
    stats: {
      repositories: overview.repositories.totalCount,
      stars: repos.reduce((total, repo) => total + repo.stargazerCount, 0),
      forks: repos.reduce((total, repo) => total + repo.forkCount, 0),
      latestRepo,
      lastUpdated: latestRepo?.pushedAt,
    },

    repositories: repos,

    pinnedRepositories: pinnedRepos,
  };
}

export function mapGithubContributions(
  contributions: TContributions
): TContributions {
  return {
    totalContributions: contributions.totalContributions,
    weeks: contributions.weeks,
    months: contributions.months,
    colors: contributions.colors,
  };
}
