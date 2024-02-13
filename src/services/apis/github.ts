import {
  GITHUB_ACCOUNTS,
  GITHUB_USER_QUERY,
  GITHUB_REPOS_QUERY,
  GITHUB_API_BASE_URL,
} from "@/common/constant/github";

import {
  Repositories,
  Contributions,
  DetailRepositories,
} from "@/common/types/response";
import axiosWithConfig from "@/services/apis/axiosWithConfig";

export async function getGithubData() {
  const response = await axiosWithConfig.post(GITHUB_API_BASE_URL, {
    query: GITHUB_USER_QUERY,
    variables: {
      username: GITHUB_ACCOUNTS.username,
    },
  });

  return response.data?.data.user.contributionsCollection
    .contributionCalendar as Contributions;
}

export async function getRepositories() {
  const reposToHide = [
    "hi-SPEC",
    "cloudbite",
    "byek-movies",
    "pokedex-app",
    "sinau-apps",
  ];

  const response = await axiosWithConfig.post(GITHUB_API_BASE_URL, {
    query: GITHUB_REPOS_QUERY,
    variables: {
      username: GITHUB_ACCOUNTS.username,
    },
  });

  const result = response.data?.data.user.repositories.nodes.filter(
    (item: any) => reposToHide.includes(item.name)
  );

  return result as Repositories[];
}

export async function getDetailRepo(repo: string) {
  const response = await axiosWithConfig.get(`/repos/abdurrozaqf/${repo}`);

  return response.data as DetailRepositories;
}
