interface Contribution {
  date: string;
  contributionCount: number;
  color: string;
}

interface Month {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount: number;
}

export interface Contributions {
  totalContributions?: number;
  weeks: {
    firstDay: string;
    contributionDays: Contribution[];
  }[];
  months: Month[];
  colors: string[];
}

export interface Repositories {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isFork: boolean;
  primaryLanguage: { name: string };
  stargazerCount: number;
  forkCount: number;
  url: string;
}

export interface DetailRepositories {
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
}
