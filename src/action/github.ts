import {
  GITHUB_ACCOUNTS,
  GITHUB_API_BASE_URL,
  GITHUB_REPOS_QUERY,
  GITHUB_USER_QUERY,
} from "@/common/constant/github";

import {
  Repositories,
  Contributions,
  DetailRepositories,
} from "@/common/types/response";

import ResponseHelper from "@/libs/response.helper";
import { axiosGithub } from "@/libs/axios.helper";

export async function getGithubData() {
  try {
    const response = await axiosGithub.post(GITHUB_API_BASE_URL, {
      query: GITHUB_USER_QUERY,
      variables: {
        username: GITHUB_ACCOUNTS.username,
      },
    });

    return ResponseHelper.success(
      "Success to get Github data",
      response.data.data.user.contributionsCollection
        .contributionCalendar as Contributions
    );
  } catch (error) {
    return ResponseHelper.error("Failed to get Github data", error);
  }
}

export async function getGithubRepositories() {
  const reposToShow = [
    "hi-SPEC",
    "cloudbite",
    "sinau-apps",
    "byek-movies",
    "pokedex-app",
    "real-estate-landing-page",
  ];

  try {
    const response = await axiosGithub.post(GITHUB_API_BASE_URL, {
      query: GITHUB_REPOS_QUERY,
      variables: {
        username: GITHUB_ACCOUNTS.username,
      },
    });
    const result = response.data?.data.user.repositories.nodes.filter(
      (item: Repositories) => reposToShow.includes(item.name)
    );
    return ResponseHelper.success(
      "Success to get Github repositories",
      result as Repositories[]
    );
  } catch (error) {
    return ResponseHelper.error("Failed to get Github repositories", error);
  }
}

export async function getGithubDetailRepository(repo: string) {
  try {
    const response = await axiosGithub.get(`/repos/abdurrozaqf/${repo}`);
    return ResponseHelper.success(
      "Success to get Github detail repository",
      response.data as DetailRepositories
    );
  } catch (error) {
    return ResponseHelper.error(
      "Failed to get Github detail repository",
      error
    );
  }
}
