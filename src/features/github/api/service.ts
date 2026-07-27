import {
  GITHUB_ACCOUNTS,
  GITHUB_OVERVIEW_QUERY,
  GITHUB_CONTRIBUTIONS_QUERY,
} from "./queries";

import ResponseHelper from "@/services/response";

import {
  fetchGithubGraphQL,
  fetchGithubRest,
  mapGithubContributions,
  mapGithubOverview,
} from "@/features/github";

import type {
  TContributions,
  TDetailRepositories,
  TResponseGithubOverview,
} from "@/features/github";

export async function getGithubOverview() {
  try {
    const data = await fetchGithubGraphQL<TResponseGithubOverview>(
      GITHUB_OVERVIEW_QUERY
    );

    const result = mapGithubOverview(data);
    return ResponseHelper.success("Success to get overview", result);
  } catch (error) {
    return ResponseHelper.error("Failed to get overview", error);
  }
}

export async function getGithubContributions() {
  try {
    const data = await fetchGithubGraphQL<{
      user: {
        contributionsCollection: {
          contributionCalendar: TContributions;
        };
      };
    }>(GITHUB_CONTRIBUTIONS_QUERY);

    const result = mapGithubContributions(
      data.user.contributionsCollection.contributionCalendar
    );

    return ResponseHelper.success("Success to get contributions", result);
  } catch (error) {
    return ResponseHelper.error("Failed to get contributions", error);
  }
}

export async function getGithubRepositoryDetail(repoName: string) {
  try {
    const data = await fetchGithubRest<TDetailRepositories>(
      `/repos/${GITHUB_ACCOUNTS.username}/${repoName}`
    );

    return ResponseHelper.success("Success to get repository detail", data);
  } catch (error) {
    return ResponseHelper.error("Failed to get repository detail", error);
  }
}
