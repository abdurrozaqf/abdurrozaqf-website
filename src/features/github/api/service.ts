import {
  GITHUB_ACCOUNTS,
  GITHUB_OVERVIEW_QUERY,
  GITHUB_CONTRIBUTIONS_QUERY,
} from "./queries";

import ResponseHelper from "@/services/response";
import { axios_github } from "@/services/axios-instance";

import { mapGithubContributions, mapGithubOverview } from "./mapper";

const REVALIDATE_TIME = 86400; // 1 day

export async function getGithubContributions() {
  try {
    const response = await axios_github.post("/graphql", {
      cache: "force-cache",
      query: GITHUB_CONTRIBUTIONS_QUERY,
      variables: {
        username: GITHUB_ACCOUNTS.username,
      },
      next: {
        revalidate: REVALIDATE_TIME,
      },
    });

    const result = mapGithubContributions(
      response.data?.data.user.contributionsCollection.contributionCalendar
    );

    return ResponseHelper.success(
      "Success to get Github contributions",
      result
    );
  } catch (error) {
    return ResponseHelper.error("Failed to get Github contributions", error);
  }
}

export async function getGithubOverview() {
  try {
    const response = await axios_github.post("/graphql", {
      cache: "force-cache",
      query: GITHUB_OVERVIEW_QUERY,
      variables: {
        username: GITHUB_ACCOUNTS.username,
      },
      next: {
        revalidate: REVALIDATE_TIME,
      },
    });

    const result = mapGithubOverview(response.data);

    return ResponseHelper.success("Success to get Github overview", result);
  } catch (error) {
    return ResponseHelper.error("Failed to get Github overview", error);
  }
}
