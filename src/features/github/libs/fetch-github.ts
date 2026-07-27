// src/lib/github.ts

import { GITHUB_ACCOUNTS } from "../api/queries";

type GithubGraphQLResponse<T> = {
  data: T;
  errors?: {
    message: string;
  }[];
};

const GRAPHQL_ENDPOINT = "https://api.github.com/graphql";
const REST_ENDPOINT = "https://api.github.com";

const defaultNextCache = {
  cache: "force-cache",
  revalidate: 60 * 60 * 24, // 1 day
  tags: ["github"],
};

/**
 * GitHub GraphQL (POST)
 */
export async function fetchGithubGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN!}`,
      "Content-Type": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "MyGitHubApp",
    },
    body: JSON.stringify({
      query,
      variables: {
        username: GITHUB_ACCOUNTS.username,
        ...variables,
      },
    }),
    next: defaultNextCache,
  });

  if (!response.ok) {
    throw new Error(
      `GitHub GraphQL Error: ${response.status} ${response.statusText}`
    );
  }

  const json = (await response.json()) as GithubGraphQLResponse<T>;

  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}

/**
 * GitHub REST API (GET)
 */
export async function fetchGithubRest<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${REST_ENDPOINT}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN!}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "MyGitHubApp",
    },
    next: defaultNextCache,
  });

  if (!response.ok) {
    throw new Error(
      `GitHub REST Error: ${response.status} ${response.statusText}`
    );
  }

  return response.json() as Promise<T>;
}
