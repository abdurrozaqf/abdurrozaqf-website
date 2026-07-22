type TContribution = {
  date: string;
  contributionCount: number;
  color: string;
};

type TMonth = {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount?: number;
};

export type TContributions = {
  totalContributions?: number;
  weeks: {
    firstDay: string;
    contributionDays: TContribution[];
  }[];
  months: TMonth[];
  colors: string[];
};

export type TRepositories = {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  isFork: boolean;
  stargazerCount: number;
  forkCount: number;
  url: string;
  homepageUrl: string | null;
  primaryLanguage: { name: string } | null;
  repositoryTopics: {
    nodes: { topic: { name: string } }[];
  };
};

export type TDetailRepositories = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  url: string;
  collaborators_url: string;
  contributors_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  homepage: string;
  watchers_count: number;
  language: string;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    url: string;
    html_url: string;
  };
};

export type TResponseGithubOverview = {
  user: {
    followers: {
      totalCount: number;
    };
    repositories: {
      totalCount: number;
      nodes: TRepositories[];
    };
    pinnedItems: {
      totalCount: number;
      nodes: TRepositories[];
    };
  };
};
